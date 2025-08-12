<template>
  <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <router-link to="/" class="flex items-center">
            <img class="h-8 w-auto" src="/src/assets/vico-logo.svg" alt="VICO Juridik" />
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="flex items-center space-x-8">
            <router-link v-for="item in navigation" :key="item.name" :to="item.href"
              class="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
              :class="{ 'text-white': $route.path === item.href }">
              {{ item.name }}
            </router-link>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button @click="mobileMenuOpen = !mobileMenuOpen"
            class="text-gray-400 hover:text-white focus:outline-none focus:text-white">
            <svg class="h-6 w-6" :class="{ 'hidden': mobileMenuOpen, 'block': !mobileMenuOpen }" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg class="h-6 w-6" :class="{ 'block': mobileMenuOpen, 'hidden': !mobileMenuOpen }" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div class="md:hidden overflow-hidden transition-all duration-300"
        :class="mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'">
        <div class="px-2 pt-2 pb-3 space-y-1 bg-gray-800 rounded-lg mt-2">
          <router-link v-for="item in navigation" :key="item.name" :to="item.href" @click="mobileMenuOpen = false"
            class="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-200"
            :class="{ 'text-white bg-gray-700': $route.path === item.href }">
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import type { NavItem } from '@/types'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const navigation: NavItem[] = [
  { name: 'Hem', href: '/' },
  { name: 'Tjänster', href: '/tjanster' }
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>