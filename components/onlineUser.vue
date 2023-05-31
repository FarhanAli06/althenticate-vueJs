<script setup>
const onlineUser = ref(19);
const totalUser = ref(23);
</script>
<template>
    <div class="w-full h-28 px-5 py-4 bg-white rounded-lg mb-10 font-roboto flex items-end">
        <div class="w-3/4">
            <div class="flex items-center mb-3 ">
                <div class="w-3 h-3 rounded-full bg-neon mr-2"></div>
                <p class="text-blue font-bold text-sm">Online users</p>
            </div>
            <p class="font-bold mr-12 ml-5">
                <span class="text-[32px] text-[#B8BCD3]">{{ onlineUser }}</span>
                <span class="text-2xl text-green">/{{ totalUser }}</span>  
            </p>
        </div>
        <div class="flex flex-col items-center text-center text-[12px] text-blue  mb-2">
            <IconsUserIcon color="#016ED9" class="w-6"/>
            <p>in total</p>
        </div>
    </div>
    
    
</template>
