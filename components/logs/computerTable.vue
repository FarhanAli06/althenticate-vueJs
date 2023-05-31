<script setup>
import HDoor from '~/assets/icons/h-door.svg'
const props = defineProps(['schedules']);

const weekDays = ref(['mon','tue','wed','thurs','fri','sat','sun'])
</script>
<template>
    <table class="computer-table ">
        <thead>
            <tr class="text-sm">
                <th class="text-sm">Timestamp</th>
                <th>Severity</th>
                <th>Computer</th>
                <th>User</th>
                <th>Action</th>
                <th>Authentication Method</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, i) in schedules" :key="i" >
                <td class=" "> 
                    <div class="flex items-center text-[12px] font-normal">
                        <IconsCalendar class="mr-1"/> {{ item.from }}                        
                    </div>
                    <div class="flex items-center  text-[12px] font-normal">
                        <IconsClock class="mr-1"/> {{ item.to }}                        
                    </div>
                </td>
                <td>Info</td>
                <td>
                    <div class="flex items-center justify-center py-1 m-2 min-w-max ">                        
                        <p class="rounded-full text-blue font-[400] px-5 p-2 bg-[#c7f03d57]">chad's Truck</p>
                    </div>
                </td>
                <td> 
                    <div class="flex items-center justify-center text-blue font-[400]" >                        
                        <span class="rounded-full text-blue font-[400] px-5 p-2 bg-[#c7f03d57]">chad  
                             <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-2154fa56=""><path d="M20.3853 21.5V19.5C20.3853 18.4391 19.9638 17.4217 19.2137 16.6716C18.4635 15.9214 17.4461 15.5 16.3853 15.5H8.38525C7.32439 15.5 6.30697 15.9214 5.55683 16.6716C4.80668 17.4217 4.38525 18.4391 4.38525 19.5V21.5" stroke="#21D282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.3853 11.5C14.5944 11.5 16.3853 9.70914 16.3853 7.5C16.3853 5.29086 14.5944 3.5 12.3853 3.5C10.1761 3.5 8.38525 5.29086 8.38525 7.5C8.38525 9.70914 10.1761 11.5 12.3853 11.5Z" stroke="#C7F03D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>                  
                        </span>
                    </div>
                </td>
                <td class=" items-center justify-center">
                    <div class="flex items-center justify-center w-36 h-10 border rounded-lg border-red mb-1">
                        <IconsLockedIcon colorVal="#D14343" class="w-4 mr-2.5"/> 
                        <p class=" text-sm leading-none font-regular capitalize text-red">
                            {{ 'Locked'}}
                        </p>                    
                    </div>
                    <div class="flex items-center justify-center w-36 h-10 border rounded-lg border-green">                       
                        <IconsUnlockedIcon colorVal="#21D282" class="w-4 mr-2.5" />
                        <p class=" text-sm leading-none font-regular capitalize text-green">
                            {{ 'unlocked'}}
                        </p>                    
                    </div>
                </td>
                <td class=" items-center justify-center">
                    <p>Presence</p>
                </td>
            </tr>
        </tbody>
    </table>

</template>
<style lang="scss">

.computer-table{
    @apply bg-white w-full rounded-lg overflow-hidden border-collapse border border-[#DFE0EB] font-roboto mb-10;
    th{
        @apply text-blue text-sm font-bold capitalize;
    }
    th,td{
        @apply py-7 text-center;
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
