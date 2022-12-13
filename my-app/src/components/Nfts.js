export default function Nfts(props){


    return(
  
        <div className="grid justify-center pt-2 rounded-large border-2 border-boxwind pl-2 pr-2 lg:w-auto md:w-21">
        <img className="w-20 " src={props.imageUrl}/>
        <div className="flex flex-row justify-between pt-2">
           <div>
           <p className="text-xs text-bold font-bold text-darkwhite">{props.title}</p>
           <p className="text-xs text-bold font-bold text-darkwhite">{props.location}</p>
           </div>
           <div>
           <p className="text-right text-xs font-bold">1MBT per night</p>
           <p className="text-xs text-bold font-bold text-darkwhite">{props.description}</p>
           </div>
        </div>
        <div className="pt-3 pb-3">
               <img src="image/stars.png"/>
           </div>
       </div>
    )
}