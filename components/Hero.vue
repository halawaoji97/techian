<template lang="">
  <section class="w-full hero">
    <div
      class="container px-4 lg:flex lg:flex-row-reverse lg: justify-between lg:items-center lg:px-16"
    >
      <div>
        <TechianVue />
      </div>

      <div
        class="flex justify-center mt-10 items-center text-center flex-col tracking-wide lg:items-start lg:text-left"
      >
        <h1
          class="text-3xl md:text-4xl lg:text-5xl font-bold text-black-primary leading-10"
        >
          Everything You <span class="text-blue-primary">Need</span> <br />
          To Manage Your
          <span class="text-blue-primary">Bussiness</span>
        </h1>
        <p class="text-grey-primary text-base font-medium leading-relaxed mt-6">
          We provide the best real-time solutions, <br />
          tools and personalised services to keep your <br />
          bussiness go faster & better
        </p>
        <div
          class="flex justify-center items-center flex-col mt-12 md:mt-14 lg:justify-start lg:items-start md:flex-row w-full"
        >
          <button
            class="default-button-primary ease-out block py-3 px-8 font-medium text-base tracking-wide text-white-primary rounded-xl md:font-semibold outline-0"
          >
            Contact Us
          </button>
          <button
            class="bg-transparent block ring-2 py-3 px-8 font-medium text-base text-blue-primary hover:bg-grey-secondary tracking-wide ring-blue-primary rounded-xl lg:font-semibold mt-8 md:mt-0 md:ml-12"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import TechianVue from "./elements/Techian";
</script>
<style lang=""></style>
