<template>
  <section class="w-full py-20 benefits" id="services">
    <div class="container lg:px-16 md:px-16 px-4 mx-auto">
      <!-- <div class="grid grid-cols-1 grid-rows-3 md:grid-cols-2 lg:grid-cols-2 gap-2 lg:gap-20 lg:grid-rows-1 w-full"> -->
      <div class="flex-col lg:flex-row flex items-center justify-between md:items-start">
        <div class="text-left w-full md:w-3/4 lg:w-2/5">
          <h5 class="text-base text-red-primary font-semibold mb-2">
            OUR SUPER SERVICES
          </h5>
          <h2 class="text-3xl font-bold text-black-primary">
            Let’s Us Build Your Application With Our Super Services
          </h2>
          <p class="text-grey-primary text-base font-medium leading-relaxed mt-5">
            We provide various services to
            <br class="hidden lg:block" />
            help you optimize & manage
            <br class="hidden md:block" />
            your business
          </p>
          <button
            class="default-button-primary ease-out block py-3 px-8 font-medium text-base tracking-wide text-white-primary rounded-xl lg:font-semibold outline-0 mt-14">
            Contact Us Now
          </button>
        </div>

        <div class="mt-20 lg:mt-0 md:grid md:grid-cols-2 md:w-full md:gap-10 lg:w-3/5">
          <div class="rounded-xl smooth-shadow mx-auto p-6 max-w-sm w-full md:max-w-full">
            <div class="w-20 h-20 rounded-full ring-2 ring-white-primary bg-grey-secondary">
              <UXUI class="h-full w-full p-2" />
            </div>
            <h6 class="text-xl mt-10 font-bold text-black-primary leading-10">
              UX/UI Design
            </h6>
            <p class="text-grey-primary text-base font-medium leading-relaxed mt-1">
              UI focuses on your design <br class="hidden md:block" />
              interface and how a user interacts <br class="hidden md:block" />
              with it, UX emphasizes a users <br class="hidden md:block" />
              experience as they use your product
            </p>
          </div>

          <div class="rounded-xl smooth-shadow mx-auto p-6 max-w-sm w-full md:max-w-full mt-10 md:mt-0">
            <div class="w-20 h-20 rounded-full ring-2 ring-white-primary bg-grey-secondary">
              <Web class="h-full w-full p-2" />
            </div>
            <h6 class="text-xl mt-10 font-bold text-black-primary leading-10">
              Web Development
            </h6>
            <p class="text-grey-primary text-base font-medium leading-relaxed mt-1">
              Website development refers <br class="hidden md:block" />
              to the tasks associated <br class="hidden md:block" />
              with creating, building, and <br class="hidden md:block" />
              maintaining websites
            </p>
          </div>
        </div>
      </div>

      <div
        class="grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 gap-10 lg:grid-rows-1 w-full mt-10 lg:mt-20">
        <div class="rounded-xl smooth-shadow mx-auto p-6 max-w-sm w-full md:max-w-full">
          <div class="w-20 h-20 rounded-full ring-2 ring-white-primary bg-grey-secondary">
            <Mobile class="h-full w-full p-2" />
          </div>
          <h6 class="text-xl mt-10 font-bold text-black-primary leading-10">
            Mobile Development
          </h6>
          <p class="text-grey-primary text-base font-medium leading-relaxed mt-1">
            Mobile application development <br class="hidden md:block" />
            is the process of creating software <br class="hidden md:block" />
            applications that run on a <br class="hidden md:block" />
            mobile device
          </p>
        </div>

        <div class="rounded-xl smooth-shadow mx-auto p-6 max-w-sm w-full md:max-w-full">
          <div class="w-20 h-20 rounded-full ring-2 ring-white-primary bg-grey-secondary">
            <DevOps class="h-full w-full p-2" />
          </div>
          <h6 class="text-xl mt-10 font-bold text-black-primary leading-10">
            Dev Ops Development
          </h6>
          <p class="text-grey-primary text-base font-medium leading-relaxed mt-1">
            DevOps is the combination of cultural philosophies, practices,
            <br class="hidden md:block" />
            and tools that increases an <br class="hidden md:block" />
            organization's
          </p>
        </div>

        <div class="rounded-xl smooth-shadow mx-auto p-6 max-w-sm w-full md:max-w-full">
          <div class="w-20 h-20 rounded-full ring-2 ring-white-primary bg-grey-secondary">
            <Server class="h-full w-full p-2" />
          </div>
          <h6 class="text-xl mt-10 font-bold text-black-primary leading-10">
            Server Development
          </h6>
          <p class="text-grey-primary text-base font-medium leading-relaxed mt-1">
            Designed to facilitate the <br class="hidden md:block" />
            development and testing of <br class="hidden md:block" />
            programs, websites, software or <br class="hidden md:block" />
            applications for software
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import UXUI from "./elements/UXUI";
import Mobile from "./elements/Mobile";
import Web from "./elements/Web";
import Layer from "./elements/Layer";
import DevOps from "./elements/DevOps";
import Server from "./elements/Server";
</script>
<style lang=""></style>
