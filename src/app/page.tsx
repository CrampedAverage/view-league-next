import type { NextPage } from "next";
import Head from "next/head";
import Home from "../components/Pages/Home/Home";
import RegionModal from "../components/Modals/RegionModal";
import Layout from "../components/shared/Layout";
import useModal from "../hooks/useModal";
import useRegion from "../hooks/useRegion";

const Page: NextPage = () => {
  return <Home />;
};

export default Page;
