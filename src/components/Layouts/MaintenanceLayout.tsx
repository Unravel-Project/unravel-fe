"use client";
import "@/app/maintenance.css";

const MaintenanceLayout: React.FC = () => {
    return (
        <div className="maintenance-wrapper">
            <div className="logo">
                <span>N</span>
                <span>R</span>
                <span>V</span>
                <span>L</span>
            </div>
            <div className="maintenance-content">
                <h1>Maintenance Mode</h1>
                <p>
                    Our website is now currently undergoing Maintenance <br /><br />
                    Please be patient and come back at later time to check our new content, cool features, and optimized performance.
                </p>
            </div>
            <label>
                &copy; 2024 | Unravel Malang | Designed and Developed by Discord Group | All Rights reserved.
            </label>
        </div>
    )
}

export default MaintenanceLayout;