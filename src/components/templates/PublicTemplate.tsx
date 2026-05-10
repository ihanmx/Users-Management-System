import React from "react";
import Navbar from "../organisms/Navbar";
import { publicRoutes } from "@/shared/utils/Routes";

const PublicTemplate = () => {
  return <Navbar routes={publicRoutes} />;
};

export default PublicTemplate;
