<template>
  <section class="h-screen pt-10 bg-hero-white relative overflow-hidden">
    <div class="flex flex-col lg:flex-row justify-between">
      <!-- Left side with image -->
      <div class="w-[600px] h-[830px] relative">
        <img src="/imgs/hero.webp" class="w-full h-full object-cover" />
      </div>

      <p class="absolute bottom-10 left-10 text-white font-poppins opacity-80">
        CrossBridge since 2020
      </p>

      <!-- Right side with content -->
      <div class="lg:w-1/2 p-12 flex flex-col justify-center">
        <div class="max-w-xl font-poppins font-semibold text-[52px]">
          <span class="text-hero-blue font-bold">Cross</span><span class="text-hero-green font-bold">Bridge</span>
          - Energy Expertise That Drives the World Forward
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'HeroSection',
}
</script>