<template>
    <section class="min-h-screen bg-white py-16 px-6 flex items-center justify-center">
      <div class="page-container">
        <div class="flex flex-col lg:flex-row justify-between gap-12">
          <!-- Mission -->
          <div class="flex-1">
            <div class="flex justify-center mb-8">
              <svg width="120" height="120" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100,50 C120,30 140,50 160,30 C160,60 140,80 160,110 C140,90 120,110 100,90 C80,110 60,90 40,110 C60,80 40,60 40,30 C60,50 80,30 100,50Z" fill="#008060" opacity="0.7" />
                <path d="M60,120 L40,160 C60,150 80,160 100,140 C120,160 140,150 160,160 L140,120 C120,140 100,130 80,140 C100,130 80,140 60,120Z" fill="#008060" />
              </svg>
            </div>
            <h2 class="text-6xl font-bold mb-8 text-center">Mission</h2>
            <p class="text-lg text-center max-w-lg mx-auto">
              To bridge global markets by delivering high-quality petrochemical products, fuels, and raw materials with efficiency, reliability, and integrity.
            </p>
          </div>
          
          <!-- Vision -->
          <div class="flex-1">
            <div class="flex justify-center mb-8">
              <svg width="120" height="120" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="70" r="40" stroke="#004080" stroke-width="8" fill="none" />
                <path d="M60,110 L40,160 C60,150 80,160 100,150 C120,160 140,150 160,160 L140,110 C120,130 100,120 80,130 C100,120 80,130 60,110Z" fill="#004080" />
              </svg>
            </div>
            <h2 class="text-6xl font-bold mb-8 text-center">Vision</h2>
            <p class="text-lg text-center max-w-lg mx-auto">
              To be a leading international trading company recognized for excellence in supply chain management, innovation, and sustainable trade practices.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  </template>
  
  <script>
  import PageFooter from './PageFooter.vue'
  
  export default {
    name: 'MissionVisionSection',
    components: {
      PageFooter
    }
  }
  </script>