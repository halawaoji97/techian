<template>
  <section class="hero h-full w-full">
    <div
      class="lg: container mx-auto justify-between px-4 md:px-8 lg:flex lg:flex-row-reverse lg:items-center lg:px-16"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div class="-mt-10 md:mt-8">
        <TechianVue class="w-11/12 lg:w-full" />
      </div>

      <div
        class="flex flex-col items-center justify-center text-center tracking-wide md:mt-10 lg:items-start lg:text-left"
      >
        <h1
          class="text-3xl font-bold leading-10 text-black-primary md:text-4xl lg:text-5xl"
        >
          Everything You <span class="text-blue-primary">Need</span> <br />
          To Manage Your
          <span class="text-blue-primary">Bussiness</span>
        </h1>
        <p class="mt-6 text-base font-normal leading-relaxed text-grey-primary">
          We provide the best real-time solutions,
          <br class="hidden md:block" />
          tools and personalised services to keep your
          <br class="hidden md:block" />
          bussiness go faster & better
        </p>
        <div
          class="mt-12 flex w-full flex-col items-center justify-center md:mt-14 md:flex-row lg:items-start lg:justify-start"
        >
          <a
            href="#contact-us"
            class="default-button-primary block rounded-xl py-3 px-8 text-base font-medium tracking-wide text-white-primary outline-0 ease-out md:font-semibold"
          >
            Contact Us Now
          </a>
          <a
            href="#benefits"
            class="mt-8 block rounded-xl bg-transparent py-3 px-8 text-base font-medium tracking-wide text-blue-primary ring-2 ring-blue-primary hover:bg-slate-100 md:mt-0 md:ml-12 lg:font-semibold"
          >
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
