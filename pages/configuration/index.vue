<script setup>
import monitorIcon from '~/assets/icons/computer-gray.svg'

const configs = ref([
    {
        name :{img:monitorIcon, text:'Laptops'},
        color:'red',
        description:'This is our default configuration for laptops.'
    },
    {
        name :{img:monitorIcon, text:'Laptops'},
        color:'neon',
        description:'This is our default configuration for laptops.'
    },
    {
        name :{img:monitorIcon, text:'Laptops'},
        color:'neon',
        description:'This is our default configuration for laptops.'
    },
])


const showPagePopup = ref(false)
const startingRow = ref(1)
const endingRow = computed(()=> {
    if(startingRow.value + rowsPerPage.value > totalRows.value){
        return totalRows.value
    }else{
       return startingRow.value + rowsPerPage.value
    }
})
const totalRows = computed(()=> configs.value.length)
const rowsPerPage = ref(totalRows.value<4? totalRows.value:4)


let getList = computed(()=>{
    if(rowsPerPage.value > totalRows.value){
        rowsPerPage.value = totalRows.value
    }
    return groups.value.filter((el,i)=>{
        if(i>=startingRow.value-1 && i<endingRow.value){
            return  el;
        }
    })
})

function handleBack(){
    if(startingRow.value>rowsPerPage.value){
        startingRow.value -= rowsPerPage.value;
    }else{
        startingRow.value = 1
    }
}
function handleForward(){
    if(endingRow.value + rowsPerPage.value <= totalRows.value){
        startingRow.value += rowsPerPage.value
    }else{
        startingRow.value = totalRows.value - rowsPerPage.value
        endingRow.value = totalRows.value
    }    
}


</script>

<template>
    <div>
        <IconsConfigText class="mb-10"/>
        <div class="fixed top-0 left-0 w-full h-screen z-30" v-if="showPagePopup" @click="showPagePopup=!showPagePopup"></div>
        <div class="flex items-center justify-between font-roboto mb-5">
            <div class="flex p-2 bg-white rounded-md w-64 border border-[#B8BCD3] ">
                <IconsSearch/>
                <input type="text" placeholder="Search" class="w-full bg-transparent text-gray ml-2 outline-none">
            </div>
            <div class="flex items-center rounded-md bg-blue px-3 py-2.5">
                <IconsPlus class="mr-2" colorVal="#fff"/>
                <p class="text-white font-semibold">Add Configuration</p>
            </div>
        </div>

        <ConfigurationConfigTable :list="configs" />

        <pagination 
        :show-page-popup="showPagePopup" 
        :rowsPerPage="rowsPerPage"
        :totalRows="totalRows"
        :startingRow="startingRow"
        :endingRow="endingRow"
        :handleBack="handleBack"
        :handleForward="handleForward"
        @showOption="(val)=>{showPagePopup=val}"
        />

    </div>
</template>
