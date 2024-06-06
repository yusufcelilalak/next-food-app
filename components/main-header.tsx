"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import logoImg from "@/app/assets/icons/companyLogo.png";

export function MainHeader() {
  return (
    <nav className="flex items-center justify-between w-8/12 m-auto mt-4">
      <div className=" w-28 h-28">
        <img src={logoImg.src} />
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href={"/meals"} legacyBehavior passHref>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle().concat(
                  " text-base hover:text-red-500 focus:text-red-500 hover:drop-shadow-sm focus:drop-shadow-sm"
                )}
              >
                Browse Meals
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={"/community"} legacyBehavior passHref>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle().concat(
                  " text-base hover:text-red-500 focus:text-red-500 hover:drop-shadow-sm focus:drop-shadow-sm"
                )}
              >
                Quick Food Community
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
