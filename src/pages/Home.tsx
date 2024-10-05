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
    <div>
      <h1 className='font-gilroy'>Home Page</h1>
      <p>Welcome to my portfolio!</p>
    </div>
    </>
  );
};

export default Home;