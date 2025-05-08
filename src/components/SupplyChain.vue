<template>
    <section id="supply-chain" class="relative h-screen overflow-hidden bg-slate-blue">
        <!-- Background curved shape -->
        <div class="absolute bottom-0 right-0 w-full h-1/3 bg-navy-dark rounded-tr-[70%]"></div>

        <!-- Content -->
        <div class="container mx-auto px-4 md:px-8 pt-24 relative z-10">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h2 class="text-2xl md:text-3xl text-white font-bold mb-8">Supply Chain & Logistics</h2>
                    <p class="text-base md:text-lg text-white leading-relaxed">
                        We source our products through direct agreements with trusted suppliers and
                        manufacturers, ensuring that only high-quality goods are procured. Shipments are made based on
                        international contracts, adhering to all necessary standards and regulations to maintain the
                        company's reputation for reliability and professionalism. Our logistics channels are
                        continuously
                        developing as we collaborate with leading transport companies to ensure the timely and safe
                        delivery of products across Europe, Asia, and other key markets. Additionally, we provide
                        flexible delivery solutions tailored to the specific needs of our clients in various countries.
                    </p>
                </div>

                <div>
                    <h2 class="text-2xl md:text-3xl text-white font-bold mb-8">Supply Partners</h2>
                    <p class="text-base md:text-lg text-white leading-relaxed mb-6">
                        Our primary supply partners include Turkmenistan, the Middle East, China,
                        India and European countries. These long-term relationships allow us to
                        provide a wide range of products at competitive prices.
                    </p>

                    <div class="space-y-4">
                        <div>
                            <h3 class="text-xl text-white font-bold">Turkmenistan</h3>
                            <p class="text-base md:text-lg text-white">– Major supplier of petrochemicals and fuels</p>
                        </div>
                        <div>
                            <h3 class="text-xl text-white font-bold">Middle East</h3>
                            <p class="text-base md:text-lg text-white">– Strategic partnerships with oil and gas
                                producers</p>
                        </div>
                        <div>
                            <h3 class="text-xl text-white font-bold">China</h3>
                            <p class="text-base md:text-lg text-white">– Supplier of industrial materials and chemicals
                            </p>
                        </div>
                        <div>
                            <h3 class="text-xl text-white font-bold">India</h3>
                            <p class="text-base md:text-lg text-white">– Key source for agricultural products and
                                fertilizers</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 class="text-2xl md:text-3xl text-white font-bold mb-8">Transportation and Logistics Capabilities
                    </h2>
                    <p class="text-base md:text-lg text-white leading-relaxed">
                        CrossBridge Trading LLC uses both maritime and land transportation to
                        deliver goods to countries in Europe, Central Asia, and South Asia. Our
                        strategic partnerships with major transportation firms allow us to ensure
                        timely and secure deliveries while minimizing risks and costs. We are
                        also experienced in working with international customs procedures,
                        offering a complete range of logistics services including customs clearance,
                        cargo insurance, and shipment monitoring at every stage of the
                        delivery process.
                    </p>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <PageFooter :page="7" />
    </section>
</template>