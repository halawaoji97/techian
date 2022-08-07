<template>
  <section class="CHOOSE h-full w-full pt-20 md:pb-32" id="why-us">
    <div
      class="container mx-auto lg:px-4"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div class="w-full text-center">
        <h5 class="mb-2 text-base font-semibold text-red-primary">
          WHO WE ARE?
        </h5>
        <h2 class="text-3xl font-bold text-black-primary">
          WHY YOU CHOOSE USE?
        </h2>
        <p class="normal mt-5 text-base leading-relaxed text-grey-primary">
          Giving satisfaction to our customers
          <br class="hidden md:block" />
          is one of our goals
        </p>
      </div>
      <!-- <div class="grid grid-cols-1 grid-rows-3 md:grid-cols-2 lg:grid-cols-2 gap-2 lg:gap-20 lg:grid-rows-1 w-full"> -->
      <div class="mt-20">
        <!-- <div
          class="mt-10 grid grid-cols-1 grid-rows-3 gap-10 md:w-full md:grid-cols-2 md:grid-rows-2 lg:w-3/4 lg:grid-cols-3 lg:grid-rows-1"
        > -->
        <swiper
          class="mx-auto my-20 flex h-auto w-full items-center justify-between"
          :effect="'coverflow'"
          :centered-slides="true"
          :slides-per-view="'auto'"
          :mouse-wheel="true"
          :coverflow-effect="{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }"
          :breakpoints="{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }"
          :free-mode="true"
          :loop="true"
          :auto-play="true"
          :auto-height="false"
          :grab-cursor="true"
          :modules="modules"
        >
          <swiper-slide v-slot="{ isActive }">
            <div
              :class="
                isActive
                  ? 'smooth-shadow my-20 mx-auto w-full  scale-150 rounded-xl p-6 '
                  : 'my-20 mx-auto w-full  scale-100 rounded-xl p-6'
              "
            >
              <div
                class="h-16 w-16 rounded-full bg-grey-secondary ring-2 ring-white-primary"
              >
                <User class="h-full w-full p-2" />
              </div>
              <h6 class="mt-6 text-xl font-bold leading-10 text-black-primary">
                Expert Developer
              </h6>
              <p
                class="normal mt-1 text-base leading-relaxed text-grey-primary"
              >
                Our developer team is very expert
                <br class="hidden md:block" />
                & experienced in development
              </p>
            </div>
          </swiper-slide>
          <swiper-slide v-slot="{ isActive }">
            <div
              :class="
                isActive
                  ? 'smooth-shadow my-20 mx-auto w-full  scale-150 rounded-xl p-6 '
                  : 'my-20 mx-auto w-full  scale-100 rounded-xl p-6'
              "
            >
              <div
                class="h-16 w-16 rounded-full bg-grey-secondary ring-2 ring-white-primary"
              >
                <Creative class="h-full w-full p-2" />
              </div>
              <h6 class="mt-6 text-xl font-bold leading-10 text-black-primary">
                Creative & Innovative
              </h6>
              <p
                class="normal mt-1 text-base leading-relaxed text-grey-primary"
              >
                We will apply our creativity <br class="hidden md:block" />
                to our customers project
              </p>
            </div>
          </swiper-slide>

          <swiper-slide v-slot="{ isActive }">
            <div
              :class="
                isActive
                  ? 'smooth-shadow my-20 mx-auto w-full  scale-150 rounded-xl p-6 '
                  : 'my-20 mx-auto w-full  scale-100 rounded-xl p-6'
              "
            >
              <div
                class="h-16 w-16 rounded-full bg-grey-secondary ring-2 ring-white-primary"
              >
                <Done class="h-full w-full p-2" />
              </div>
              <h6 class="mt-6 text-xl font-bold leading-10 text-black-primary">
                100+ Project Finished
              </h6>
              <p
                class="normal mt-1 text-base leading-relaxed text-grey-primary"
              >
                We have successfully completed
                <br class="hidden md:block" />
                many client projects
              </p>
            </div>
          </swiper-slide>
          <swiper-slide v-slot="{ isActive }">
            <div
              :class="
                isActive
                  ? 'smooth-shadow my-20 mx-auto w-full  scale-150 rounded-xl p-6 '
                  : 'my-20 mx-auto w-full  scale-100 rounded-xl p-6'
              "
            >
              <div
                class="h-16 w-16 rounded-full bg-grey-secondary ring-2 ring-white-primary"
              >
                <Done class="h-full w-full p-2" />
              </div>
              <h6 class="mt-6 text-xl font-bold leading-10 text-black-primary">
                100+ Project Finished
              </h6>
              <p
                class="normal mt-1 text-base leading-relaxed text-grey-primary"
              >
                We have successfully completed
                <br class="hidden md:block" />
                many client projects
              </p>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!-- </div> -->
  </section>
</template>
<script>
import Done from "./elements/Done";
import User from "./elements/User";
import Creative from "./elements/Creative";

import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

export default {
  components: {
    Swiper,
    SwiperSlide,
    Done,
    User,
    Creative,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [EffectCoverflow],
    };
  },
};
</script>
