<script setup>
    const props = defineProps(['showPagePopup','totalRows','rowsPerPage','startingRow','endingRow','handleBack','handleForward'])

</script>

<template>
    <div class="flex items-center justify-between">
            <div class="relative">
                <div class="flex items-center cursor-pointer" @click="$emit('showOption',true)">
                    <p class="text-gray text-sm mr-1.5">Rows per page: {{ rowsPerPage }}</p>
                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.98357 4.875H9.01404C9.43123 4.875 9.63982 5.37891 9.34451 5.67422L6.33045 8.69062C6.14763 8.87344 5.84998 8.87344 5.66717 8.69062L2.6531 5.67422C2.35779 5.37891 2.56638 4.875 2.98357 4.875Z" fill="#727896"/>
                    </svg>   
                </div>
                <div v-if="showPagePopup"
                class="absolute top-5 right-0 z-50 bg-white w-20 text-sm text-gray border border-gray rounded-lg cursor-pointer" @click="showPagePopup=false">
                    <p class="w-full py-1 px-3" @click="rowsPerPage=4">4</p>
                    <p class="w-full py-1 px-3" @click="rowsPerPage=8">8</p>
                    <p class="w-full py-1 px-3" @click="rowsPerPage=12">12</p>
                    <p class="w-full py-1 px-3" @click="rowsPerPage=16">16</p>
                </div>             
            </div>

            <div class="flex items-center text-sm text-gray">
                <IconsRight class="cursor-pointer" @click="handleBack()"/>
                <p class="mx-4">{{ startingRow }} - {{ endingRow }} of {{ totalRows }}</p>
                <IconsRight class="rotate-180 cursor-pointer" @click="handleForward()"/>
            </div>
        </div>
</template>
