import React from "react";

interface OverviewProps {
  overview: string;
  duration: string;
  product: string;
  role: string[];
  deliverables: string[];
  specs: string[];
}

const Overview: React.FC<OverviewProps> = ({ overview, duration, product, role, deliverables, specs }) => {

  return (
    <>
      <div className="bg-white pt-28 pb-12 px-32 z-32 flex flex-col items-start gap-8">
        <div className="flex flex-col items-start gap-2 w-full">
          <div className="py-2 text-left">
            <h5 className="h3 pb-8 font-600 tracking-wide">overview</h5>
          </div>
          <div className="grid grid-rows-2 grid-flow-row auto-rows-min gap-8 items-start text-left w-full">
            <div className='row-start-1 row-span-1 col-start-1 col-span-1 items-start'>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="https://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="20" fill="#80B29B" />
                <path d="M10.8623 25.5742V14.9928C10.8623 14.2974 11.0542 13.7661 11.4381 13.399C11.8275 13.0262 12.3588 12.8398 13.032 12.8398H28.0362C28.6481 12.8398 29.1266 13.0012 29.4715 13.3238C29.8164 13.641 30 14.0999 30.0223 14.7008H13.4826C13.2323 14.7008 13.0431 14.762 12.9152 14.8844C12.7872 15.0067 12.7232 15.1987 12.7232 15.4601V25.5742H10.8623ZM9.14325 27.0763C8.83171 27.0763 8.56189 26.9622 8.3338 26.7341C8.11127 26.5116 8 26.2446 8 25.933C8 25.6159 8.11127 25.3461 8.3338 25.1236C8.56189 24.8955 8.83171 24.7814 9.14325 24.7814H23.6718C23.6718 24.9261 23.6718 25.0707 23.6718 25.2154C23.6773 25.3544 23.6801 25.4963 23.6801 25.641C23.6857 26.1806 23.8275 26.659 24.1057 27.0763H9.14325ZM26.3588 27.1597C25.8414 27.1597 25.4353 27.0151 25.1405 26.7258C24.8456 26.4421 24.6982 26.0526 24.6982 25.5575V17.2543C24.6982 16.7592 24.8456 16.3697 25.1405 16.086C25.4353 15.7967 25.8414 15.6521 26.3588 15.6521H30.3727C30.879 15.6521 31.2768 15.7967 31.5661 16.086C31.8554 16.3697 32 16.7592 32 17.2543V25.5575C32 26.0526 31.8554 26.4421 31.5661 26.7258C31.2768 27.0151 30.879 27.1597 30.3727 27.1597H26.3588ZM26.5007 25.7912H30.1975C30.3533 25.7912 30.4729 25.7494 30.5563 25.666C30.6398 25.577 30.6815 25.4518 30.6815 25.2905V17.5213C30.6815 17.36 30.6398 17.2376 30.5563 17.1542C30.4729 17.0652 30.3533 17.0207 30.1975 17.0207H29.4798C29.4465 17.0207 29.4298 17.0373 29.4298 17.0707V17.1542C29.4298 17.3044 29.3825 17.424 29.2879 17.513C29.1989 17.602 29.0848 17.6465 28.9458 17.6465H27.7608C27.6161 17.6465 27.4993 17.602 27.4103 17.513C27.3213 17.424 27.2768 17.3044 27.2768 17.1542V17.0707C27.2768 17.0373 27.2573 17.0207 27.2184 17.0207H26.5007C26.3394 17.0207 26.2197 17.0624 26.1419 17.1458C26.064 17.2293 26.025 17.3517 26.025 17.513V25.2905C26.025 25.4574 26.064 25.5825 26.1419 25.666C26.2197 25.7494 26.3394 25.7912 26.5007 25.7912ZM27.2184 25.3322C27.0236 25.3322 26.9263 25.2321 26.9263 25.0318C26.9263 24.9428 26.9513 24.8704 27.0014 24.8148C27.057 24.7592 27.1293 24.7314 27.2184 24.7314H29.4798C29.5688 24.7314 29.6412 24.7592 29.6968 24.8148C29.7524 24.8704 29.7802 24.9428 29.7802 25.0318C29.7802 25.2321 29.6801 25.3322 29.4798 25.3322H27.2184Z" fill="white" />
              </svg>

            </div>
            <div className='m-0 p-0 col-start-2 col-span-3 row-span-1 font-gilroy font-300 text-6 leading-relaxed text-grey-600'>
              <strong className='font-600'>The product - </strong>{overview}
            </div>
            <div className='col-start-5 col-span-3 row-start-1 row-span-2'>
              <img
                src={product}
                className="w-full h-full relative -top-20"
              />
            </div>
            <div className='row-start-2 row-span-1 col-start-1 col-span-1 items-start'>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="https://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="20" fill="#80B29B" />
                <path d="M15.7546 21.1693C15.5417 21.1693 15.3605 21.0974 15.2109 20.9536C15.0671 20.8098 14.9952 20.6314 14.9952 20.4186C14.9952 20.2115 15.0671 20.036 15.2109 19.8922C15.3605 19.7484 15.5417 19.6765 15.7546 19.6765H19.2493V14.8961C19.2493 14.6832 19.3212 14.5049 19.465 14.3611C19.6088 14.2172 19.7843 14.1453 19.9914 14.1453C20.2042 14.1453 20.3826 14.2172 20.5264 14.3611C20.6702 14.5049 20.7421 14.6832 20.7421 14.8961V20.4186C20.7421 20.6314 20.6702 20.8098 20.5264 20.9536C20.3826 21.0974 20.2042 21.1693 19.9914 21.1693H15.7546ZM20 28.9958C18.7689 28.9958 17.6098 28.7599 16.5225 28.2882C15.4353 27.8222 14.4775 27.1751 13.6491 26.3467C12.8207 25.5183 12.1707 24.5634 11.6989 23.4819C11.233 22.3946 11 21.2326 11 19.9958C11 18.7647 11.233 17.6084 11.6989 16.5269C12.1707 15.4397 12.8178 14.4819 13.6405 13.6535C14.4688 12.8251 15.4267 12.1779 16.5139 11.712C17.6012 11.2403 18.7603 11.0044 19.9914 11.0044C21.2224 11.0044 22.3816 11.2403 23.4688 11.712C24.5618 12.1779 25.5197 12.8251 26.3423 13.6535C27.1707 14.4819 27.8207 15.4397 28.2924 16.5269C28.7641 17.6084 29 18.7647 29 19.9958C29 21.2326 28.7641 22.3946 28.2924 23.4819C27.8207 24.5634 27.1707 25.5183 26.3423 26.3467C25.5197 27.1751 24.5647 27.8222 23.4775 28.2882C22.3902 28.7599 21.2311 28.9958 20 28.9958ZM20 27.0197C20.9722 27.0197 21.8811 26.8385 22.7268 26.4761C23.5781 26.1137 24.326 25.6132 24.9703 24.9747C25.6146 24.3304 26.1179 23.5854 26.4803 22.7398C26.8428 21.8884 27.024 20.9737 27.024 19.9958C27.024 19.0236 26.8399 18.1147 26.4717 17.269C26.1093 16.4176 25.6059 15.6698 24.9616 15.0255C24.3231 14.3812 23.5781 13.8778 22.7268 13.5154C21.8811 13.153 20.9693 12.9718 19.9914 12.9718C19.0192 12.9718 18.1074 13.153 17.256 13.5154C16.4104 13.8778 15.6654 14.3812 15.0211 15.0255C14.3826 15.6698 13.8821 16.4176 13.5197 17.269C13.163 18.1147 12.9847 19.0236 12.9847 19.9958C12.9847 20.9737 13.163 21.8884 13.5197 22.7398C13.8821 23.5854 14.3854 24.3304 15.0297 24.9747C15.674 25.6132 16.419 26.1137 17.2646 26.4761C18.116 26.8385 19.0278 27.0197 20 27.0197Z" fill="white" />
              </svg>


            </div>
            <div className='col-start-2 col-span-3 row-span-1 font-gilroy font-300 text-6 leading-relaxed text-grey-600'>
              <strong className='font-600'>Project duration - </strong>{duration}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white pt-12 pb-16 px-32 z-32 flex flex-row items-start gap-8">
        <div className="flex flex-col items-start gap-1 w-full">
          <div className="p-0 text-left">
            <h6 className="m-0 font-gilroy font-300 text-6 text-grey-600 tracking-wide">role</h6>
          </div>
          <ul className="p-0 list-disc text-left list-inside space-y-1">
            {role.map((role, index) => (
              <li
                key={index}
                className="text-grey-600 font-gilroy font-300 text-5 leading-tight"
              >
                {role}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-start gap-2 w-full">
          <div className="p-0 text-left">
            <h6 className="m-0 font-gilroy font-300 text-6 text-grey-600 tracking-wide">deliverables</h6>
          </div>
          <ul className="p-0 list-disc text-left list-inside space-y-1">
            {deliverables.map((deliverables, index) => (
              <li
                key={index}
                className="text-grey-600 font-gilroy font-300 text-5 leading-tight"
              >
                {deliverables}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-start gap-2 w-full">
          <div className="p-0 text-left">
            <h6 className="m-0 font-gilroy font-300 text-6 text-grey-600 tracking-wide">specifications</h6>
          </div>
          <ul className="p-0 list-disc text-left list-inside space-y-1">
            {specs.map((specs, index) => (
              <li
                key={index}
                className="text-grey-600 font-gilroy font-300 text-5 leading-tight"
              >
                {specs}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Overview;