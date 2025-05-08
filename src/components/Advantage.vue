<template>
    <section id="competitive-advantage" class="relative h-screen overflow-hidden bg-navy-dark">
        <!-- Background curved shape -->
        <div class="absolute bottom-0 left-0 right-0 h-1/3 bg-slate-300 rounded-tl-[70%]"></div>

        <!-- Background image -->
        <div class="absolute top-0 right-0 w-1/2 h-screen bg-cover bg-center"
            style="background-image: url('https://images.pexels.com/photos/1671324/pexels-photo-1671324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')">
        </div>

        <!-- Content -->
        <div class="container mx-auto px-4 md:px-8 pt-24 md:pt-32 relative z-10">
            <h1 class="text-4xl md:text-6xl text-white font-bold mb-20">Competitive Advantage</h1>

            <div class="max-w-2xl">
                <p class="text-lg md:text-xl text-white leading-relaxed mb-8">
                    CrossBridge Trading LLC distinguishes itself through competitive pricing and a strong
                    reputation for reliability. We prioritize building lasting relationships with our clients
                    and partners, ensuring that we consistently meet and exceed expectations in both
                    product quality and service delivery.
                </p>
            </div>
        </div>

        <!-- Footer -->
        <PageFooter :page="6" />
    </section>
</template>