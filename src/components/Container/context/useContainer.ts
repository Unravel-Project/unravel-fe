import { useState } from "react"

export const useContainer = () => {
    const [loading, setLoading] = useState<boolean>(false);

    return {
        loading,
        setLoading,
    }
}