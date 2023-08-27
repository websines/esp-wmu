"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaTwitch, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuVariants = {
    open: { x: 0 },
    closed: { x: "100%" },
  };

  return (
    <nav className="sticky top-0 bg-violet-950 z-50">
      <div className="p-2 flex flex-row justify-between sm:mx-40 items-center mx-4">
        <div className="flex flex-row space-x-2 justify-center items-center">
          <Link href="/">
            <Image
              src="/horse.png"
              alt="logo"
              className="w-12 h-12"
              height={1000}
              width={1000}
            />
          </Link>
          <h1 className="text-white text-xl font-semibold italic">
            Club Esports at WMU
          </h1>
        </div>
        <div className="sm:flex flex-row hidden space-x-6 items-center justify-between">
          {/* Desktop navbar items */}
          <ul className="text-gray-300 flex flex-row justify-center items-center space-x-2 text-lg uppercase font-semibold px-6">
            <Link href="#events">
              <li className="italic px-4 py-2 hover:bg-violet-900 rounded">
                Events
              </li>
            </Link>
            <Link href="#about">
              <li className="italic px-4 py-2 hover:bg-violet-900 rounded">
                About
              </li>
            </Link>
            <Link
              href="https://esportsgear.com/collections/western-michigan-university"
              target="_blank"
              className="italic px-4 py-2 hover:bg-violet-900 rounded"
            >
              <li>Merch</li>
            </Link>
          </ul>
          <ul className="flex flex-row justify-center items-center space-x-4 text-red-500 text-2xl">
            <Link href="/">
              <FaTwitter />
            </Link>
            <Link href="/">
              <FaYoutube />
            </Link>
            <Link href="/">
              <FaTwitch />
            </Link>
            <Link href="/">
              <FaInstagram />
            </Link>
          </ul>
        </div>
        <div className="sm:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <div className="flex flex-col space-y-1 py-2 px-3">
              <span className="bg-white w-6 h-0.5"></span>
              <span className="bg-white w-6 h-0.5"></span>
              <span className="bg-white w-6 h-0.5"></span>
            </div>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-0 right-0 w-64 h-full bg-violet-950 text-white z-50 shadow-lg"
          >
            <div className="p-4">
              <button onClick={() => setMenuOpen(false)} className="mb-4 ">
                <AiOutlineClose className="w-8 h-8 m-4 border-red-500 border-1 border-solid" />
              </button>
              {/* Mobile menu content */}
              <ul className="flex flex-col justify-between items-center w-full">
                <li className="my-4">
                  <Link
                    href="#events"
                    className=" rounded hover:bg-violet-800 hover:bg-opacity-60 transition ease-in-out duration-150 py-4 px-8"
                  >
                    <span className="text-lg">Events</span>
                  </Link>
                </li>
                <li className="my-4">
                  <Link
                    href="#about"
                    className="rounded hover:bg-violet-800 hover:bg-opacity-60 transition ease-in-out duration-150 py-4 px-8"
                  >
                    <span className="text-lg">About</span>
                  </Link>
                </li>
                <li className="my-4">
                  <Link
                    href="https://esportsgear.com/collections/western-michigan-university"
                    target="_blank"
                    className="rounded hover:bg-violet-800 hover:bg-opacity-60 transition ease-in-out duration-150 py-4 px-8"
                  >
                    <span className="text-lg">Merch</span>
                  </Link>
                </li>
              </ul>
              <ul className="flex flex-row justify-center items-center space-x-4 text-red-500 text-2xl mt-8">
                <Link href="/">
                  <FaTwitter />
                </Link>
                <Link href="/">
                  <FaYoutube />
                </Link>
                <Link href="/">
                  <FaTwitch />
                </Link>
                <Link href="/">
                  <FaInstagram />
                </Link>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
