<script setup>


</script>
<template>
    <ul class="logs-nav">
        <li class="item">
            <NuxtLink to="/logs">Computers</NuxtLink>
        </li>
        <li class="item">
            <NuxtLink to="/logs/doors">Doors</NuxtLink>
        </li>
        <li class="item">
            <NuxtLink to="/logs/doors">SSO</NuxtLink>
        </li>
        <li class="item">
            <NuxtLink to="/logs/sshServers">SSH Servers</NuxtLink>
        </li>
        <li class="item">
            <NuxtLink to="/logs/adminLogs">Admin logs</NuxtLink>
        </li>
    </ul>
</template>
<style lang="scss" scoped>
    .logs-nav{
        @apply flex items-center border-b border-[#D9D9D9] pb-3 mb-5;
        .item a{
            @apply text-gray text-lg mr-14 pb-3 cursor-pointer leading-none; 
        }
        .item:hover a{
            @apply font-bold border-b-2 border-blue;
        }
    }
</style>
