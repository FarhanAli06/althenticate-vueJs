<script setup>
const props = defineProps(['list'])

</script>
<template>
    <div class="flex items-center justify-center py-2 px-3 m-1 min-w-max rounded-full text-blue font-[400] bg-[#AEF0FF]" v-for="(p,i) in list" :key="i" > 
        <img :src="p.img" alt="" class="mr-1" v-if="p.img">
        <p>{{ p.title }}</p>
    </div>
</template>
