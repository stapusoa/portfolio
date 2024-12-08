import { Link } from 'react-router-dom';

const CaseStudies: React.FC = () => (
  <>
    <div className="bg-transparent relative z-32 py-16 px-32 flex flex-row items-center">
      <img
        alt="Case Study Image"
        src="/portfolio/images/fbprod-project-image.jpg"
        className="w-1/2 h-150 object-cover rounded-3xl border-solid border-3 border-grey-300"
      />
      <div className="flex flex-col gap-2 pl-16 pr-32 w-auto">
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
        <div className="py-2 flex flex-row gap-1.5 items-center">
          <Link to="/projects/project1" className="link">
            case study
          </Link>
          <div className='py-2 h-full'>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="https://www.w3.org/2000/svg">
              <path d="M4.91967 14.0067C5.24633 14.3334 5.773 14.3334 6.09967 14.0067L11.6397 8.4667C11.8997 8.2067 11.8997 7.7867 11.6397 7.5267L6.09967 1.9867C5.773 1.66003 5.24633 1.66003 4.91967 1.9867C4.593 2.31337 4.593 2.84003 4.91967 3.1667L9.74633 8.00003L4.913 12.8334C4.593 13.1534 4.593 13.6867 4.91967 14.0067V14.0067Z" fill="#81B29A" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-transparent relative z-32 py-16 px-32 flex flex-row items-center">
      <div className='flex flex-col gap-2 pl-16 pr-32 w-auto'>
        <div className='py-2'>
          <h6 className='font-gilroy font-300 text-7 text-left text-grey-800 m-0 tracking-wide'>fishbowl go</h6>
        </div>
        <div className='py-2'>
          <h6 className='font-gilroy font-500 text-10 text-left text-grey-900 m-0 tracking-cozy'>simplifying inventory management in the warehouse and in the office.</h6>
        </div>
        <div className='py-2 flex flex-row gap-1.5 items-center'>
          <Link to="/projects/project2" className="link">
            case study
          </Link>
          <div className='py-2 h-full'>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="https://www.w3.org/2000/svg">
              <path d="M4.91967 14.0067C5.24633 14.3334 5.773 14.3334 6.09967 14.0067L11.6397 8.4667C11.8997 8.2067 11.8997 7.7867 11.6397 7.5267L6.09967 1.9867C5.773 1.66003 5.24633 1.66003 4.91967 1.9867C4.593 2.31337 4.593 2.84003 4.91967 3.1667L9.74633 8.00003L4.913 12.8334C4.593 13.1534 4.593 13.6867 4.91967 14.0067V14.0067Z" fill="#81B29A" />
            </svg>
          </div>
        </div>
      </div>
      <img
        alt='Case Study 1 Image: Fishbowl Go for Tablet and iPad'
        src='/portfolio/images/fbprod-project-image.jpg'
        className='w-1/2 h-150 object-cover rounded-3xl border-solid border-3 border-grey-300'
      />
    </div>
    <div className="bg-transparent relative z-32 py-16 px-32 flex flex-row items-center">
      <img
        alt="Case Study Image"
        src="/portfolio/images/fbprod-project-image.jpg"
        className="w-1/2 h-150 object-cover rounded-3xl border-solid border-3 border-grey-300"
      />
      <div className="flex flex-col gap-2 pl-16 pr-32 w-auto">
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
        <div className="py-2 flex flex-row gap-1.5 items-center">
          <Link to="/projects/project1" className="link">
            case study
          </Link>
          <div className='py-2 h-full'>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="https://www.w3.org/2000/svg">
              <path d="M4.91967 14.0067C5.24633 14.3334 5.773 14.3334 6.09967 14.0067L11.6397 8.4667C11.8997 8.2067 11.8997 7.7867 11.6397 7.5267L6.09967 1.9867C5.773 1.66003 5.24633 1.66003 4.91967 1.9867C4.593 2.31337 4.593 2.84003 4.91967 3.1667L9.74633 8.00003L4.913 12.8334C4.593 13.1534 4.593 13.6867 4.91967 14.0067V14.0067Z" fill="#81B29A" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default CaseStudies;