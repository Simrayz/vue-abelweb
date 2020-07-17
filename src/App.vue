<template>
  <div class="w-screen min-h-screen bg-gray-300">
    <Hero />
    <About />
    <Services />
    <Contact />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Services from './components/Services.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Hero,
    About,
    Services,
    Contact
  }
}
</script>
