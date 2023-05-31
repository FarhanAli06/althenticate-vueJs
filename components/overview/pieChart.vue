<script setup>
 import { Doughnut } from 'vue-chartjs'
 import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)
const chartData = ref({
            labels: ['January'],
            datasets: [
                {
                data: [40,20,10,15,5,10],
                label: '',
                backgroundColor: ['#85C250','#D1E8BD','#D1E8BD','#D1E8BD','#D1E8BD','#D1E8BD'],
                borderColor: ["#85C250","#85C250","#85C250","#85C250","#85C250","#85C250","#85C250","#85C250"],
                fill:true,
                }
            ],

        })
const chartOptions = ref( {
            responsive: true,
            maintainAspectRatio: false,
            plugins:{
                legend:{
                    display:false,
                }
            }
        })

</script>
<template>
    <Doughnut 
        :data="chartData"
        :chartOptions="chartOptions"
        height="50px"
      />
</template>
