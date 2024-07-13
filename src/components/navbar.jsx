"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";

const links = [
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div 
      className="sticky top-0 z-10 block w-full max-w-screen-xl px-6 py-3 mx-auto text-black bg-gray-500 border shadow-md rounded-xl bg-opacity-80"
      // className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl"
    >
      <div className="flex items-center justify-between text-blue-gray-900 max-w-7xl">
        {/* LINKS */}
        <div className="hidden md:flex gap-4 w-1/3">
          <Link
            href="/"
            className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
          >
            <span className="text-white mr-1">Micheljou</span>
            <span className="w-12 h-8 rounded bg-gray-400 text-black flex items-center justify-center">
              .site
            </span>
          </Link>
          {links.map((link) => (
            <NavLink link={link} key={link.title} />
          ))}
        </div>
        {/* SOCIAL */}
        <div className="hidden md:flex gap-5 w-1/6">
          <Link href="https://github.com/hooaaxx">
            <Image src="/github.png" alt="" width={24} height={24} />
          </Link>
          <Link href="https://www.instagram.com/_hooaaxx">
            <Image src="/instagram.png" alt="" width={24} height={24} />
          </Link>
          <Link href="https://www.facebook.com/H0aaxx">
            <Image src="/facebook.png" alt="" width={24} height={24} />
          </Link>
          <Link href="https://www.linkedin.com/in/hoax/">
            <Image src="/linkedin.png" alt="" width={24} height={24} />
          </Link>
        </div>
        {/* RESPONSIVE MENU */}
        <div className="md:hidden">
          {/* MENU BUTTON */}
          <button
            className="w-10 h-8 flex flex-col justify-between z-50 relative"
            onClick={() => setOpen((prev) => !prev)}
          >
            <motion.div
              variants={topVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-black rounded origin-left"
            ></motion.div>
            <motion.div
              variants={centerVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-black rounded"
            ></motion.div>
            <motion.div
              variants={bottomVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-black rounded origin-left"
            ></motion.div>
          </button>
          {/* MENU LIST */}
          {open && (
            <motion.div
              variants={listVariants}
              initial="closed"
              animate="opened"
              className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
            >
              {links.map((link) => (
                <motion.div
                  variants={listItemVariants}
                  className=""
                  key={link.title}
                >
                  <Link href={link.url}>{link.title}</Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
