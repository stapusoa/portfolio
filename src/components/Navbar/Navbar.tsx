import { useState } from 'react';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'work', href: '/' },
  { name: 'about', href: '/about' },
  { name: 'contact', href: '/contact' },
]

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
      <header className="sticky top-0 z-50">
        <nav className="flex items-center justify-between  mx-auto max-w-300 bg-transparent pt-5 pb-2 px-6 sm:px-6 md:px-14 lg:px-32 md:pt-9 lg:pt-11" aria-label="Global">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center justify-center cursor-pointer">
              <img
                className="h-5 w-auto cursor-pointer"
                src='/images/logo-primary.webp'
                alt="Sara Tapusoa Logo"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="navlink cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-transparent p-2 text-blue hover:bg-grey-100 active:bg-grey-100 hover:text-green active:text-green focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Menu Icon */}
              {mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute mt-3 w-full border-t-2 border-x-0 border-b-0 border-solid border-green flex lg:hidden bg-white/20 backdrop-blur-2xl" id="mobile-menu">
            <div className="space-y-6 pb-full w-full pt-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)} // Close menu on link click
                  className="block border-l-4 w-full border-transparent text-align-left decoration-none py-2 px-6 sm:px-6 md:px-14 lg:px-32 font-gilroy text-7 font-medium text-gray-500 hover:border-green active:border-green hover:bg-grey-200 active:bg-grey-200 hover:text-green active:text-green"
                >
                  {item.name}
                </Link>
              ))}
            </div>

          </div>
        )}
      </header>









    </>
  )
}

export default Navbar;