import { createContext } from "react";

type TLayoutContext = {
    loading: boolean;
    setLoading: (flag: boolean) => void;
}

const defaultValue = {
    loading: false,
    setLoading: () => { }
}

export const LayoutContext = createContext<TLayoutContext>(defaultValue);
