<script setup lang="ts">
import Parallaxy from '@lucien144/vue3-parallaxy';
</script>
<template>
  <div class="flex items-center justify-center h-full">
    <div class="flex space-x-6 md:space-x-10 relative">
      <Parallaxy
        :speed="20"
        class="relative z-20 flex justify-start items-center"
      >
        <img src="https://picsum.photos/400" class="min-w-[250px] w-3/4 lg:w-full" />
      </Parallaxy>
      <Parallaxy
        :speed="200"
        direction="opposite"
        class="relative z-20 flex justify-end items-center"
      >
        <img src="https://picsum.photos/400?2" class="min-w-[250px] w-3/4 lg:w-full" />
      </Parallaxy>
      <Parallaxy
        :speed="400"
        class="absolute top-[50%] left-[40%] lg:left-[25%] z-10"
      >
        <img src="https://picsum.photos/400?6" class="min-w-[100px] w-1/3 lg:w-1/2" />
      </Parallaxy>
    </div>
  </div>
</template>
