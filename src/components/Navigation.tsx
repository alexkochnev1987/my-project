"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
interface NavLink {
  href: string;
  label: string;
}
const navLinks: NavLink[] = [
  { href: "/", label: "Главная" },
  { href: "/login", label: "Авторизация" },
  { href: "/shop", label: "Магазин" },
];

function Navigation() {
  const pathName = usePathname();

  return (
    <>
      {navLinks.map(({ href, label }) => (
        <div
          key={label}
          className={`font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 hover:rounded-lg ${
            pathName === href
              ? "border-b-2 border-emerald-950 rounded-none"
              : ""
          }`}
        >
          <Link href={href} className={``}>
            {label}
          </Link>
        </div>
      ))}
    </>
  );
}

export default Navigation;
