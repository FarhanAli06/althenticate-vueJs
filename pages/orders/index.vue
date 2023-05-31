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
    <div class="flex flex-col border rounded-lg">
        <div class="justify-around justify-items-center bg-blue">
            <div class="text-white text-base font-bold px-5 py-5">
                <span class="text-lg">Request a new door</span>
            </div>
        </div>

        <div class="grid grid-cols-3 gap-4">
            <div>
            </div>
            <div class="ready-unlock flex flex-row rounded-lg border mx-2 my-2">                
                <div class="px-5 py-5">
                    <p class="text-md text-blue font-bold">Ready to unlock the potential of your doors?</p>
                    <p class="text-lg">Order your door readers below, and we will ship them to you as soon as possible</p>
                </div>
                <div class="px-5 py-5">
                    <img class="h-full" src="../../images/Frame 2608396.png" />
                </div>
            </div>
        </div>
       
        <div class="grid grid-cols-3 gap-4">
            <div>
            </div>
            <div class="rounded-lg">                
                <span class="text-lg">You have already 
                    <span>ordered 3</span>
                    <span>of the</span>
                    <span>5 complementary</span>
                    <span>readers in your plan</span>
                </span>
                
            </div>            
        </div>
        <div class="grid grid-cols-3 gap-4 text-white mt-4">
            <div>
                
            </div>
            <div class="bg-blue rounded-lg">               
                
                <div class="mb-4">  
                    <span>Select the amount of door readers:</span>              
                     <hr />
                 </div>
                 <div class="mb-4 float-right">                
                     <span>Total: $250</span>
                 </div>
            </div>            
        </div>
        <div class="grid grid-cols-3 gap-4 text-white mt-4">
            <div>
                
            </div>
            <div class="bg-blue rounded-lg">               
                               
                <span>Which WiFi network would you like these readers to connect to?</span>
            </div>            
        </div>
        <div class="grid grid-row-3 gap-4 mt-4">
            <div>
                <span>Wifi SSID:</span> 
            </div>
            <div class="flex p-2 bg-white rounded-md w-64 border border-[#B8BCD3] ">
                <input type="text" placeholder="SSID" class="w-full bg-transparent text-gray ml-2 outline-none">            
            </div> 
            <div>
                <span>Press enter to save</span>                
            </div> 
            <div>
                <span>Password:</span>
            </div> 
            <div class="flex p-2 bg-white rounded-md w-64 border border-[#B8BCD3] ">
                <input type="text" placeholder="Password" class="w-full bg-transparent text-gray ml-2 outline-none">            
            </div> 
            <div>
                <span>Press enter to save</span>
            </div>       
        </div>
        <div class="grid grid-cols-3 gap-4 mt-4">
            <div>
                <span>Cancel</span>
            </div>
            <div class="bg-blue rounded-lg">               
                               
                <span>Send Request</span>
            </div>            
        </div>

        <div class="grid grid-cols-2 text-white mt-4 float-right">
          
            <div>  
                <span>Cancel</span>
                </div>
                <div class="mb-4">                
                <span>Send Request</span>
                </div>    
        </div>
           
    </div>
</template>
<style lang="scss" scoped>
.ready-unlock{
    //@apply px-[85px];
}
.ready-unlock div{
   // @apply px-[85px];
}
</style>
