<script setup>
 import { Line } from 'vue-chartjs'
 import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale, Filler } from 'chart.js'
import gradient from 'chartjs-plugin-gradient';

ChartJS.register(Title, Tooltip, Legend,LineElement, PointElement, CategoryScale, LinearScale, gradient, Filler );

const chartData = ref({
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
              {
              data: [40, 39, 10, 40, 39, 80, 40],
              label: '',
              // backgroundColor: '#85C250', 
              borderColor: ["#85C250"],
              radius: 0,
              tension:0.3,
              borderWidth: 1,
              fill:true,
              backgroundColor: (ctx) => {
                const canvas = ctx.chart.ctx;
                const gradient = canvas.createLinearGradient(0,0,0,600);

                gradient.addColorStop(0, '#85c250a6');
                gradient.addColorStop(1, '#d1e8bd6b');

                return gradient;
              },
            }
          ],
        })
const chartOptions = ref({
            responsive: true,
            maintainAspectRatio: false,
            plugins:{
                legend:{
                    display:false,
                },
                filler: {
                    propagate: true
                }
              }
            })
onMounted(()=>{
  
})

</script>
<template>
    <Line 
        :data="chartData"
        :chartOptions="chartOptions"
        class="h-48"
      />
</template>
