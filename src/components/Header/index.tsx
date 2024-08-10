import Image from "next/image";
import { MENU } from "@/lib/constants/menu";

const Header: React.FC = () => {

    return (
        <header className="fixed w-full top-0 left-0 bg-black z-[10] h-fit py-2">
            <div className="container flex flex-wrap items-center justify-between">
                <Image
                    src="https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png"
                    width={48}
                    height={48}
                    alt="main-logo" 
                />
                <nav>
                    <ul className="flex flex-wrap justify-end gap-3">
                        { MENU.map((item, idx) => <MenuItem key={`menu-${idx}`} {...item} />) }
                    </ul>
                </nav>
            </div>
        </header>
    )
}

const MenuItem = (props: MenuProps) => {
    const { menuName, url } = props;

    return (
        <li className="flex items-center w-fit px-5 py-3">
            <a href={url}>{ menuName }</a>
        </li>
    );
}

export default Header;