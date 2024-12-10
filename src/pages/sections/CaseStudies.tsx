const CaseStudies: React.FC = () => (
  <>
    <div className="bg-transparent relative z-32 py-16 px-32 flex flex-row items-center">
      <div className="relative w-1/2 h-150 overflow-hidden rounded-3xl shadow-md">
        {/* Image */}
        <img
          alt="Case Study Image"
          src="/portfolio/images/fbprod-project-image.jpg"
          className="object-cover"
        />
        {/* Inner Overlay */}
        <div className="absolute inset-3 p-3 border-solid border-3 border-green opacity-40 rounded-3xl"></div>
      </div>
      <div className="flex flex-col w-1/2 gap-2 pl-16 pr-32">
        <div className="py-2">
          <h6 className="font-gilroy font-300 text-7 text-left text-grey-800 m-0 tracking-wide">
            fishbowl go
          </h6>
        </div>
        <div className="py-2">
          <h6 className="font-gilroy font-500 text-10 text-left text-grey-900 m-0 tracking-cozy">
            simplifying inventory management in the warehouse and in the office.
          </h6>
        </div>
        <div className='py-2 flex flex-row gap-1.5 items-center cursor-pointer group'>
          <a href="/portfolio/projects/project1" className="link hover:text-blue hover:border-blue">
            case study
          </a>
          <div className='py-2 h-full'>
            <svg className='text-green group-hover:text-blue animate-pulse' style={{ animationDelay: '0s' }} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="https://www.w3.org/2000/svg">
              <path d="M4.91967 14.0067C5.24633 14.3334 5.773 14.3334 6.09967 14.0067L11.6397 8.4667C11.8997 8.2067 11.8997 7.7867 11.6397 7.5267L6.09967 1.9867C5.773 1.66003 5.24633 1.66003 4.91967 1.9867C4.593 2.31337 4.593 2.84003 4.91967 3.1667L9.74633 8.00003L4.913 12.8334C4.593 13.1534 4.593 13.6867 4.91967 14.0067V14.0067Z" fill="currentColor" />
            </svg>
            <svg className='text-green group-hover:text-blue animate-pulse' style={{ animationDelay: '0.3s' }} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="https://www.w3.org/2000/svg">
              <path d="M4.91967 14.0067C5.24633 14.3334 5.773 14.3334 6.09967 14.0067L11.6397 8.4667C11.8997 8.2067 11.8997 7.7867 11.6397 7.5267L6.09967 1.9867C5.773 1.66003 5.24633 1.66003 4.91967 1.9867C4.593 2.31337 4.593 2.84003 4.91967 3.1667L9.74633 8.00003L4.913 12.8334C4.593 13.1534 4.593 13.6867 4.91967 14.0067V14.0067Z" fill="currentColor" />
            </svg>
            <svg className='text-green group-hover:text-blue animate-pulse' style={{ animationDelay: '0.6s' }} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="https://www.w3.org/2000/svg">
              <path d="M4.91967 14.0067C5.24633 14.3334 5.773 14.3334 6.09967 14.0067L11.6397 8.4667C11.8997 8.2067 11.8997 7.7867 11.6397 7.5267L6.09967 1.9867C5.773 1.66003 5.24633 1.66003 4.91967 1.9867C4.593 2.31337 4.593 2.84003 4.91967 3.1667L9.74633 8.00003L4.913 12.8334C4.593 13.1534 4.593 13.6867 4.91967 14.0067V14.0067Z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-transparent relative z-32 py-16 px-32 flex flex-row items-center">
      <div className='flex flex-col w-1/2 gap-2 pl-16 pr-32'>
        <div className='py-2'>
          <h6 className='font-gilroy font-300 text-7 text-left text-grey-800 m-0 tracking-wide'>fishbowl go</h6>
        </div>
        <div className='py-2'>
          <h6 className='font-gilroy font-500 text-10 text-left text-grey-900 m-0 tracking-cozy'>simplifying inventory management in the warehouse and in the office.</h6>
        </div>
        <div className='py-2 flex flex-row gap-1.5 items-center cursor-pointer group'>
          <a href="/portfolio/projects/project2" className="link hover:text-blue hover:border-blue">
            case study
          </a>
          <div className='py-2 h-full'>
            <svg className='text-green group-hover:text-blue animate-pulse' style={{ animationDelay: '0s' }} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="https://www.w3.org/2000/svg">
              <path d="M4.91967 14.0067C5.24633 14.3334 5.773 14.3334 6.09967 14.0067L11.6397 8.4667C11.8997 8.2067 11.8997 7.7867 11.6397 7.5267L6.09967 1.9867C5.773 1.66003 5.24633 1.66003 4.91967 1.9867C4.593 2.31337 4.593 2.84003 4.91967 3.1667L9.74633 8.00003L4.913 12.8334C4.593 13.1534 4.593 13.6867 4.91967 14.0067V14.0067Z" fill="currentColor" />
            </svg>
            <svg className='text-green group-hover:text-blue animate-pulse' style={{ animationDelay: '0.3s' }} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="https://www.w3.org/2000/svg">
              <path d="M4.91967 14.0067C5.24633 14.3334 5.773 14.3334 6.09967 14.0067L11.6397 8.4667C11.8997 8.2067 11.8997 7.7867 11.6397 7.5267L6.09967 1.9867C5.773 1.66003 5.24633 1.66003 4.91967 1.9867C4.593 2.31337 4.593 2.84003 4.91967 3.1667L9.74633 8.00003L4.913 12.8334C4.593 13.1534 4.593 13.6867 4.91967 14.0067V14.0067Z" fill="currentColor" />
            </svg>
            <svg className='text-green group-hover:text-blue animate-pulse' style={{ animationDelay: '0.6s' }} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="https://www.w3.org/2000/svg">
              <path d="M4.91967 14.0067C5.24633 14.3334 5.773 14.3334 6.09967 14.0067L11.6397 8.4667C11.8997 8.2067 11.8997 7.7867 11.6397 7.5267L6.09967 1.9867C5.773 1.66003 5.24633 1.66003 4.91967 1.9867C4.593 2.31337 4.593 2.84003 4.91967 3.1667L9.74633 8.00003L4.913 12.8334C4.593 13.1534 4.593 13.6867 4.91967 14.0067V14.0067Z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
      <div className="relative w-1/2 h-150 overflow-hidden rounded-3xl shadow-md">
        {/* Image */}
        <img
          alt="Case Study Image"
          src="/portfolio/images/fbprod-project-image.jpg"
          className="object-cover"
        />
        {/* Inner Overlay */}
        <div className="absolute inset-3 p-3 border-solid border-3 border-green opacity-40 rounded-3xl"></div>
      </div>
    </div>
    <div className="bg-transparent relative z-32 py-16 px-32 flex flex-row items-center">
    <div className="relative w-1/2 h-150 overflow-hidden rounded-3xl shadow-md">
        {/* Image */}
        <img
          alt="Case Study Image"
          src="/portfolio/images/fbprod-project-image.jpg"
          className="object-cover"
        />
        {/* Inner Overlay */}
        <div className="absolute inset-3 p-3 border-solid border-3 border-green opacity-40 rounded-3xl"></div>
      </div>
      <div className="flex flex-col w-1/2 gap-2 pl-16 pr-32">
        <div className="py-2">
          <h6 className="font-gilroy font-300 text-7 text-left text-grey-800 m-0 tracking-wide">
            fishbowl go
          </h6>
        </div>
        <div className="py-2">
          <h6 className="font-gilroy font-500 text-10 text-left text-grey-900 m-0 tracking-cozy">
            simplifying inventory management in the warehouse and in the office.
          </h6>
        </div>
        <div className='py-2 flex flex-row gap-1.5 items-center cursor-pointer group'>
          <a href="/projects/project3" className="link hover:text-blue hover:border-blue">
            case study
          </a>
          <div className='py-2 h-full'>
            <svg className='text-green group-hover:text-blue animate-pulse' style={{ animationDelay: '0s' }} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="https://www.w3.org/2000/svg">
              <path d="M4.91967 14.0067C5.24633 14.3334 5.773 14.3334 6.09967 14.0067L11.6397 8.4667C11.8997 8.2067 11.8997 7.7867 11.6397 7.5267L6.09967 1.9867C5.773 1.66003 5.24633 1.66003 4.91967 1.9867C4.593 2.31337 4.593 2.84003 4.91967 3.1667L9.74633 8.00003L4.913 12.8334C4.593 13.1534 4.593 13.6867 4.91967 14.0067V14.0067Z" fill="currentColor" />
            </svg>
            <svg className='text-green group-hover:text-blue animate-pulse' style={{ animationDelay: '0.3s' }} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="https://www.w3.org/2000/svg">
              <path d="M4.91967 14.0067C5.24633 14.3334 5.773 14.3334 6.09967 14.0067L11.6397 8.4667C11.8997 8.2067 11.8997 7.7867 11.6397 7.5267L6.09967 1.9867C5.773 1.66003 5.24633 1.66003 4.91967 1.9867C4.593 2.31337 4.593 2.84003 4.91967 3.1667L9.74633 8.00003L4.913 12.8334C4.593 13.1534 4.593 13.6867 4.91967 14.0067V14.0067Z" fill="currentColor" />
            </svg>
            <svg className='text-green group-hover:text-blue animate-pulse' style={{ animationDelay: '0.6s' }} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="https://www.w3.org/2000/svg">
              <path d="M4.91967 14.0067C5.24633 14.3334 5.773 14.3334 6.09967 14.0067L11.6397 8.4667C11.8997 8.2067 11.8997 7.7867 11.6397 7.5267L6.09967 1.9867C5.773 1.66003 5.24633 1.66003 4.91967 1.9867C4.593 2.31337 4.593 2.84003 4.91967 3.1667L9.74633 8.00003L4.913 12.8334C4.593 13.1534 4.593 13.6867 4.91967 14.0067V14.0067Z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default CaseStudies;