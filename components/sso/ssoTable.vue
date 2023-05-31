<script setup>
const props = defineProps(['list']);
console.log('props', props.value);


</script>
<template>
    <table class="sso-table ">
        <thead>
            <tr>
                <th>Name</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, i) in list" :key="i" >
                
               <td>
                    <div class="flex items-center leading-none">
                        <p>
                            {{ item.name.text }}
                        </p>
                    </div>
               </td>              
                <td class="items-end">
                    <IconsDelete class="cursor-pointer"/>
                </td>
            </tr>
        </tbody>
    </table>

</template>
<style lang="scss">

.sso-table{
    @apply bg-white w-full rounded-lg overflow-hidden border-collapse border border-[#DFE0EB] font-roboto mb-10;
    th:nth-child(1){
        @apply text-blue  text-left text-lg font-bold capitalize;
    }
    th:nth-child(2){
        @apply text-right text-blue text-lg font-bold capitalize;
    }
    
    th,td:nth-child(1){
        @apply px-8 py-7;
    }
    td{
        @apply text-gray text-base font-bold;
    }
    
    tr:nth-child(even){
        @apply bg-[#00308A0F] ;
    }
    tr:nth-child(odd){
        @apply bg-[#fff] ;
    }
    td:nth-child(2){
        @apply text-right;
    }
    th{
        @apply bg-[#00308A0F] border-b border-[#DFE0EB];
    }
    

}


</style>
