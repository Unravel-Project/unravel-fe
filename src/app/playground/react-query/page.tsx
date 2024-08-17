'use client'

import BasePage from "@/components/Playground/BasePage";
import { MainContext } from "./context/Provider";
import SectionFirstQuery from "./component/SectionFirstQuery";
import SectionMutation from "./component/SectionMutation";
import { useMain } from "./useMain";

const ReactQueryPage = () => {

  const {
    data,
    isFetching,
    handleChangeFilter,
    handleChangeSort,
    dataMutation,
    isPending,
    handleGetData,
  } = useMain();

  return (
    <BasePage
      pageTitle="React Query"
      pageDescription="You can open the docs from the link above"
      docUrl="https://ui.shadcn.com/docs/components/skeleton"
      withPreview={false}
    >
      <div
        className="flex min-h-screen gap-4 w-full p-10 text-black"
      >
        <MainContext.Provider
          value={{
            data,
            isFetching,
            handleChangeFilter,
            handleChangeSort,
            dataMutation,
            isPending,
            handleGetData,
          }}
        >
          <div className="border-2 border-slate-400 flex-1 rounded">
            <SectionFirstQuery />
          </div>
          <div className="border-2 border-slate-400 flex-1 rounded">
            <SectionMutation />
          </div>
        </MainContext.Provider>
      </div>
    </BasePage>
  )
}

export default ReactQueryPage;
