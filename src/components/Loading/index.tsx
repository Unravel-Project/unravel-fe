'use client';

import { useEffect, useState } from 'react';
import './style.css';

interface Props {
    timeout?: boolean;
}

const Loading: React.FC<Props> = ({ timeout }) => {
    const [show, setShow] = useState<boolean>(timeout ?? false);

    useEffect(() => {
        setTimeout(() => {
            setShow(false);
        }, 3000)
    }, [])

    return show ? (
        <div className="flex flex-col justify-center items-center text-center">
            <div className="fixed top-0 left-0 z-[1001] w-full h-full flex flex-col justify-center items-center bg-[#0000004d]">
                <div
                    className="c-loader animate-spin w-[50px] p-[8px] bg-[#2563b0] rounded-[50%] aspect-square"
                />
                <h6 className="mt-2 text-base text-white text-center font-medium">Loading...</h6>
            </div>
        </div>
    ) : null
}

export default Loading;