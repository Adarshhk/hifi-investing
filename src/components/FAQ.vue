<template>
    <div class="mx-auto px-4 py-12">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-semibold mb-2 text-[#222222]">
          Frequently asked <span class="text-[#FDBB3B]">question</span>
        </h2>
        <p class="text-[#787878]">
          Find answers to the most common questions about [Your Website Name] and our
          algorithmic trading platform.
        </p>
      </div>
  
      <div class="space-y-4 max-w-4xl mx-auto">
        <div v-for="(faq, index) in faqs" :key="index" class="bg-[#F6F6F6] rounded-lg border border-[#E2E2E2] w-full">
          <button
            @click="toggleFaq(index)"
            class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors duration-200 rounded-lg"
          >
            <span class="font-medium text-[#222222]">{{ faq.question }}</span>
            <img src="/src/assets/faqplus.svg"
              :class="[
                'w-5 h-5 transition-transform duration-200',
                { 'rotate-45': faq.isOpen }
              ]"
            />
          </button>
          <div
            v-show="faq.isOpen"
            class="px-6 pb-4 text-[#787878]"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const faqs = ref([
    {
      question: 'What is algorithmic trading?',
      answer: 'Algorithmic trading uses automated strategies to execute trades based on market data and trends.',
      isOpen: false
    },
    {
      question: 'How do I get started with HiFi Investment?',
      answer: 'Getting started is easy! Create an account, complete your profile, and follow our step-by-step guide to begin trading.',
      isOpen: false
    },
    {
      question: 'Can I customize my trading strategies?',
      answer: 'Yes, you can customize and fine-tune your trading strategies to match your investment goals and risk tolerance.',
      isOpen: false
    },
    {
      question: 'Do I need to have previous trading experience?',
      answer: 'No prior trading experience is required. Our platform is designed to be accessible for both beginners and experienced traders.',
      isOpen: false
    },
    {
      question: 'What markets can I trade on HiFi Investing?',
      answer: 'We offer access to a wide range of markets including stocks, cryptocurrencies, forex, and commodities.',
      isOpen: false
    }
  ])
  
  const toggleFaq = (index) => {
    faqs.value[index].isOpen = !faqs.value[index].isOpen
  }
  </script>