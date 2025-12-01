<script>
  import Rabbit from '../../assets/peterRabit.png';
  import { Baby, Calendar, Clock } from '@lucide/svelte/icons';
  import BabyRabbit from '../../assets/rabbit.png';

  let { dataGest } = $props();
</script> 

<div
  id="backside"
  class="absolute bg-white w-full h-full bg-[url(../../assets/borderBackside.png)] shadow-gray-900 shadow-lg rounded-md 
    flex flex-col items-center justify-center text-center p-6 
    transform-[rotateY(180deg)] backface-hidden border-3 border-blue-300 "
>
  <div class="text-[#4682B4] font-medium">
    <div class="mt-14 font-semibold italic">{dataGest?.msg || 'HOLA FAMILIA'}</div>
    {#if dataGest?.msg }
      <div class="text-center w-auto pb-2 text-sm pt-2">
        Cada día escucho sus voces, siento su amor y me imagino todo lo divertido que será abrazarlos, 
        jugar y recibir todo ese afecto de amor que ya me están preparando. Estoy contando los días, pero mientras tanto, 
        quiero agradecerles por estar aquí, celebrando mi llegada.
      </div>
    {:else}
      <div class="text-center w-auto px-3 pb-2 text-sm pt-2">
        Una bendición pronto llegará a iluminar nuestras vidas y a llenarnos de amor y alegría.
        Esperamos compartir con cada uno de ustedes la próxima llegada de nuestro bebé.
      </div>
    {/if}
    
    <div class="flex justify-center w-full my-1">
      <div class="flex justify-center items-center font-SEMIBOLD bg-[#4682B4] text-white w-38 my-1 p-1 text-sm">
        <Baby strokeWidth={1} class="w-5 h-5 mr-2"/>EINAR DARIEL
      </div>
    </div>
    <div class="flex items-center justify-center text-sm">
      <div class="flex items-center pr-5 py-1 border-y border-y-[#4682B4]">
        <Calendar strokeWidth={1} class="w-4 h-4 mr-1"/> 29 DIC
      </div>
      <div>
        <img class="m-auto scale-x-[-1]" src={Rabbit} alt="Rabbit" width="50"/>
      </div>
      <div class="flex font-semibold items-center pl-4 py-1 border-y border-y-[#4682B4]">
        <Clock strokeWidth={1} class="w-4 h-4 mr-1"/> 6:00 PM
      </div>
    </div>
    
    <div class="text-sm pt-2">
      <div class="flex text-xs pt-1">
        <div class="w-1/2 text-end pr-2 mr-2 border-r border-r-[#4682B4]">
          <p>Lugar: <br>Teabo, Yucatan<br>Mi casa</p>
        </div>
        <div class="w-1/2 text-start">
          <p>Direccion: <br>Calle 34 X 35 Y 37 <br> # 213</p>
        </div>
      </div>
    </div>
  </div>
  <div class="hidden w-full justify-end">
    <img src={BabyRabbit} alt="Baby" width="60"/>
  </div>
  
</div>
<style>
  #backside {
    background-image: url('../../assets/borderBackside.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>