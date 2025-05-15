<template>
    <div class="w-full fixed !z-50 bg-nav-white">
        <div class="container flex items-center justify-between">
            <div class="flex items-center">
                <div class="w-[40px]">
                    <img class="w-full h-full object-cover" src="/svgs/logo.svg">
                </div>
                <router-link to="/" class="font-poppins font-bold">
                    CrossBridge
                </router-link>
            </div>
            <div class="flex items-center space-x-2">
                <router-link v-for="item in items" :key="item.id" :to="item.route" class="font-poppins font-medium text-sm px-6 py-8 cursor-pointer hover:text-hero-green duration-300">
                    {{ item.name }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    data() {
        return {
            items: [
                {
                    id: 1,
                    name: 'About us',
                    route: '#about'
                },
                {
                    id: 2,
                    name: 'Business Activities',
                    route: '#business_activities'
                },
                {
                    id: 3,
                    name: 'Product Categories',
                    route: '#product_categories'
                },
                {
                    id: 4,
                    name: 'Advantages',
                    route: '#advantages'
                },
                {
                    id: 5,
                    name: 'Achievements',
                    route: '#achievements'
                },
                {
                    id: 6,
                    name: 'Contact us',
                    route: '#contact_us'
                }
            ]
        }
    }
}
</script>