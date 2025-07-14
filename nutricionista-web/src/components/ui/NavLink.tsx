"use client";

import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

type NavLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export default function NavLink({ href, children, className }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={clsx(
        // Aquí es donde eliminamos 'dark:text-gray-200'
        "group relative text-lg font-semibold text-gray-800 hover:text-primary transition-all hover:scale-105",
        "after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 group-hover:after:w-full after:bg-primary after:transition-all after:duration-300",
        className
      )}
    >
      {children}
    </Link>
  );
}