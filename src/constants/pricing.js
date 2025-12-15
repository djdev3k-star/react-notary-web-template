import { CheckIcon } from '@heroicons/react/24/outline';

export const pricingTiers = [
  {
    name: 'Basic',
    id: 'tier-basic',
    price: '$25',
    description: 'Perfect for simple document notarization.',
    features: [
      'Single document notarization',
      'Standard turnaround time',
      'Email support',
      'Valid government ID required',
    ],
    featured: false,
  },
  {
    name: 'Professional',
    id: 'tier-professional',
    price: '$75',
    description: 'Most popular for individuals and small businesses.',
    features: [
      'Up to 5 documents',
      'Same-day service',
      'Mobile notary service',
      'Priority email & phone support',
      'Travel within 10 miles included',
    ],
    featured: true,
  },
  {
    name: 'Business',
    id: 'tier-business',
    price: '$150',
    description: 'Comprehensive solution for businesses and legal professionals.',
    features: [
      'Unlimited documents',
      'Expedited service',
      'Mobile notary service',
      '24/7 phone support',
      'Travel within 25 miles included',
      'After-hours availability',
      'Volume discounts available',
    ],
    featured: false,
  },
];

export { CheckIcon };
