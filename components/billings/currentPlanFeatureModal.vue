<template>
<div>
  
    <button class="bg-blue text-white text-sm px-6 py-3 rounded-lg" type="button" v-on:click="toggleModal()">
      Current Plan Feature
    </button>
    <div v-if="showModal" class="fixed inset-0 z-1000 outline-none focus:outline-none justify-center items-center flex">
      <div class="max-h-full max-w-lg">
        <!--content-->
        <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <!--header-->
          <div class="flex items-start bg-blue justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h6 class="text-white font-semibold">
              Request a new door
            </h6>
            <button class="p-1 ml-auto border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none" v-on:click="toggleModal()">
              <span class="bg-transparent text-white h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          <!--body-->
          <div class="relative p-6 flex-auto">
            <div class="flex flex-col">
              <div class="grid grid-cols mx-16">
                  <div>
                  </div>
                  <div class="ready-unlock flex flex-row rounded-lg border mx-2 my-2">                
                      <div class="px-5 py-5">
                          <p class="text-md text-blue font-bold">Ready to unlock the potential of your doors?</p>
                          <p class="text-sm">Order your door readers below, and we will ship them to you as soon as possible</p>
                      </div>
                      <div class="px-5 py-5">
                          <img class="h-full" src="../../images/Frame 2608396.png" />
                      </div>
                  </div>
              </div>
        
              <div class="grid grid-cols mx-16">
                  <div>
                  </div>
                  <div class="rounded-lg">                
                      <span class="text-sm">You have already 
                          <span class="text-blue font-bold">ordered 3 </span>
                          <span>of the </span>
                          <span class="text-blue font-bold">5 complementary </span>
                          <span>readers in your plan</span>
                      </span>
                      
                  </div>            
              </div>
              <div class="grid grid-cols text-white mt-4 mx-16">
                  <div>
                      
                  </div>
                  <div class="bg-blue rounded-lg px-6 py-6">               
                      
                      <div class="mb-4">  
                          <span>Select the amount of door readers:</span> 
                      </div>
                      <div class="mb-4">  
                          <span class="font-bold">$250 ea.</span> 

                          <hr />
                      </div>
                      <div class="mb-4 float-right">                
                        <span>Total:</span> 
                        <span class="text-[#C7F03D] font-bold"> $250</span>
                      </div>
                  </div>            
              </div>
              <div class="grid grid-cols mx-16 mt-3 mb-3">
                  <div>
                      
                  </div>
                  <div>
                    <span class="text-blue font-bold">Which WiFi network would you like these readers to connect to?</span>
                  </div>            
              </div>
              <!-- <div class="grid grid-row-3 gap-4 mt-4">
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
              </div> -->
              <!-- <div class="grid grid-cols-3 gap-4 mt-4">
                  <div>
                      <span>Cancel</span>
                  </div>
                  <div class="bg-blue rounded-lg">         
                      <span>Send Request</span>
                  </div>            
              </div> -->
               <!--footer-->
              <div class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button class="text-sm font-bold text-[#727896]" type="button" v-on:click="toggleModal()">
                  Cancel
                </button>
                <button class="text-white bg-blue ml-2 px-6 py-2 text-sm border rounded" type="button" v-on:click="toggleModal()">
                 Send Request
                </button>
              </div>             
            </div>
          </div>         
        </div>
      </div>
    </div>
    <div v-if="showModal" class="opacity-25 fixed z-40 bg-black"></div>
  </div>
  </template>
<script>
export default {
  name: "large-modal",
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    toggleModal: function(){
        debugger;
      this.showModal = !this.showModal;
    }    
  }
}
</script>