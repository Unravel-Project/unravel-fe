import * as React from "react"
import Image from "next/image";
import { MENU } from "@/lib/constants/menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import mainLogo from '../../../public/main-logo.png';
import UnravelNavbar from "../ui/unravel-navbar";
import Link from "next/link";

const Header: React.FC = () => {
    return (
        <header className="fixed w-full h-[60px] top-0 left-0 bg-white z-[10] text-[#141414]">
            <div className="container flex flex-wrap items-center px-4 h-full">
                <div className="flex-1 md:basis-1/4 md:flex-grow-0">
                    {/* <Image src={mainLogo} alt="main logo" /> */}
                    <div
                      className="img-placeholder"
                      style={{
                        width: '128px',
                        height: '48px',
                      }}
                      >
                      Main Logo (128 x 48)
                    </div>
                </div>
                <div className="basis-auto text-white text-end block md:basis-0 md:hidden">
                    <HamburgerMenuIcon className="size-5" />
                </div>
                <UnravelNavbar />
                <div className="hidden md:block md:basis-1/4 md:text-end">
                    <Link href="/" className="bg-primary-500 text-sm text-accent-300 inline-block py-2 px-4 w-fit rounded-lg">
                        Submit Destination
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header;