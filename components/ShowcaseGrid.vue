<template>
    <div class=" custom_radius relative">
       
        <div class="max-w-[1440px] mx-auto contain_div">
            <div class="flex lower ">
                <div class="rounded-bl-[600px]">
                    <div class="flex overflow-hidden">
                        <div class="w-[515px] h-[393px]">
                            <img class="w-full h-full overflow-hidden object_fit" src="/img/tile1.png" />
                        </div>
                        <div class="w-[515px] h-[393px]">
                            <img class="w-full h-full overflow-hidden object_fit" src="/img/tile2.png" />
                        </div>
                    </div>
                    <div class="w-[1031px] h-[374px]">
                        <img class="w-full h-full object_fit" src="/img/tile3.png" />
                    </div>
                </div>
                <div class="h-[768px] overflow-hidden ">
                    <img class="h-full overflow-hidden object_fit" src="/img/tile4.png" />
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>

    .object_fit{
        object-fit: cover;
 
    }
    .contain_div{
        overflow: hidden;
        border-bottom-left-radius: 600px;
        border-bottom-right-radius: 600px;
    }
   .contain_div .lower{
        width: 100%; /* This makes the image fill the container */
        height: auto; /* Maintains the aspect ratio of the image */
        
   }
  
</style>