<script setup>
const collapse = ref(false)
</script>

<template>
    <div class="sideNav" :class="collapse? 'collapseNav':''">
        <NuxtLink to="/" class="bg-[#074751] w-full h-[70px] flex items-center justify-center">
            <IconsLogoIcon class="w-[52px] mr-2"/>
            <IconsAlthenticateIcon class="w-[122px] althenticate"/>
        </NuxtLink>
        <div class="w-full px-3 py-4">

            <div class="cursor-pointer w-min mb-5" :class="collapse?'mx-auto':'rotate-180'" @click="collapse=!collapse">
                <IconsArrow/>
            </div>

            <p class="title"> Manage </p>
            <ul class="sidenav-list">
                <li class="item">
                    <NuxtLink to="/">
                        <IconsEye/> <span>Overview</span> 
                    </NuxtLink>
                </li>
                <li class="item">
                    <NuxtLink to="/">
                        <IconsUserIcon/> <span>users</span> 
                    </NuxtLink>
                </li>
                <li class="item">
                    <NuxtLink to="/doors">
                        <IconsDoorsIcon/> <span>doors</span> 
                    </NuxtLink>
                </li>
                <li class="item">
                    <NuxtLink to="/">
                        <IconsComputerIcon/> <span>Computers</span> 
                    </NuxtLink>
                </li>
                <li class="item">
                    <NuxtLink to="/">
                        <IconsServerIcon/> <span>Servers</span> 
                    </NuxtLink>
                </li>
            </ul>

            <p class="title"> System </p>
            <ul class="sidenav-list">
                <li class="item">
                    <NuxtLink to="/configuration">
                        <IconsConfigIcon/> <span>Configuration</span> 
                    </NuxtLink>
                </li>
                <li class="item">
                    <NuxtLink to="/sso">
                        <IconsComputerIcon/> <span>SSO</span> 
                    </NuxtLink>
                </li>
                <li class="item">
                    <NuxtLink to="/billings">
                        <IconsBillingIcon/> <span>Billings</span> 
                    </NuxtLink>
                </li>
                <li class="item">
                    <NuxtLink to="/orders">
                        <IconsBillingIcon/> <span>New Order</span> 
                    </NuxtLink>
                </li>
                <li class="item">
                    <NuxtLink to="/logs">
                        <IconsLogsIcon/> <span>logs</span> 
                    </NuxtLink>
                </li>
            </ul>

            <div class="user">
                <div class="flex items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/Passport_Size_Image_of_Nouman.jpg" alt="" class="w-10 h-10 rounded-full mr-3">
                    <div class="details">
                        <p class="text-sm text-white capitalize leading-6">Kevin Dukkon</p>
                        <p class="text-[10px] leading-6 text-[#8EDDFF]">Kevin@allthenticate.net</p>
                    </div>
                </div>
                <div class="dots">
                    <div class="dot"></div>
                    <div class="dot mx-[2px]"></div>
                    <div class="dot"></div>
                </div>

            </div>

            <ul class="sidenav-list">
                <li class="item">
                    <NuxtLink to="/">
                        <IconsFeedbackIcon/> <span>Feedback</span> 
                    </NuxtLink>
                </li>
                <li class="item">
                    <NuxtLink to="/">
                        <IconsQuestionMarkIcon/> <span>help</span> 
                    </NuxtLink>
                </li>
                <li class="item" :class="collapse?'':'hidden'">
                    <NuxtLink to="/">
                        <IconsLogoutIcon/>
                    </NuxtLink>
                </li>
            </ul>
        </div>

    </div>
    
</template>

<style lang="scss" scoped>
.sideNav{
    @apply min-w-[230px] min-h-full bg-blue overflow-y-scroll transition-all duration-200;
    *{
        @apply transition-all duration-200;
    }
    
    &::-webkit-scrollbar{
        @apply hidden;
    }
    .title{
        @apply text-xl font-semibold leading-8 uppercase my-10 text-[#F9F9F9];
    }
    .sidenav-list{
        .item a{
            @apply flex items-center text-base font-semibold 
            text-white capitalize
            px-3 py-[10px] mb-2 rounded-lg;
            &:hover{
                @apply bg-[#125DAA];
            }
    
            svg{
                @apply w-6 mr-4;
            }
        }
        .item:hover a{
            @apply bg-[#125DAA] text-neon;
        }
    
    }
    .user{
        @apply flex justify-between items-start my-10;

    }
    .dots{
        @apply flex items-center mt-2 mr-3 cursor-pointer;
        .dot{
            @apply w-[3px] h-[3px] bg-white rounded-full;
        }
    }
}
.collapseNav{
    @apply min-w-[85px];

    .althenticate,
    .title,
    .item span,
    .details,
    .dots
    {
        @apply hidden;
    }
    .sidenav-list .item a{
        @apply w-11 h-11 mx-auto rounded-full bg-[#0081FF] p-0 flex justify-center items-center mb-4;
        svg{
            @apply m-0;
        }
    }
    .user{
        @apply m-0 mb-4 flex items-center justify-center;

        img{
            @apply m-0;
        }
    }

}
</style>
