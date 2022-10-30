import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export interface ModalProps {
  closeModal: () => void;
  children?: React.ReactNode;
  selector: any;
}

const Modal = ({ children, selector, closeModal }: ModalProps) => {
  const modalView = useRef<Element | DocumentFragment>();
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  const handleOutsideClick = (event: MouseEvent) => {
    const target = event.target as HTMLInputElement;
    console.log(123, modalView.current);
    if (ref.current && !ref.current.contains(target)) {
      closeModal();
    }
  };

  useEffect(() => {
    modalView.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);
  });

  const renderModal = (children: React.ReactNode) => (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-200 dark:bg-primary rounded flex-col px-6 py-3 "
      style={{ width: "468px", height: "468px" }}
      ref={ref}
    >
      {children}
    </div>
  );

  return mounted
    ? createPortal(renderModal(children), modalView.current!)
    : null;
  // return (
  //   <div
  //     className="absolute min-w-full min-h-full flex items-center "
  //     onClick={handleOutsideClick}
  //   >
  //     <div
  //       className="bg-gray-200 dark:bg-primary rounded mx-auto flex-col px-6 py-3 "
  //       style={{ width: "468px", height: "468px" }}
  //       ref={modalView}
  //     >
  //       {children}
  //     </div>
  //   </div>
  // );
};

export default Modal;
