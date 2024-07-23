'use client'

import { EPost } from "@/api/posts/post.entity";
import { createContext } from "react";
import { TFilter, TSort } from "@/app/model.app";

interface IMainContext {
    data: EPost[];
    isFetching: boolean;
    handleChangeFilter: (values: TFilter) => void;
    handleChangeSort: (values: TSort) => void;
    dataMutation: EPost[];
    isPending: boolean;
    handleGetData: () => void;
}

const defaultValues = {
    data: [],
    isFetching: false,
    handleChangeFilter: () => { },
    handleChangeSort: () => { },
    dataMutation: [],
    isPending: false,
    handleGetData: () => { },
}

export const MainContext = createContext<IMainContext>(defaultValues);
