<script setup>
const props = defineProps(['list']);



</script>
<template>
 
    <table class="billing-table">
  <caption class="caption-price caption-top bg-blue px-5 py-5 text-white color-[#C7F03D]">
    <div class="flex flex-column justify-end top-section-txt">
      <div><span class="text-sm">Free</span> <span class="text-lg">$0</span></div>
      <div><span class="text-sm">Monthly</span><span>$30</span></div>
      <div><span class="text-sm">1 Year </span><span>$440</span></div>
      <div><span class="text-sm">2 Year </span><span>$5430</span></div>
    </div>
    
  </caption>
  <caption class="caption-top bg-blue px-5 py-5 text-white">
    <div class="flex flex-column space-between justify-end top-section-btns">
      <div><IconsDowngrade /></div>
      <div><IconsCurrentPlan /></div>      
      <div><IconsUpgrade /></div>      
      <div><IconsUpgrade /></div>
    </div>
  </caption>
  <thead>
    
  </thead>
  <tbody>
    <tr>                
        <td>
            <span class="text-[#727896]">Lorem Ipsum</span>
        </td>              
        <td>
          <span><IconsTick /></span>
        </td>
        <td>
          <span><IconsTick /></span>
        </td>              
        <td>
          <span><IconsTick /></span>
        </td>
        <td>
          <span><IconsCross /></span>
        </td>
    </tr>
  </tbody>
</table>

</template>
<style lang="scss">

.billing-table{
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
        @apply border border-[#E0E0F0];
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
    .caption-price > div span:nth-child(2){
        color:#C7F03D;
        align-content: flex-end;
    }
    .top-section-btns > div{
      margin-left: 12%;
    }
    .top-section-txt > div{
      margin-left: 9%;
      font-size: 17px;
    }
    tr > td > span
    {
      
    }
    td:not(:first-child){
      min-width: 80px;
    }
    td:not(:first-child) span{
      min-width: 80px;
      justify-content: center;
    }
}


</style>
