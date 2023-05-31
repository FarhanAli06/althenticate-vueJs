<script setup>
const props = defineProps(['colorVal'])
const color = ref(props.colorVal? props.colorVal:'#fff')
</script>
<template>
    <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.91663 4.41675V0.916748H5.08329V4.41675H8.58329V5.58341H5.08329V9.08341H3.91663V5.58341H0.416626V4.41675H3.91663Z" :fill="color"/>
    </svg>
</template>
