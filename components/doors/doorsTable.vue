<script setup>
const props = defineProps(['activities']);
</script>
<template>
    <table class="door-table ">
        <thead>
            <tr>
                <th>user</th>
                <th>status</th>
                <th>last activity</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(activity, i) in activities" :key="i" >
                <td>{{activity.user}}</td>
                <td>
                    <div class="flex items-center justify-center w-36 h-10 border rounded-lg" :class="activity.status.locked?'border-red':'border-green'">
                        <IconsLockedIcon colorVal="#D14343" class="w-4 mr-2.5" v-if="activity.status.locked"/> 
                        <IconsUnlockedIcon colorVal="#21D282" class="w-4 mr-2.5" v-else/>
                        <p class=" text-sm leading-none font-regular capitalize" :class="activity.status.locked?'text-red':'text-green'">
                            {{ activity.status.locked? 'Locked':'unlocked' }}
                        </p>                    
                    </div>
                </td>
                <td>
                    <p>{{ activity.lastActivty.detail }}</p>
                    <p class="text-sm text-[#B8BCD3] font-light">{{ activity.lastActivty.by}}</p>
                </td>
                <td >
                    <IconsDelete class="cursor-pointer"/>
                </td>
            </tr>
        </tbody>
    </table>

</template>
<style lang="scss">

.door-table{
    @apply bg-white w-full rounded-lg overflow-hidden border-collapse border border-[#DFE0EB] font-roboto mb-10;
    th{
        @apply text-left text-blue text-lg font-bold capitalize;
    }
    th,td{
        @apply px-8 py-7;
    }
    td{
        @apply text-gray text-base font-bold;
    }
    
    tr:nth-child(even){
        @apply bg-[#00308A0F];
    }
    tr:nth-child(odd){
        @apply bg-[#fff] ;
    }
    th{
        @apply bg-[#00308A0F] border-b border-[#DFE0EB] text-center;
    }
    

}


</style>
