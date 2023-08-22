"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaTwitch, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuVariants = {
    open: { x: 0 },
    closed: { x: "100%" },
  };

  return (
    <nav className="p-4 sticky top-0 bg-black">
      <div className="p-2 flex flex-row justify-between sm:w-[80%] items-center mx-auto">
        <div className="flex flex-row space-x-2 items-center">
          <Link href="/">
            <img src="" alt="logo" />
          </Link>
          <h1 className="text-white text-xl font-semibold italic">
            Club Esports at WMU
          </h1>
        </div>
        <div className="hidden md:flex flex-row space-x-6 items-center justify-between">
          {/* Desktop navbar items */}
          <ul className="text-white flex flex-row justify-center items-center space-x-2 text-lg uppercase font-semibold px-6">
            <Link href="/">
              <li>Events</li>
            </Link>
            <Link href="/">
              <li>Events</li>
            </Link>
            <Link href="/">
              <li>Events</li>
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
        <div className="md:hidden flex items-center">
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
            className="fixed top-0 right-0 w-64 h-full bg-white z-50 shadow-lg"
          >
            <div className="p-4">
              <button onClick={() => setMenuOpen(false)} className="mb-4">
                <span className="block w-6 h-0.5 bg-black"></span>
                <span className="block my-1 w-6 h-0.5 bg-black"></span>
                <span className="block w-6 h-0.5 bg-black"></span>
              </button>
              {/* Mobile menu content */}
              <ul>
                <li className="mb-2">
                  <Link href="/">Events</Link>
                </li>
                <li className="mb-2">
                  <Link href="/">Events</Link>
                </li>
                <li className="mb-2">
                  <Link href="/">Events</Link>
                </li>
              </ul>
              <ul className="flex flex-row justify-center items-center space-x-4 text-red-500 text-2xl mt-4">
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
