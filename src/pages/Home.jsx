import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { CgArrowRightO} from "react-icons/cg";
import { TbReportAnalytics } from "react-icons/tb";
import {RiBuilding2Line , RiUserVoiceLine} from "react-icons/ri";
import { IoIosMegaphone} from "react-icons/io";


import { GrDocumentText } from "react-icons/gr";
import { Link } from "react-router-dom";
import Me from "../assets/img/Groupe29.svg";
import Me1 from "../assets/img/Poly8.svg";
import Me2 from "../assets/img/47.svg";
import Me5 from "../assets/img/key.png";
import ME4 from "../assets/img/drive-pdf.svg";
import ME9 from "../assets/img/Frame2.svg";
import ME10 from "../assets/img/Frame1.svg";
import R from "../assets/img/1.svg";
import Me11 from "../assets/img/Groupe6.svg";
import Me12 from "../assets/img/Groupe 1252 (1)/Groupe1252.png";




const Home = () => {
  const menus = [
    { name: "Tableau de bord", link: "/", icon: MdOutlineDashboard },
    { name: "Biens", link: "/", icon: RiBuilding2Line},
    { name: "Signalements", link: "/", icon:IoIosMegaphone },
    { name: "Mes comptes", link: "/", icon: TbReportAnalytics, margin: true },
    { name: "Documents", link: "/", icon: GrDocumentText},
    { name: "Assemblées génèrales", link: "/", icon: RiUserVoiceLine},
   
    { name: "Déconnection", link: "/", icon: CgArrowRightO },
  ];
  const [open, setOpen] = useState(true);

  return (

    <section className="flex gap-6 bg-slate-100 ">
    
      <div
        className={`bg-[#FFFFFF] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-black px-4`}
      >
        <div className="py-3 flex justify-end ">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer "
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative ">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-yellow-400 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden "
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    
      <div className="m-4 text-xl text-amber-400 font-semibold  ">

      <nav className=" bg-sky-700 w-full flex relative justify-between items-center m-max px-8 h-20">
        {/* logo */}
        <div className="inline-flex">
          <a className="_o6689fn" href="/"><div className="hidden md:block">
              
            </div>
            <img class="float-right" src={Me11}/>
          </a>
        </div>
        {/* end logo */}
        {/* search bar */}
        <div className="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
          <div className="inline-block">
            <div className="inline-flex items-center max-w-full">
              <button className="flex items-center flex-grow-0 flex-shrink pl-2 relative w-60 border  bg-white rounded-md px-1  py-1" type="button">
              <img class="float-right" src={R}/>
                <div className="block flex-grow flex-shrink overflow-hidden text-black  rounded-md ">Rechercher</div>
                <div className="flex items-center justify-center relative  h-8 w-8 rounded-md">
                 
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* end search bar */}
        {/* login */}
        <div className="flex-initial">
          <div className="flex justify-end items-center relative">
            <div className="flex mr-4 items-center">
            
              <div className="block relative">
              <button type="button" class="inline-flex relative items-center p-3 text-sm font-medium text-center text-white  rounded-lg hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
  <span class="sr-only">Notifications</span>
  <div class="inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-amber-400 rounded-full border-2 border-white dark:border-gray-900">3</div>
</button>



  
              </div>
            </div>
            <div className="block">
              <div className="inline relative">
              <img class="float-left" src={Me12}/>    
             

                  <div className="pl-1">
    
                 
                  <p class="text-xs font-light text-white dark:text-white">C/a Cabinet TABOUNI</p>
                  </div>
                
  
              </div>
            </div>
          </div>
        </div>
        {/* end login */}
      </nav>
      <div class="px-6 py-4">  </div>

      Tableau de bord
    


      

<div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

    <div class="  rounded-md shadow-lg bg-sky-700">
    <img class="float-right" src={Me2}/>
      <div class="px-6 py-4">
     
        <div class="font-bold text-xl mb-2">Bienvenue</div>
        <p class="text-gray-700 text-base">
        <p class="mb-3 font-bold text-white dark:text-white">Rabeb Boussaha</p>
    <p class="mb-1 font-light text-white dark:text-white">C/a Cabinet TABOUNI</p>
    <p class="mb-1 font-light text-white dark:text-white">06000 NICE</p>

    <p class="mb-1 font-light text-white dark:text-white">rabebbouba08@gmail.com.</p>
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-none px-10 py-2 text-sm font-semibold text-sky-600 mr-2 mb-2">  Gérèr mon profil</span>

      </div>
    </div>
 


    <div class="  rounded overflow-hidden shadow-lg">
   
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 text-blue-900">Actualité de votre agence</div>
        <p class="text-gray-700 text-base font-light">
          
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-sky-700 rounded-none  px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Mon agence</span>

      </div>
    </div>



    <div class="  rounded overflow-hidden shadow-lg ">
 
      <div class="px-3 py-2 bg-slate-300">
      <img src={Me1} />
        <div class="font-bold text-xl mb-2 text-blue-900">CABINET TABOUNI </div>
        <p class="text-gray-700 text-base">
        <p class="mb-1 font-light text-gray-700 dark:text-white">082BD GAMBETTA</p>
        <p class="mb-1 font-light ttext-gray-700 dark:text-white">06000 NICE</p>
         
        </p>
        <div class="font-bold text-xl mb-2 text-blue-900">TÉLÈPHONE </div>
        <p class="text-gray-700 text-base">
        <p class="mb-1 font-light text-gray-700 dark:text-white">0493888414</p>
    
        </p>
        <div class="font-bold text-xl mb-2 text-blue-900">HORAIRE D'OUVERTURE </div>
        <p class="text-gray-700 text-base">
        <p class="mb-1 font-light text-gray-700 dark:text-white">lundi au jeudi de 19H a 12H et 14H a 18H</p>
        <p class="mb-1 font-light ttext-gray-700 dark:text-white">Vendredi de 9H a 12H et 14H a 17H </p>
         
        </p>
      </div>
     
    </div>
</div>

<div class="flex ...">
 
<div class="p-1 w-9/12 text-center bg-blue-500 bg-opacity-75 md:bg-opacity-50 rounded-lg border shadow-xl sm:p- dark:bg-sky-600 dark:border-gray-700">
<img  src={Me} />


<div class=" text-left">
<h5 class="mb-2 text-3xl font-medium text-white dark:text-white text-right">Vous devez payez</h5>
</div>
<div class=" text-right-end">
    <dt class="mb-2 text-3xl font-extrabold text-right">25,07$</dt>
    <h5 class="mb-2  font-light text-white  text-right">Solde coproproriétaire</h5>
    </div>
    
      <div class="flex justify-between items-center">
            <span class="mb-2 text-sm font-font-light text-white dark:text-white ">vous etes  coproproetaire dans l'immeuble</span>
            
            
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Payer mon solde</a>
            <a href="#" class="text-blue-800  bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Mon extrait</a>
        </div>
</div>




<div class="p-2 w-3/12 ...">
<div class="divide-y divide-slate-200 ...">

<div class="  rounded overflow-hidden shadow-lg  ">
   <div class="px-6 py-4">
     <div class="font-bold text-xl mb-2 text-blue-900 text-centre">Nos articles</div>
     <img src={Me5} />
     <p class="text-gray-700 text-base font-light">
       
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
     </p>
     <div class="relative z-0">
    <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
    <p id="floating_helper_text" class="mt-2 text-xs text-gray-500 dark:text-gray-400"><a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Voir tous les articles</a>.</p>
</div>
   </div>
 </div>
 </div>
</div>       
</div>  




<div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
 
    <div class="  rounded overflow-hidden shadow-lg">
   
      <div class="px-8 py-4 bg-slate-100">
        <div class="font-bold text-xl mb-2 text-blue-900">Signalement</div>

    
        <p  class="text-gray-700 text-sm font-light text-center  ">
       
      en cours <img class="float-right h-5" src={ME9}/>
  
        </p>  

        <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
    <p id="floating_helper_text" class="mt-2 text-xs text-gray-500 dark:text-gray-400"><a href="#" class="text-blue-600 dark:text-blue-500 hover:underline"></a></p>
       
        <p  class="text-gray-700 text-sm font-light text-center  ">
      en cours <img class="float-right h-5" src={ME9}/>
        </p>  

     
        <div class="relative z-0">
    <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
    <p id="floating_helper_text" class="mt-2 text-xs text-gray-500 dark:text-gray-400"><a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Voir tous les Signalements </a>.</p>
</div>
      </div>
     
    </div>



    <div class="  rounded overflow-hidden shadow-lg ">
 
      <div class="px-3 py-2 ">
      <img src={Me1} />


      
        <div class="font-bold text-xl mb-2 text-blue-900 text-center  " >derniers documents </div>
        <img class="float-left  w-90 h-5 " src={ME4}/>
        <p  class="text-gray-700 text-sm font-light text-center  ">
        Décompte du 31-10-2021 <img class="float-right h-5" src={ME9}/>
        </p>   
        <img class="float-left  h-5 " src={ME4}/>
        <p class="text-gray-700 text-sm font-light text-center  ">
          
            Décompte du 31-10-2021 <img class="float-right h-5" src={ME10}/>
         </p>
         <img class="float-left  h-5 " src={ME4}/>
         <p class="text-gray-700 text-sm font-light text-center  ">
          
          Décompte du 31-10-2021<img class="float-right h-5" src={ME10}/>
         </p>
         <img class="float-left h-5" src={ME4}/>
         <p class="text-gray-700 text-sm font-light text-center ">
          
          Décompte du 31-10-2021  <img class="float-right h-5" src={ME10}/>
         </p>
        
        
      
         <div class="relative z-0">
    <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
    <p id="floating_helper_text" class="mt-2 text-xs text-gray-500 dark:text-gray-400"><a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Voir tous les documents </a>.</p>
</div>
      
      </div>
     
    </div>
</div>





      </div>
    </section>
  );
};

export default Home;
