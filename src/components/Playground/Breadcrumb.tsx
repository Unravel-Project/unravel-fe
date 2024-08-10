import React from "react";
import Sidebar from "@/components/Playground/Sidebar";
import { PLAYGROUND_NAVIGATIONS } from "@/lib/constants/playgroundNavigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const findCurrentPaths = (
  navMenus: MenuProps[],
  pathname: string,
  path: MenuProps[] = [],
): MenuProps[] | null => {
  for (const nav of navMenus) {
    // Create a new path array including the current item
    const currentPath: TSidebarItem[] = [
      ...path,
      { menuName: nav.menuName, url: nav.url, children: undefined },
    ]

    // Check if the current item's href matches the pathname
    if (nav.url === pathname) {
      return currentPath
    }

    // If the item has children, search recursively in the children
    
    if (nav.children) {
      const result = findCurrentPaths(nav.children, pathname, currentPath)
      if (result) {
        return result
      }
    }
  }
  return null
}

const getCurrentPaths = (pathname: string) => {
  let currentPaths: MenuProps[] = []
  const navMenus: MenuProps[] = [
    ...PLAYGROUND_NAVIGATIONS,
  ]

  // Use the helper function to find the current path
  const result = findCurrentPaths(navMenus, pathname)
  if (result) {
    currentPaths = result
  }

  return currentPaths
}

const BreadcrumbSection = ({ pathname }: { pathname: string }) => {
  const currentPaths = getCurrentPaths(pathname)
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
            <BreadcrumbLink url="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        {currentPaths.map(item => (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
                <BreadcrumbLink url={item.url}>{item.menuName}</BreadcrumbLink>
            </BreadcrumbItem>
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
};

export default BreadcrumbSection;
  