<template>
  <section
    class="h-full w-full border-box sm:pt-20 pt-16 sm:pb-16 pb-8 lg:px-24 md:px-16 sm:px-8 px-8 transition-all duration-500 linear bg-white"
  >
    <div class="container mx-auto flex items-center justify-center flex-col">
      <img
        class="sm:w-auto w-5/6 sm:mb-16 mb-12 object-cover object-center"
        src="http://api.elements.buildwithangga.com/storage/files/2/assets/Empty%20State/EmptyState2/Empty-2-1.png"
        alt=""
      />
      <div class="text-center w-full">
        <h1 class="title-text text-3xl mb-5 font-semibold">
          Opss! Something Missing
        </h1>
        <p class="caption-text mb-16 tracking-wide leading-7">
          The page you’re looking for isn’t found. We
          <br class="sm:block hidden" />
          suggest you Back to Homepage.
        </p>
        <div class="flex justify-center">
          <nuxt-link
            to="/"
            class="bg-red-primary inline-flex font-semibold text-white text-lg leading-7 py-4 px-6 rounded-xl focus:outline-none hover:shadow-lg"
          >
            Back to Homepage
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
