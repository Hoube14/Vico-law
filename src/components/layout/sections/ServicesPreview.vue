<template>
  <section class="py-20 bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          Våra tjänster
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Vi erbjuder juridisk hjälp och rådgivning inom olika rättsområden.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(service, index) in services" :key="service.id"
          class="bg-gray-800 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
          :data-aos="'fade-up'" :data-aos-delay="index * 100">
          <div class="h-48 overflow-hidden">
            <img :src="service.image" :alt="service.title"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-white mb-3">
              {{ service.title }}
            </h3>
            <p class="text-gray-300 mb-4">
              {{ service.description }}
            </p>
            <router-link to="/tjanster"
              class="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-200">
              Läs mer
              <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </router-link>
          </div>
        </div>
      </div>

      <!-- View All Services Button -->
      <div class="text-center mt-12" data-aos="fade-up">
        <router-link to="/tjanster"
          class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-block">
          Se alla tjänster
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Service } from '@/types'

const services: Partial<Service>[] = [
  {
    id: 'migration',
    title: 'Migrationsrätt',
    description: 'Vi erbjuder juridisk hjälp och rådgivning på olika rättsområden.',
    image: '/src/assets/migration-law.jpg'
  },
  {
    id: 'administrative',
    title: 'Förvaltningsrätt och myndighetsbeslutt',
    description: 'Experthjälp med myndighetsbeslut och förvaltningsfrågor.',
    image: '/src/assets/administrative-law.jpg'
  },
  {
    id: 'family',
    title: 'Familjerätt',
    description: 'Professionell hjälp inom familjerättsliga frågor.',
    image: '/src/assets/family-law.jpg'
  }
]
</script>