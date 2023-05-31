<template>
    <div class="flex">
      <side-nav/>
      <div class="w-full px-12 py-10 relative bg-[#F5F6F8]">
        <div class="absolute top-0 right-0 grid grid-cols-2">
          <div class="w-5 h-5 bg-white"></div>
          <div class="w-5 h-5 bg-neon"></div>
          <div class="w-5 h-5 bg-transparent"></div>
          <div class="w-5 h-5 bg-[#014751]"></div>
        </div>
        <slot></slot>
      </div>
      <right-bar/>
    </div>
  </template>
