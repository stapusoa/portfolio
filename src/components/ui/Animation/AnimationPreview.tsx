import { useEffect, useState } from "react";

interface AnimationStep {
  image: string;
  step: string;
  description: string;
  zoomPosition?: { x: string; y: string; scale: number }; // Zoom control
}

interface AnimationSequenceProps {
  steps: AnimationStep[];
}

const AnimationSequence: React.FC<AnimationSequenceProps> = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [isImageZoomed, setIsImageZoomed] = useState(false);

  useEffect(() => {
    if (steps.length === 0) return;

    const animationSequence = () => {
      setTimeout(() => setIsDrawerVisible(true), 500); // Show drawer
      setTimeout(() => setIsImageZoomed(true), 1000); // Zoom image
      setTimeout(() => {
        setIsDrawerVisible(false);
        setIsImageZoomed(false);
        setCurrentStep((prev) => (prev + 1) % steps.length);
      }, 3000); // Move to next step
    };

    const interval = setInterval(animationSequence, 3500);
    return () => clearInterval(interval);
  }, [currentStep, steps]);

  // ✅ Compute inline zoom style
  const zoomStyle = isImageZoomed && steps[currentStep]?.zoomPosition
    ? {
        transform: `scale(${steps[currentStep].zoomPosition.scale}) translate(${steps[currentStep].zoomPosition.x}, ${steps[currentStep].zoomPosition.y})`,
        transition: "transform 0.5s ease-in-out",
      }
    : {
        transform: "scale(1) translate(0, 0)",
        transition: "transform 0.5s ease-in-out",
      };

  return (
    <div className="w-full h-full md:w-[1197.41px] md:h-[880px] bg-[#D4D4D4] rounded-[30px] relative overflow-hidden">
      {/* Main Frame */}
      <div className="w-full h-full">
        <img
          src={steps[currentStep]?.image}
          alt={`Step ${currentStep + 1}`}
          className="w-full h-full object-contain md:object-cover"
          style={zoomStyle} // ✅ Apply inline zoom styles
        />
      </div>

      {/* ✅ Desktop: Drawer slides from left → right (Unchanged) */}
      {/* ✅ Mobile: Drawer slides from bottom → top (Fixed) */}
      <div
        className={`absolute bg-white w-full h-[40%] md:w-[598.705px] md:h-full transform transition-transform duration-500 ease-in-out
        ${isDrawerVisible ? "md:translate-x-0 translate-y-0 md:translate-y-none" : "md:-translate-x-full translate-y-full md:translate-y-none"}
        bottom-0 md:top-0 md:left-0`}
      >
        {steps[currentStep] && (
          <div className="p-6 md:p-8 space-y-4">
            <p className="font-gilroy text-[24px] md:text-[28px] leading-[125%] text-[#3F3F46] font-normal">
              {steps[currentStep].step}
            </p>
            <p className="font-gilroy text-[28px] md:text-[32px] leading-[125%] text-black font-normal">
              {steps[currentStep].description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimationSequence;