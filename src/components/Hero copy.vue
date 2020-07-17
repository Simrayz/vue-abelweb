<template>
    <div class="hero">
        <div class="container mx-auto flex items-center p-3">
            <div class="bg-white h-10 w-10" />
            <div class="flex-1 flex items-center justify-end">
                <a href="#responsive" class="mr-4 text-gray-100 hover:text-gray-300">About</a>
                <a href="#responsive" class="mr-4 text-gray-100 hover:text-gray-300">Examples</a>
                <a href="#responsive" class="text-gray-100 hover:text-gray-300">Contact</a>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .hero {
        background-image: url('assets/code-bg.jpg');
        height: 600px;
        @apply bg-blue-500;
    }
</style>