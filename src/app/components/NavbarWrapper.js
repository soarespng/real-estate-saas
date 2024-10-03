"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

const NavbarWrapper = () => {
  const pathname = usePathname();
  const showNavbar = !/^\/admin/.test(pathname);

  return (
    <>
      {showNavbar && <Navbar className="fixed top-0 left-0 w-full z-50" />}
    </>
  );
};

export default NavbarWrapper;
