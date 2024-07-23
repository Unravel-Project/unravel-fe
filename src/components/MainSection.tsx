'use client';

import { useMain } from "@/contexts/useMain";
import { MainContext } from "@/contexts/Provider";
import SectionMutation from "./SectionMutation";
import SectionFirstQuery from "./SectionFirstQuery";

const MainSection: React.FC = () => {
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
        <div
            className="flex min-h-screen gap-4 w-full p-10"
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
    )
}

export default MainSection;
