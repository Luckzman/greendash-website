'use client';

export default function JoinWaitingList() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-lime-200">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Main Headline */}
        <div className="mb-8">
          <h2 className="lg:w-10/12 mx-auto text-4xl lg:text-[54px] font-[700] text-[#001354] mb-6 leading-[60px]">
            Join the Waiting List today
          </h2>
        </div>
        
        {/* Descriptive Paragraph */}
        <div className="mb-12">
          <p className="lg:w-10/12 mx-auto text-[16px] text-[#010D3E] max-w-3xl leading-relaxed mb-8">
            Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
          </p>
        </div>
        
        {/* Call-to-Action Button */}
        <button className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
          Join Waiting List
        </button>
      </div>
    </section>
  );
}
