"use client";
import Link from "next/link";
import React from "react";
import { FaEdit, FaBookOpen } from "react-icons/fa";
import { BsBookmarks } from "react-icons/bs";
import { GoSignOut } from "react-icons/go";
import { TfiClose } from "react-icons/tfi";
import { AiFillCar } from "react-icons/ai";
import { clearCurrentUser } from "@/lib";

export const Menu = ({ handleClick, menuOpen }) => {
  function handleSignout() {
    clearCurrentUser();
  }

  return (
    <div className="menu">
      <TfiClose
        className="absolute top-0 right-0 text-2xl mr-2 hover:scale-125 ease-in-out cursor-pointer"
        onClick={() => handleClick(!menuOpen)}
      />
      <p>
        {" "}
        <Link
          href="/account"
          className="menu-item"
          onClick={() => handleClick(!menuOpen)}>
          My Bookings
        </Link>
      </p>
      <p>
        <Link
          href="/locations"
          className="menu-item"
          onClick={() => handleClick(!menuOpen)}>
          Locations
        </Link>
      </p>
      <p>
        <Link
          href="/bookings"
          className="menu-item"
          onClick={() => handleClick(!menuOpen)}>
          Rent
        </Link>
      </p>

      <p>
        {" "}
        <Link onClick={handleSignout} href="/login" className="menu-item">
          Sign Out
        </Link>
      </p>
    </div>
  );
};

export default Menu;
