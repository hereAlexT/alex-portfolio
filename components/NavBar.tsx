import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const NavBar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = (href: string) => {
    if (href === "/") {
      return router.pathname === href ? "font-bold underline" : "";
    }
    return router.pathname.startsWith(href) ? "font-bold underline" : "";
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="relative z-10 mx-auto flex max-w-screen-xl flex-col md:flex-row md:items-center md:justify-between md:px-6 md:pt-2 lg:px-8 lg:py-4">
      <div className="flex flex-row items-center justify-between p-4">
        <Link
          href="/"
          className="focus:shadow-outline flex items-center gap-3 rounded-lg text-lg font-semibold uppercase tracking-widest text-gray-900 focus:outline-none dark:text-white"
        >
          Alex Portfolio
        </Link>
        <button onClick={toggleMenu} className="md:hidden">
          Menu
        </button>
      </div>
      <nav
        className={`mt-0 flex w-full flex-grow flex-col gap-2 px-4 pb-4 transition-all ease-out md:absolute md:flex-row md:justify-center md:pb-0 md:transition-none ${
          isOpen ? "" : "hidden md:flex"
        }`}
      >
        <Link
          href="/"
          className={`text-gray-900 hover:text-gray-900 dark:text-white dark:hover:text-white ${linkClass(
            "/",
          )}`}
        >
          Home
        </Link>
        <Link
          href="/projects"
          className={`text-gray-900 hover:text-gray-900 dark:text-white dark:hover:text-white ${linkClass(
            "/projects",
          )}`}
        >
          Projects
        </Link>
        <Link
          href="/about"
          className={`text-gray-900 hover:text-gray-900 dark:text-white dark:hover:text-white ${linkClass(
            "/about",
          )}`}
        >
          About
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
