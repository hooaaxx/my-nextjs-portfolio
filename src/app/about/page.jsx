"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/MYPIC.jpg"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              As a versatile full-stack developer, 
              I combine expertise in both front-end and back-end development to create dynamic and engaging web applications. 
              With a passion for crafting seamless user experiences and a knack for building scalable server-side solutions, 
              I thrive in bridging the gap between design and functionality to deliver high-quality software solutions.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
            let's discuss how I can contribute to your next development endeavor or help bring your ideas to life.
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
              <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="150.000000pt" height="120.000000pt" viewBox="0 0 559.000000 446.000000"
                preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,446.000000) scale(0.100000,-0.100000)"
                fill="#000000" stroke="none">
                <path d="M2766 2996 c-3 -13 -9 -32 -12 -43 -5 -15 -4 -15 5 -3 6 8 11 11 12
                5 0 -5 2 -18 4 -27 4 -22 -14 -35 -25 -18 -6 9 -11 8 -19 -7 -8 -16 -48 -178
                -66 -273 -2 -8 -4 -16 -5 -17 -2 -2 -3 -6 -4 -10 -5 -21 -58 -113 -85 -148
                -17 -22 -38 -49 -46 -60 -8 -10 -15 -23 -15 -28 0 -4 -5 -5 -12 -1 -6 4 -8 3
                -5 -3 6 -10 -13 -28 -55 -53 -34 -19 -169 -128 -186 -149 -7 -9 -16 -16 -20
                -16 -17 0 -72 -48 -66 -57 5 -7 2 -8 -5 -3 -8 4 -24 -4 -41 -20 -46 -44 -58
                -30 -52 59 3 52 1 80 -8 91 -18 22 -26 19 -49 -19 -24 -38 -49 -52 -64 -37
                -11 11 20 113 97 322 42 117 61 212 47 237 -6 10 -11 12 -12 5 -2 -16 -4 -24
                -12 -43 -3 -8 -8 -26 -10 -40 -2 -14 -6 -3 -7 25 l-3 50 -7 -60 c-10 -81 -91
                -332 -125 -392 -42 -72 -198 -297 -225 -323 -17 -17 -90 -112 -122 -159 -21
                -31 -63 -87 -93 -126 -57 -73 -63 -92 -27 -87 12 2 31 -2 43 -8 17 -10 20 -9
                14 1 -6 9 -4 11 8 6 14 -5 14 -3 0 22 -27 47 -3 78 102 133 50 26 101 46 115
                45 35 -3 37 -40 6 -112 -16 -34 -24 -66 -20 -80 8 -31 -12 -65 -36 -65 -11 0
                -20 -4 -20 -9 0 -19 162 -29 190 -11 11 7 2 9 -32 8 -49 -1 -78 13 -78 39 0 9
                10 33 22 54 17 31 37 46 94 73 39 19 100 60 135 91 35 32 79 69 97 83 31 24
                33 24 52 7 23 -21 22 -21 70 48 37 53 81 80 101 60 7 -7 6 -18 -2 -37 -18 -39
                -7 -40 47 -7 104 65 124 62 105 -13 -14 -59 -15 -58 12 -54 21 3 22 1 19 -77
                -2 -44 -10 -89 -17 -101 -9 -13 -40 -29 -92 -43 -78 -24 -127 -50 -68 -37 81
                17 135 19 136 5 0 -8 1 -77 2 -154 1 -84 6 -140 12 -140 5 0 8 26 7 60 -1 33
                1 102 6 153 11 110 23 129 93 138 27 4 49 10 49 14 0 13 81 10 86 -4 6 -17
                -106 -374 -127 -401 -7 -9 -38 -122 -61 -221 -11 -51 -7 -140 7 -137 6 0 14
                18 18 40 5 21 20 81 34 133 96 355 153 521 197 567 38 42 148 115 205 137 49
                19 71 10 71 -30 0 -13 6 -24 13 -24 20 0 71 57 58 64 -14 9 -14 36 0 36 5 0 8
                -4 5 -8 -10 -17 34 -5 56 15 38 35 64 43 131 43 72 0 127 15 127 35 0 10 -16
                15 -52 17 -49 3 -52 5 -60 36 -5 17 -12 32 -16 32 -5 0 -21 -18 -38 -39 -36
                -49 -106 -84 -167 -83 -34 1 -56 -6 -95 -32 -59 -38 -168 -74 -182 -60 -5 5 3
                55 21 128 17 65 28 124 25 131 -2 7 4 30 14 51 32 68 34 84 11 84 -14 0 -21
                -6 -21 -18 0 -21 -32 -62 -48 -62 -13 0 -35 -37 -30 -51 2 -6 16 -1 31 11 26
                21 27 21 27 2 0 -11 -7 -25 -15 -32 -8 -7 -22 -33 -30 -59 -42 -134 -75 -217
                -92 -228 -10 -7 -22 -16 -28 -21 -22 -19 -115 -42 -144 -36 -26 5 -31 11 -31
                34 0 46 9 58 69 94 46 28 135 106 94 82 -7 -4 -13 -2 -13 3 0 6 5 11 10 11 6
                0 10 6 10 13 -1 6 -14 -5 -31 -25 -17 -21 -39 -38 -49 -38 -23 0 -35 33 -21
                59 15 27 14 41 -3 41 -8 0 -18 5 -21 10 -7 11 12 139 50 330 41 204 45 220
                106 352 65 141 89 218 89 291 0 73 -30 117 -44 63z m-164 -592 c-2 -16 -14
                -73 -27 -127 -14 -54 -29 -135 -36 -178 l-11 -80 -63 -28 c-34 -16 -65 -34
                -69 -40 -15 -24 -36 -11 -36 23 l0 34 -59 -3 c-33 -1 -64 -6 -70 -9 -19 -12
                -31 29 -20 68 8 28 32 55 105 117 56 48 91 85 87 92 -3 7 -3 9 2 5 11 -11 47
                11 39 24 -4 6 -3 8 3 5 6 -4 39 25 73 63 66 74 87 83 82 34z m-700 -263 c-3
                -41 -36 -138 -79 -229 l-34 -73 -81 -40 c-45 -21 -88 -39 -95 -39 -15 0 -18
                36 -4 44 5 3 25 30 44 58 19 29 49 69 66 88 17 19 57 73 89 118 31 46 61 90
                67 98 16 22 30 10 27 -25z m128 4 c10 -12 10 -28 2 -68 -13 -67 -46 -123 -83
                -142 -34 -18 -69 -19 -69 -2 0 16 55 131 88 184 29 46 42 52 62 28z m138 -136
                c2 -15 -6 -35 -18 -49 -12 -14 -28 -36 -35 -50 -30 -55 -238 -210 -283 -210
                -23 0 -24 2 -18 40 13 85 69 150 128 150 18 0 40 14 70 46 55 60 118 106 137
                102 9 -2 17 -15 19 -29z"/>
                <path d="M2774 2005 c-11 -12 -18 -28 -16 -35 3 -7 0 -10 -7 -6 -6 4 -11 1
                -11 -8 0 -8 -6 -17 -12 -19 -9 -4 -9 -6 -1 -6 6 -1 26 17 43 39 17 22 39 40
                48 40 8 0 12 3 8 7 -14 14 -33 10 -52 -12z"/>
                <path d="M2186 1563 c-4 -4 -37 -13 -74 -20 l-67 -13 56 5 c58 5 151 33 113
                34 -11 1 -24 -2 -28 -6z"/>
                <path d="M1965 1514 l-50 -13 54 4 c30 2 59 9 65 15 13 13 -5 12 -69 -6z"/>
                </g>
              </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-red-800 text-white hover:bg-white hover:text-black">
                PHP
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-red-800 text-white hover:bg-white hover:text-black">
                LARAVEL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-red-800 text-white hover:bg-white hover:text-black">
                Laravel Api
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Laravel livewire
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Bootstrap
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Mysql
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Webpack
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Vite
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Docker
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Azure
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Back End Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I led web development, offering expertise in Php
                    frameworks.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2022 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Highly Succeed Inc.
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Website maintenance
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I maintain a website made with Odoo.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2022{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Ckdiaz
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Software Engineer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    XML and indesign.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2021 - 2022
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    SyntechNX Corp.
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Freelancer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I provided web solutions, applying a range of technologies
                    to address client requirements.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2021 - 2022{" "}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
