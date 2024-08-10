import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Image from "next/image";
import { MdFacebook } from "react-icons/md";
import mainLogo from '../../../public/main-logo.png';

const Footer: React.FC = () => {
    return (
        <div className="flex justify-center mt-[16px] w-full p-[24px] bg-black">
            <div className="container text-white">
                <div className="flex flex-col gap-y-4 gap-x-8 md:flex-row md:items-end md:gap-x-14">
                    <div className="w-full md:w-1/3 py-4">
                        <Image src={mainLogo} alt="main-logo" className="ft-logo" />
                        <p className="text-[#727272]">Imagine a sun-kissed beach with powdery white sand stretching along turquoise waters, where palm trees sway gently in the breeze. The ultimate escape features charming local cafes, vibrant markets, and serene spots perfect for relaxation. Whether you&apos;re drawn to snorkeling, hiking lush trails, or simply lounging under the sun, this destination offers a delightful mix of adventure and tranquility.</p>
                    </div>
                    <div className="w-full md:w-2/3 py-4">
                        <h3 className="text-xl uppercase mb-3">sitemap</h3>
                        <ul className="flex flex-row gap-x-3">
                            <li className="py-2">
                                <Link href="#">About</Link>
                            </li>
                            <li className="py-2">
                                <Link href="#">Contact</Link>
                            </li>
                            <li className="py-2">
                                <Link href="#">Directory</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="anchor" className="basis-full mt-4 text-sm text-[#828282] text-center pt-4 border-t border-t-[#727272]">
                    <ul className="flex flex-wrap mb-3 justify-center items-center gap-x-3">
                        <li>
                            <label className="text-sm">Follow us on:</label>
                        </li>
                        <li>
                            <Link href="#">
                                <InstagramLogoIcon className="size-5"/>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <TwitterLogoIcon className="size-5"/>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <MdFacebook className="size-5"/>
                            </Link>
                        </li>
                    </ul>
                    <span className="block">©2024 Managed by Private Undisclosed Discord Group</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;