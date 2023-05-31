<script setup>
const props = defineProps(['groups']);
</script>
<template>
    <table class="door-table ">
        <thead>
            <tr>
                <th>Group</th>
                <th>Count</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(group, i) in groups" :key="i" >
                <td class="flex items-center">
                    <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5327 9.63978L12.5328 9.63993L16.3461 14L12.5328 18.3601L12.5327 18.3602C12.1558 18.7919 12.1558 19.4796 12.5327 19.9113C12.927 20.3629 13.5822 20.3629 13.9766 19.9113L18.4671 14.7758L18.4673 14.7756C18.8442 14.3439 18.8442 13.6561 18.4673 13.2244L18.4671 13.2242L13.9766 8.0887C13.9765 8.08867 13.9765 8.08864 13.9765 8.08861C13.9765 8.08859 13.9765 8.08858 13.9764 8.08857C13.5821 7.6371 12.927 7.63714 12.5327 8.0887C12.1558 8.5204 12.1558 9.20808 12.5327 9.63978Z" fill="#727896" stroke="#727896" stroke-width="0.5"/>
                    </svg>
                    {{group.name}}
                </td>
                <td>{{ group.count }}</td>
                <td class="flex items-center justify-end">
                    <IconsPlus color-val="#727896" class="w-3 mr-4"/>
                    <IconsDelete class="cursor-pointer w-4.5"/>
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
