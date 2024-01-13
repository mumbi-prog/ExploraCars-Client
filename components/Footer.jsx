import React from "react";
import Link from "next/link";
import { footerLinks } from "@/constants";

function Footer() {
  return (
    <footer className="w-full shadow-lg drop-shadow-2xl ">
      <div className="footer-links pb-5 mb-5 py-4 px-8">
        {footerLinks.map((item) => (
          <div className="footer-link" key={item.title}>
            <h1 className="text-xl font-bold py-1 my-2" key={item.title}>
              {item.title}
            </h1>
            <div className="flex flex-col gap-5">
              {item.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="pt-1 text-xl  hover:text-blue-500">
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <hr className="font-bold border-blue-600 border-2"></hr>
      <h3 className="font-bold m-5 text-center">
        &copy;{new Date().getFullYear()} Explora
      </h3>
    </footer>
  );
}

export default Footer;
