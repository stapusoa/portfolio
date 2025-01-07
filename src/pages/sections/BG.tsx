import React from "react";

interface BackgroundImagesProps {
  imageSM: string;
  imageMD: string;
  imageLG: string;
}

const BackgroundImages: React.FC<BackgroundImagesProps> = ({ imageSM, imageMD, imageLG }) => (
  <>
    <img
      alt="Background image for large screens"
      src={imageLG}
      className="hidden lg:block w-full h-full object-cover object-top-right z-0 fixed inset-0"
    />
    <img
      alt="Background image for tablets"
      src={imageMD}
      className="hidden md:block lg:hidden w-full h-full object-cover object-top-right z-0 fixed inset-0"
    />
    <img
      alt="Background image for mobile"
      src={imageSM}
      className="block md:hidden w-full h-full object-cover object-top-right z-0 fixed inset-0"
    />
  </>
);

export default BackgroundImages;