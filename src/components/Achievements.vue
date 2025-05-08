<template>
    <section id="achievements" class="relative h-screen overflow-hidden">
        <!-- Background gradient -->
        <div class="absolute inset-0 bg-gradient-to-r from-blue-gradient-start to-blue-gradient-end"></div>

        <!-- Background curved shape -->
        <div class="absolute bottom-0 left-0 right-0 h-1/3 bg-slate-300 rounded-tl-[40%]"></div>

        <!-- Ship image -->
        <div class="absolute bottom-48 left-48 w-64 h-64 md:w-96 md:h-96 bg-contain bg-no-repeat"
            style="background-image: url('/imgs/bg.jpeg')">
        </div>

        <!-- Content -->
        <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-8 pt-24 relative z-10">
            <div>
                <h1 class="text-4xl md:text-6xl text-white font-bold mb-12">Key Achievements<br />& Future Goals</h1>
            </div>

            <div class="bg-slate-100 bg-opacity-90 p-8 rounded-lg">
                <h2 class="text-2xl font-bold text-navy mb-4">Future plans for expansion, partnerships, or innovation
                </h2>
                <p class="text-base md:text-lg leading-relaxed text-navy mb-8">
                    Looking ahead, CrossBridge Trading LLC plans to expand its global reach, particularly in emerging
                    markets in Africa and South Asia. We are exploring new partnerships in renewable energy and are
                    committed to innovating our supply chain processes to improve efficiency, reduce costs, and enhance
                    sustainability.
                </p>

                <hr class="border-gray-400 my-6" />

                <h2 class="text-2xl font-bold text-navy mb-4">Major milestones or accomplishments</h2>
                <p class="text-base md:text-lg leading-relaxed text-navy">
                    CrossBridge Trading LLC has successfully established itself as a trusted partner in the
                    petrochemical and fuel trading industry. We have expanded our market presence across multiple
                    regions and strengthened our supplier relationships to ensure continuous growth and sustainability.
                </p>
            </div>
        </div>
    </section>
</template>