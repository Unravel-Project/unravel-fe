import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

interface BasePageProps {
  children: React.ReactNode;
  pageTitle: string;
  pageDescription?: string;
  docUrl?: string;
}

const BasePage = ({ children, pageTitle, docUrl, pageDescription = '' }: BasePageProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl text-neutral-coolgray-900 font-bold">{pageTitle}</h1>
        {docUrl && <Link href={docUrl} className="flex items-center" target="_blank">Docs <ArrowTopRightIcon /></Link>}
        <div className="my-1">{pageDescription}</div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl text-neutral-coolgray-900 font-bold">Preview</h2>
        {children}
      </div>
    </div>
  )
};

export default BasePage;
  