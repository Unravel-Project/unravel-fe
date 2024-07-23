import "@/app/maintenance.css";
import Image from 'next/image';
import gridImg from "../../public/gridnew.png";

const MaintenancePage: React.FC = () => {
    return (
        <div className="fixed inset-0 w-full h-full bg-white">
            <div className="mm-wrapper">
                <div className="mm-ov">
                    <div style={{
                        backgroundImage: `url(${gridImg.src})`,
                    }}></div>
                    <div style={{
                        backgroundImage: `url(${gridImg.src})`,
                    }}></div>
                </div>
                <div className="mm-cubes-holder">
                    <div className="mm-cubes">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="mm-panel">
                    <h1>&#47;&#47; Maintenance Mode</h1>
                    <p>
                        This website is currently undergoing scheduled maintenance. We&apos;ll be back online shortly.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MaintenancePage;