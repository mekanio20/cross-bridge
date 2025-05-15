<template>
    <div class="min-h-screen">
        <Navbar />
        <HeroSection />
        <OverviewSection />
        <MissionVisionSection />
        <BusinessActivitiesSection />
        <ProductCategoriesSection />
        <AdvantagesSection />
        <SupplyChainSection />
        <AchievmentsSection />
        <ContactSection />
    </div>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue'
import OverviewSection from '@/components/OverviewSection.vue'
import MissionVisionSection from '@/components/MissionVisionSection.vue'
import BusinessActivitiesSection from '@/components/BusinessActivitiesSection.vue'
import ProductCategoriesSection from '@/components/ProductCategoriesSection.vue'
import AdvantagesSection from '@/components/Advantage.vue'
import SupplyChainSection from '@/components/SupplyChain.vue'
import AchievmentsSection from '@/components/Achievements.vue'
import ContactSection from '@/components/Contact.vue'
import Navbar from '@/components/Navbar.vue'

export default {
    name: "Home",
    components: {
        Navbar,
        HeroSection,
        OverviewSection,
        MissionVisionSection,
        BusinessActivitiesSection,
        ProductCategoriesSection,
        AdvantagesSection,
        SupplyChainSection,
        AchievmentsSection,
        ContactSection
    }
}
</script>