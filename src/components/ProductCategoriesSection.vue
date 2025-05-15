<template>
  <section class="min-h-screen bg-white py-16 px-6">
    <div class="page-container">
      <h2 class="page-title mb-20">Product Categories</h2>

      <div class="relative overflow-hidden rounded-lg">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6">
          <!-- Oil & Gas -->
          <div class="product-category">
            <img src="/imgs/p1.webp" alt="Oil & Gas" class="product-img" />
            <div class="product-overlay">
              <h3 class="product-title">Oil & Gas</h3>
              <p class="product-desc">Oil, Gas, LPG, LNG, Diesel, Gasoline</p>
            </div>
          </div>

          <!-- Petrochemicals -->
          <div class="product-category">
            <img src="/imgs/p2.webp" alt="Petrochemicals" class="product-img" />
            <div class="product-overlay">
              <h3 class="product-title">Petrochemicals</h3>
              <p class="product-desc">Polypropylene (PP), Polyethylene (PE)</p>
            </div>
          </div>

          <!-- Raw Materials -->
          <div class="product-category">
            <img src="/imgs/p3.webp" alt="Raw Materials" class="product-img" />
            <div class="product-overlay">
              <h3 class="product-title">Raw Materials</h3>
              <p class="product-desc">Carbamide, Sulphur, Bitumen, Cement, Caustic Soda, Graphite</p>
            </div>
          </div>

          <!-- Drilling Chemicals & Fluids -->
          <div class="product-category">
            <img src="/imgs/p4.webp" alt="Drilling Chemicals" class="product-img" />
            <div class="product-overlay">
              <h3 class="product-title">Drilling Chemicals & Fluids</h3>
              <p class="product-desc">All types of drilling chemicals and fluids</p>
            </div>
          </div>

          <!-- Agricultural Products -->
          <div class="product-category">
            <img src="/imgs/p5.webp" alt="Agricultural Products" class="product-img" />
            <div class="product-overlay">
              <h3 class="product-title">Agricultural Products</h3>
              <p class="product-desc">Urea, Ammonium, Soda Ash, Potassium Ash, All fertilizers</p>
            </div>
          </div>

          <!-- Metal Products -->
          <div class="product-category">
            <img src="/imgs/p6.webp" alt="Metal Products" class="product-img" />
            <div class="product-overlay">
              <h3 class="product-title">Metal Products</h3>
              <p class="product-desc">Steel, Aluminum</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProductCategoriesSection',
}
</script>

<style scoped>
.product-category {
  @apply relative h-[500px] overflow-hidden;
}

.product-img {
  @apply w-full h-full object-cover transition-transform duration-500;
}

.product-category:hover .product-img {
  @apply transform scale-110;
}

.product-overlay {
  @apply absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-end p-4 text-white transition-opacity duration-300;
}

.product-title {
  @apply text-xl font-bold mb-1;
}

.product-desc {
  @apply text-sm;
}
</style>