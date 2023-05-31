<script setup>
import LogsLayout from '~/layouts/logs-layout.vue'
import HDoor from '~/assets/icons/h-door.svg'
import downStair from '~/assets/icons/downStair.svg'

const activities = ref([
    {
        user:'Backdoor (Upstairs)',
        status:{locked:true},
        lastActivty:{
            detail:'00:00 a.m - Action Taken',
            by:'Jennifer Damon'
        }
    },
    {
        user:'Backdoor (Upstairs)',
        status:{locked:false},
        lastActivty:{
            detail:'00:00 a.m - Action Taken',
            by:'Jennifer Damon'
        }
    },
    {
        user:'Backdoor (Upstairs)',
        status:{locked:false},
        lastActivty:{
            detail:'00:00 a.m - Action Taken',
            by:'Jennifer Damon'
        }
    },
    {
        user:'Backdoor (Upstairs)',
        status:{locked:true},
        lastActivty:{
            detail:'00:00 a.m - Action Taken',
            by:'Jennifer Damon'
        }
    },
    {
        user:'Backdoor (Upstairs)',
        status:{locked:false},
        lastActivty:{
            detail:'00:00 a.m - Action Taken',
            by:'Jennifer Damon'
        }
    },
    {
        user:'Backdoor (Upstairs)',
        status:{locked:false},
        lastActivty:{
            detail:'00:00 a.m - Action Taken',
            by:'Jennifer Damon'
        }
    },
    {
        user:'Backdoor (Upstairs)',
        status:{locked:true},
        lastActivty:{
            detail:'00:00 a.m - Action Taken',
            by:'Jennifer Damon'
        }
    },
    {
        user:'Backdoor (Upstairs)',
        status:{locked:false},
        lastActivty:{
            detail:'00:00 a.m - Action Taken',
            by:'Jennifer Damon'
        }
    },
    {
        user:'Backdoor (Upstairs)',
        status:{locked:false},
        lastActivty:{
            detail:'00:00 a.m - Action Taken',
            by:'Jennifer Damon'
        }
    },
]);

const showPagePopup = ref(false)
const startingRow = ref(1)
const endingRow = computed(()=> {
    if(startingRow.value + rowsPerPage.value > totalRows.value){
        return totalRows.value
    }else{
       return startingRow.value + rowsPerPage.value
    }
})
const totalRows = computed(()=> activities.value.length)
const rowsPerPage = ref(totalRows.value<4? totalRows.value:4)


let getActivities = computed(()=>{
    if(rowsPerPage.value > totalRows.value){
        rowsPerPage.value = totalRows.value
    }
    return activities.value.filter((el,i)=>{
        if(i>=startingRow.value-1 && i<endingRow.value){
            return  el;
        }
    })
})


const schedules = ref([
    { 
        name:'Downstairs Door',
        assignments:[
            { img:HDoor,  title:'Houston Door'},
        ],
        from:'9/10/2022',
        to:'9/10/2022',
        events:{
            unlockTime:'10:00 AM',
            activeDays:['mon','fri','sun']
        }
    },    
    { 
        name:'Downstairs Door',
        assignments:[
            { img:HDoor,  title:'Houston Door'},
        ],
        from:'9/10/2022',
        to:'9/10/2022',
        events:{
            unlockTime:'10:00 AM',
            activeDays:['mon','sun']
        }
    },    
]);

let getSchedules = computed(()=>{
    if(rowsPerPage.value > totalRows.value){
        rowsPerPage.value = totalRows.value
    }
    return schedules.value.filter((el,i)=>{
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
    <LogsLayout>
        <div class="fixed top-0 left-0 w-full h-screen z-30" v-if="showPagePopup" @click="showPagePopup=!showPagePopup"></div>
        <div class="flex items-center justify-between font-roboto mb-5">
            <div class="flex p-2 bg-white rounded-md w-64 border border-[#B8BCD3] ">
                <IconsSearch/>
                <input type="text" placeholder="Search" class="w-full bg-transparent text-gray ml-2 outline-none">
            </div>
            <div class="flex items-center rounded-md bg-blue px-3 py-2.5">
                <span class="text-white"><IconsDownload/></span>
                <p class="text-white font-semibold">Download Logs</p>
            </div>
        </div>

        <LogsComputerTable :schedules="getSchedules" />

        <div class="flex items-center justify-between">
            <div class="relative">
                <div class="flex items-center cursor-pointer" @click="showPagePopup=true">
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
    </LogsLayout>
</template>
