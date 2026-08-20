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
      className="fixed inset-0 w-full h-full object-cover object-top-right hidden lg:block z-0"
    />
    <img
      alt="Background image for tablets"
      src={imageMD}
      className="fixed inset-0 w-full h-full object-cover bg-center hidden md:block lg:hidden z-0"
    />
    <img
      alt="Background image for mobile"
      src={imageSM}
      className="fixed inset-0 w-full h-full object-cover bg-center block md:hidden z-0"
    />
  </>
);

export default BackgroundImages;