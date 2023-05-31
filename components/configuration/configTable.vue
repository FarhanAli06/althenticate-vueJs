<script setup>
const props = defineProps(['list']);



</script>
<template>
    <table class="door-table ">
        <thead>
            <tr>
                <th>Name</th>
                <th>color</th>
                <th>description</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, i) in list" :key="i" >
               <td>
                    <div class="flex items-center leading-none">
                        <img :src="item.name.img" alt="" class="w-5 mr-1.5">
                        <p>
                            {{ item.name.text }}
                        </p>
                    </div>
               </td>
               <td>
                    <div class="flex items-center justify-center">
                        <div :class="`w-6 h-6 rounded-full bg-${item.color} `">
                        </div>
                    </div>
               </td>
               <td>
                    <p class="text-sm text-normal">{{ item.description }}</p>
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
        @apply bg-[#00308A0F] border-b border-[#DFE0EB];
    }
    

}


</style>
