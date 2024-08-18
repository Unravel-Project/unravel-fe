import { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { MENU } from "@/lib/constants/menu";
 
const UnravelNavbar = ():React.ReactNode => {
    return (
        <nav className="hidden md:block md:basis-2/4 md:relative">
            <ul className="flex gap-x-5 gap-y-3 h-full">
                {MENU.map((nav, index) => <UnravelMenuItem {...nav} key={`mainmenu-${index}`} />)}
            </ul>
        </nav>
    )
}

const UnravelMenuItem = (props: MenuProps) => {
    const { menuName, url, children, description } = props;
    return (
        <li className={`${children ? 'has-child' : ''}`}>
            <Link href={ url } className="flex items-center gap-x-3 px-3 h-full">
                { menuName }
                { children && (
                    <ChevronDownIcon />
                )}
            </Link>
            { children && (
                <div className="navbar-children">
                    { description && (
                        <p className="text-sm block mb-3">{ description }</p>
                    )}
                    { children.map((child, index) => <UnravelMenuItemList {...child} key={`child-${index}`} />) }
                </div>
            )}
        </li>
    )
}

const UnravelMenuItemList = (props: MenuProps) => {
    const { menuName, url, children } = props;
    return (
        <>
            <label className="block uppercase text-bold text-accent-400">{ menuName }</label>
            {children && (
                <div className="flex gap-x-4 gap-y-3 mb-4">
                    { children.map((child, idx) => <Link className="hover:text-accent-300" key={`lv2-${idx}`} href={child.url}>{child.menuName}</Link>) }
                </div>
            )}
        </>
    )
}

export default UnravelNavbar;