<template>
  <section class="w-full h-full hero">
    <div class="container px-4 lg:flex lg:flex-row-reverse lg: justify-between lg:items-center md:px-8 mx-auto lg:px-16"
      data-aos="fade-up" data-aos-duration="2000">
      <div class="-mt-10 md:mt-8">
        <TechianVue class="w-11/12 lg:w-full" />
      </div>

      <div
        class="flex justify-center items-center text-center flex-col tracking-wide lg:items-start lg:text-left md:mt-10">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-black-primary leading-10">
          Everything You <span class="text-blue-primary">Need</span> <br />
          To Manage Your
          <span class="text-blue-primary">Bussiness</span>
        </h1>
        <p class="text-grey-primary text-base font-medium leading-relaxed mt-6">
          We provide the best real-time solutions, <br class="hidden md:block" />
          tools and personalised services to keep your <br class="hidden md:block" />
          bussiness go faster & better
        </p>
        <div
          class="flex justify-center items-center flex-col mt-12 md:mt-14 lg:justify-start lg:items-start md:flex-row w-full">
          <a href="#contact-us"
            class="default-button-primary ease-out block py-3 px-8 font-medium text-base tracking-wide text-white-primary rounded-xl md:font-semibold outline-0">
            Contact Us Now
          </a>
          <a href="#benefits"
            class="bg-transparent block ring-2 py-3 px-8 font-medium text-base text-blue-primary hover:bg-slate-100 tracking-wide ring-blue-primary rounded-xl lg:font-semibold mt-8 md:mt-0 md:ml-12">
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import TechianVue from "./elements/Techian";
</script>
<style lang=""></style>
