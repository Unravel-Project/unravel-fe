import Link from "next/link";
import React from "react";

const Sidebar = ({ navigationList }: { navigationList: MenuProps[] }) => {
  return (
    <div className="w-72 bg-neutral-coolgray-100 h-screen px-5 py-4 flex flex-col gap-5">
      <h1 className="text-xl text-neutral-coolgray-900 font-bold">Unravel Playground</h1>
      <div className="flex flex-col gap-2">
        {navigationList.map((nav, index) => (
          <React.Fragment key={`navigation-${index}`}>
            <Link href={nav.children ? '#' : nav.url}>
              {nav.menuName}
            </Link>
            {nav.children && (
              <div className="ml-2 flex flex-col gap-1">
                {nav.children.map((child, childIndex) => (
                  <Link key={`navigation-${index}-${childIndex}`} href={child.url}>
                    {child.menuName}
                  </Link>
                ))}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
};

export default Sidebar;
  