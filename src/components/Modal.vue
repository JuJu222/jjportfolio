<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="fixed z-30 inset-0 overflow-y-auto" @close="onClickButton">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div class="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="my-3 text-left">
                  <div class="">
                    <div class="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
                      <img :src="'/img/portfolio/' + portfolio.img" alt="" class="w-full h-full object-center object-cover" />
                    </div>
                  </div>
                  <div>
                    <h1 class="text-xl font-extrabold text-gray-900 sm:text-3xl mt-2">{{ portfolio.title }}</h1>
                    <h4 class="text-md">
                      Android Developer
                    </h4>
                    <div class="flex flex-row my-3">
                      <h2 class="text-lg text-gray-900">{{ portfolio.year }}</h2>
                      <p class="mx-2 text-indigo-600">&#9679;</p>
                      <div class="flex flex-row">
                        <img v-for="technology in portfolio.technologies" :src="'/img/icons/' + technology.img" :alt="technology" class="w-7 h-7" />
                      </div>
                    </div>
                    <p class="text-sm text-gray-500">{{ portfolio.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

export default {
  name: "Modal",
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
  },
  props: {
    open: Boolean,
    portfolio: Object
  },
  methods: {
    onClickButton () {
      this.$emit('clicked')
    }
  }
}
</script>

<style scoped>

</style>