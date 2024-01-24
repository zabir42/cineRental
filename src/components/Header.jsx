import React, { useState } from "react";
import Moon from "../assets/icons/moon.svg";
import Sun from "../assets/icons/sun.svg";
import logo from "../assets/logo.svg";
import ring from "../assets/ring.svg";
import shoppingCart from "../assets/shopping-cart.svg";
import { useMovieContext, useThemeContext } from "../context";
import CartDetails from "./cinema/CartDetails";

export default function Header({ onDelete }) {
  const [showCart, setShowCart] = useState(false);
  const { state } = useMovieContext();
  const { darkMode, setDarkMode } = useThemeContext();

  // handler

  function handleCartDetails() {
    setShowCart(true);
  }

  function handleClose() {
    setShowCart(false);
  }

  function handleDarkMode() {
    setDarkMode(!darkMode);
  }
  return (
    <header>
      {showCart && <CartDetails onClose={handleClose} onDelete={onDelete} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={logo} width="139" height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={handleDarkMode}
            >
              <img src={darkMode ? Sun : Moon} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={handleCartDetails}
            >
              <img src={shoppingCart} width="24" height="24" alt="" />
              {state?.cartData?.length > 0 && (
                <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                  {state?.cartData?.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
