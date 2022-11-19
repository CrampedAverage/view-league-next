const ENDPOINT = "http://127.0.0.1:4040";

const getParams = (obj: { [key: string]: string }) => {
  let params = Object.entries(obj).map(([key, value]) => {
    return `${key}=${value}`;
  });
  return params.join("&");
};

export async function getRequest<T>({
  url,
  data,
}: {
  url: string;
  data?: { [key: string]: string } | undefined;
}): Promise<T> {
  let params = "";
  if (data) {
    params = "?" + getParams(data);
  }

  const response = await fetch(`${ENDPOINT}/api${url}${params}`);

  return response.json();
}
