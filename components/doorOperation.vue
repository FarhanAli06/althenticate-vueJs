<script setup>
const doors = ref(6);
const totalDoors = ref(6);
</script>
<template>
    <div class="w-full h-28 px-5 py-4 bg-white rounded-lg mb-10 font-roboto flex items-end">
        <div class="w-3/4">
            <div class="flex items-center mb-3 ">
                <div class="w-3 h-3 rounded-full bg-neon mr-2"></div>
                <p class="text-blue font-bold text-sm">Doors in operation</p>
            </div>
            <div class="font-bold mr-12 ml-5">
                <span class="text-[32px] text-[#B8BCD3]">{{ doors }}</span>
                <span class="text-2xl text-green">/{{ totalDoors }}</span>  
            </div>
        </div>
        <div class="flex flex-col items-center text-center text-[12px] text-blue  mb-2">
            <IconsDoorsIcon color="#016ED9" class="w-6"/>
            <p>in total</p>
        </div>
    </div>
    
</template>
