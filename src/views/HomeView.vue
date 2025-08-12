<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img src="/src/assets/office-background.jpg" alt="Modern office" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gray-900/70"></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="max-w-3xl mx-auto" data-aos="fade-up">
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
            Välkommen till<br>
            <span class="text-blue-400">Juridbyrå VICO</span>
          </h1>
          <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Juridbyrå VICO - vägen till din rättvisa
          </p>

          <!-- Contact Info -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <div class="flex items-center text-white">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd" />
              </svg>
              Stadionsgatan 65, 217 62 Malmö
            </div>
            <div class="flex items-center text-white">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              0793397487
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Kontakta oss
            </button>
            <router-link to="/tjanster"
              class="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-block">
              Läs mer
            </router-link>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>

    <!-- About Section -->
    <AboutSection />

    <!-- Services Preview -->
    <ServicesPreview />

    <!-- Contact CTA -->
    <ContactCTA />
  </div>
</template>

<script setup lang="ts">
import AboutSection from '@/components/sections/AboutSection.vue'
import ServicesPreview from '@/components/sections/ServicesPreview.vue'
import ContactCTA from '@/components/sections/ContactCTA.vue'
</script>