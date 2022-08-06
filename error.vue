<template>
  <section
    class="h-full w-full border-box sm:pt-20 pt-16 sm:pb-16 pb-8 lg:px-24 md:px-16 sm:px-8 px-8 transition-all duration-500 linear bg-white"
  >
    <div class="container mx-auto flex items-center justify-center flex-col">
      <Astronout />
      <div class="text-center w-full mt-6">
        <h1 class="text-gray-900 text-3xl mb-5 font-semibold">
          Opss! Something Missing
        </h1>
        <p class="text-gray-500 mb-16 tracking-wide leading-7">
          {{ error.message }}
          <br />
          We suggest you Back to Homepage.
        </p>
        <div class="flex justify-center">
          <button
            @click="handleError"
            class="bg-amber-600 inline-flex font-semibold text-white text-base py-4 px-12 rounded-full mb-4 lg:mb-0 md:mb-0 focus:outline-none"
          >
            Back to Homepage
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Astronout from "./components/elements/Astronout.vue";
// default props available on error.vue
const props = defineProps({
  error: Object,
});

// customise 404 message from script section
const error = useError();
if (error.value.statusCode === 404 || "404") {
  error.value.message = "The page you’re looking for isn’t found 😔";
}

// clear error and redirect to home page
const handleError = () => clearError({ redirect: "/" });
</script>
