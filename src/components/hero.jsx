import React from 'react'

function ComponentName() {
  return (
    <div>
      <div class="bg-linear-to-r from-indigo-900 to-purple-900">
      <div class="relative overflow-hidden">
        <div class="max-w-7xl mx-auto py-16 lg:py-28 px-6 sm:px-8">
          <div class="relative z-10 max-lg:text-center">
            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Welcome to
              <span class="text-indigo-400 block"> Premium Delights</span>
            </h1>
            <div class="max-w-md md:max-w-3xl mx-auto mt-6">

              <p class="text-lg sm:text-xl text-slate-300 leading-relaxed">
                Elevate your culinary experience with our exclusive premium services. Indulge in exquisite flavors and extraordinary moments.
              </p>

              <div class="mt-12 lg:mt-16 flex flex-wrap max-lg:justify-center gap-6">
                <div class="rounded-md shadow-sm">
                  <button class="w-full flex items-center justify-center px-8 py-4 font-medium text-base tracking-wide rounded-full text-slate-900 bg-white hover:bg-indigo-100 transition border-0 cursor-pointer">
                    Get Started
                  </button>
                </div>
                <div>
                  <button class="w-full flex items-center justify-center px-8 py-4 font-medium text-base tracking-wide rounded-full text-white bg-indigo-500 hover:bg-indigo-400 transition border-0 cursor-pointer">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://readymadeui.com/hotel-img.webp" alt="hero-img" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default ComponentName
