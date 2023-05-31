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
    
    <IconsBillingText class="mb-10"/>
   
    <div class="flex flex-col justify-end float-right border border-[#B8BCD3] round mb-5">    
        <div class="flex flex-row">            
            <div class="px-4 py-4">
                <span class="text-lg text-blue font-extrabold">$320 </span> <span class="px-1 text-[#727896;]">Upcoming Charges</span>
                
            </div>
            <div class="mt-2 mr-2">
                <BillingsCurrentPlanFeatureModal />
            </div>
            
        </div>    
        <div class="border border-[#B8BCD3] bg-[#C7F03D]">            
            <div class="px-4 py-4">
                <p class="text-black">Current billing period: 14 Oct 2022 - 14 Nov 2022</p>
            </div>
        </div>
    
    </div>
   
    <BillingsBillingTable />
    <div class="flex flex-row payment-methods bg-white px-3 py-3 rounded-md">    
        <div>
            <span class="font-extrabold text-[#727896;]">Accepted payment methods</span>
        </div>
        <div>
            <IconsVisa />
        </div>       
        <div>
            <IconsPaypal />
        </div>
        <div>
            <IconsMercado />
        </div>
        <div>
            <IconsPay />
        </div>
        <div>
            <IconsGooglepay />
        </div>
        <div>
            <IconsMasterCard />
        </div>
        <div>
            <IconsAmericanExpress />
        </div>
    </div>
</div>
</template>
<style lang="scss" scoped>
.currency-color-blue{
color:#C7F03D;
}
.currency-color-yellow{
color:#C7F03D;
}
.payment-methods > div{
    @apply px-3;
}
</style>
