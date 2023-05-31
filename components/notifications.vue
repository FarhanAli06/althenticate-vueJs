<script setup>
import keyIcon from '~/assets/icons/Key.svg'
import computerIcon from '~/assets/icons/computer-gray.svg'
import userIcon from '~/assets/icons/user-gray.svg'

const notifications = ref([
    {
        title:'Your password has been successfully changed.',
        icon:keyIcon,
        createdDate: '4/16/2023',
        createdTime: '4:11:49 PM'
    },
    {
        title:'Platform maintenance on December 25',
        icon:computerIcon,
        createdDate: '4/16/2023',
        createdTime: '4:11:49 PM'
    },
    {
        title:'Unknown IP please confirm your identity ',
        icon:userIcon,
        createdDate: '4/16/2023',
        createdTime: '4:11:49 PM'
    },

])

</script>

<template>
    <div class="w-full bg-white rounded-lg">
        <div class="bg-blue px-4 py-3 flex items-center justify-between rounded-t-lg">
            <p class="text-white text-base font-bold capitalize">Notifications</p>
            <IconsBell/>
        </div>

        <div class="w-full px-4" >
            <div class="notification" v-for="(item, i) in notifications" :key="i">
                <div class="flex justify-between">
                    <p class="text-[#727896] w-42 text-sm leading-6">{{ item.title }}</p>
                    <img :src="item.icon" alt="key" class="icon">
                </div>
                <div class="text-blue text-[11px]">
                    <p class="mb-3">Created on:</p>
                    <div class="flex items-center">
                        <IconsCalendar/>
                        <span class="ml-1 mr-4">{{ item.createdDate }}</span>
                        <IconsClock/>
                        <span class="ml-1">{{ item.createdTime }}</span>
                    </div>
                </div>
            </div>

        </div>


    </div>
</template>
<style lang="scss">
.notification{
    @apply w-full border-b border-[#E0E0F0] py-6;
    .icon{
        @apply w-6;
        svg path {
            @apply stroke-[#000];
        }
    }
}
</style>
