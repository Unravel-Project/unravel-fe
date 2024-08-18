import Link from "next/link";
import Image from "next/image";
import mainLogo from '../../../public/main-logo.png';
import { MENU } from "@/lib/constants/menu";
import { MdFacebook } from "react-icons/md";
import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

const Footer: React.FC = () => {
    const directories = MENU.find(mn => mn.menuName == 'Directories');
    return (
        <div className="flex justify-center mt-[16px] w-full p-[24px] bg-primary-500">
            <div className="container text-white">
                <div className="flex flex-col gap-y-4 gap-x-8 md:flex-row md:gap-x-14">
                    <div className="w-full md:w-1/3 py-4">
                        {/* <Image src={mainLogo} alt="main-logo" className="ft-logo" /> */}
                        <div
                            className="img-placeholder mb-4"
                            style={{
                                width: '256px',
                                height: '96px',
                            }}
                            >
                            Footer Logo (256 x 96)
                        </div>
                        <p className="text-accent-100 text-sm text-pretty leading-6">Explore our curated list of top restaurants, where each venue offers a unique dining experience. From gourmet delights to casual favorites, discover new flavors and memorable meals that will elevate your dining adventures. Find your next culinary gem today!</p>
                    </div>
                    <div className="w-full md:w-2/3 py-4">
                        <h3 className="text-md uppercase mb-7">Directories</h3>
                        <ul className="flex flex-row gap-x-10">
                            {
                                directories.children.map((menu,index) => {
                                    return (
                                        <li key={`footernav-${index}`}>
                                            <label className="text-sm uppercase text-accent-400 block mb-5">{ menu.menuName }</label>
                                            { menu.children && (
                                                <ol>
                                                    { menu.children.map((child, idx) => {
                                                        return (
                                                            <li key={`footernav-${menu.menuName}-${idx}`} className="py-1">
                                                                <Link href={child.url}>
                                                                    {child.menuName}
                                                                </Link>
                                                            </li>
                                                        )
                                                    })}
                                                </ol>
                                            )}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div id="anchor" className="basis-full mt-4 text-sm text-accent-200 text-center pt-4 border-t border-t-accent-200">
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