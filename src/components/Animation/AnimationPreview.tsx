import { useEffect, useState } from "react";

interface AnimationStep {
  image: string;
  step: string;
  description: string;
}

interface AnimationSequenceProps {
  steps: AnimationStep[]; // Allow multiple animation steps
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

  return (
    <div className="w-[1197.41px] h-[880px] bg-[#D4D4D4] rounded-[30px] relative overflow-hidden">
      {/* Main Frame */}
      <div className="w-full h-full">
        <img
          src={steps[currentStep]?.image}
          alt={`Step ${currentStep + 1}`}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isImageZoomed ? "scale-150 translate-x-[-25%] translate-y-[-25%]" : ""
          }`}
        />
      </div>

      {/* Drawer */}
      <div
        className={`absolute top-0 h-full bg-white w-[598.705px] transform transition-transform duration-500 ease-in-out ${
          isDrawerVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {steps[currentStep] && (
          <div className="p-8 space-y-4">
            <p className="font-gilroy text-[28px] leading-[125%] text-[#3F3F46] font-normal">
              {steps[currentStep].step}
            </p>
            <p className="font-gilroy text-[32px] leading-[125%] text-black font-normal">
              {steps[currentStep].description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimationSequence;