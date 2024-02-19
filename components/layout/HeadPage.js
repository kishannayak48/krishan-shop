import Head from "next/head";
import React from "react";

function HeadPage({ children, title }) {
  return (
    <>
      <Head>
        <title>{title || "Krishan-48"}</title>
      </Head>
      {children}
    </>
  );
}

export default HeadPage;
