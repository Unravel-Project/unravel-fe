"use client";
import Image from "next/image";
import mainLogo from "../../../public/main-logo.png";
import "./styles.css";

const Credits = () => {
  return (
    <div className="credit-panel">
        <div className="credit-intro">
            <h2>
                This page is dedicated for those who put their effort, time, and skills into making our project a huge success
            </h2>
            <p>
                Your dedication has truly made a difference, and we are grateful for your invaluable contributions
            </p>
        </div>
        <Image src={mainLogo} alt="main-logo" />
    </div>
  )
}

export default Credits;
