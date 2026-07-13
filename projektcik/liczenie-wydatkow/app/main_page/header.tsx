"use client";
import { useRouter, usePathname } from "next/navigation";
import React from "react";
import style from "styled-jsx/style";

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
    <a href={href} onClick={handleClick} style={stylee}>
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
    <header className="fixed  w-screen bg-gray-800 py-4 border-r-">
      <ActiveLink href={href}>
        <div dir="rtl" className="flex justify-evenly space-x-4 text-white border">
          <div className="text-2xl font-bold ">Zaloguj się</div>
          <div className="text-2xl font-bold">Dodaj dokument</div>
          <div className="text-2xl font-bold">Edytuj dokument</div>
        </div>
      </ActiveLink>
    </header>
  );
}
