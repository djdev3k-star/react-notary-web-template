import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

function Hero() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8" id="home">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Professional Notary Services You Can Trust
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Reliable, efficient, and convenient notary services for all your document needs.
            Available when and where you need us.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <ScrollLink
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
            >
              Our Services
            </ScrollLink>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
            >
              Contact Us <span aria-hidden="true">→</span>
            </ScrollLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;