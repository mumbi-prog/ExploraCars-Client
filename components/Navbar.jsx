"use client";
import React, { useState } from "react";
import { FaBars} from "react-icons/fa";
import Link from "next/link";
import { Menu } from "./Menu";
import { getCurrentUser } from "@/lib";
import { AiFillCar } from "react-icons/ai";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const user= getCurrentUser();
 
  return (
    <>
      <div className="p-2 flex w-full items-center justify-between">
        <div className="w-10">
          {!menuOpen ? (
            <FaBars
              className="text-xl md:text-3xl z-50 cursor-pointer transition duration-150 ease-out"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          ) : (
            <Menu
              onClick={() => setMenuOpen(!menuOpen)}
              handleClick={setMenuOpen}
              menuOpen={menuOpen}
            />
          )}
        </div>
        
        <div className="text-2xl text-center md:text-3xl font-bold lg:text-4xl cursor-pointer flex items-center xsm:text-xl m-auto underline decoration-amber-400 decoration-4">
          <AiFillCar />
         <Link href="/"> Explora </Link>
        </div>
        <Link href="/login" className="md:block btn-primary cursor-pointer xsm:bg-inherit xsm:border-none">{!user?"Login": "Sign Out"}</Link>
      </div>
      <hr className="h-2 blue-color border-none"></hr>
    </>
  );
}

