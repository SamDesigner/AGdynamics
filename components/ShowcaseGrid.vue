<template>
    <div class=" custom_radius relative">
       
        <div class="contain_div">
            <div class="grid  md:h-[768px] bg-faintGreen grid-cols-3 lower ">
                <div class="col-span-2 rounded-bl-[600px]">
                    <div class="grid grid-cols-2 overflow-hidden">
                        <div class="md:h-[393px]">
                            <img class="w-full h-full overflow-hidden object_fit" src="/img/tile1.png" />
                        </div>
                        <div class="md:h-[393px]">
                            <img class="w-full h-full overflow-hidden object_fit" src="/img/tile2.png" />
                        </div>
                    </div>
                    <div class="w-full md:h-[374px]">
                        <img class="w-full h-full object_fit" src="/img/tile3.png" />
                    </div>
                </div>
                <div class=" md:h-[768px] overflow-hidden ">
                    <img class="h-full w-full overflow-hidden object_fit" src="/img/tile4.png" />
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
        height:586px
    }
   .contain_div .lower{
        width: 100%; /* This makes the image fill the container */
        height: auto; /* Maintains the aspect ratio of the image */
        
   }
  
</style>