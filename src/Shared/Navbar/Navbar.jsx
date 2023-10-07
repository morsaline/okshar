import React from "react";
import logo from "../../assets/Home/logo.png";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const Links = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Book Shop",
      href: "/shop",
    },
    {
      text: "Job Circular",
      href: "/jobcircular",
    },
    {
      text: "Contact",
      href: "/contact",
    },
  ];

  return (
    <div>
      <nav className="flex gap-5 justify-around items-center my-4">
        <img src={logo} alt="okshar logo" />
        <ul className="flex gap-3">
          {Links?.map((link, index) => (
            <Link key={index} to={link.href} className="text-[14px]">
              <li>{link.text}</li>
            </Link>
          ))}
        </ul>
        <div className="flex gap-3 justify-between items-center">
          <button className="flex justify-center items-center text-[12px] gap-2 px-2 border border-black">
            login <Icon icon="solar:login-2-outline" />
          </button>
          <Icon icon="raphael:cart" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
