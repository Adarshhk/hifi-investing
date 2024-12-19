<template>
    <div class="mt-20 w-[96%] rounded-md bg-[#222222] mx-auto">
      <h2 class="text-[33px] font-semibold text-center mx-auto text-white pt-20 max-w-3xl">
        Explore the Powerful Features That Set
        <span class="text-[#FDBB3B]">HiFi Investing</span> Apart
      </h2>
      <p class="text-[16px] font-light text-center text-white mt-3 px-3">
        Artificial Intelligence refers to the development of computer systems that can <br> perform tasks that
      </p>
  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-[95%] mx-auto mt-10 p-3 pb-12">
        <div
          v-for="feature in features"
          :key="feature.id"
          class="rounded-md bg-[#2C2C2C] p-3 pl-8 h-[272px] transition-feature duration-1000 ease-out"
          :class="{ 'opacity-100 translate-y-0': isVisible(feature.id), 'opacity-0 translate-y-10': !isVisible(feature.id) }"
          v-intersection-observer="{ callback: (entries) => onIntersect(entries, feature.id), options: { threshold: 0.1 } }"
        >
          <img :src="feature.icon" :alt="feature.title" class="my-3">
          <p class="text-[16px] font-semibold text-white mt-2">{{ feature.title }}</p>
          <p class="text-[16px] font-extralight text-white">{{ feature.description }}</p>
          <button class="text-[#FDBB3B] underline text-[14px] font-light mt-4">
            Know More
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import img1 from '/src/assets/feature1.svg'
  import img2 from '/src/assets/feature2.svg'
  import img3 from '/src/assets/feature3.svg'
  import img4 from '/src/assets/feature4.svg'
  import img5 from '/src/assets/feature5.svg'
  import img6 from '/src/assets/feature6.svg'
  
  const features = [
    {
      id: 1,
      icon: img1,
      title: 'Advanced Algorithmic Trading',
      description: 'Execute trades with precision and speed using cutting-edge algorithms optimized for various market conditions'
    },
    {
      id: 2,
      icon: img2,
      title: 'Customizable Strategies',
      description: 'Design and implement trading strategies tailored to your goals, risk tolerance, and preferred assets.'
    },
    {
      id: 3,
      icon: img3,
      title: 'Real-Time Data and Insights',
      description: 'Stay informed with live market data, predictive analytics, and actionable alerts for smarter decisions.'
    },
    {
      id: 4,
      icon: img4,
      title: 'Comprehensive Risk Management',
      description: 'Protect your investments with features like automated stop-losses, position sizing, and real-time monitoring.'
    },
    {
      id: 5,
      icon: img5,
      title: 'Backtesting and Optimization',
      description: 'Stay informed with live market data, predictive analytics, and actionable alerts for smarter decisions.'
    },
    {
      id: 6,
      icon: img6,
      title: 'Educational Courses',
      description: 'Protect your investments with features like automated stop-losses, position sizing, and real-time monitoring.'
    }
  ]
  
  const visibleFeatures = ref(new Set())
  
  const isVisible = (id) => visibleFeatures.value.has(id)
  
  const onIntersect = (entries, id) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        visibleFeatures.value.add(id)
      } else {
        visibleFeatures.value.delete(id)
      }
    })
  }
  
  // Custom directive for intersection observer
  const vIntersectionObserver = {
    mounted(el, binding) {
      const observer = new IntersectionObserver(binding.value.callback, binding.value.options)
      observer.observe(el)
  
      el._intersectionObserver = observer
    },
    unmounted(el) {
      if (el._intersectionObserver) {
        el._intersectionObserver.disconnect()
      }
    }
  }
  </script>
  
  <style>
  html {
    scroll-behavior: smooth;
  }
  
  .transition-feature {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 1000ms;
  }
  </style>