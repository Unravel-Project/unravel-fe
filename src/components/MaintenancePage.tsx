"use client";
import "@/app/maintenance.css";
import Image from 'next/image';
import mtBg from "../../public/mt-bg2.jpg";
import gridImg from "../../public/gridnew.png";

const MaintenancePage: React.FC = () => {
    return (
        <div className="fixed inset-0 w-full h-full bg-white">
            <div className="mm-wrapper">
                <div className="terminal">
                    <div className="terminal-header">
                        <span></span>
                        <span></span>
                        <span></span>
                        <label>project::unravel</label>
                    </div>
                    <div className="terminal-body">
                        <label>Unravel Control Panel v1.0</label>
                        <label>Enter Username: <span>unravel</span></label>
                        <label>Enter Password: </label>
                        <label>Processing...</label>
                        <label>Processing...</label>
                        <label>Processing...</label>
                        <label>&nbsp;</label>
                        <label>--- Login Success!! welcome to system 1.0 ---</label>
                        <label>admin@unravel &gt; <span>SET_MAINTENANCE_MODE_ON</span></label>
                        <label>
                            maintenance mode is set to ON, command will be executed in 3..
                        </label>
                        <label>
                            maintenance mode is set to ON, command will be executed in 2..
                        </label>
                        <label>
                            maintenance mode is set to ON, command will be executed in 1..
                        </label>
                        <label>&nbsp;</label>
                        <label>
                            Maintenance Mode activated! closing terminal...
                        </label>
                    </div>
                </div>
                <div className="mm-caption">
                    <div className="mmov-ex">
                        <div className="mmov-top" style={{ backgroundImage: `url(${gridImg.src}) `}}></div>
                    </div>
                    <h1>Unravel Malang</h1>
                    <h2>The Website is currently under maintenance</h2>
                    <p>We&apos;ll be back soon with some cool features and performance optimization. <br />Stay Tuned!</p>
                    <div className="sound-wave">
                        <div className="sound-wave-inner">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="sound-wave-inner">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <span>&copy; 2024 | Unravel Malang | Developed by Discord Group &quot;Kerja Kelompok&quot; | All rights reserved.</span>
                </div>
            </div>
        </div>
    )
}

export default MaintenancePage;