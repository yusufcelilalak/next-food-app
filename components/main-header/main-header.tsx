import Link from "next/link";
import logoImg from "@/app/assets/icons/companyLogo.png";
import Image from "next/image";
import NavLink from "./nav-link";

export function MainHeader() {
  return (
    <nav className="flex items-center justify-between w-8/12 m-auto mt-4">
      <div className=" w-28 h-28">
        <Link href={"/"}>
          <Image src={logoImg} alt={"store-logo"} priority />
        </Link>
      </div>
      <ul className="flex gap-10">
        <li>
          <NavLink href="/meals">Browse Meals</NavLink>
        </li>
        <li>
          <NavLink href="/community">Quick Food Community</NavLink>
        </li>
      </ul>
    </nav>
  );
}
