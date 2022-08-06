<template>
  <section class="w-full pt-20 md:pb-32 CHOOSE" id="why-us">
    <div class="container md:px-16 px-4 mx-auto">
      <!-- <div class="grid grid-cols-1 grid-rows-3 md:grid-cols-2 lg:grid-cols-2 gap-2 lg:gap-20 lg:grid-rows-1 w-full"> -->
      <div class="flex-col lg:flex-row flex items-center justify-between">
        <div class="text-left w-full lg:w-1/5">
          <h5 class="text-base text-red-primary font-semibold mb-2">
            WHO WE ARE?
          </h5>
          <h2 class="text-3xl font-bold text-black-primary">
            WHY YOU CHOOSE USE?
          </h2>
          <p class="text-grey-primary text-base font-medium leading-relaxed mt-5">
            Giving satisfaction to our customers
            <br class="hidden md:block" />
            is one of our goals
          </p>
        </div>

        <div
          class="mt-10 grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-10 md:w-full lg:w-3/4">
          <div class="rounded-xl smooth-shadow mx-auto p-6 max-w-md w-full md:max-w-full">
            <div class="w-16 h-16 rounded-full ring-2 ring-white-primary bg-grey-secondary">
              <User class="h-full w-full p-2" />
            </div>
            <h6 class="text-xl mt-6 font-bold text-black-primary leading-10">
              Expert Developer
            </h6>
            <p class="text-grey-primary text-base font-medium leading-relaxed mt-1">
              Our developer team is very expert
              <br class="hidden md:block" />
              & experienced in development
            </p>
          </div>

          <div class="rounded-xl smooth-shadow mx-auto p-6 max-w-md w-full md:max-w-full">
            <div class="w-16 h-16 rounded-full ring-2 ring-white-primary bg-grey-secondary">
              <Creative class="h-full w-full p-2" />
            </div>
            <h6 class="text-xl mt-6 font-bold text-black-primary leading-10">
              Creative & Innovative
            </h6>
            <p class="text-grey-primary text-base font-medium leading-relaxed mt-1">
              We will apply our creativity <br class="hidden md:block" />
              to our customers project
            </p>
          </div>

          <div class="rounded-xl smooth-shadow mx-auto p-6 max-w-md w-full md:max-w-full">
            <div class="w-16 h-16 rounded-full ring-2 ring-white-primary bg-grey-secondary">
              <Done class="h-full w-full p-2" />
            </div>
            <h6 class="text-xl mt-6 font-bold text-black-primary leading-10">
              100+ Project Finished
            </h6>
            <p class="text-grey-primary text-base font-medium leading-relaxed mt-1">
              We have successfully completed
              <br class="hidden md:block" />
              many client projects
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import Done from "./elements/Done";
import User from "./elements/User";
import Creative from "./elements/Creative";
</script>
