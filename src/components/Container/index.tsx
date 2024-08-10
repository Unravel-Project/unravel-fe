'use client'

import { ReactNode, Suspense } from "react";
import { LayoutContext } from "./context/Provider";
import { useContainer } from "./context/useContainer";
import Loading from "../Loading";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Container: React.FC<{ children: ReactNode }> = ({ children }) => {
    const {
        loading,
        setLoading
    } = useContainer();

    return (
        <main className="bg-[#F1F4F6] min-h-screen w-full">
            <Suspense fallback={<Loading />}>
                <QueryClientProvider client={queryClient}>
                    <LayoutContext.Provider
                        value={{
                            loading,
                            setLoading
                        }}
                    >
                        {loading && <Loading />}
                        {children}
                    </LayoutContext.Provider>
                </QueryClientProvider>
            </Suspense>
        </main>

    )
}

export default Container;