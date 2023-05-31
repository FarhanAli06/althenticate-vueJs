<script setup>

const doorNav = ref(null);


</script>
<template>
    <ul class="doors-nav" ref="doorNav">
        <li class="item">
            <NuxtLink to="/doors">Doors</NuxtLink>
        </li>
        <li class="item">
            <NuxtLink to="/doors/groups">Groups</NuxtLink>
        </li>
        <li class="item">
            <NuxtLink to="/doors/policies">Policies</NuxtLink>
        </li>
        <li class="item">
            <NuxtLink to="/doors/schedules">Schedules</NuxtLink>
        </li>
    </ul>
</template>
<style lang="scss" scoped>
    .doors-nav{
        @apply flex items-center border-b border-[#D9D9D9] pb-3 mb-5;
        .item a{
            @apply text-gray text-lg mr-14 pb-3 cursor-pointer leading-none; 
        }
        .item:hover a{
            @apply font-bold border-b-2 border-blue;
        }
    }
</style>
