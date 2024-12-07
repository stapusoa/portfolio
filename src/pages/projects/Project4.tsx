import React from "react";
import Card from "../../components/Card/card";
import Goal from "../sections/Goal";

const Project4: React.FC = () => {
  console.log('Home component is rendering');
  const cards = [
    {
      image:
        "/images/cheyenne.webp",
      title: "Jennifer G",
      job: "Purchasing Manager",
      quote: "Efficiency is key!",
      bio: "A passionate manager with a knack for problem solving.",
      age: "29, MBA, San Francisco",
      frustrations: ["Lack of efficient tools", "Time-consuming processes"],
      motivations: ["Quality control at best prices", "Optimize inventory"]
    },
    {
      image:
        "/images/ammon.webp",
      title: "Kai T",
      job: "Sales Rep",
      quote: "Efficiency is key!",
      bio: "A passionate manager with a knack for problem solving.",
      age: "34, High School, Denver",
      frustrations: ["Lack of efficient tools", "Time-consuming processes"],
      motivations: ["Quality control at best prices", "Optimize inventory"]
    },
    {
      image:
        "/images/ana.webp",
      title: "Ana M",
      job: "Warehouse Worker",
      quote: "Efficiency is key!",
      bio: "A passionate manager with a knack for problem solving.",
      age: "42, BS, Atlanta",
      frustrations: ["Lack of efficient tools", "Time-consuming processes"],
      motivations: ["Quality control at best prices", "Optimize inventory"]
    },
    {
      image:
        "/images/tan.webp",
      title: "Darien T",
      job: "Administrator",
      quote: "Efficiency is key!",
      bio: "A passionate manager with a knack for problem solving.",
      age: "56, MBA, Portland",
      frustrations: ["Lack of efficient tools", "Time-consuming processes"],
      motivations: ["Quality control at best prices", "Optimize inventory"]
    },
  ];
  

  return (
    <>

      <div className="relative w-full h-screen">
        <img
          alt="Background image for Case Study"
          src="/portfolio/images/lg_bg-proj1-hero.jpg" // Default (large screen)
          className="w-full h-full object-cover object-center-right fixed p-0 m-0 z-[-1] inset-0 hidden lg:block"
        />
        <img
          alt="Background image for Case Study - tablet"
          src="/portfolio/images/md_bg-proj1-hero.jpg" // Tablet
          className="w-full h-full object-cover object-top-right fixed p-0 m-0 z-[-1] inset-0 hidden md:block lg:hidden"
        />
        <img
          alt="Background image for Case Study - mobile"
          src="/portfolio/images/sm_bg-proj1-hero.jpg" // Mobile
          className="w-full h-full object-cover object-top-right  fixed p-0 m-0 z-[-1] inset-0 block md:hidden"
        />
        {/* Hero Section */}
        <div className="relative isolate px-6 pt-14 lg:px-8 h-screen">
          <div className="left max-w-2xl px-32 py-28 sm:py-36 lg:py-48">
            <div className="text-left">
              <h1 className="mb-2 hover:drop-shadow-sm relative text-balance font-gilroy text-8 font-300 tracking-tight text-green">
                fishbowl go
              </h1>
              <h1 className="h1 mt-0 mb-8">
                simplifying inventory management in the warehouse and in the office.
              </h1>
              <div className="flex items-left justify-left gap-x-4">
                <a
                  href="#"
                  className="btn-primary w-16"
                >
                  prototype
                </a>
                <a href="#" className="btn-outline w-16">
                  website
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Overlay */}
        <div className="relative bg-white w-full h-screen">
          <div className="relative z-10 flex flex-col w-full">
            {/* Overview */}
            <div className="bg-white pt-28 pb-12 px-32 flex flex-col items-start gap-8">
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
                    <strong className='font-600'>The product - </strong>Fishbowl Go is an app designed for Fishbowl Inventory clients, tailored for warehouse tasks. It serves as a powerful tool to streamline sales orders, manufacture orders, and other tasks for inventory management.
                  </div>
                  <div className='col-start-5 col-span-3 row-start-1 row-span-2'>
                    <img
                      src="/portfolio/images/fishbowl.png"
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
                    <strong className='font-600'>Project duration - </strong>Originally, the project was roadmapped for a month reskinning of the mobile native app. Through research and brainstorming, the project specs changed. We worked on it from January 2021 to September 2021.
                  </div>
                </div>
              </div>
            </div>
            {/* Role */}
            <div className="bg-white pt-12 pb-16 px-32 flex flex-row items-start gap-8">
              <div className="flex flex-col items-start gap-1 w-full">
                <div className="p-0 text-left">
                  <h6 className="m-0 font-gilroy font-300 text-6 text-grey-600 tracking-wide">role</h6>
                </div>


                <ul className="p-0 list-disc text-left list-inside space-y-1">
                  <li className="text-grey-600 font-gilroy font-300 text-5 leading-tight">
                    Project Lead
                  </li>
                  <li className="text-grey-600 font-gilroy font-300 text-5 leading-tight">
                    User Researcher
                  </li>
                  <li className="text-grey-600 font-gilroy font-300 text-5 leading-tight">
                    User Experience Designer
                  </li>
                  <li className="text-grey-600 font-gilroy font-300 text-5 leading-tight">
                    User Interface Designer
                  </li>
                  <li className="text-grey-600 font-gilroy font-300 text-5 leading-tight">
                    Interaction Designer
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="p-0 text-left">
                  <h6 className="m-0 font-gilroy font-300 text-6 text-grey-600 tracking-wide">deliverables</h6>
                </div>


                <ul className="p-0 list-disc list-inside text-left space-y-1">
                  <li className="text-grey-600 font-gilroy font-300 text-5 leading-tight">
                    User surveys & user tests
                  </li>
                  <li className="text-grey-600 font-gilroy font-300 text-5 leading-tight">
                    Personas
                  </li>
                  <li className="text-grey-600 font-gilroy font-300 text-5 leading-tight">
                    User journeys & site maps
                  </li>
                  <li className="text-grey-600 font-gilroy font-300 text-5 leading-tight">
                    High-fidelity prototype
                  </li>
                  <li className="text-grey-600 font-gilroy font-300 text-5 leading-tight">
                    Usability tests & findings
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="p-0 text-left">
                  <h6 className="m-0 font-gilroy font-300 text-6 text-grey-600 tracking-wide">specifications</h6>
                </div>


                <ul className="p-0 list-disc list-inside text-left space-y-1">
                  <li className="text-grey-600 font-gilroy font-300 text-5 leading-tight">
                    8 months
                  </li>
                  <li className="text-grey-600 font-gilroy font-300 text-5 leading-tight">
                    Figma
                  </li>
                  <li className="text-grey-600 font-gilroy font-300 text-5 leading-tight">
                    Userbrain
                  </li>
                  <li className="text-grey-600 font-gilroy font-300 text-5 leading-tight">
                    Miro
                  </li>
                </ul>
              </div>
            </div>
            {/* Problem Framing */}
            <div className="bg-white pt-16 pb-12 px-32 grid grid-cols-8 grid-flow-row items-start gap-8">
              <div className="py-2 text-left col-start-1 col-span-4 items-start gap-2">
                <h5 className="h3 pb-8 font-600 tracking-wide">problem framing</h5>
              </div>
              <div className='m-0 p-0 font-gilroy text-grey-600 col-start-5 col-span-4 text-left font-300 text-6 leading-relaxed'>
                Businesses face difficulties in managing inventory efficiently due to desktop-only software limitations. This issue intensifies when they need to manage tasks remotely. Current mobile apps focus mainly on warehouse activities, creating a need for a mobile-friendly inventory management tool for administrative tasks. Fishbowl Inventory clients specifically need a tablet-compatible solution that integrates with their existing systems for effective inventory, order, and data management outside the office.
              </div>

            </div>
            {/* Who, When, What, Why */}
            <div className="bg-white h-2xl pt-12 pb-16 px-32 grid grid-cols-8 grid-flow-row items-start gap-8">
              <div className="col-span-4 group h-full divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
                <div className="flex flex-col-reverse justify-end items-start  group-hover:flex-row  group-hover:justify-between group-hover:space-x-6 px-4 pt-7 pb-3">
                  <h6 className="m-0 p-0 font-gilroy font-300 text-gray-400 tracking-wider text-8 group-hover:text-5">who</h6>
                  <svg className="w-8 h-8 group-hover:w-6 group-hover:h-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="https://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_757_29716)">
                      <path d="M12 5.9C12.7503 5.9 13.4435 6.30026 13.8187 6.95C14.1938 7.59974 14.1938 8.40026 13.8187 9.05C13.4435 9.69974 12.7503 10.1 12 10.1C10.8402 10.1 9.9 9.1598 9.9 8C9.9 6.8402 10.8402 5.9 12 5.9V5.9M12 14.9C14.97 14.9 18.1 16.36 18.1 17V18.1H5.9V17C5.9 16.36 9.03 14.9 12 14.9V14.9M12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4M12 13C9.33 13 4 14.34 4 17V20H20V17C20 14.34 14.67 13 12 13" fill="#81B29A" />
                    </g>
                    <defs>
                      <clipPath id="clip0_757_29716">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                </div>
                <div className="group-hover:block hidden px-4 py-3">
                  <h6 className="m-0 p-0 items-start text-left font-gilroy font-500 text-gray-700 tracking-wide leading-cozy text-5">Who is experiencing the problem?</h6>
                </div>
                <div className="group-hover:block hidden px-4 py-3">
                  <p className="m-0 text-left font-gilroy font-300 tracking-wide leading-tight text-gray-600 text-5">Small to medium-sized businesses using inventory management systems, specifically clients of Fishbowl Inventory.</p>
                </div>
              </div>
              <div className="col-span-4 group h-full divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
                <div className="flex flex-col-reverse justify-end items-start  group-hover:flex-row  group-hover:justify-between group-hover:space-x-6 px-4 pt-7 pb-3">
                  <h6 className="m-0 p-0 font-gilroy font-300 text-gray-400 tracking-wider text-8 group-hover:text-5">where</h6>
                  <svg className="w-8 h-8 group-hover:w-6 group-hover:h-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="https://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_757_29716)">
                      <path d="M12 5.9C12.7503 5.9 13.4435 6.30026 13.8187 6.95C14.1938 7.59974 14.1938 8.40026 13.8187 9.05C13.4435 9.69974 12.7503 10.1 12 10.1C10.8402 10.1 9.9 9.1598 9.9 8C9.9 6.8402 10.8402 5.9 12 5.9V5.9M12 14.9C14.97 14.9 18.1 16.36 18.1 17V18.1H5.9V17C5.9 16.36 9.03 14.9 12 14.9V14.9M12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4M12 13C9.33 13 4 14.34 4 17V20H20V17C20 14.34 14.67 13 12 13" fill="#81B29A" />
                    </g>
                    <defs>
                      <clipPath id="clip0_757_29716">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                </div>
                <div className="group-hover:block hidden px-4 py-3">
                  <h6 className="m-0 p-0 items-start text-left font-gilroy font-500 text-gray-700 tracking-wide leading-cozy text-5">Where does the user experience the problem?</h6>
                </div>
                <div className="group-hover:block hidden px-4 py-3">
                  <p className="m-0 text-left font-gilroy font-300 tracking-wide leading-tight text-gray-600 text-5">The problem occurs in environments where these businesses need to manage inventory and administrative tasks remotely or on-the-go, outside of a traditional desktop setup.</p>
                </div>
              </div>
              <div className="col-span-4 group h-full divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
                <div className="flex flex-col-reverse justify-end items-start  group-hover:flex-row  group-hover:justify-between group-hover:space-x-6 px-4 pt-7 pb-3">
                  <h6 className="m-0 p-0 font-gilroy font-300 text-gray-400 tracking-wider text-8 group-hover:text-5">when</h6>
                  <svg className="w-8 h-8 group-hover:w-6 group-hover:h-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="https://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_757_29716)">
                      <path d="M12 5.9C12.7503 5.9 13.4435 6.30026 13.8187 6.95C14.1938 7.59974 14.1938 8.40026 13.8187 9.05C13.4435 9.69974 12.7503 10.1 12 10.1C10.8402 10.1 9.9 9.1598 9.9 8C9.9 6.8402 10.8402 5.9 12 5.9V5.9M12 14.9C14.97 14.9 18.1 16.36 18.1 17V18.1H5.9V17C5.9 16.36 9.03 14.9 12 14.9V14.9M12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4M12 13C9.33 13 4 14.34 4 17V20H20V17C20 14.34 14.67 13 12 13" fill="#81B29A" />
                    </g>
                    <defs>
                      <clipPath id="clip0_757_29716">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                </div>
                <div className="group-hover:block hidden px-4 py-3">
                  <h6 className="m-0 p-0 items-start text-left font-gilroy font-500 text-gray-700 tracking-wide leading-cozy text-5">When does the problem occur?</h6>
                </div>
                <div className="group-hover:block hidden px-4 py-3">
                  <p className="m-0 text-left font-gilroy font-300 tracking-wide leading-tight text-gray-600 text-5">The problem arises when these businesses need to perform inventory management and administrative tasks remotely, such as when they are away from the office or do not have access to desktop systems.</p>
                </div>
              </div>
              <div className="col-span-4 group h-full divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
                <div className="flex flex-col-reverse justify-end items-start  group-hover:flex-row  group-hover:justify-between group-hover:space-x-6 px-4 pt-7 pb-3">
                  <h6 className="m-0 p-0 font-gilroy font-300 text-gray-400 tracking-wider text-8 group-hover:text-5">why</h6>
                  <svg className="w-8 h-8 group-hover:w-6 group-hover:h-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="https://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_757_29716)">
                      <path d="M12 5.9C12.7503 5.9 13.4435 6.30026 13.8187 6.95C14.1938 7.59974 14.1938 8.40026 13.8187 9.05C13.4435 9.69974 12.7503 10.1 12 10.1C10.8402 10.1 9.9 9.1598 9.9 8C9.9 6.8402 10.8402 5.9 12 5.9V5.9M12 14.9C14.97 14.9 18.1 16.36 18.1 17V18.1H5.9V17C5.9 16.36 9.03 14.9 12 14.9V14.9M12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4M12 13C9.33 13 4 14.34 4 17V20H20V17C20 14.34 14.67 13 12 13" fill="#81B29A" />
                    </g>
                    <defs>
                      <clipPath id="clip0_757_29716">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                </div>
                <div className="group-hover:block hidden px-4 py-3">
                  <h6 className="m-0 p-0 items-start text-left font-gilroy font-500 text-gray-700 tracking-wide leading-cozy text-5">Why does this pain point matter to the user?</h6>
                </div>
                <div className="group-hover:block hidden px-4 py-3">
                  <p className="m-0 text-left font-gilroy font-300 tracking-wide leading-tight text-gray-600 text-5">Efficient inventory management is key to the success of small and medium-sized businesses. Poor mobile solutions limit their capability to manage inventory remotely, leading to issues in order management, data access, and business agility, thus affecting productivity and possibly revenue.</p>
                </div>
              </div>
              

             
            </div>
            {/* Goal */}
            <Goal
  statement="                    To successfully launch Fishbowl Go, a user-friendly iPad/tablet app, designed to bridge the gap in mobile inventory management for small to medium-sized businesses. Our aim was to simplify administrative tasks, making inventory management as efficient on tablets as it is on desktops. The goal was to enhance operational efficiency by at least 20% and improve user satisfaction, targeting a 15% increase in Fishbowl Inventory's client base within the first six months after launch."
  image={[
    "/images/fbgo-sticky1.png",
    "/images/fbgo-sticky2.png",
    "/images/fbgo-sticky3.png",
    "/images/fbgo-sticky4.png",
    "/images/fbgo-sticky5.png",
    "/images/fbgo-sticky6.png",
  ]}
/>
            
            {/* Understand */}
            <div className="bg-white pt-16 pb-12 px-32 grid grid-cols-8 grid-flow-row items-start gap-8">
              <div className="py-2 text-left col-start-1 col-span-4 items-start gap-2">
                <h5 className="h3 pb-8 font-600 tracking-wide">understanding the user</h5>
              </div>
              <div className='m-0 p-0 col-start-5 col-span-4 text-left font-gilroy font-300 text-6 leading-relaxed'>
                User research revealed that accountants and business owners primarily depend on traditional, often manual methods for inventory management, such as desktop software, spreadsheets, and paper records. This reliance leads to several pain points:
              </div>

            </div>
            
            <div className="bg-white h-70 py-12 px-32 grid grid-cols-8 grid-flow-row items-start gap-8">
              <div className="relative col-span-2 h-full rounded-lg bg-white shadow group">
                {/* Wrapper for overflow control */}
                <div className="relative overflow-hidden h-full rounded-lg">
                  {/* Expanding overlay */}
                  <div className="absolute aspect-square -top-22 left-1/2 -translate-x-1/2 rounded-full inset-0 bg-green scale-0 transition-transform duration-800 group-hover:scale-[4] z-0"></div>

                  {/* Content */}
                  <div className="relative z-10 px-4 pt-8 pb-3">
                    <h6 className="m-0 text-center font-gilroy font-500 text-gray-700 group-hover:text-white tracking-wide leading-cozy text-5">
                      Errors
                    </h6>
                  </div>
                  <div className="relative z-10 px-4 py-0">
                    <p className="m-0 text-center font-gilroy font-300 tracking-wide leading-tight text-gray-600 group-hover:text-white text-4.5">
                      Manual methods and desktop-bound software contribute to data inaccuracies and operational inefficiencies, especially in real-time inventory tracking.
                    </p>
                  </div>
                </div>

                {/* Circle (outside overflow) */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                  <div className="flex items-center justify-center w-10 h-10 bg-green rounded-full">
                    <h6 className="font-gilroy font-400 text-white text-3.5">1</h6>
                  </div>
                </div>
              </div>
              <div className="relative col-span-2 h-full rounded-lg bg-white shadow group">
                {/* Wrapper for overflow control */}
                <div className="relative overflow-hidden h-full rounded-lg">
                  {/* Expanding overlay */}
                  <div className="absolute aspect-square -top-22 left-1/2 -translate-x-1/2 rounded-full inset-0 bg-green scale-0 transition-transform duration-800 group-hover:scale-[4] z-0"></div>

                  {/* Content */}
                  <div className="relative z-10 px-4 pt-8 pb-3">
                    <h6 className="m-0 text-center font-gilroy font-500 text-gray-700 group-hover:text-white tracking-wide leading-cozy text-5">
                    Limited Access
                    </h6>
                  </div>
                  <div className="relative z-10 px-4 py-0">
                    <p className="m-0 text-center font-gilroy font-300 tracking-wide leading-tight text-gray-600 group-hover:text-white text-4.5">
                    The inability to access and manage inventory data on the move hinders effective remote work, causing delays and decision-making challenges.
                    </p>
                  </div>
                </div>

                {/* Circle (outside overflow) */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                  <div className="flex items-center justify-center w-10 h-10 bg-green rounded-full">
                    <h6 className="font-gilroy font-400 text-white text-3.5">2</h6>
                  </div>
                </div>
              </div>
              <div className="relative col-span-2 h-full rounded-lg bg-white shadow group">
                {/* Wrapper for overflow control */}
                <div className="relative overflow-hidden h-full rounded-lg">
                  {/* Expanding overlay */}
                  <div className="absolute aspect-square -top-22 left-1/2 -translate-x-1/2 rounded-full inset-0 bg-green scale-0 transition-transform duration-800 group-hover:scale-[4] z-0"></div>

                  {/* Content */}
                  <div className="relative z-10 px-4 pt-8 pb-3">
                    <h6 className="m-0 text-center font-gilroy font-500 text-gray-700 group-hover:text-white tracking-wide leading-cozy text-5">
                    Inaccuracy
                    </h6>
                  </div>
                  <div className="relative z-10 px-4 py-0">
                    <p className="m-0 text-center font-gilroy font-300 tracking-wide leading-tight text-gray-600 group-hover:text-white text-4.5">
                    Managing inventory across various locations is cumbersome with traditional methods, leading to issues in synchronization and record accuracy.
                    </p>
                  </div>
                </div>

                {/* Circle (outside overflow) */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                  <div className="flex items-center justify-center w-10 h-10 bg-green rounded-full">
                    <h6 className="font-gilroy font-400 text-white text-3.5">3</h6>
                  </div>
                </div>
              </div>
              <div className="relative col-span-2 h-full rounded-lg bg-white shadow group">
                {/* Wrapper for overflow control */}
                <div className="relative overflow-hidden h-full rounded-lg">
                  {/* Expanding overlay */}
                  <div className="absolute aspect-square -top-22 left-1/2 -translate-x-1/2 rounded-full inset-0 bg-green scale-0 transition-transform duration-800 group-hover:scale-[4] z-0"></div>

                  {/* Content */}
                  <div className="relative z-10 px-4 pt-8 pb-3">
                    <h6 className="m-0 text-center font-gilroy font-500 text-gray-700 group-hover:text-white tracking-wide leading-cozy text-5">
                    Simplicity
                    </h6>
                  </div>
                  <div className="relative z-10 px-4 py-0">
                    <p className="m-0 text-center font-gilroy font-300 tracking-wide leading-tight text-gray-600 group-hover:text-white text-4.5">
                    There's a significant demand for a user-friendly, mobile platform that integrates with existing systems, allowing efficient and flexible management of inventory tasks.
                    </p>
                  </div>
                </div>

                {/* Circle (outside overflow) */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                  <div className="flex items-center justify-center w-10 h-10 bg-green rounded-full">
                    <h6 className="font-gilroy font-400 text-white text-3.5">4</h6>
                  </div>
                </div>
              </div>
              
              
              
            </div>
            {/* Meet Users */}
            <div className="bg-white h-70 pt-12 pb-92 px-32 grid grid-cols-8 grid-flow-row items-start gap-8">
              <div className="col-start-1 col-span-8 py-2 text-left">
                <h6 className="m-0 font-gilroy font-300 text-8 text-grey-800 tracking-wide">meet these users</h6>
              </div>
              <div className="flex gap-8">

                {cards.map((card, index) => (
                  <Card
                    key={index}
                    image={card.image}
                    title={card.title}
                    job={card.job}
                    age={card.age}
                    quote={card.quote}
                    bio={card.bio}
                    frustrations={card.frustrations}
                    motivations={card.motivations}
                  />
                ))}
              </div>

            </div>
            {/* User Journey */}
            <div className="bg-white  pt-12 pb-16 px-32 grid grid-cols-8 grid-flow-row items-start gap-8">
              <div className="col-start-1 col-span-8 py-2 text-left">
                <h6 className="m-0 font-gilroy font-300 text-8 text-grey-800 tracking-wide">user journey map</h6>
              </div>
              <div className="col-start-1 col-span-8 border-solid border border-grey-200 overflow-hidden rounded-2 p-6">
                <div className="flex flex-row justify-content justify-between">
                  <div className="flex flex-col gap-2">
                    <h1 className="m-0 font-gilroy font-semibold text-5 text-left text-grey-700">Jennifer G.</h1>
                    <p className="m-0 font-gilroy font-300 text-4 text-left text-grey-500">
                      Optimize inventory management process.
                    </p>
                  </div>
                  <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <button
                      type="button"
                      className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Add user
                    </button>
                  </div>
                </div>
                <div className="mt-8 flow-root">
                  <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                      <table className="min-w-full divide-y divide-gray-300">
                        <thead>
                          <tr>
                            <th scope="col" className="">

                            </th>
                            <th scope="col" className="px-2">
                              <div className="py-2 text-center font-gilroy text-4 font-400 text-white bg-green rounded-md">Discover tool</div>

                            </th>
                            <th scope="col" className="px-2">
                              <div className="py-2 text-center font-gilroy text-4 font-400 text-white bg-green rounded-md">Create</div>

                            </th>
                            <th scope="col" className="px-2">
                              <div className="py-2 text-center font-gilroy text-4 font-400 text-white bg-green rounded-md">Manage</div>

                            </th>
                            <th scope="col" className="px-2">
                              <div className="py-2 text-center font-gilroy text-4 font-400 text-white bg-green rounded-md">Track</div>
                            </th>
                            <th scope="col" className="px-2">
                              <div className="py-2 text-center font-gilroy text-4 font-400 text-white bg-green rounded-md">Feedback</div>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">

                          <tr>
                            <td className="whitespace-nowrap text-left py-3 px0 font-gilroy font-400 text-4 text-grey-600">
                              Task
                            </td>
                            <td className="whitespace-nowrap text-left py-3 px-2 font-gilroy font-300 text-4 text-grey-600">
                              Log into inventory system
                            </td>
                            <td className="whitespace-nowrap text-left py-3 px-2 font-gilroy font-300 text-4 text-grey-600">
                              Check inventory levels
                            </td>
                            <td className="whitespace-nowrap text-left py-3 px-2 font-gilroy font-300 text-4 text-grey-600">
                              Update orders and customer info
                            </td>
                            <td className="whitespace-nowrap text-left py-3 px-2 font-gilroy font-300 text-4 text-grey-600">
                              Track orders and review reports
                            </td>
                            <td className="whitespace-nowrap text-left py-3 px-2 font-gilroy font-300 text-4 text-grey-600">
                              Check app updates and training videos
                            </td>
                          </tr>
                          <tr>
                            <td className="whitespace-nowrap text-left py-3 px0 font-gilroy font-400 text-4 text-grey-600">
                              Feeling
                            </td>
                            <td className="whitespace-nowrap text-left py-3 px-2 font-gilroy font-300 text-4 text-grey-600">
                              Hopeful
                            </td>
                            <td className="whitespace-nowrap text-left py-3 px-2 font-gilroy font-300 text-4 text-grey-600">
                              Overwhelmed
                            </td>
                            <td className="whitespace-nowrap text-left py-3 px-2 font-gilroy font-300 text-4 text-grey-600">
                              Frustrated
                            </td>
                            <td className="whitespace-nowrap text-left py-3 px-2 font-gilroy font-300 text-4 text-grey-600">
                              Anticipation
                            </td>
                            <td className="whitespace-nowrap text-left py-3 px-2 font-gilroy font-300 text-4 text-grey-600">
                              Invested
                            </td>
                          </tr>
                          <tr>
                            <td className="whitespace-nowrap text-left py-3 pr-8 font-gilroy font-400 text-4 text-grey-600">
                              Improvement Opportunity
                            </td>
                            <td className="whitespace-nowrap text-left py-3 px-2 font-gilroy font-300 text-4 text-grey-600">
                              Simplify login process and training
                            </td>
                            <td className="whitespace-nowrap text-left py-3 px-2 font-gilroy font-300 text-4 text-grey-600">
                              Improve dashboard clarity
                            </td>
                            <td className="whitespace-nowrap text-left py-3 px-2 font-gilroy font-300 text-4 text-grey-600">
                              Streamline the integration process
                            </td>
                            <td className="whitespace-nowrap text-left py-3 px-2 font-gilroy font-300 text-4 text-grey-600">
                              Continuous improvement based on user feedback, focusing on usability enhancements
                            </td>
                            <td className="whitespace-nowrap text-left py-3 px-2 font-gilroy font-300 text-4 text-grey-600">
                              Develop a structured system for collecting and prioritizing user suggestions
                            </td>
                          </tr>

                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>



            </div>
            {/* Insights */}
            <div className="bg-white py-16 px-32 flex flex-col items-start gap-8">
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="py-2 text-left">
                  <h5 className="h3 pb-8 font-600 tracking-wide">insights</h5>
                </div>
                <div className="grid grid-cols-6 grid-flow-row auto-cols-min gap-4 items-start text-left w-full">
                  <div className='m-0 py-0 pl-0 pr-16 col-start-1 col-span-4 row-start-1 row-span-4 font-gilroy font-300 text-6 leading-relaxed'>
                    During the Fishbowl Go project, we identified a crucial user experience issue: several actions within the app were ambiguous regarding their completion status. Users frequently expressed uncertainty about whether their actions, such as inventory updates or order processing, were successfully executed. To enhance clarity and user confidence, we propose integrating more explicit feedback mechanisms into the app's workflow. This approach includes the implementation of toast messages and clear visual indicators to affirm that an action has been successfully completed. These additions are aimed at reducing user frustration and improving the overall efficiency and user satisfaction with the app.
                  </div>
                  <div className='col-start-5 col-span-2 row-start-1 row-span-1'>
                    <div className='grid grid-rows-subgrid row-span-2'>
                      <div className="m-0 font-gilroy font-300 text-6 text-grey-800 tracking-wide">implement toast messages</div>
                      <div className='m-0 font-gilroy font-300 text-6 leading-relaxed'>
                        Introduce toast notifications for immediate feedback after an action is completed, providing users with clear confirmation and peace of mind.
                      </div>
                    </div>
                  </div>

                  <div className='col-start-5 col-span-2 row-start-2'>
                    <div className='grid grid-rows-subgrid row-span-2'>
                      <div className="m-0 font-gilroy font-300 text-6 text-grey-800 tracking-wide">visual confirmation indicators</div>
                      <div className='m-0 font-gilroy font-300 text-6 leading-relaxed'>
                        Develop visual cues, such as checkmarks or color changes, to indicate successful completion of tasks like inventory updates or data entry.                      </div>
                    </div>
                  </div>
                  <div className='col-start-5 col-span-2 row-start-3'>
                    <div className='grid grid-rows-subgrid row-span-2'>
                      <div className="m-0 font-gilroy font-300 text-6 text-grey-800 tracking-wide">enhanced feedback loop</div>
                      <div className='m-0 font-gilroy font-300 text-6 leading-relaxed'>
                        Strengthen the app’s feedback loop by providing distinct auditory or haptic feedback for completed actions, enhancing the user experience for those relying on different sensory inputs.                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white pt-16 pb-12 px-32 grid grid-cols-8 grid-flow-row items-start gap-8">
              <div className="py-2 text-left col-start-1 col-span-4 items-start gap-2">
                <h5 className="h3 pb-8 font-600 tracking-wide">ideation</h5>
              </div>
              <div className='m-0 p-0 font-gilroy text-grey-600 col-start-5 col-span-4 text-left font-300 text-6 leading-relaxed'>
                Through rapid, paper-based sketching, we honed in on simplifying core tasks in the Fishbowl Go app. This exercise was key in integrating effective design patterns and streamlining user navigation between screens, striking a balance between simplicity and functionality.
              </div>

            </div>

            {/* Sketches */}
            <div className="bg-white pt-12 pb-16 px-32 grid grid-cols-8 grid-flow-row items-start">
              <img
                alt=""
                src="/portfolio/images/fbgo-sketches-long.jpg"
                className="col-start-1 col-span-8 w-full"
              />



            </div>
            <div className="bg-white  pt-12 pb-16 px-32 grid grid-cols-8 grid-flow-row items-start gap-8">
              <div className="col-start-1 col-span-8 py-2 text-left">
                <h6 className="m-0 font-gilroy font-300 text-8 text-grey-800 tracking-wide">site map</h6>
              </div>
              <div className="col-start-1 col-span-8 border-solid border border-grey-200 font-gilroy bg-white overflow-hidden rounded-2 p-6">


                <ul className="grid grid-cols-10 grid-flow-row m-0 p-0 justify-left gap-4">

                  <li className="relative list-none col-start-1 col-span-10 md:col-span-5 lg:col-span-2 items-center w-full">

                    <span
                      className="relative flex items-center bg-green rounded-md justify-center text-center text-white font-medium text-3.5 border px-3 py-2 max-w-300"
                    >
                      Home

                      <span
                        className="absolute w-px h-8 bg-black top-full left-1/2 transform -translate-x-1/2"
                      ></span>

                      <span
                        className="absolute h-px w-full bg-black top-[calc(100%+2.25em)]"
                      ></span>
                    </span>

                    <ul className="p-0 w-full">
                      <li className="relative list-none bg-grey-600 overflow-hidden rounded-md border-0 my-4">
                        {/* Checkbox as the peer */}
                        <input id="overview" name="tabs" type="checkbox" className="hidden peer" />

                        {/* Label to toggle the checkbox */}
                        <label
                          htmlFor="overview"
                          className="relative flex justify-between items-center cursor-pointer"
                        >
                          <span className="font-medium text-white text-3.5 px-3 py-2">
                            Overview
                          </span>
                        </label>

                        {/* Rotating SVG */}
                        <span
                          className="absolute right-2 flex items-center justify-center transform transition-transform origin-center peer-checked:rotate-180"
                          style={{ top: "4px" }}
                        >
                          <svg
                            xmlns="https://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#e8eaed"
                          >
                            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                          </svg>
                        </span>

                        {/* Expandable Content */}
                        <div
                          className="overflow-hidden bg-white border-0 peer-checked:border-1 border-solid border-grey-200 transition-all max-h-0 peer-checked:max-h-[200px]"
                        >
                          <div className="p-4 text-sm">
                            As a user, I want to view an overview of my inventory stats (e.g., stock levels, orders pending) so that I can quickly assess my inventory status.
                            -important updates from the company or product in a banner
                            -quick actions
                          </div>
                        </div>
                        <span
                          className="absolute w-px h-8 bg-black top-full left-1/2 transform -translate-x-1/2"
                        ></span>
                      </li>
                      <li className="relative list-none bg-grey-600 overflow-hidden rounded-md border-0 my-4">
                        {/* Checkbox as the peer */}
                        <input id="stats" name="tabs" type="checkbox" className="hidden peer" />

                        {/* Label to toggle the checkbox */}
                        <label
                          htmlFor="stats"
                          className="relative flex justify-between items-center cursor-pointer"
                        >
                          <span className="font-medium text-white text-3.5 px-3 py-2">
                            Notifications/Stats
                          </span>
                        </label>

                        {/* Rotating SVG */}
                        <span
                          className="absolute right-2 flex items-center justify-center transform transition-transform origin-center peer-checked:rotate-180"
                          style={{ top: "4px" }}
                        >
                          <svg
                            xmlns="https://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#e8eaed"
                          >
                            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                          </svg>
                        </span>

                        {/* Expandable Content */}
                        <div
                          className="overflow-hidden bg-white border-0 peer-checked:border-1 border-solid border-grey-200 transition-all max-h-0 peer-checked:max-h-[200px]"
                        >
                          <div className="p-4 text-sm">
                            As a user, I want to be notified of critical issues (e.g., low stock, overdue tickets) through prominent alerts, so I can address them immediately.
                            -updates to forms/modules from other users
                          </div>
                        </div>
                        <span
                          className="absolute w-px h-8 bg-black top-full left-1/2 transform -translate-x-1/2"
                        ></span>
                      </li>
                      <li className="relative list-none bg-grey-600 overflow-hidden rounded-md border-0 my-4">
                        {/* Checkbox as the peer */}
                        <input id="calendar" name="tabs" type="checkbox" className="hidden peer" />

                        {/* Label to toggle the checkbox */}
                        <label
                          htmlFor="calendar"
                          className="relative flex justify-between items-center cursor-pointer"
                        >
                          <span className="font-medium text-white text-3.5 px-3 py-2">
                            Calendar
                          </span>
                        </label>

                        {/* Rotating SVG */}
                        <span
                          className="absolute right-2 flex items-center justify-center transform transition-transform origin-center peer-checked:rotate-180"
                          style={{ top: "4px" }}
                        >
                          <svg
                            xmlns="https://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#e8eaed"
                          >
                            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                          </svg>
                        </span>

                        {/* Expandable Content */}
                        <div
                          className="overflow-hidden bg-white border-0 peer-checked:border-1 border-solid border-grey-200 transition-all max-h-0 peer-checked:max-h-[200px]"
                        >
                          <div className="p-4 text-sm">
                            As a user, I want a clear snapshot of upcoming tasks (e.g., inventory checks, scheduled orders) to stay on top of my responsibilities.
                            Calendar view to see progress of tickets, forms, etc. Out of scope for V1. Future version.
                          </div>
                        </div>
                        <span
                          className="absolute w-px h-8 bg-black top-full left-1/2 transform -translate-x-1/2"
                        ></span>
                      </li>

                    </ul>
                  </li>
                  <li className="relative list-none col-start-1 col-span-10 md:col-span-5 lg:col-span-2 items-center w-full">

                    <span
                      className="relative flex items-center bg-green rounded-md justify-center text-center text-white font-medium text-3.5 border px-3 py-2 max-w-300"
                    >
                      Inventory

                      <span
                        className="absolute w-px h-8 bg-black top-full left-1/2 transform -translate-x-1/2"
                      ></span>

                      <span
                        className="absolute h-px w-full bg-black top-[calc(100%+2.25em)]"
                      ></span>
                    </span>

                    <ul className="p-0 w-full">
                      <li className="relative list-none bg-grey-600 overflow-hidden rounded-md border-0 my-4">
                        {/* Checkbox as the peer */}
                        <input id="parts" name="tabs" type="checkbox" className="hidden peer" />

                        {/* Label to toggle the checkbox */}
                        <label
                          htmlFor="parts"
                          className="relative flex justify-between items-center cursor-pointer"
                        >
                          <span className="font-medium text-white text-3.5 px-3 py-2">
                            Parts
                          </span>
                        </label>

                        {/* Rotating SVG */}
                        <span
                          className="absolute right-2 flex items-center justify-center transform transition-transform origin-center peer-checked:rotate-180"
                          style={{ top: "4px" }}
                        >
                          <svg
                            xmlns="https://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#e8eaed"
                          >
                            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                          </svg>
                        </span>

                        {/* Expandable Content */}
                        <div
                          className="overflow-hidden bg-white border-0 peer-checked:border-1 border-solid border-grey-200 transition-all max-h-0 peer-checked:max-h-[200px]"
                        >
                          <div className="p-4 text-sm">
                            As a user, I want to view a searchable and filterable list of all parts of inventory items.
                            Individual parts will be listed. Parts can be edited, added, and combined into a product that can then be added into the Inventory module.
                          </div>
                        </div>
                        <span
                          className="absolute w-px h-8 bg-black top-full left-1/2 transform -translate-x-1/2"
                        ></span>
                      </li>
                      <li className="relative list-none bg-grey-600 overflow-hidden rounded-md border-0 my-4">
                        {/* Checkbox as the peer */}
                        <input id="inventory" name="tabs" type="checkbox" className="hidden peer" />

                        {/* Label to toggle the checkbox */}
                        <label
                          htmlFor="inventory"
                          className="relative flex justify-between items-center cursor-pointer"
                        >
                          <span className="font-medium text-white text-3.5 px-3 py-2">
                            Inventory
                          </span>
                        </label>

                        {/* Rotating SVG */}
                        <span
                          className="absolute right-2 flex items-center justify-center transform transition-transform origin-center peer-checked:rotate-180"
                          style={{ top: "4px" }}
                        >
                          <svg
                            xmlns="https://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#e8eaed"
                          >
                            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                          </svg>
                        </span>

                        {/* Expandable Content */}
                        <div
                          className="overflow-hidden bg-white border-0 peer-checked:border-1 border-solid border-grey-200 transition-all max-h-0 peer-checked:max-h-[200px]"
                        >
                          <div className="p-4 text-sm">
                            As a user, I want to view a searchable and filterable list of all inventory items, so I can find specific items quickly.
                            View, edit, and add inventory. General info will be listed, tracking, BOM, default locations, vendors included in the details. Inventory event actions include: add, scrap, cycle, move.
                          </div>
                        </div>
                        <span
                          className="absolute w-px h-8 bg-black top-full left-1/2 transform -translate-x-1/2"
                        ></span>
                      </li>


                    </ul>
                  </li>
                  <li className="relative list-none col-start-1 col-span-10 md:col-span-5 lg:col-span-2 items-center w-full">

                    <span
                      className="relative flex items-center bg-green rounded-md justify-center text-center text-white font-medium text-3.5 border px-3 py-2 max-w-300"
                    >
                      Manufacturing

                      <span
                        className="absolute w-px h-8 bg-black top-full left-1/2 transform -translate-x-1/2"
                      ></span>

                      <span
                        className="absolute h-px w-full bg-black top-[calc(100%+2.25em)]"
                      ></span>
                    </span>

                    <ul className="p-0 w-full">
                      <li className="relative list-none bg-grey-600 overflow-hidden rounded-md border-0 my-4">
                        {/* Checkbox as the peer */}
                        <input id="mo" name="tabs" type="checkbox" className="hidden peer" />

                        {/* Label to toggle the checkbox */}
                        <label
                          htmlFor="mo"
                          className="relative flex justify-between items-center cursor-pointer"
                        >
                          <span className="font-medium text-white text-3.5 px-3 py-2">
                            Manufacture Order
                          </span>
                        </label>

                        {/* Rotating SVG */}
                        <span
                          className="absolute right-2 flex items-center justify-center transform transition-transform origin-center peer-checked:rotate-180"
                          style={{ top: "4px" }}
                        >
                          <svg
                            xmlns="https://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#e8eaed"
                          >
                            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                          </svg>
                        </span>

                        {/* Expandable Content */}
                        <div
                          className="overflow-hidden bg-white border-0 peer-checked:border-1 border-solid border-grey-200 transition-all max-h-0 peer-checked:max-h-[200px]"
                        >
                          <div className="p-4 text-sm">
                            As a user, I want to view and create new manufacture orders, so I can plan production for specific products.
                            As a user, I want to see the materials required for each manufacture order, so I can ensure I have the necessary resources.
                            Actions in this step include viewing, editing, and creating new Manufacture Orders. Other actions include: MO to PO, Quick Build/Fulfill, editable general info: number, date scheduled, location group, class.
                          </div>
                        </div>
                        <span
                          className="absolute w-px h-8 bg-black top-full left-1/2 transform -translate-x-1/2"
                        ></span>
                      </li>
                      <li className="relative list-none bg-grey-600 overflow-hidden rounded-md border-0 my-4">
                        {/* Checkbox as the peer */}
                        <input id="wo" name="tabs" type="checkbox" className="hidden peer" />

                        {/* Label to toggle the checkbox */}
                        <label
                          htmlFor="wo"
                          className="relative flex justify-between items-center cursor-pointer"
                        >
                          <span className="font-medium text-white text-3.5 px-3 py-2">
                            Work Order
                          </span>
                        </label>

                        {/* Rotating SVG */}
                        <span
                          className="absolute right-2 flex items-center justify-center transform transition-transform origin-center peer-checked:rotate-180"
                          style={{ top: "4px" }}
                        >
                          <svg
                            xmlns="https://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#e8eaed"
                          >
                            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                          </svg>
                        </span>

                        {/* Expandable Content */}
                        <div
                          className="overflow-hidden bg-white border-0 peer-checked:border-1 border-solid border-grey-200 transition-all max-h-0 peer-checked:max-h-[200px]"
                        >
                          <div className="p-4 text-sm">
                            As a user, I want to create and assign work orders to team members, so tasks are clearly distributed.
                            As a user, I want to track the progress of work orders, so I can ensure tasks are completed on time.
                            Actions include viewing, editing, creating new Work Orders. Others include: issue or unissue orders, WO to Pick, WO to MO, Quick Build/Fulfill, editable general info like scheduled start/finish, class, priority, category, location, customer/job, view scheduling, details, assigned users, and notes of each work order item, and view or edit instructions.
                          </div>
                        </div>
                        <span
                          className="absolute w-px h-8 bg-black top-full left-1/2 transform -translate-x-1/2"
                        ></span>
                      </li>
                      <li className="relative list-none bg-grey-600 overflow-hidden rounded-md border-0 my-4">
                        {/* Checkbox as the peer */}
                        <input id="bom" name="tabs" type="checkbox" className="hidden peer" />

                        {/* Label to toggle the checkbox */}
                        <label
                          htmlFor="bom"
                          className="relative flex justify-between items-center cursor-pointer"
                        >
                          <span className="font-medium text-white text-3.5 px-3 py-2">
                            Bill of Materials
                          </span>
                        </label>

                        {/* Rotating SVG */}
                        <span
                          className="absolute right-2 flex items-center justify-center transform transition-transform origin-center peer-checked:rotate-180"
                          style={{ top: "4px" }}
                        >
                          <svg
                            xmlns="https://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#e8eaed"
                          >
                            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                          </svg>
                        </span>

                        {/* Expandable Content */}
                        <div
                          className="overflow-hidden bg-white border-0 peer-checked:border-1 border-solid border-grey-200 transition-all max-h-0 peer-checked:max-h-[200px]"
                        >
                          <div className="p-4 text-sm">
                            As a user, I want to create and manage BoM for each product, so I can define all the materials and quantities required for production.
                            Actions include: viewing, editing, creating a BoM. Others include: viewing/editing general info, items, instructions, default locations, and quick build.
                          </div>
                        </div>
                        <span
                          className="absolute w-px h-8 bg-black top-full left-1/2 transform -translate-x-1/2"
                        ></span>
                      </li>

                    </ul>
                  </li>
                  <li className="relative list-none col-start-1 col-span-10 md:col-span-5 lg:col-span-2 items-center w-full">

                    <span
                      className="relative flex items-center bg-green rounded-md justify-center text-center text-white font-medium text-3.5 border px-3 py-2 max-w-300"
                    >
                      Sales

                      <span
                        className="absolute w-px h-8 bg-black top-full left-1/2 transform -translate-x-1/2"
                      ></span>

                      <span
                        className="absolute h-px w-full bg-black top-[calc(100%+2.25em)]"
                      ></span>
                    </span>

                    <ul className="p-0 w-full">
                      <li className="relative list-none bg-grey-600 overflow-hidden rounded-md border-0 my-4">
                        {/* Checkbox as the peer */}
                        <input id="so" name="tabs" type="checkbox" className="hidden peer" />

                        {/* Label to toggle the checkbox */}
                        <label
                          htmlFor="so"
                          className="relative flex justify-between items-center cursor-pointer"
                        >
                          <span className="font-medium text-white text-3.5 px-3 py-2">
                            Sales Order
                          </span>
                        </label>

                        {/* Rotating SVG */}
                        <span
                          className="absolute right-2 flex items-center justify-center transform transition-transform origin-center peer-checked:rotate-180"
                          style={{ top: "4px" }}
                        >
                          <svg
                            xmlns="https://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#e8eaed"
                          >
                            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                          </svg>
                        </span>

                        {/* Expandable Content */}
                        <div
                          className="overflow-hidden bg-white border-0 peer-checked:border-1 border-solid border-grey-200 transition-all max-h-0 peer-checked:max-h-[200px]"
                        >
                          <div className="p-4 text-sm">
                            As a user, I want to create sales orders for customers, so I can track and fulfill their requests.
                            Actions include view/edit/create sales order, change status of SO, change date scheduled, change customer or shipping address, change carrier/service, view totals, view tax info, view SO items, add/delete items, add item by type.
                          </div>
                        </div>
                        <span
                          className="absolute w-px h-8 bg-black top-full left-1/2 transform -translate-x-1/2"
                        ></span>
                      </li>
                      <li className="relative list-none bg-grey-600 overflow-hidden rounded-md border-0 my-4">
                        {/* Checkbox as the peer */}
                        <input id="customers" name="tabs" type="checkbox" className="hidden peer" />

                        {/* Label to toggle the checkbox */}
                        <label
                          htmlFor="customers"
                          className="relative flex justify-between items-center cursor-pointer"
                        >
                          <span className="font-medium text-white text-3.5 px-3 py-2">
                            Customers
                          </span>
                        </label>

                        {/* Rotating SVG */}
                        <span
                          className="absolute right-2 flex items-center justify-center transform transition-transform origin-center peer-checked:rotate-180"
                          style={{ top: "4px" }}
                        >
                          <svg
                            xmlns="https://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#e8eaed"
                          >
                            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                          </svg>
                        </span>

                        {/* Expandable Content */}
                        <div
                          className="overflow-hidden bg-white border-0 peer-checked:border-1 border-solid border-grey-200 transition-all max-h-0 peer-checked:max-h-[200px]"
                        >
                          <div className="p-4 text-sm">
                            As a user, I want to manage customer profiles, including contact details, preferences, and order history, so I can personalize service and build relationships.
                            -View list of customers, add/edit customers, search customers by status, name, account number, location, contact, salesrep
                          </div>
                        </div>
                        <span
                          className="absolute w-px h-8 bg-black top-full left-1/2 transform -translate-x-1/2"
                        ></span>
                      </li>
                      <li className="relative list-none bg-grey-600 overflow-hidden rounded-md border-0 my-4">
                        {/* Checkbox as the peer */}
                        <input id="pick" name="tabs" type="checkbox" className="hidden peer" />

                        {/* Label to toggle the checkbox */}
                        <label
                          htmlFor="pick"
                          className="relative flex justify-between items-center cursor-pointer"
                        >
                          <span className="font-medium text-white text-3.5 px-3 py-2">
                            Picking
                          </span>
                        </label>

                        {/* Rotating SVG */}
                        <span
                          className="absolute right-2 flex items-center justify-center transform transition-transform origin-center peer-checked:rotate-180"
                          style={{ top: "4px" }}
                        >
                          <svg
                            xmlns="https://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#e8eaed"
                          >
                            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                          </svg>
                        </span>

                        {/* Expandable Content */}
                        <div
                          className="overflow-hidden bg-white border-0 peer-checked:border-1 border-solid border-grey-200 transition-all max-h-0 peer-checked:max-h-[200px]"
                        >
                          <div className="p-4 text-sm">
                            As a user, I want to generate a picking list for each sales order, so I can gather the correct items efficiently.
                            -Quick add product to item list
                          </div>
                        </div>
                        <span
                          className="absolute w-px h-8 bg-black top-full left-1/2 transform -translate-x-1/2"
                        ></span>
                      </li>
                      <li className="relative list-none bg-grey-600 overflow-hidden rounded-md border-0 my-4">
                        {/* Checkbox as the peer */}
                        <input id="pack" name="tabs" type="checkbox" className="hidden peer" />

                        {/* Label to toggle the checkbox */}
                        <label
                          htmlFor="pack"
                          className="relative flex justify-between items-center cursor-pointer"
                        >
                          <span className="font-medium text-white text-3.5 px-3 py-2">
                            Packing
                          </span>
                        </label>

                        {/* Rotating SVG */}
                        <span
                          className="absolute right-2 flex items-center justify-center transform transition-transform origin-center peer-checked:rotate-180"
                          style={{ top: "4px" }}
                        >
                          <svg
                            xmlns="https://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#e8eaed"
                          >
                            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                          </svg>
                        </span>

                        {/* Expandable Content */}
                        <div
                          className="overflow-hidden bg-white border-0 peer-checked:border-1 border-solid border-grey-200 transition-all max-h-0 peer-checked:max-h-[200px]"
                        >
                          <div className="p-4 text-sm">
                            As a user, I want to generate packing slips for each sales order, so I can confirm all items are included.

                          </div>
                        </div>
                        <span
                          className="absolute w-px h-8 bg-black top-full left-1/2 transform -translate-x-1/2"
                        ></span>
                      </li>
                      <li className="relative list-none bg-grey-600 overflow-hidden rounded-md border-0 my-4">
                        {/* Checkbox as the peer */}
                        <input id="ship" name="tabs" type="checkbox" className="hidden peer" />

                        {/* Label to toggle the checkbox */}
                        <label
                          htmlFor="ship"
                          className="relative flex justify-between items-center cursor-pointer"
                        >
                          <span className="font-medium text-white text-3.5 px-3 py-2">
                            Shipping
                          </span>
                        </label>

                        {/* Rotating SVG */}
                        <span
                          className="absolute right-2 flex items-center justify-center transform transition-transform origin-center peer-checked:rotate-180"
                          style={{ top: "4px" }}
                        >
                          <svg
                            xmlns="https://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#e8eaed"
                          >
                            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                          </svg>
                        </span>

                        {/* Expandable Content */}
                        <div
                          className="overflow-hidden bg-white border-0 peer-checked:border-1 border-solid border-grey-200 transition-all max-h-0 peer-checked:max-h-[200px]"
                        >
                          <div className="p-4 text-sm">
                            As a user, I want to generate shipping labels directly from the system, so I can streamline the logistics process.
                            -Edit general info (name, status, address, date created/last changed, user ID, contact info), start, finish, void, commit, group orders
                          </div>
                        </div>
                        <span
                          className="absolute w-px h-8 bg-black top-full left-1/2 transform -translate-x-1/2"
                        ></span>
                      </li>
                      <li className="relative list-none bg-grey-600 overflow-hidden rounded-md border-0 my-4">
                        {/* Checkbox as the peer */}
                        <input id="deliver" name="tabs" type="checkbox" className="hidden peer" />

                        {/* Label to toggle the checkbox */}
                        <label
                          htmlFor="deliver"
                          className="relative flex justify-between items-center cursor-pointer"
                        >
                          <span className="font-medium text-white text-3.5 px-3 py-2">
                            Delivery
                          </span>
                        </label>

                        {/* Rotating SVG */}
                        <span
                          className="absolute right-2 flex items-center justify-center transform transition-transform origin-center peer-checked:rotate-180"
                          style={{ top: "4px" }}
                        >
                          <svg
                            xmlns="https://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#e8eaed"
                          >
                            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                          </svg>
                        </span>

                        {/* Expandable Content */}
                        <div
                          className="overflow-hidden bg-white border-0 peer-checked:border-1 border-solid border-grey-200 transition-all max-h-0 peer-checked:max-h-[200px]"
                        >
                          <div className="p-4 text-sm">
                            As a user, I want to confirm delivery status (e.g., delivered, failed) so I can complete the sales process.
                          </div>
                        </div>
                        <span
                          className="absolute w-px h-8 bg-black top-full left-1/2 transform -translate-x-1/2"
                        ></span>
                      </li>

                    </ul>
                  </li>
                  <li className="relative list-none col-start-1 col-span-10 md:col-span-5 lg:col-span-2 items-center w-full">

                    <span
                      className="relative flex items-center bg-green rounded-md justify-center text-center text-white font-medium text-3.5 border px-3 py-2 max-w-300"
                    >
                      Purchasing

                      <span
                        className="absolute w-px h-8 bg-black top-full left-1/2 transform -translate-x-1/2"
                      ></span>

                      <span
                        className="absolute h-px w-full bg-black top-[calc(100%+2.25em)]"
                      ></span>
                    </span>

                    <ul className="p-0 w-full">
                      <li className="relative list-none bg-grey-600 overflow-hidden rounded-md border-0 my-4">
                        {/* Checkbox as the peer */}
                        <input id="po" name="tabs" type="checkbox" className="hidden peer" />

                        {/* Label to toggle the checkbox */}
                        <label
                          htmlFor="po"
                          className="relative flex justify-between items-center cursor-pointer"
                        >
                          <span className="font-medium text-white text-3.5 px-3 py-2">
                            Purchase Order
                          </span>
                        </label>

                        {/* Rotating SVG */}
                        <span
                          className="absolute right-2 flex items-center justify-center transform transition-transform origin-center peer-checked:rotate-180"
                          style={{ top: "4px" }}
                        >
                          <svg
                            xmlns="https://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#e8eaed"
                          >
                            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                          </svg>
                        </span>

                        {/* Expandable Content */}
                        <div
                          className="overflow-hidden bg-white border-0 peer-checked:border-1 border-solid border-grey-200 transition-all max-h-0 peer-checked:max-h-[200px]"
                        >
                          <div className="p-4 text-sm">
                            As a user, I want to create and manage purchase orders, so I can efficiently procure the materials or products I need.
                            -Add new purchase order, view/edit PO, change date scheduled, change customer or shipping address, change carrier/service
                          </div>
                        </div>
                        <span
                          className="absolute w-px h-8 bg-black top-full left-1/2 transform -translate-x-1/2"
                        ></span>
                      </li>
                      <li className="relative list-none bg-grey-600 overflow-hidden rounded-md border-0 my-4">
                        {/* Checkbox as the peer */}
                        <input id="vendor" name="tabs" type="checkbox" className="hidden peer" />

                        {/* Label to toggle the checkbox */}
                        <label
                          htmlFor="vendor"
                          className="relative flex justify-between items-center cursor-pointer"
                        >
                          <span className="font-medium text-white text-3.5 px-3 py-2">
                            Vendor
                          </span>
                        </label>

                        {/* Rotating SVG */}
                        <span
                          className="absolute right-2 flex items-center justify-center transform transition-transform origin-center peer-checked:rotate-180"
                          style={{ top: "4px" }}
                        >
                          <svg
                            xmlns="https://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#e8eaed"
                          >
                            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                          </svg>
                        </span>

                        {/* Expandable Content */}
                        <div
                          className="overflow-hidden bg-white border-0 peer-checked:border-1 border-solid border-grey-200 transition-all max-h-0 peer-checked:max-h-[200px]"
                        >
                          <div className="p-4 text-sm">
                            As a user, I want to manage vendor profiles, including contact information, payment terms, and past interactions, so I can easily work with them.
                            -View list of vendors, add/edit vendors, search vendor by status, name, account number, location.
                          </div>
                        </div>
                        <span
                          className="absolute w-px h-8 bg-black top-full left-1/2 transform -translate-x-1/2"
                        ></span>
                      </li>
                      <li className="relative list-none bg-grey-600 overflow-hidden rounded-md border-0 my-4">
                        {/* Checkbox as the peer */}
                        <input id="receive" name="tabs" type="checkbox" className="hidden peer" />

                        {/* Label to toggle the checkbox */}
                        <label
                          htmlFor="receive"
                          className="relative flex justify-between items-center cursor-pointer"
                        >
                          <span className="font-medium text-white text-3.5 px-3 py-2">
                            Receiving
                          </span>
                        </label>

                        {/* Rotating SVG */}
                        <span
                          className="absolute right-2 flex items-center justify-center transform transition-transform origin-center peer-checked:rotate-180"
                          style={{ top: "4px" }}
                        >
                          <svg
                            xmlns="https://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#e8eaed"
                          >
                            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                          </svg>
                        </span>

                        {/* Expandable Content */}
                        <div
                          className="overflow-hidden bg-white border-0 peer-checked:border-1 border-solid border-grey-200 transition-all max-h-0 peer-checked:max-h-[200px]"
                        >
                          <div className="p-4 text-sm">
                            As a user, I want to record received goods against a purchase order, so I can update inventory levels accurately.
                            -Edit general info (name, status, address, date entered/last changed, user ID, contact info), receive, void, reconcile, fulfill orders
                          </div>
                        </div>
                        <span
                          className="absolute w-px h-8 bg-black top-full left-1/2 transform -translate-x-1/2"
                        ></span>
                      </li>

                    </ul>
                  </li>



                </ul>


              </div>



            </div>
            <div className="bg-white  pt-12 pb-16 px-32 grid grid-cols-4 grid-flow-row items-start gap-8 text-left">
              <h6 className="col-start-1 col-span-4 row-start-1 row-span-1 m-0 font-gilroy font-300 text-8 text-grey-800 tracking-wide">digital wireframes</h6>
              <img
                alt="Digital wireframe for Case Study"
                src="/portfolio/images/wireframe-fb.webp" // Default (large screen)
                className="w-full col-start-1 col-span-2 row-start-2 row-span-2"
              />
              <div className='col-start-3 col-span-2 row-start-2 row-span-1 m-0 p-0 text-left font-gilroy font-300 text-7 leading-relaxed'>
                Navigation, quick actions and searching through inventory were essential features we needed to refine.
              </div>
              <img
                src="/portfolio/images/wireframe-fb-2.webp"
                className="w-full col-start-3 col-span-2 row-start-3 row-span-1" />


            </div>
            <div className="bg-white pt-16 pb-12 px-32 grid grid-cols-8 grid-flow-row items-start gap-8">
              <div className="py-2 text-left col-start-1 col-span-4 items-start gap-2">
                <h5 className="h3 pb-8 font-600 tracking-wide">key mockups</h5>
              </div>
              <div className='m-0 p-0 font-gilroy text-grey-600 col-start-5 col-span-4 text-left font-300 text-6 leading-relaxed'>
                After several iterations of the scope of the project, layout, and features it was decided that we would focus on creating an iPad/tablet app geared toward administrative tasks - separate from the mobile app that is geared toward warehouse tasks.              </div>

            </div>
            <div className="bg-white pt-12 pb-16 px-32 grid grid-cols-8 grid-flow-row items-start">
              <img
                alt=""
                src="/portfolio/images/mockup-fb.webp"
                className="col-start-1 col-span-8 w-full"
              />



            </div>

            <div className="bg-white py-16 px-32 flex flex-col items-start gap-8">
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="py-2 text-left">
                  <h5 className="h3 pb-8 font-600 tracking-wide">outcomes</h5>
                </div>
                <div className="grid grid-cols-6 grid-flow-row auto-cols-min gap-4 items-start text-left w-full">
                  <div className='m-0 py-0 pl-0 pr-16 col-start-1 col-span-4 row-start-1 row-span-1 font-gilroy font-300 text-6 gap-8 leading-relaxed'>
                    <div className='flex flex-col gap-8'></div>
                    Usability testing of the Fishbowl Go prototype was a pivotal phase in our project, yielding crucial insights. The testing showed that our redesigned prototype markedly enhanced the existing app, significantly improving user-friendliness and efficiency, thereby addressing key user challenges. However, as we were preparing for the development phase, unforeseen organizational changes occurred. The acquisition of Fishbowl Inventory by another company led to a realignment of priorities and the eventual departure of our development team. This resulted in the project being shelved, despite the prototype&#39s demonstrated potential to meet and exceed user needs.
                    <a
                      href="#"
                      className="btn-primary w-16 font-gilroy leading-relaxed my-8"
                    >
                      prototype
                    </a>
                  </div>

                  <img
                    className='m-0 py-0 pl-0 pr-16 col-start-1 col-span-4 row-start-2 row-span-2 w-5/6'
                    src='/images/prototype-fb.webp'
                  />
                  <div className='col-start-5 col-span-2 row-start-1 row-span-1'>
                    <div className='grid grid-rows-subgrid row-span-2'>
                      <div className="m-0 font-gilroy font-300 text-6 text-grey-800 tracking-wide">Process and Development
                      </div>
                      <div className='m-0 font-gilroy font-300 text-6 leading-relaxed'>
                        Over the course of the project, our team worked diligently to understand and integrate user feedback into a comprehensive redesign of the Fishbowl Go app. My role involved closely collaborating with the development team, the Head of Product, and the UX Director to ensure that the new design addressed user needs effectively.
                      </div>
                    </div>
                  </div>

                  <div className='col-start-5 col-span-2 row-start-2'>
                    <div className='grid grid-rows-subgrid row-span-2'>
                      <div className="m-0 font-gilroy font-300 text-6 text-grey-800 tracking-wide">impact</div>
                      <div className='m-0 font-gilroy font-300 text-6 leading-relaxed'>
                        Though the redesigned Fishbowl Go app did not see the light of day in its intended form, the project left an indelible mark. It demonstrated the value of listening to user feedback and the need for continuous evolution in software design to meet changing user requirements. The insights gained from this project can serve as a valuable reference for future endeavors in similar domains.
                      </div>
                    </div>
                  </div>
                  <div className='col-start-5 col-span-2 row-start-3'>
                    <div className='grid grid-rows-subgrid row-span-2'>
                      <div className="m-0 font-gilroy font-300 text-6 text-grey-800 tracking-wide">considerations</div>
                      <div className='m-0 font-gilroy font-300 text-6 leading-relaxed'>
                        Following these developments, I made the decision to leave Fishbowl. Despite the project not reaching its final stages of development and deployment, the journey was filled with learning experiences and professional growth. The process underscored the importance of user-centered design and the impact it can have on product development.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white py-16 px-32 flex flex-col items-start gap-8">
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="py-2 text-left">
                  <h5 className="h3 pb-8 font-600 tracking-wide">more work</h5>
                </div>
                <div className="grid grid-cols-8 grid-flow-row gap-6 -ml-3 items-start text-left w-full justify-content">

                  <a href="/projects/Project3" className="decoration-none hover:rounded-3xl hover:shadow-md group p-3 col-start-1 col-span-2 items-start justify-between">
                    <div className="relative group overflow-hidden w-full">
                      <img
                        alt=""
                        src="/portfolio/images/hm-project-img.jpg"
                        className="aspect-video transition-transform duration-500 ease-in-out transform group-hover:scale-110 w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                      />
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="max-w-xl">
                      <div className="mt-8 flex items-center gap-x-4 text-xs">
                        <time className="text-gray-500 font-gilroy">
                          February 12, 2024
                        </time>
                        <a

                          className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium font-gilroy text-gray-600 hover:bg-gray-100"
                        >
                          booking
                        </a>
                      </div>
                      <div className="group relative">
                        <h3 className="mt-3 text-lg/6 font-gilroy font-semibold text-gray-900 group-hover:text-gray-600">
                          <a>
                            <span className="absolute inset-0" />
                            Haven Massage
                          </a>
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm/6 text-gray-500 font-gilroy ">An app enabling users to book massages and other personalized services.</p>
                      </div>

                    </div>
                  </a>
                  <a href="/projects/Project2" className="decoration-none hover:rounded-3xl hover:shadow-md group p-3 col-start-3 col-span-2 items-start justify-between">
                    <div className="relative group overflow-hidden w-full">
                      <img
                        alt=""
                        src="/portfolio/images/md_bg-proj3-hero.jpg"
                        className="aspect-video transition-transform duration-500 ease-in-out transform group-hover:scale-110 w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                      />
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="max-w-xl">
                      <div className="mt-8 flex items-center gap-x-4 text-xs">
                        <time className="text-gray-500 font-gilroy">
                          July 17, 2022 - Current
                        </time>
                        <a

                          className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium font-gilroy text-gray-600 hover:bg-gray-100"
                        >
                          booking
                        </a>
                      </div>
                      <div className="group relative">
                        <h3 className="mt-3 text-lg/6 font-gilroy font-semibold text-gray-900 group-hover:text-gray-600">
                          <a>
                            <span className="absolute inset-0" />
                            Travelpass
                          </a>
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm/6 text-gray-500 font-gilroy ">A platform offering curated travel guides and tools to help users plan trips.</p>
                      </div>

                    </div>
                  </a>
                  <a href="/projects/Project4" className="decoration-none hover:rounded-3xl hover:shadow-md group p-3 col-start-5 col-span-2 items-start justify-between">
                    <div className="relative group overflow-hidden w-full">
                      <img
                        alt=""
                        src="/portfolio/images/spectacle.jpg"
                        className="aspect-video transition-transform duration-500 ease-in-out transform group-hover:scale-110 w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                      />
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="max-w-xl">
                      <div className="mt-8 flex items-center gap-x-4 text-xs">
                        <time className="text-gray-500 font-gilroy">
                          July 7, 2024
                        </time>
                        <a

                          className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium font-gilroy text-gray-600 hover:bg-gray-100"
                        >
                          plugins
                        </a>
                      </div>
                      <div className="group relative">
                        <h3 className="mt-3 text-lg/6 font-gilroy font-semibold text-gray-900 group-hover:text-gray-600">
                          <a>
                            <span className="absolute inset-0" />
                            Spectacle
                          </a>
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm/6 text-gray-500 font-gilroy ">A Figma plugin that streamlines design documentation, enhancing collaboration.</p>
                      </div>

                    </div>
                  </a>
                  











                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project4

