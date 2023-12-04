import React from 'react';
import { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import "../styles/global.css"


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
