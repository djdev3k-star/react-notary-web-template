import React from 'react';
import { services } from '../../constants/services';
import SectionTitle from '../sections/SectionTitle';

function ServiceCard({ service }) {
  const { name, description, icon: Icon } = service;
  return (
    <div className="flex flex-col">
      <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
        <Icon className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
        {name}
      </dt>
      <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
        <p className="flex-auto">{description}</p>
      </dd>
    </div>
  );
}

function Services() {
  return (
    <div className="bg-white py-24 sm:py-32" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          subtitle="Our Services"
          title="Everything you need for document notarization"
          description="We offer a comprehensive range of notary services to meet all your needs."
        />
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.name} service={service} />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Services;