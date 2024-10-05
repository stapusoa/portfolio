import { Helmet } from 'react-helmet-async'
import { Navbar } from '../components/Navbar/Navbar';
import '../App.css'

const Home = () => {
  console.log('Home component is rendering');
  return (
    <>
    <Helmet>
        <title>Sara Tapusoa | UX Portfolio</title>
        <meta property="og:title" content="Jane Doe | Web Developer Portfolio" />
        <meta property="og:description" content="Explore my web development projects and skills in front-end and back-end technologies." />
        <meta property="og:image" content="https://your-portfolio.com/images/portfolio-thumbnail.jpg" />
            <link rel="canonical" href="https://www.saratapusoa.com" />
      </Helmet>
      <Navbar />
      <main>
        <div className="w-full max-w-full">
          <div className="max-w-full mx-auto">
            <img
              alt=''
              className='drag-none absolute top-0'
              loading='eager'
              src='/images/hero-bg-main.jpg'
            />
            <div className="bg-transparent flex flex-start h-full">
              <div className="hero-content">
                <div className="hero-header">
                  <h4 className="text-left text-color-primary">
                    product designer
                  </h4>
                  <h1 className="text-left text-color-secondary">
                    designing for users, <br />not just pixels.
                  </h1>
                </div>
                <div className="button-double-container">
                  <button className="button-primary">
                    projects
                  </button>                
                  <button className="button-secondary" onClick={() => window.open('https://github.com/yourusername', '_blank', 'noopener,noreferrer')}>
                    github
                  </button>

                </div>
              </div>
            </div>
          </div>
          <div className="content-wrapper">
            <div className="content" id="projects-section">
              <div className="section grid-x vertical-center gap-4">
                <div className="col text-block">
                  <h5 className="text-right text-color-default">
                    fishbowl go
                  </h5>
                  <h3 className="text-right text-color-secondary">
                    simplifying inventory management in the warehouse and in the office.
                  </h3>
                  <div className="align-right">
                    <a className="my-link" href="/proj1">case study </a>
                  </div>
                </div>
                <div className="proj-img-container">
                  <img
                      src="/fbprod-project-image.jpg" // The path to your image file, relative to the public directory
                      alt="Project Image" // Alternative text for the image
                  />   
                </div>
              </div>
              <div className="section grid-x reverse vertical-center gap-4">
                <div className="col text-block">
                  <h5 className="text-left text-color-default">
                    haven massage
                  </h5>
                  <h3 className="text-left text-color-secondary">
                    providing professional therapeutic services through easy booking.            
                  </h3>
                  <div className="align-left">
                    <a className="my-link" href="/proj2">case study </a>
                  </div>
                </div>
                <div className="proj-img-container">
                  <img
                      src="/hm-project-img.jpg" // The path to your image file, relative to the public directory
                      alt="Project Image" // Alternative text for the image
                  />   
                </div>
              </div>
              <div className="section grid-x vertical-center gap-4">
                <div className="col text-block">
                  <h5 className="text-right text-color-default">
                    travelpass
                  </h5>
                  <h3 className="text-right text-color-secondary">
                    providing the explorer at heart unforgettable adventures.              
                  </h3>
                  <div className="align-right">
                    <a className="my-link" href="/proj3">case study </a>
                  </div>
                </div>
                <div className="proj-img-container">
                  <img
                      src="/tp-project-img.jpg" // The path to your image file, relative to the public directory
                      alt="Project Image" // Alternative text for the image
                  />   
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;