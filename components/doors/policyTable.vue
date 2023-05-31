<script setup>

const props = defineProps(['groups']);

const colors = ref([
    '#AEF0FF', '#F6FFD6', '#DFDEFF', '#F6FFD6','#AEF0FF', '#F6FFD6', '#DFDEFF', '#F6FFD6'
])


</script>
<template>
    <table class="door-table ">
        <thead>
            <tr>
                <th>Policy</th>
                <th>Persons</th>
                <th>Doors</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, i) in groups" :key="i" >
                <td >
                    <p class="flex items-center w-max">
                        {{item.name}}
                    </p>
                </td>
                <td >
                    <div class="flex items-center flex-wrap">
                        <DoorsTag :list="item.persons"/>
                    </div>
                </td>
                <td> 
                    <div class="flex items-center flex-wrap">
                        <DoorsTag :list="item.doors"/>
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
