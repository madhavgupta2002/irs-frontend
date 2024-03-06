import { TbGridDots } from "react-icons/tb";

import Profile from "../assets/profile-200x200.jpg";

const ProfileIcon = () => {
  return (
    <div className="flex gap-2">
      <span className="h-10 w-10 relative flex item-center justify-center">
        <span className="h-10 w-10 rounded-full overflow-hidden">
            <img className="h-full w-full object-cover" src={Profile} alt="Profile"/>
        </span>
      </span>
    </div>
  );
};

export default ProfileIcon;
