import Image from "next/image";

const Header: React.FC = () => {

    return (
        <nav className="fixed flex flex-row top-0 flex-wrap items-start justify-between bg-transparent z-[100] w-[100%]">
            <div className="pl-[28px] py-[18px]">
                <p className="text-2xl text-black font-bold">
                    unravel
                </p>
            </div>
            <div className="flex h-[60px] items-center gap-4 px-8 w-fit-content">
                <a href="#">
                    <p className="text-base text-[#052A49]">
                        Rangking
                    </p>
                </a>
                <a href="#">
                    <p className="text-base text-[#052A49]">
                        Directory
                    </p>
                </a>
                <a href="#">
                    <p className="text-base text-[#052A49]">
                        Evaluation Criteria
                    </p>
                </a>
                <a href="#">
                    <p className="text-base text-[#052A49]">
                        About Us
                    </p>
                </a>
                <a href="#">
                    <p className="text-base text-[#052A49]">
                        Contact Us
                    </p>
                </a>
            </div>
        </nav>
    )
}

export default Header;