'use client';

export default function Partners() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Badge */}
        <div className="text-center mb-8">
          <div className="inline-block bg-gray-100 border border-gray-300 rounded-lg px-4 py-2">
            <span className="text-sm font-medium text-black">Partners</span>
          </div>
        </div>
        
        {/* Main Headline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6 leading-tight">
            We are Collaborating with the Best in Town
          </h2>
        </div>
        
        {/* Partner Logos Carousel */}
        <div className="relative overflow-hidden">
          {/* Fade Left */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          
          {/* Fade Right */}
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* Carousel Container */}
          <div className="flex animate-scroll">
            {/* First set of logos */}
            <div className="flex items-center gap-16 px-8">
              {/* Logo 1: CASA DO IMPACTO */}
              <div className="text-center min-w-[200px]">
                <div className="mb-3">
                  <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center mx-auto">
                    <span className="text-gray-400 text-sm">Logo 1</span>
                  </div>
                </div>
                <div className="font-bold text-gray-700 text-sm">CASA DO IMPACTO</div>
                <div className="text-gray-500 text-xs">Santa Casa da Misericórdia de Lisboa</div>
              </div>
              
              {/* Logo 2: unicorn Factory Lisboa */}
              <div className="text-center min-w-[200px]">
                <div className="mb-3">
                  <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center mx-auto">
                    <span className="text-gray-400 text-sm">Logo 2</span>
                  </div>
                </div>
                <div className="font-bold text-gray-700 text-sm">unicorn Factory Lisboa</div>
              </div>
              
              {/* Logo 3: Junitec */}
              <div className="text-center min-w-[200px]">
                <div className="mb-3">
                  <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center mx-auto">
                    <span className="text-gray-400 text-sm">Logo 3</span>
                  </div>
                </div>
                <div className="font-bold text-gray-700 text-sm">Junitec</div>
                <div className="text-gray-500 text-xs">Júnior Empresas do Instituto Superior Técnico</div>
              </div>
              
              {/* Logo 4: European Institute of Innovation & Technology */}
              <div className="text-center min-w-[200px]">
                <div className="mb-3">
                  <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center mx-auto">
                    <span className="text-gray-400 text-sm">Logo 4</span>
                  </div>
                </div>
                <div className="font-bold text-blue-600 text-sm">European Institute of Innovation & Technology</div>
              </div>
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center gap-16 px-8">
              {/* Logo 1: CASA DO IMPACTO */}
              <div className="text-center min-w-[200px]">
                <div className="mb-3">
                  <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center mx-auto">
                    <span className="text-gray-400 text-sm">Logo 1</span>
                  </div>
                </div>
                <div className="font-bold text-gray-700 text-sm">CASA DO IMPACTO</div>
                <div className="text-gray-500 text-xs">Santa Casa da Misericórdia de Lisboa</div>
              </div>
              
              {/* Logo 2: unicorn Factory Lisboa */}
              <div className="text-center min-w-[200px]">
                <div className="mb-3">
                  <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center mx-auto">
                    <span className="text-gray-400 text-sm">Logo 2</span>
                  </div>
                </div>
                <div className="font-bold text-gray-700 text-sm">unicorn Factory Lisboa</div>
              </div>
              
              {/* Logo 3: Junitec */}
              <div className="text-center min-w-[200px]">
                <div className="mb-3">
                  <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center mx-auto">
                    <span className="text-gray-400 text-sm">Logo 3</span>
                  </div>
                </div>
                <div className="font-bold text-gray-700 text-sm">Junitec</div>
                <div className="text-gray-500 text-xs">Júnior Empresas do Instituto Superior Técnico</div>
              </div>
              
              {/* Logo 4: European Institute of Innovation & Technology */}
              <div className="text-center min-w-[200px]">
                <div className="mb-3">
                  <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center mx-auto">
                    <span className="text-gray-400 text-sm">Logo 4</span>
                  </div>
                </div>
                <div className="font-bold text-blue-600 text-sm">European Institute of Innovation & Technology</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
