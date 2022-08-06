<script setup>
const isOpenSidebar = ref(false);
const openSidebar = () => {
  isOpenSidebar.value = true;
};


const closeSidebar = () => {
  isOpenSidebar.value = false;
};
</script>
<template>
  <header class="w-full lg:flex justify-between items-center md:px-8 lg:px-16 lg:py-4">
    <div class="flex justify-between items-center relative py-4">
      <div class="flex p-0 items-center">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M29.6752 54.3393L15.0085 43.8631C14.1874 43.2766 13.7768 42.9833 13.5552 42.5526C13.3335 42.1218 13.3335 41.6173 13.3335 40.6082V23.3918C13.3335 23.0704 13.3335 22.8003 13.3407 22.5673L31.0002 35.1813V55.2313C30.6434 55.0309 30.2271 54.7336 29.6752 54.3393ZM33.0002 55.2313C33.3569 55.0309 33.7732 54.7336 34.3251 54.3393L48.9918 43.8631C49.8129 43.2766 50.2235 42.9833 50.4452 42.5526C50.6668 42.1218 50.6668 41.6173 50.6668 40.6082V23.3918C50.6668 23.0704 50.6668 22.8003 50.6597 22.5673L33.0002 35.1813V55.2313ZM49.7944 20.7276L32.0002 33.4377L14.2059 20.7276C14.4172 20.5592 14.68 20.3715 15.0085 20.1369L29.6752 9.66067C30.7979 8.85875 31.3592 8.45779 32.0002 8.45779C32.6411 8.45779 33.2024 8.85875 34.3251 9.66067L48.9918 20.1369C49.3203 20.3715 49.5831 20.5592 49.7944 20.7276Z"
            fill="#3364ED" />
        </svg>
        <h1 class="text-2xl font-bold text-black-primary">
          Tech<span class="text-red-primary">ian</span>
        </h1>
      </div>
      <button class="lg:hidden" @click="openSidebar">
        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M42.75 15.75H11.25" stroke="#060E3D" stroke-width="2" stroke-linecap="round" />
          <path d="M42.75 27H20.25" stroke="#060E3D" stroke-width="2" stroke-linecap="round" />
          <path d="M42.75 38.25H29.25" stroke="#060E3D" stroke-width="2" stroke-linecap="round" />
        </svg>
      </button>
    </div>
    <nav
      :class="isOpenSidebar ? 'active rounded-xl bg-black-primary text-white-primary absolute inset-4 h-3/4 lg:static lg:bg-transparent lg:text-black-primary lg:h-auto lg:w-3/5 backdrop' : 'rounded-xl bg-black-primary text-white-primary absolute inset-4 h-3/4 lg:static lg:bg-transparent lg:text-black-primary lg:h-auto lg:w-3/5 backdrop'"
      @click="closeSidebar">
      <ul
        class="flex justify-around flex-col items-center h-full py-4 relative lg:justify-between lg:flex-row lg:w-full">
        <li class="nav-item" @click="closeSidebar">
          <a href="#home" class="text-base font-medium tracking-wider">Home</a>
        </li>
        <li class="nav-item">
          <a href="#services" @click="closeSidebar" class="text-base font-medium tracking-wider">Services</a>
        </li>
        <li class="nav-item" @click="closeSidebar">
          <a href="#products" class="text-base font-medium tracking-wider">Products</a>
        </li>
        <li class="nav-item" @click="closeSidebar">
          <a href="#testimony" class="text-base font-medium tracking-wider">Testimony</a>
        </li>
        <li class="nav-item" @click="closeSidebar">
          <a href="#why-us" class="text-base font-medium tracking-wider">About Us</a>
        </li>
        <li @click="closeSidebar">
          <a href="#contact-us"
            class="bg-transparent block ring-2 py-2.5 mb-2 px-8 font-medium text-base text-blue-primary hover:bg-slate-100 tracking-wide ring-blue-primary rounded-xl lg:font-semibold">Contact
            Us</a>
        </li>
        <button class="absolute top-0 p-4 right-0 z-10 text-white lg:hidden" @click="closeSidebar">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22" cy="22" r="16.5" stroke="#F8FCFF" stroke-width="2" />
            <path d="M16.5002 27.4994L27.5002 16.4994" stroke="#F8FCFF" stroke-width="2" />
            <path d="M27.5 27.5L16.5 16.5" stroke="#F8FCFF" stroke-width="2" />
          </svg>
        </button>
      </ul>
    </nav>
  </header>
</template>

