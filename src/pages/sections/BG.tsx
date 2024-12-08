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
      className="w-full h-full object-cover object-top-right fixed p-0 m-0 z-0 inset-0 hidden lg:block"
    />
    <img
      alt="Background image for tablets"
      src={imageMD}
      className="w-full h-full object-cover object-top-right fixed p-0 m-0 z-0 inset-0 hidden md:block lg:hidden"
    />
    <img
      alt="Background image for mobile"
      src={imageSM}
      className="w-full h-full object-cover object-top-right fixed p-0 m-0 z-0 block md:hidden"
    />
  </>
);

export default BackgroundImages;