import Navbar from "../organisms/Navbar";
import { protectedRoutes } from "@/shared/utils/Routes";

import React from "react";

const ProtectedTemplete = () => {
  return <Navbar routes={protectedRoutes} />;
};

export default ProtectedTemplete;
