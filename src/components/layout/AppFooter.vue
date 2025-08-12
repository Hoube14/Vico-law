<template>
  <footer class="bg-gray-900 border-t border-gray-800">
    <!-- Contact Form Section -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div data-aos="fade-right">
            <h3 class="text-2xl font-bold text-white mb-6">
              Har du en fundering eller en fråga?
            </h3>
            <p class="text-gray-300 mb-8">
              Kontakta oss gärna, och vi återkommer till dig så snart som möjligt!
              Juridbyrå VICO erbjuder gratis första konsultationer för att hjälpa dig
              att hitta svar och rätt väg framåt.
            </p>

            <form @submit.prevent="submitForm" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-300 mb-2">
                  Namn
                </label>
                <input id="name" v-model="form.name" type="text" required
                  class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Skriv in ditt namn" />
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-gray-300 mb-2">
                  E-post *
                </label>
                <input id="email" v-model="form.email" type="email" required
                  class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Skriv in din e-postadress" />
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-300 mb-2">
                  Meddelande
                </label>
                <textarea id="message" v-model="form.message" rows="4" required
                  class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Skriv in ditt meddelande"></textarea>
              </div>

              <div class="flex items-start">
                <input id="terms" v-model="form.terms" type="checkbox" required
                  class="mt-1 h-4 w-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500" />
                <label for="terms" class="ml-3 text-sm text-gray-300">
                  Jag är människa
                  <span class="text-blue-400 cursor-pointer hover:text-blue-300">reCaptcha</span>
                </label>
              </div>

              <button type="submit" :disabled="!isFormValid"
                class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                Skicka in
              </button>
            </form>
          </div>

          <!-- Map Section -->
          <div data-aos="fade-left">
            <div class="h-96 bg-gray-800 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2253.6989742568447!2d13.003984!3d55.596165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653a3f6c5b4c123%3A0x1234567890abcdef!2sStadionsgatan%2065%2C%20217%2062%20Malm%C3%B6%2C%20Sweden!5e0!3m2!1sen!2sse!4v1234567890123"
                width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="grayscale hover:grayscale-0 transition-all duration-300"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Bottom -->
    <div class="border-t border-gray-800 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <!-- Company Info -->
          <div>
            <div class="flex items-center mb-4">
              <img class="h-8 w-auto mr-3" src="/src/assets/vico-logo.svg" alt="VICO Juridik" />
              <span class="text-white font-semibold text-lg">JURIDBYRÅ VICO</span>
            </div>

            <div class="space-y-2 text-gray-300">
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd" />
                </svg>
                Stadionsgatan 65, 217 62 Malmö
              </div>
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                0793397487
              </div>
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                kontakt@vicojuridbyra.se
              </div>
            </div>
          </div>

          <!-- Copyright -->
          <div class="text-center md:text-right">
            <p class="text-gray-400 text-sm">
              © 2025 Juridbyrå VICO
            </p>
            <p class="text-gray-500 text-xs mt-1">
              Ansvarsförsäkring sedan 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { ContactForm } from '@/types'

const form = ref<ContactForm>({
  name: '',
  email: '',
  message: '',
  terms: false
})

const isFormValid = computed(() => {
  return form.value.name.trim() !== '' &&
    form.value.email.trim() !== '' &&
    form.value.message.trim() !== '' &&
    form.value.terms
})

const submitForm = () => {
  if (isFormValid.value) {
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', form.value)

    // Reset form
    form.value = {
      name: '',
      email: '',
      message: '',
      terms: false
    }

    // Show success message (you could use a toast notification library)
    alert('Tack för ditt meddelande! Vi återkommer så snart som möjligt.')
  }
}
</script>