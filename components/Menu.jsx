"use client";
import Link from "next/link";
import React from "react";
import { TfiClose } from "react-icons/tfi";
import { clearCurrentUser } from "@/lib";
import { getCurrentUser } from "@/lib";
export const Menu = ({ handleClick, menuOpen }) => {
  function handleSignout() {
    clearCurrentUser();
  }
  const user= getCurrentUser();

  return (
    <div className="menu divide-y divide-dashed">
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
         {user? "Sign Out": "Login"}
        </Link>
      </p>
    </div>
  );
};

export default Menu;
