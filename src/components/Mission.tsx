import React from 'react';

const Mission: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif text-center text-gray-900 mb-8 md:mb-12">
          Our Mission
        </h2>

        <div className="space-y-6 text-center">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            We form an active community of enthusiasts with regular events, try to resolve open legal questions, and educate the public by providing a contact point for media inquiries.
          </p>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Bitcoin has the potential not only to revolutionize online payments, but also to give control over their financial transactions and assets back to individuals, and to serve as an asset with exceptionally strong property guarantees. Furthermore, its technology has the potential to serve as a platform for countless other services that can benefit from decentralized consensus and cryptographically secure tracking of property. As an Association, we want to pave the way for Bitcoin to flourish and unfold its full potential.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
