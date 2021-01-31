<template>
    <section class="relative bg-white">
        <div
            class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style="height: 80px; transform: translateZ(0px);"
        >
            <svg
                class="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
            >
                <polygon class="text-white fill-current" points="2560 0 2560 100 0 100"></polygon>
            </svg>
        </div>
        <div class="relative container mx-auto py-10 pb-12 lg:pt-0 max-w-xl">
            <div class="px-10 pb-5">
                <h1 class="text-3xl text-gray-900">What can I do for you?</h1>
                <p v-for="(line, i) in lines" class="text-lg text-gray-800 mt-3" :key="i">{{ line }}</p>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    setup() {
        const lines = [
            "I am currently looking for a full-time job as a software developer, but I'm available for work on simple websites or short-term projects.",
            "I can provide a full-package deal, including design, implementation, hosting and maintenance. The process is transparent, and you don't have to pay until you're satisfied.",
            "In addition, I can assist with profiling such as logos, flyers or posters, through collaboration partners."
        ]

        return {
            lines
        }
    }
}
</script>
