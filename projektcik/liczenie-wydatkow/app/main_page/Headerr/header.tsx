"use client";
import { useRouter, usePathname } from "next/navigation";
import React from "react";
import style from "styled-jsx/style";
import { Icon } from "@iconify/react";
import LoginIcon from "@iconify-react/material-symbols/login";
import DocumentIcon from "@iconify-react/line-md/document";
import Link from "next/link";
export default function ActiveLink({
  href,
  children,
}: {
  href?: string;
  children?: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const stylee = {
    marginRight: 10,
    color: pathname === href ? "red" : "black",
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(href);
  };
  return (
    <a
      href={href}
      onClick={handleClick}
      style={stylee}
      className="block w-full h-full"
    >
      {children}
    </a>
  );
}
export function Header({
  href,
  children,
}: {
  href?: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="fixed w-full h-16 bg-gray-800">
  <ActiveLink href={href}>
        <div
          dir="rtl"
           className=" w-full flex justify-evenly space-x-4 text-white border h-full mb-0"
        >
          <div className="flex items-center space-x-4">
            <LoginIcon height="2em " />
            <div className="text-2xl font-bold ">Zaloguj się</div>
          </div>
          <div className="flex items-center space-x-4">
            <DocumentIcon height="24" />
            <Link href="/add-document" className="text-2xl font-bold">
              Dodaj dokument
            </Link>
          </div>
          <div className="text-2xl font-bold mt-4">Edytuj dokument</div>
        </div>
      </ActiveLink>
      <ActiveLink href={href}>
      </ActiveLink>
    </header>
  );
}
