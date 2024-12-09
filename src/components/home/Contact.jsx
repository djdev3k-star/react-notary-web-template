import React from 'react';
import SectionTitle from '../sections/SectionTitle';
import ContactForm from '../forms/ContactForm';

function Contact() {
  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8" id="contact">
      <div className="mx-auto max-w-xl lg:max-w-4xl">
        <SectionTitle
          title="Let's work together"
          description="We're here to help with all your notary needs."
        />
        <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;