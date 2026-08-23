"use client";
import LoginIcon from "@iconify-react/material-symbols/login";
import DocumentIcon from "@iconify-react/line-md/document";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 flex w-full h-16 bg-gray-800">
      <div className="flex w-full items-center justify-between px-6 text-white">
        <div className="flex items-center space-x-4">
          <LoginIcon height="24" />
          <span className="text-2xl font-bold">Zaloguj się</span>
        </div>
        <div className="flex items-center space-x-4">
          <DocumentIcon height="24" />
          <Link href="/add-document" className="text-2xl font-bold">
            Dodaj dokument
          </Link>
        </div>
        <div className="text-2xl font-bold">Edytuj dokument</div>
      </div>
    </header>
  );
}
