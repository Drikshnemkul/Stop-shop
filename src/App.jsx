import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Products from "./Products";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./Components/Header";
function App() {
  const theme = {
    colors: {
      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98,84,23,0.5",
      hr: "#ffffff",
      grsdient: "rgba(0deg,rgb(132 144 255) 0%,rgb(98 189 252) 100%)",
      shadow:
        "rgba(0,0,0,0.02) 0px 1px 3px 0px,rgba(27,31,35,0.15) 0px 0px 0px 1px;",
      shadowSupport: "rgbe(0,0,0,0.16)0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/singleProduct/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
