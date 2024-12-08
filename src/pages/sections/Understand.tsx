import React from "react";

interface UnderstandProps {
  user: string;
}

const Understand: React.FC<UnderstandProps> = ({ user }) => (
  <div className="bg-white pt-16 pb-12 px-32 grid grid-cols-8 grid-flow-row items-start gap-8">
              <div className="py-2 text-left col-start-1 col-span-4 items-start gap-2">
                <h5 className="h3 pb-8 font-600 tracking-wide">understanding the user</h5>
              </div>
              <div className='m-0 p-0 col-start-5 col-span-4 text-left font-gilroy font-300 text-6 leading-relaxed'>
{user}              </div>

            </div>
);

export default Understand;