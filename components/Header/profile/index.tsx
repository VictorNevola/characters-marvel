import Image from "next/image";

import { ProfileWrapper } from "./styles";
import ProfileIcon from "@/public/icons/profile.svg";

const Profile = () => {
  return (
    <ProfileWrapper>
      <Image 
        src={ProfileIcon}
        width={24}
        height={24}
        alt="profileIcon"  
      />
    </ProfileWrapper>
  )
};

export default Profile;