import React from "react";
import FooterPage from "../layout/footerPage";

function NoAuthLayout({ children }) {
  return (
    <>
      {children}
      <FooterPage />
    </>
  );
}

export default NoAuthLayout;
