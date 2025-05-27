<template>
    <div class="container">
        <div
            class="bg-hero-white rounded-xl flex flex-col items-start justify-start p-32">
            <div class="flex flex-col space-y-20">
                <h2 class="font-poppins font-medium text-over-blue text-5xl">Information Technologies</h2>
                <p class="font-poppins text-2xl text-over-blue max-w-3xl">
                    The company focuses on innovative Information Technology services and is active across several core sectors,
                    including:
                </p>
            </div>
            <h2 class="font-poppins font-medium text-over-blue text-5xl mt-40 text-center self-center">Hardware</h2>
            <div class="w-full grid grid-cols-3 gap-20 mt-32">
                <div v-for="item in hardware" :key="item.id" class="flex flex-col items-center justify-center space-y-10 text-center">
                    <div class="w-fit p-10 bg-white rounded-full">
                        <div class="w-24">
                            <img class="w-full h-full object-cover" :src="item.img">
                        </div>
                    </div>
                    <h3 class="font-poppins font-semibold text-2xl text-over-blue">{{ item.name }}</h3>
                    <p class="font-poppins text-lg text-over-blue">
                        {{ item.desc }}
                    </p>
                </div>
            </div>
            <h2 class="font-poppins font-medium text-over-blue text-5xl mt-40 text-center self-center">Software</h2>
            <div class="w-full grid grid-cols-3 gap-20 mt-32">
                <div v-for="item in software" :key="item.id" class="flex flex-col items-center justify-center space-y-10 text-center">
                    <div class="w-fit p-10 bg-white rounded-full">
                        <div class="w-24">
                            <img class="w-full h-full object-cover" :src="item.img">
                        </div>
                    </div>
                    <h3 class="font-poppins font-semibold text-2xl text-over-blue">{{ item.name }}</h3>
                    <p class="font-poppins text-lg text-over-blue">
                        {{ item.desc }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            hardware: [
                {
                    id: 1,
                    name: 'Hardware Procurement',
                    desc: 'Sourcing high-performance servers, workstations, and networking equipment.',
                    img: '/imgs/h1.webp'
                },
                {
                    id: 2,
                    name: 'Custom PC Solutions',
                    desc: 'Assembling and configuring custom-built PCs tailored to specific needs.',
                    img: '/imgs/h2.webp'
                },
                {
                    id: 3,
                    name: 'Network Installation & Maintenance',
                    desc: 'Installing and maintaining routers, switches, firewalls, and cabling.',
                    img: '/imgs/h3.webp'
                },
                {
                    id: 4,
                    name: 'Infrastructure Setup',
                    desc: 'Setting up data centers and on-site IT infrastructure.',
                    img: '/imgs/h4.webp'
                },
                {
                    id: 5,
                    name: 'Diagnostics & Repair',
                    desc: 'Providing diagnostics, repair, and replacement services.',
                    img: '/imgs/h5.webp'
                },
                {
                    id: 6,
                    name: 'Software Compatibility',
                    desc: 'Ensuring compatibility with existing software environments.',
                    img: '/imgs/h6.webp'
                }
            ],
            software: [
                {
                    id: 1,
                    name: 'Frontend Development',
                    desc: 'Creating responsive, fast, and visually consistent user interfaces for websites and web apps.',
                    img: '/imgs/s1.webp'
                },
                {
                    id: 2,
                    name: 'Backend Development',
                    desc: 'Building powerful, secure, and scalable server-side systems to handle logic, data, and performance.',
                    img: '/imgs/s2.webp'
                },
                {
                    id: 3,
                    name: 'UI/UX Design',
                    desc: 'Designing user-friendly, elegant, and accessible interfaces that enhance engagement and usability.',
                    img: '/imgs/s3.webp'
                },
                {
                    id: 4,
                    name: 'Mobile Development',
                    desc: 'Developing intuitive mobile apps for smartphones and tablets, optimized for both performance and design.',
                    img: '/imgs/s4.webp'
                },
                {
                    id: 5,
                    name: 'DevOps & Deployment',
                    desc: 'Ensuring smooth software delivery through automation, updates, monitoring, and cloud deployment.',
                    img: '/imgs/s5.webp'
                },
                {
                    id: 6,
                    name: 'Support',
                    desc: 'Providing updates, monitoring, fixes, and support to keep your apps secure and current.',
                    img: '/imgs/s6.webp'
                }
            ]
        }
    }
}
</script>