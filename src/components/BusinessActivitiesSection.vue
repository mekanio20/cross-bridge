<template>
  <section class="min-h-screen bg-white py-16 px-6">
    <div class="page-container">
      <div class="flex flex-col lg:flex-row justify-between mb-12">
        <h2 class="page-title lg:w-2/3">Business Activities</h2>
        <p class="lg:w-2/3 text-lg">
          CrossBridge Trading LLC specializes in the trade of a diverse range of products across various industries,
          including:
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <!-- Oil & Gas Industry -->
        <div class="business-card">
          <img src="/imgs/p1.webp" alt="Oil & Gas Industry" class="business-img" />
          <h3 class="business-title">Oil & Gas Industry</h3>
          <p class="business-desc">Supplying fuels, petrochemicals, and drilling chemicals</p>
        </div>

        <!-- Energy Sector -->
        <div class="business-card">
          <img src="/imgs/p2.webp" alt="Energy Sector" class="business-img" />
          <h3 class="business-title">Energy Sector</h3>
          <p class="business-desc">Providing LNG, LPG, and other energy solutions</p>
        </div>

        <!-- Agriculture -->
        <div class="business-card">
          <img src="/imgs/p3.webp" alt="Agriculture" class="business-img" />
          <h3 class="business-title">Agriculture</h3>
          <p class="business-desc">Supplying fertilizers and raw materials for crop production</p>
        </div>

        <!-- Construction Industry -->
        <div class="business-card">
          <img src="/imgs/p4.webp" alt="Construction Industry" class="business-img" />
          <h3 class="business-title">Construction Industry</h3>
          <p class="business-desc">Supporting the road construction, civil engineering, and refinery construction with
            essential materials such as bitumen, cement, and steel</p>
        </div>

        <!-- Manufacturing & Industrial Sectors -->
        <div class="business-card">
          <img src="/imgs/p5.webp" alt="Manufacturing" class="business-img" />
          <h3 class="business-title">Manufacturing & Industrial Sectors</h3>
          <p class="business-desc">Providing raw materials and metal products for various production needs</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'BusinessActivitiesSection',
}
</script>

<style scoped>
.business-card {
  @apply bg-white rounded-lg overflow-hidden transition-transform duration-300;
}

.business-card:hover {
  @apply transform -translate-y-1;
}

.business-img {
  @apply w-full h-48 object-cover;
}

.business-title {
  @apply text-xl font-bold p-4 pb-2;
}

.business-desc {
  @apply p-4 pt-0 text-gray-700;
}
</style>