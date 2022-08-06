<template>
  <section class="w-full pt-20 roles">
    <div class="text-center">
      <h5 class="text-base text-red-primary font-semibold mb-2">
        HOW IT’S GOING?
      </h5>
      <h2 class="text-3xl font-bold text-black-primary">
        Let’s You Know The Roles
      </h2>
    </div>
    <div
      class="container overflow-x-hidden mx-auto w-full px-4 md:px-8 lg:px-16"
    >
      <div
        class="grid grid-cols-1 grid-rows-3 md:grid-cols-2 lg:grid-cols-3 gap-40 md:gap-20 lg:grid-rows-1 mt-12"
      >
        <div class="rounded-xl mx-auto py-6 px-0 max-w-sm text-center steps">
          <div
            class="w-20 h-20 mx-auto rounded-full ring-2 ring-white-primary bg-grey-secondary"
          >
            <Chat class="h-full w-full p-2" />
          </div>
          <h6 class="text-xl mt-6 font-bold text-black-primary">
            Contact Our <br />
            Customer Services
          </h6>
          <p
            class="text-grey-primary text-base font-medium leading-relaxed mt-2"
          >
            Please contact our customer <br class="hidden md:block" />
            service so we can know <br class="hidden md:block" />
            what your needs are
          </p>
        </div>

        <div class="rounded-xl mx-auto py-6 px-0 max-w-sm text-center steps">
          <div
            class="w-20 h-20 mx-auto rounded-full ring-2 ring-white-primary bg-grey-secondary"
          >
            <User class="h-full w-full p-2" />
          </div>
          <h6 class="text-xl mt-6 font-bold text-black-primary">
            Consultation With <br />
            Our Team
          </h6>
          <p
            class="text-grey-primary text-base font-medium leading-relaxed mt-2"
          >
            We will get back to you soon <br class="hidden md:block" />
            for further consultation <br class="hidden md:block" />
            regarding your project needs
          </p>
        </div>

        <div class="rounded-xl mx-auto py-6 px-0 max-w-sm text-center steps">
          <div
            class="w-20 h-20 mx-auto rounded-full ring-2 ring-white-primary bg-grey-secondary"
          >
            <Code class="h-full w-full p-2" />
          </div>
          <h6 class="text-xl mt-6 font-bold text-black-primary">
            Our Developer <br />
            Will Build It
          </h6>
          <p
            class="text-grey-primary text-base font-medium leading-relaxed mt-2"
          >
            Your project will soon be <br class="hidden md:block" />
            built by our developer and <br class="hidden md:block" />
            will contact you if there are other needs
          </p>
        </div>
        <div class="rounded-xl mx-auto py-6 px-0 max-w-sm text-center steps">
          <div
            class="w-20 h-20 mx-auto rounded-full ring-2 ring-white-primary bg-grey-secondary"
          >
            <Share class="h-full w-full p-2" />
          </div>
          <h6 class="text-xl mt-6 font-bold text-black-primary">
            We Share You <br />
            The Result
          </h6>
          <p
            class="text-grey-primary text-base font-medium leading-relaxed mt-2"
          >
            We will notify you <br class="hidden md:block" />
            regarding the progress of <br class="hidden md:block" />
            the project every month
          </p>
        </div>
        <div class="rounded-xl mx-auto py-6 px-0 max-w-sm text-center steps">
          <div
            class="w-20 h-20 mx-auto rounded-full ring-2 ring-white-primary bg-grey-secondary"
          >
            <Check class="h-full w-full p-2" />
          </div>
          <h6 class="text-xl mt-6 font-bold text-black-primary">
            We Give You <br />
            The Result
          </h6>
          <p
            class="text-grey-primary text-base font-medium leading-relaxed mt-2"
          >
            We will immediately send <br class="hidden md:block" />
            your project to you when it is <br class="hidden md:block" />
            finished and ready to use
          </p>
        </div>
        <div class="rounded-xl mx-auto py-6 px-0 max-w-sm text-center steps">
          <div
            class="w-20 h-20 mx-auto rounded-full ring-2 ring-white-primary bg-grey-secondary"
          >
            <Award class="h-full w-full p-2" />
          </div>
          <h6 class="text-xl mt-6 font-bold text-black-primary">
            Congratulation <br />
            You Got It
          </h6>
          <p
            class="text-grey-primary text-base font-medium leading-relaxed mt-2"
          >
            congratulations, you've got what <br class="hidden md:block" />
            you need and we're ready to serve you<br class="hidden md:block" />
            if there is something that needs to be fixed
          </p>
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
