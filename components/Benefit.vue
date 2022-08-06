<template>
  <section class="w-full pt-0 lg:py-20" id="benefits">
    <div class="container px-4 md:px-16 mx-auto">
      <div class="text-center">
        <h5 class="text-base text-red-primary font-semibold mb-2">
          OUR SUPER BENEFITS
        </h5>
        <h2 class="text-3xl font-bold text-black-primary">
          Launch Faster & Better
        </h2>
      </div>

      <div
        class="grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 gap-10 lg:gap-20 lg:grid-rows-1 mt-12">
        <div class="rounded-xl smooth-shadow mx-auto p-6 max-w-md w-full md:max-w-full">
          <div class="w-16 h-16 rounded-full ring-2 ring-white-primary bg-grey-secondary">
            <RealTime class="h-full w-full p-2" />
          </div>
          <h6 class="text-xl mt-6 font-bold text-black-primary leading-10">
            Real-time solution
          </h6>
          <p class="text-grey-primary text-base font-medium leading-relaxed mt-1">
            Your application will run
            <br class="hidden md:block" />
            in real time 24 hours
          </p>
        </div>

        <div class="rounded-xl smooth-shadow mx-auto p-6 max-w-sm w-full md:max-w-full">
          <div class="w-16 h-16 rounded-full ring-2 ring-white-primary bg-grey-secondary">
            <SEO class="h-full w-full p-2" />
          </div>
          <h6 class="text-xl mt-6 font-bold text-black-primary leading-10">
            SEO Optimization
          </h6>
          <p class="text-grey-primary text-base font-medium leading-relaxed mt-1">
            We make sure your website
            <br class="hidden md:block" />
            is indexed by google search
          </p>
        </div>

        <div class="rounded-xl smooth-shadow mx-auto p-6 max-w-sm w-full md:max-w-full">
          <div class="w-16 h-16 rounded-full ring-2 ring-white-primary bg-grey-secondary">
            <Security class="h-full w-full p-2" />
          </div>
          <h6 class="text-xl mt-6 font-bold text-black-primary leading-10">
            Security System
          </h6>
          <p class="text-grey-primary text-base font-medium leading-relaxed mt-1">
            High level of security & tested
            <br class="hidden md:block" />
            against attacks from outside
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SEO from "./elements/SEO";
import Security from "./elements/Security";
import RealTime from "./elements/RealTime";
</script>
