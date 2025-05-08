<template>
  <section class="min-h-screen bg-white relative overflow-hidden">
    <div class="flex flex-col lg:flex-row">
      <!-- Left side with image -->
      <div class="lg:w-1/2 relative h-[40vh] lg:h-screen overflow-hidden">
        <img src="/imgs/2.webp" alt="Dubai Skyline" class="w-full h-full object-cover" />

        <!-- Overlay shapes -->
        <!-- <div class="absolute bottom-0 right-0 w-full h-full clip_path bg-cb-blue opacity-30"></div> -->
        <div class="absolute bottom-0 left-0 w-full h-1/2 clip_path bg-[#008060] opacity-30"></div>
      </div>

      <!-- Right side with content -->
      <div class="lg:w-1/2 p-12 flex flex-col justify-center">
        <div class="max-w-lg">
          <h2 class="section-title">Overview</h2>
          <h3 class="text-2xl font-medium mb-6">CrossBridge Trading LLC</h3>

          <p class="mb-8 text-lg">
            CrossBridge Trading LLC was established in 2025 with its headquarters located in Dubai, UAE. The company
            operates in key locations, including:
          </p>

          <div class="mb-8">
            <p class="mb-2"><span class="font-bold">Turkmenistan</span> – Ashgabat</p>
            <p class="mb-2"><span class="font-bold">Turkey</span> – Istanbul</p>
            <p class="mb-2"><span class="font-bold">Georgia</span> – Poti</p>
            <p class="mb-2"><span class="font-bold">China</span> – Beijing</p>
          </div>

          <p class="text-lg">
            We operate in major markets such as Central Asia, the Middle East, Europe, Africa, and East Asia.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PageFooter from './PageFooter.vue'

export default {
  name: 'OverviewSection',
  components: {
    PageFooter
  }
}
</script>

<style>
.clip_path {
  clip-path: circle(60.0% at 50% 100%);
  backdrop-filter: #008060;
}
</style>