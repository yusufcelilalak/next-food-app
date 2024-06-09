"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function NavLink({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  const path = usePathname();
  return (
    <Link href={href} legacyBehavior passHref>
      <a
        className={`text-base font-semibold ${
          path.startsWith(href)
            ? "text-primary"
            : "text-secondary-foreground/80"
        }  hover:text-primary focus:text-primary hover:drop-shadow-sm focus:drop-shadow-sm`}
      >
        {children}
      </a>
    </Link>
  );
}
