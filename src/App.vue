<template>
  <div class="w-screen min-h-screen bg-gray-300">
    <Hero />
    <About />
    <Services />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Services from './components/Services.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Hero,
    About,
    Services,
    Contact,
    Footer
  }
}
</script>
