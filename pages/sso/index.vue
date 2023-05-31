<script setup>
import monitorIcon from '~/assets/icons/computer-gray.svg'

const configs = ref([
    {
        name :{ text:'Laptops Test'},
        
    },
    {
        name :{ text:'Laptops'},
    },
    {
        name :{text:'Laptops'},
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
const rowsPerPage = ref(totalRows.value<2? totalRows.value:2)


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
        <IconsSsoText class="mb-10"/>
        <div class="flex flex-row justify-around justify-items-center">
            <div class="text-blue text-base font-bold">SAML service providers</div>
        
            <div class="inline-flex items-center"><span><Icons/> </span><span class="px-2">metadata</span></div>
            <div class="inline-flex items-center"><span><IconsDownload/></span><span class="px-2">Download public key</span></div>
            <div class="flex items-center rounded-md bg-blue px-3 py-2.5">
                <IconsPlus class="mr-2" colorVal="#fff"/>
                <p class="text-white font-semibold">New Service Provider</p>
            </div>          
            
        </div>
        <div class="flex">            
            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </p>
        </div>
        <div class="fixed top-0 left-0 w-full h-screen z-30" v-if="showPagePopup" @click="showPagePopup=!showPagePopup"></div>
       

        <ssoTable :list="configs" />

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
<style lang="scss" scoped>
.saml-service div:nth-child(2){
//margin:auto;
}
</style>
