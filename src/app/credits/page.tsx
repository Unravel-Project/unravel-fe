"use client";
import "./styles.css";
import CONTRIBUTORS from "./constants/contributors";
import Image from "next/image";
import Link from "next/link";
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import placeholderUser from "../../../public/user.png";
import { TbWorldWww } from "react-icons/tb";

const Credits = ():React.ReactNode => {
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
        <div className="credit-content">
          <h2 className="text-center">Unravel Malang</h2>
          <h1 className="text-center">contributors</h1>
          {CONTRIBUTORS.map((item, idx) => <CreditUser {...item} key={`cat-${idx}`}/> )}
        </div>
    </div>
  )
}

const CreditUser = (props:Contributors):React.ReactNode => {
  const { department, contributors } = props;
  return (
    <div className="credit-category">
      <h3>{ department }</h3>
      <div className="credit-user">
        {contributors.map((item, idx) => <CreditUserItem {...item} key={`${department}-${idx}`}/>)}
      </div>
    </div>
  );
}

const CreditUserItem = (props: UnravelTeam):React.ReactNode => {
  const { name, socialMedia, image } = props;
  return (
    <figure>
      <Image src={image || placeholderUser} alt="image-contributors" />
      <figcaption>
        <label>{ name }</label>
        <ol>
          <li>
            <Link href={socialMedia?.instagram || ''}><InstagramLogoIcon /></Link>
          </li>
          <li>
            <Link href={socialMedia?.github || ''}><GitHubLogoIcon /></Link>
          </li>
          <li>
            <Link href={socialMedia?.linkedin || ''}><LinkedInLogoIcon /></Link>
          </li>
          <li>
            <Link href={socialMedia?.website || ''}><TbWorldWww /></Link>
          </li>
        </ol>
      </figcaption>
    </figure>
  );
}
export default Credits;
