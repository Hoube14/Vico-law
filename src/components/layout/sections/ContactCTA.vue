<template>
  <section class="py-20 bg-gray-800">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div data-aos="fade-up">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          Har du en fundering eller en fråga?
        </h2>
        <p class="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Kontakta oss gärna, och vi återkommer till dig så snart som möjligt!
          Juridbyrå VICO erbjuder gratis första konsultationer för att hjälpa dig
          att hitta svar och rätt väg framåt.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button @click="scrollToContact"
            class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
            Kontakta oss
          </button>
          <a href="tel:0793397487"
            class="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-block">
            Ring direkt
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const scrollToContact = () => {
  // For now, we'll scroll to the footer
  // Later we can implement a contact form modal or section
  const footer = document.querySelector('footer')
  if (footer) {
    footer.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>