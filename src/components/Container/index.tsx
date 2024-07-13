'use client'

import { ReactNode, Suspense } from "react";
import { LayoutContext } from "./context/Provider";
import { useContainer } from "./context/useContainer";
import Loading from "../Loading";

const Container: React.FC<{ children: ReactNode }> = ({ children }) => {
    const {
        loading,
        setLoading
    } = useContainer();

    return (
        <main className="bg-[#F1F4F6] min-h-[500px] w-full">
            <Suspense fallback={<Loading />}>
                <LayoutContext.Provider
                    value={{
                        loading,
                        setLoading
                    }}
                >
                    {loading && <Loading />}
                    {children}
                </LayoutContext.Provider>
            </Suspense>
        </main>

    )
}

export default Container;