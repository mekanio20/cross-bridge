<template>
    <section class="min-h-screen relative overflow-hidden">
        <!-- Background shapes -->
        <img src="/imgs/1.webp" alt="Background shapes" class="absolute top-0 left-0 w-full h-full object-cover" />
    </section>
</template>

<script>
import CrossBridgeLogo from './CrossBridgeLogo.vue'

export default {
    name: 'HeroSection',
    components: {
        CrossBridgeLogo
    }
}
</script>