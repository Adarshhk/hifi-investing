<template>
    <nav class="flex justify-between p-2 md:p-4 gap-2">
        <div class="flex items-center">
            <img src="/src/assets/images/navlogo.png" alt="logo" class="w-40 hidden lg:block">
            <img @click=toggleNav src="/src/assets/hamburger.svg" alt=""
                class="min-w-6 max-w-6 block md:hidden cursor-pointer">
        </div>
        <ul
            class="hidden md:flex border rounded-full gap-2 items-center text-sm font w-full max-w-3xl justify-evenly text-[#787878] border-[#E2E2E2]">
            <li :class="{ 'bg-[#222222] text-white': activeItem == item.name }"
                class="py-2 lg:px-5 px-3 my-1 rounded-full cursor-pointer transition-all duration-200 hover:bg-[#E2E2E2] hover:text-[#222222]"
                @click="changeActiveItem(item.name)" v-for="item in navItems ">{{ item.name }}</li>
        </ul>

        <!-- mobile -->
        <ul v-if="nav === true" class="text-sm w-full max-w-3xl  text-[#787878] fixed z-30 bg-white top-16 rounded-md p-2">
            <li :class="{ 'bg-[#222222] text-white': activeItem == item.name }"
                class="py-2 lg:px-5 px-3 my-1 rounded-full cursor-pointer transition-all duration-200 "
                @click="changeActiveItem(item.name)" v-for="item in navItems ">{{ item.name }}</li>
        </ul>
        <div class="flex items-center">
            <a target="_blank" href="https://app.hifiinvesting.com/" class="text-white lg:px-8 px-4 py-2 rounded-full bg-[#222222] ">
                Login
            </a>
        </div>
    </nav>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Our Courses', path: '/courses' },
    { name: 'Why Us', path: '/why-us' },
    { name: 'Algo Trading', path: '/algo-trading' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
    { name: "FAQ's", path: '/faqs' },
]

const activeItem = ref('Home')

const changeActiveItem = (name) => {
    activeItem.value = name;
}

const nav = ref(false);

const toggleNav = () => {
    nav.value = !nav.value
    console.log(nav.value)
}
</script>