<template>
  <section class="benefits w-full py-20" id="services">
    <div
      class="container mx-auto px-4 md:px-16 lg:px-16"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <!-- <div class="grid grid-cols-1 grid-rows-3 md:grid-cols-2 lg:grid-cols-2 gap-2 lg:gap-20 lg:grid-rows-1 w-full"> -->
      <div
        class="flex flex-col items-center justify-between md:items-start lg:flex-row"
      >
        <div class="w-full text-left md:w-3/4 lg:w-2/5">
          <h5 class="mb-2 text-base font-semibold text-red-primary">
            OUR SUPER SERVICES
          </h5>
          <h2 class="text-3xl font-bold text-black-primary">
            Let’s Us Build Your Application With Our Super Services
          </h2>
          <p
            class="mt-5 text-base font-normal leading-relaxed text-grey-primary"
          >
            We provide various services to
            <br class="hidden lg:block" />
            help you optimize & manage
            <br class="hidden md:block" />
            your business
          </p>
          <button
            class="default-button-primary mt-14 block rounded-xl py-3 px-8 text-base font-medium tracking-wide text-white-primary outline-0 ease-out lg:font-semibold"
          >
            Contact Us Now
          </button>
        </div>

        <div
          class="mt-20 md:grid md:w-full md:grid-cols-2 md:gap-10 lg:mt-0 lg:w-3/5"
        >
          <div
            class="smooth-shadow mx-auto w-full max-w-sm rounded-xl p-6 md:max-w-full"
          >
            <div
              class="h-20 w-20 rounded-full bg-grey-secondary ring-2 ring-white-primary"
            >
              <UXUI class="h-full w-full p-2" />
            </div>
            <h6 class="mt-10 text-xl font-bold leading-10 text-black-primary">
              UX/UI Design
            </h6>
            <p
              class="mt-1 text-base font-normal leading-relaxed text-grey-primary"
            >
              UI focuses on your design <br class="hidden md:block" />
              interface and how a user interacts <br class="hidden md:block" />
              with it, UX emphasizes a users <br class="hidden md:block" />
              experience as they use your product
            </p>
          </div>

          <div
            class="smooth-shadow mx-auto mt-10 w-full max-w-sm rounded-xl p-6 md:mt-0 md:max-w-full"
          >
            <div
              class="h-20 w-20 rounded-full bg-grey-secondary ring-2 ring-white-primary"
            >
              <Web class="h-full w-full p-2" />
            </div>
            <h6 class="mt-10 text-xl font-bold leading-10 text-black-primary">
              Web Development
            </h6>
            <p
              class="mt-1 text-base font-normal leading-relaxed text-grey-primary"
            >
              Website development refers <br class="hidden md:block" />
              to the tasks associated <br class="hidden md:block" />
              with creating, building, and <br class="hidden md:block" />
              maintaining websites
            </p>
          </div>
        </div>
      </div>

      <div
        class="mt-10 grid w-full grid-cols-1 grid-rows-3 gap-10 md:grid-cols-2 md:grid-rows-2 lg:mt-20 lg:grid-cols-3 lg:grid-rows-1"
      >
        <div
          class="smooth-shadow mx-auto w-full max-w-sm rounded-xl p-6 md:max-w-full"
        >
          <div
            class="h-20 w-20 rounded-full bg-grey-secondary ring-2 ring-white-primary"
          >
            <Mobile class="h-full w-full p-2" />
          </div>
          <h6 class="mt-10 text-xl font-bold leading-10 text-black-primary">
            Mobile Development
          </h6>
          <p
            class="mt-1 text-base font-normal leading-relaxed text-grey-primary"
          >
            Mobile application development <br class="hidden md:block" />
            is the process of creating software <br class="hidden md:block" />
            applications that run on a <br class="hidden md:block" />
            mobile device
          </p>
        </div>

        <div
          class="smooth-shadow mx-auto w-full max-w-sm rounded-xl p-6 md:max-w-full"
        >
          <div
            class="h-20 w-20 rounded-full bg-grey-secondary ring-2 ring-white-primary"
          >
            <DevOps class="h-full w-full p-2" />
          </div>
          <h6 class="mt-10 text-xl font-bold leading-10 text-black-primary">
            Dev Ops Development
          </h6>
          <p
            class="mt-1 text-base font-normal leading-relaxed text-grey-primary"
          >
            DevOps is the combination of cultural philosophies, practices,
            <br class="hidden md:block" />
            and tools that increases an <br class="hidden md:block" />
            organization's
          </p>
        </div>

        <div
          class="smooth-shadow mx-auto w-full max-w-sm rounded-xl p-6 md:max-w-full"
        >
          <div
            class="h-20 w-20 rounded-full bg-grey-secondary ring-2 ring-white-primary"
          >
            <Server class="h-full w-full p-2" />
          </div>
          <h6 class="mt-10 text-xl font-bold leading-10 text-black-primary">
            Server Development
          </h6>
          <p
            class="mt-1 text-base font-normal leading-relaxed text-grey-primary"
          >
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
