import React from 'react';
import { pricingTiers, CheckIcon } from '../../constants/pricing';
import SectionTitle from '../sections/SectionTitle';
import Button from '../common/Button';

function PricingCard({ tier }) {
  const { name, price, description, features, featured } = tier;

  return (
    <div
      className={`flex flex-col rounded-3xl p-8 ring-1 ${
        featured
          ? 'bg-gray-900 ring-gray-900 shadow-2xl scale-105'
          : 'bg-white ring-gray-200'
      }`}
    >
      <h3
        className={`text-lg font-semibold leading-8 ${
          featured ? 'text-white' : 'text-gray-900'
        }`}
      >
        {name}
      </h3>
      <p
        className={`mt-4 text-sm leading-6 ${
          featured ? 'text-gray-300' : 'text-gray-600'
        }`}
      >
        {description}
      </p>
      <p className="mt-6 flex items-baseline gap-x-1">
        <span
          className={`text-4xl font-bold tracking-tight ${
            featured ? 'text-white' : 'text-gray-900'
          }`}
        >
          {price}
        </span>
        <span
          className={`text-sm font-semibold leading-6 ${
            featured ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          /service
        </span>
      </p>
      <ul
        role="list"
        className={`mt-8 space-y-3 text-sm leading-6 ${
          featured ? 'text-gray-300' : 'text-gray-600'
        } flex-1`}
      >
        {features.map((feature) => (
          <li key={feature} className="flex gap-x-3">
            <CheckIcon
              className={`h-6 w-5 flex-none ${
                featured ? 'text-white' : 'text-primary-600'
              }`}
              aria-hidden="true"
            />
            {feature}
          </li>
        ))}
      </ul>
      <Button
        className={`mt-8 w-full ${
          featured
            ? 'bg-white text-gray-900 hover:bg-gray-100 focus-visible:outline-white'
            : ''
        }`}
      >
        Get started
      </Button>
    </div>
  );
}

function Pricing() {
  return (
    <div className="relative isolate bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 px-6 py-24 sm:py-32 lg:px-8" id="pricing">
      <div className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
        <div
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-blue-200 to-cyan-300 opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl">
        <SectionTitle
          subtitle="Pricing"
          title="Simple, transparent pricing"
          description="Choose the service package that best fits your needs. All packages include professional notary services with the highest standards of security and compliance."
        />

        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.id} tier={tier} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-base leading-7 text-gray-600">
            Need a custom solution? Contact us for enterprise pricing and volume discounts.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
