"use client";
import React, { use } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import style from "styled-jsx/style";

export function ActiveLink({
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
export default function Summary({
  href,
  children,
}: {
  href?: string;
  children?: React.ReactNode;
}) {
  return (
    <summary className="  items-start bg-gray-500 items-align-start w-full h-full flex-wrap">
      <div className="text-white-500 font-bold text-center h-full w-full">
        WITAMY W NASZEJ APLIKACJI{" "}
      </div>
      <div className="carousel rounded-box flex items-center justify-center w-full h-full bg-yellow-500">
      
            <div className="carousel-item w-full flex items-center justify-center">
              {" "}
              <div>siema1</div>
            </div>
            <div className="carousel-item w-full flex items-center justify-center">
              {" "}
              <div>siema2</div>
            </div>
            <div className="carousel-item w-full flex items-center justify-center">
              {" "}
              <div>siema3</div>
            </div>
      </div>
    </summary>
  );
}
