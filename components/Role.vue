<template>
  <section class="roles w-full py-20">
    <div data-aos="fade-up" data-aos-duration="2000">
      <div class="text-center">
        <h5 class="mb-2 text-base font-semibold text-red-primary">
          HOW IT’S GOING?
        </h5>
        <h2 class="text-3xl font-bold text-black-primary">
          Let’s You Know The Roles
        </h2>
      </div>
      <div
        class="container mx-auto w-full overflow-x-hidden px-4 md:px-8 lg:px-16"
      >
        <div
          class="mt-12 grid grid-cols-1 grid-rows-3 gap-40 md:grid-cols-2 md:gap-20 lg:grid-cols-3 lg:grid-rows-1"
        >
          <div class="steps mx-auto max-w-sm rounded-xl py-6 px-0 text-center">
            <div
              class="mx-auto h-20 w-20 rounded-full bg-grey-secondary ring-2 ring-white-primary"
            >
              <Chat class="h-full w-full p-2" />
            </div>
            <h6 class="mt-6 text-xl font-bold text-black-primary">
              Contact Our <br />
              Customer Services
            </h6>
            <p
              class="mt-2 text-base font-normal leading-relaxed text-grey-primary"
            >
              Please contact our customer <br class="hidden md:block" />
              service so we can know <br class="hidden md:block" />
              what your needs are
            </p>
          </div>

          <div class="steps mx-auto max-w-sm rounded-xl py-6 px-0 text-center">
            <div
              class="mx-auto h-20 w-20 rounded-full bg-grey-secondary ring-2 ring-white-primary"
            >
              <User class="h-full w-full p-2" />
            </div>
            <h6 class="mt-6 text-xl font-bold text-black-primary">
              Consultation With <br />
              Our Team
            </h6>
            <p
              class="mt-2 text-base font-normal leading-relaxed text-grey-primary"
            >
              We will get back to you soon <br class="hidden md:block" />
              for further consultation <br class="hidden md:block" />
              regarding your project needs
            </p>
          </div>

          <div class="steps mx-auto max-w-sm rounded-xl py-6 px-0 text-center">
            <div
              class="mx-auto h-20 w-20 rounded-full bg-grey-secondary ring-2 ring-white-primary"
            >
              <Code class="h-full w-full p-2" />
            </div>
            <h6 class="mt-6 text-xl font-bold text-black-primary">
              Our Developer <br />
              Will Build It
            </h6>
            <p
              class="mt-2 text-base font-normal leading-relaxed text-grey-primary"
            >
              Your project will soon be <br class="hidden md:block" />
              built by our developer and <br class="hidden md:block" />
              will contact you if there are other needs
            </p>
          </div>
          <div class="steps mx-auto max-w-sm rounded-xl py-6 px-0 text-center">
            <div
              class="mx-auto h-20 w-20 rounded-full bg-grey-secondary ring-2 ring-white-primary"
            >
              <Share class="h-full w-full p-2" />
            </div>
            <h6 class="mt-6 text-xl font-bold text-black-primary">
              We Share You <br />
              The Result
            </h6>
            <p
              class="mt-2 text-base font-normal leading-relaxed text-grey-primary"
            >
              We will notify you <br class="hidden md:block" />
              regarding the progress of <br class="hidden md:block" />
              the project every month
            </p>
          </div>
          <div class="steps mx-auto max-w-sm rounded-xl py-6 px-0 text-center">
            <div
              class="mx-auto h-20 w-20 rounded-full bg-grey-secondary ring-2 ring-white-primary"
            >
              <Check class="h-full w-full p-2" />
            </div>
            <h6 class="mt-6 text-xl font-bold text-black-primary">
              We Give You <br />
              The Result
            </h6>
            <p
              class="mt-2 text-base font-normal leading-relaxed text-grey-primary"
            >
              We will immediately send <br class="hidden md:block" />
              your project to you when it is <br class="hidden md:block" />
              finished and ready to use
            </p>
          </div>
          <div class="steps mx-auto max-w-sm rounded-xl py-6 px-0 text-center">
            <div
              class="mx-auto h-20 w-20 rounded-full bg-grey-secondary ring-2 ring-white-primary"
            >
              <Award class="h-full w-full p-2" />
            </div>
            <h6 class="mt-6 text-xl font-bold text-black-primary">
              Congratulation <br />
              You Got It
            </h6>
            <p
              class="mt-2 text-base font-normal leading-relaxed text-grey-primary"
            >
              congratulations, you've got what <br class="hidden md:block" />
              you need and we're ready to serve you<br
                class="hidden md:block"
              />
              if there is something that needs to be fixed
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import Code from "./elements/Code";
import Chat from "./elements/Chat";
import User from "./elements/User";
import Share from "./elements/Share";
import Check from "./elements/Check";
import Award from "./elements/Award";
</script>
