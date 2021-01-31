<template>
    <section class="relative flex items-center content-center justify-center py-10 lg:pt-0">
        <div class="container mx-auto px-10 pb-5 max-w-xl">
            <h1 class="text-3xl text-gray-900 text-center">Briefly about me</h1>
            <p v-for="line in lines" :key="line" class="text-lg text-gray-800 mt-3">
                {{ line }}
            </p>
        </div>
    </section>
</template>
<script>
export default {
    setup() {
        const lines = [
            "I'm 25 years old, and I just finished my master's degree in computer science!",
            "Web development is my passion, and I love learning new things.",
            "I am patient and love solving hard problems, which means I won't stop until I do."
        ]
        return {
            lines
        }
    }
}
</script>