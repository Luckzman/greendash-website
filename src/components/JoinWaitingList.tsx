'use client';

export default function JoinWaitingList() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-lime-200">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Main Headline */}
        <div className="mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6 leading-tight">
            Join the Waiting List today
          </h2>
        </div>
        
        {/* Descriptive Paragraph */}
        <div className="mb-12">
          <p className="text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
            Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
          </p>
        </div>
        
        {/* Call-to-Action Button */}
        <div>
          <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-gray-800 transform hover:-translate-y-0.5">
            Join Waiting List
          </button>
        </div>
      </div>
    </section>
  );
}
