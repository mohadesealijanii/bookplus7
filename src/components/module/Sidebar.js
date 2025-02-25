"use client";
import logo from "../../../public/pics/logo.png";
import { ibrand } from "@/utils/fonts";
import {
  faArrowRightFromBracket,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Sidebar() {
  const [openMenus, setOpenMenus] = useState({
    books: false,
    settings: false,
    banners: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <div className="hidden md:block sm:block lg:block bg-white shadow-xl w-56 ml-5 p-3 rounded-xl">
      <div className="flex">
        <div className="mr-2">
          <Image src={logo} alt="logo" className="w-9" />
        </div>
        <div>
          <h1
            className={`${ibrand.className} mt-1 font-bold text-sea text-2xl mb-4`}
          >
            Book Plus
          </h1>
        </div>
      </div>
      <ul className="text-grey">
        <li>
          <button
            onClick={() => toggleMenu("books")}
            className={`mb-1 mt-3 hover:text-sea transition duration-300 ease-in-out ${
              openMenus.books ? "text-sea font-semibold" : ""
            }`}
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              className={`text-sea mr-3 transition-transform duration-300 ${
                openMenus.books ? "rotate-90" : ""
              }`}
            />
            Books
          </button>
          {openMenus.books && (
            <ul className="flex flex-col ml-2">
              <Link className="hover:text-sea ml-4" href={"/bookCategories"}>
                book category
              </Link>
              <Link className="hover:text-sea ml-4" href={"/book"}>
                book list
              </Link>
              <Link className="hover:text-sea ml-4" href={"/booksCode"}>
                book code
              </Link>
            </ul>
          )}
        </li>

        <li>
          <button
            onClick={() => toggleMenu("settings")}
            className={`mb-1 mt-3 hover:text-sea transition duration-300 ease-in-out ${
              openMenus.settings ? "text-sea font-semibold" : ""
            }`}
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              className={`text-sea mr-3 transition-transform duration-300 ${
                openMenus.settings ? "rotate-90" : ""
              }`}
            />
            Settings
          </button>
          {openMenus.settings && (
            <ul className="flex flex-col ml-2">
              <Link className="hover:text-sea ml-4" href={"/bookCategories"}>
                emails
              </Link>
              <Link className="hover:text-sea ml-4" href={"/book"}>
                searches
              </Link>
              <Link className="hover:text-sea ml-4" href={"/booksCode"}>
                updates
              </Link>
            </ul>
          )}
        </li>

        <li>
          <button
            onClick={() => toggleMenu("banners")}
            className={`mb-3 mt-3 hover:text-sea transition duration-300 ease-in-out ${
              openMenus.banners ? "text-sea font-semibold" : ""
            }`}
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              className={`text-sea mr-3 transition-transform duration-300 ${
                openMenus.banners ? "rotate-90" : ""
              }`}
            />
            Banners
          </button>
          {openMenus.banners && (
            <ul className="flex flex-col ml-2">
              <Link className="hover:text-sea ml-4" href={"/bannerItems"}>
                banner items
              </Link>
              <Link className="hover:text-sea ml-4" href={"/banners"}>
                banner names
              </Link>
            </ul>
          )}
        </li>

        <li>
          <Link
            href={"/members"}
            className="ml-5 hover:text-sea transition duration-300 ease-in-out"
          >
            Members
          </Link>
        </li>

        <li>
          <div className="mt-2">
            <FontAwesomeIcon
              className="text-red-800 mt-5"
              icon={faArrowRightFromBracket}
            />
            <Link
              href={"/"}
              className="ml-2 hover:text-red-800 transition duration-300 ease-in-out"
            >
              Log out
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
