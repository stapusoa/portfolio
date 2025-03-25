import { Link } from "react-router-dom";
import { Icon } from "../components/Icon/index";

import ContactForm from "../components/Form/ContactForm";
import SocialLinks from "../components/common/SocialLinks";

const Contact = () => {
  return (
    <div className="page-transition min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-start gap-12">
        {/* Back Link */}
        <Link
          to="/"
          className="link text-5 b-b-0 font-medium flex gap-2 items-center -pl-2"
        >
          <Icon name="backArrow" size="large" />
          back to home
        </Link>

        <div className="flex flex-col md:flex-row gap-4">
          {/* Left Column */}
          <div className="md:w-1/2">
            <div className="sticky top-24 flex flex-col items-start">
              <h1 className="mb-2 hover:drop-shadow-sm relative text-balance font-gilroy text-6 sm:text-6 md:text-7 lg:text-8 font-300 tracking-tight text-green">
                get in touch
              </h1>
              <h1 className="mt-0 mb-6 md:mb-8 text-9 sm:text-9 md:text-14 lg:text-16 font-gilroy font-700 leading-10 text-left md:leading-16 text-blue">

                let's work<br />together
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-md text-left">
                I'm currently available for freelance work and collaborations.
                Feel free to reach out if you have a project in mind or just
                want to say hello.
              </p>

              <div className="glass-panel p-6 border-l-solid border-blue mb-8 max-w-md flex flex-col items-start">
                <h3 className="text-lg font-medium mb-3 text-left">Response Time</h3>
                <p className="text-gray-600 text-left">
                  I typically respond to all inquiries within 24–48 hours. For
                  urgent matters, please indicate that in your message.
                </p>
              </div>

              <SocialLinks />
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 md:pl-12">
            <div className="glass-panel p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6">Send me a message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;