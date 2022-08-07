<template>
  <section class="w-full pt-0 lg:py-20" id="benefits">
    <div
      class="container mx-auto px-4 md:px-16"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div class="text-center">
        <h5 class="mb-2 text-base font-semibold text-red-primary">
          OUR SUPER BENEFITS
        </h5>
        <h2 class="text-3xl font-bold text-black-primary">
          Launch Faster & Better
        </h2>
      </div>

      <div
        class="mt-12 grid grid-cols-1 grid-rows-3 gap-10 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 lg:gap-20"
      >
        <div
          class="smooth-shadow mx-auto w-full max-w-md rounded-xl p-6 md:max-w-full"
        >
          <div
            class="h-16 w-16 rounded-full bg-grey-secondary ring-2 ring-white-primary"
          >
            <RealTime class="h-full w-full p-2" />
          </div>
          <h6 class="mt-6 text-xl font-bold leading-10 text-black-primary">
            Real-time solution
          </h6>
          <p
            class="mt-1 text-base font-normal leading-relaxed text-grey-primary"
          >
            Your application will run
            <br class="hidden md:block" />
            in real time 24 hours
          </p>
        </div>

        <div
          class="smooth-shadow mx-auto w-full max-w-sm rounded-xl p-6 md:max-w-full"
        >
          <div
            class="h-16 w-16 rounded-full bg-grey-secondary ring-2 ring-white-primary"
          >
            <SEO class="h-full w-full p-2" />
          </div>
          <h6 class="mt-6 text-xl font-bold leading-10 text-black-primary">
            SEO Optimization
          </h6>
          <p
            class="mt-1 text-base font-normal leading-relaxed text-grey-primary"
          >
            We make sure your website
            <br class="hidden md:block" />
            is indexed by google search
          </p>
        </div>

        <div
          class="smooth-shadow mx-auto w-full max-w-sm rounded-xl p-6 md:max-w-full"
        >
          <div
            class="h-16 w-16 rounded-full bg-grey-secondary ring-2 ring-white-primary"
          >
            <Security class="h-full w-full p-2" />
          </div>
          <h6 class="mt-6 text-xl font-bold leading-10 text-black-primary">
            Security System
          </h6>
          <p
            class="mt-1 text-base font-normal leading-relaxed text-grey-primary"
          >
            High level of security & tested
            <br class="hidden md:block" />
            against attacks from outside
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SEO from "./elements/SEO";
import Security from "./elements/Security";
import RealTime from "./elements/RealTime";

export default {
  components: {
    SEO,
    Security,
    RealTime,
  },
  setup() {
    return {};
  },
};
</script>
