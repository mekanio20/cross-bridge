<template>
  <section class="h-screen p-20 bg-nav-white relative overflow-hidden">
    <div class="container">
      <div class="flex items-center justify-between">
        <h2 class="font-poppins font-medium text-5xl">Overview</h2>
        <img src="/svgs/dubai.svg">
      </div>
      <p class="w-1/2 font-poppins text-2xl text-over-blue py-20 leading-10">
        CrossBridge Trading LLC was established in 2025 with
        its headquarters located in Dubai, UAE. The company
        operates in key locations, including:
      </p>
      <div class="w-full grid grid-cols-2 gap-y-20 gap-x-40 pt-10">
        <div class="font-poppins text-2xl">
          <span class="font-bold">Turkmenistan</span> - Ashgabat
        </div>
        <div class="font-poppins text-2xl">
          <span class="font-bold">Turkey</span> - Istanbul
        </div>
        <div class="font-poppins text-2xl">
          <span class="font-bold">Georgia</span> - Poti
        </div>
        <div class="font-poppins text-2xl">
          <span class="font-bold">China</span> - Beijing
        </div>
      </div>
      <p class="absolute bottom-14 left-1/2 transform -translate-x-1/2 text-over-gray z-10">We operate in major markets such as Central Asia, the Middle East, Europe, Africa, and East Asia.</p>
      <img class="absolute bottom-0 right-0" src="/svgs/overview.svg">
    </div>
  </section>
</template>

<script>
export default {
  name: 'OverviewSection',
}
</script>