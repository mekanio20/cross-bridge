<template>
  <section class="min-h-screen bg-nav-white py-16 px-6 flex items-center justify-center">
    <div class="page-container">
      <div class="flex flex-col lg:flex-row justify-between gap-12">
        <!-- Mission -->
        <div class="flex-1">
          <div class="flex justify-center mb-8">
            <img src="/imgs/m1.webp">
          </div>
          <h2 class="text-6xl font-bold mb-8 text-center">Mission</h2>
          <p class="text-lg text-center max-w-lg mx-auto">
            To bridge global markets by delivering high-quality petrochemical products, fuels, and raw materials with
            efficiency, reliability, and integrity.
          </p>
        </div>

        <!-- Vision -->
        <div class="flex-1">
          <div class="flex justify-center mb-8">
            <img src="/imgs/m2.webp">
          </div>
          <h2 class="text-6xl font-bold mb-8 text-center">Vision</h2>
          <p class="text-lg text-center max-w-lg mx-auto">
            To be a leading international trading company recognized for excellence in supply chain management,
            innovation, and sustainable trade practices.
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'MissionVisionSection',
}
</script>