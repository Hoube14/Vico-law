<template>
  <div class="pt-20">
    <!-- Hero Section -->
    <section class="py-20 bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6" data-aos="fade-up">
          Våra tjänster
        </h1>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          VICO Juridbyrå erbjuder juridisk hjälp och rådgivning inom olika rättsområden för att möta era specifika
          behov.
        </p>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-20 bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <div v-for="(service, index) in services" :key="service.id" class="service-card" :data-aos="'fade-up'"
            :data-aos-delay="index * 100">
            <div class="h-48 overflow-hidden">
              <img :src="service.image" :alt="service.title"
                class="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-white mb-4">
                {{ service.title }}
              </h3>

              <div class="space-y-3">
                <div v-for="item in service.services" :key="item.name"
                  class="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0">
                  <span class="text-gray-300">{{ item.name }}</span>
                  <span class="text-blue-400 font-semibold">{{ item.price }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Services -->
    <section class="py-20 bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Real Estate Services -->
          <div class="space-y-8" data-aos="fade-right">
            <div class="relative">
              <img src="/src/assets/real-estate.jpg" alt="Real Estate" class="w-full h-64 object-cover rounded-lg" />
              <div class="absolute inset-0 bg-gray-900/50 rounded-lg"></div>
            </div>

            <div>
              <h3 class="text-2xl font-bold text-white mb-4">
                Juridik i framtiden
              </h3>
              <div class="space-y-2 text-gray-300">
                <div class="flex justify-between">
                  <span>Bouppdelning</span>
                  <span class="text-blue-400">1 999 kr/h</span>
                </div>
                <div class="flex justify-between">
                  <span>Framtidsfullmakt</span>
                  <span class="text-blue-400">399 kr</span>
                </div>
                <div class="flex justify-between">
                  <span>Fullmakt</span>
                  <span class="text-blue-400">299 kr</span>
                </div>
                <div class="flex justify-between">
                  <span>Särkullbarn</span>
                  <span class="text-blue-400">1 999 kr/h</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Property Services -->
          <div class="space-y-8" data-aos="fade-left">
            <div class="relative">
              <img src="/src/assets/property-law.jpg" alt="Property Law" class="w-full h-64 object-cover rounded-lg" />
              <div class="absolute inset-0 bg-gray-900/50 rounded-lg"></div>
            </div>

            <div>
              <h3 class="text-2xl font-bold text-white mb-4">
                Fastighet & Bostad
              </h3>
              <div class="space-y-2 text-gray-300">
                <div class="flex justify-between">
                  <span>Fullmakt</span>
                  <span class="text-blue-400">299 kr</span>
                </div>
                <div class="flex justify-between">
                  <span>Lagfart</span>
                  <span class="text-blue-400">499 kr</span>
                </div>
                <div class="flex justify-between">
                  <span>Köpekontrakt</span>
                  <span class="text-blue-400">1 999 kr/h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <ContactCTA />
  </div>
</template>

<script setup lang="ts">
import type { Service } from '@/types'
import ContactCTA from '@/components/sections/ContactCTA.vue'

const services: Service[] = [
  {
    id: 'migration',
    title: 'Migrationsrätt',
    description: 'Hjälp med migrationsärenden',
    image: '/src/assets/migration-law.jpg',
    category: 'migration',
    services: [
      { name: 'Arbetstillstånd', price: '18 750 kr' },
      { name: 'Familjeanknyting', price: '18 750 kr' },
      { name: 'Överklagen', price: '18 750 kr' }
    ]
  },
  {
    id: 'administrative',
    title: 'Förvaltningsrätt och myndighetsbeslutt',
    description: 'Experthjälp med myndighetsbeslut',
    image: '/src/assets/administrative-law.jpg',
    category: 'administrative',
    services: [
      { name: 'Felaktiga myndighetsbeslutt', price: '1 999 kr/h' },
      { name: 'Felaktig handläggning', price: '1 999 kr/h' },
      { name: 'Överklagen', price: '18 750 kr' }
    ]
  },
  {
    id: 'family',
    title: 'Familjerätt',
    description: 'Familjerättsliga frågor',
    image: '/src/assets/family-law.jpg',
    category: 'family',
    services: [
      { name: 'Bodelning', price: '5 999 kr' },
      { name: 'Medlingsgreavgval', price: '599 kr' },
      { name: 'Samboavtal', price: '1 999 kr/h' },
      { name: 'Särkullbarn', price: '1 999 kr/h' },
      { name: 'Testamente', price: '3 495 kr' },
      { name: 'Äktenskapsförord', price: '2 995 kr' }
    ]
  }
]
</script>