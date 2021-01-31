<template>
    <div class="relative w-full pt-16 pb-32 flex content-center items-center justify-center" style="min-height: 60vh;">
        <div class="hero-image absolute top-0 w-full h-full bg-center bg-cover">
            <span id="blackOverlay" class="w-full h-full absolute opacity-75 bg-black" />
        </div>
        <div class="container relative mx-auto">
            <div class="items-center flex flex-wrap">
                <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                    <h1 class="text-gray-200 text-4xl font-medium">Hello, I'm Simen</h1>
                    <p class="mt-4 text-lg text-gray-300">A computer science engineer, passionate about web development.</p>
                </div>
            </div>
        </div>
        <div
            class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style="height: 70px; transform: translateZ(0px);"
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
                <polygon class="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon>
            </svg>
        </div>
      </div>
    <div
      class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
      style="height: 70px; transform: translateZ(0px);"
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
        <polygon
          class="text-gray-300 fill-current"
          points="2560 0 2560 100 0 100"
        />
      </svg>
    </div>

</template>
<style scoped>
.hero-image {
  background-image: url(../assets/gray-laptop-code.jpg);
}
</style>
