import "../styles/globals.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
