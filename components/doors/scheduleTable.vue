<script setup>
import HDoor from '~/assets/icons/h-door.svg'
import downStair from '~/assets/icons/downStair.svg'

const props = defineProps(['schedules']);

const weekDays = ref(['mon','tue','wed','thurs','fri','sat','sun'])
</script>
<template>
    <table class="door-table ">
        <thead>
            <tr>
                <th>Schedule</th>
                <th>Assigned to</th>
                <th>From/To</th>
                <th>Events</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, i) in schedules" :key="i" >
                <td >
                    <p class="flex items-center w-max">
                        {{item.name}}
                    </p>
                </td>
                <td >
                    <div class="flex items-center flex-wrap">
                        <DoorsTag :list="item.assignments"/>
                    </div>
                </td>
                <td class=" "> 
                    <div class="flex items-center text-[12px] font-normal">
                        <IconsCalendar class="mr-1"/> {{ item.from }}                        
                    </div>
                    <div class="flex items-center  text-[12px] font-normal">
                        <IconsCalendar class="mr-1"/> {{ item.to }}                        
                    </div>
                </td>
                <td>
                    <div class="flex items-center text-[12px] min-w-max text-[12px] font-normal">
                        Unlock {{ item.events.unlockTime }} <IconsClock/>
                    </div>
                    <div class="flex items-center  min-w-max">
                        <div class="w-[18px] h-[18px] rounded-full flex items-center justify-center text-[8px] text-white mr-0.5 uppercase"
                            v-for="(d,i) in weekDays" :key="i" :class="item.events.activeDays.includes(d)?'bg-blue':'bg-[#B8BCD3]'">{{ d[0] }}</div>
                    </div>
                </td>
                <td >
                    <div class="flex items-center justify-end">
                        <IconsDelete class="cursor-pointer w-4.5"/>
                    </div>
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
