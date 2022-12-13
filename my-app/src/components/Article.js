export default function Article(){



    return(

        <div className="flex flex-col lg:flex-row md:flex-col justify-center lg:text-start text-center gradiant lg:px-6 gap-6 gap-x-8 py-6">
          <div className=" grid justify-center mf:justify-start  pt-7">
            <div>
           <p className="text-4xl text-white font-bold">Metabnb NFTs</p>
           <p className="mt-4 text-white">Discover our NFTs gift cards collrction,Loyal<br></br>
           customers gets amazing gifts card which are<br></br>
           traded as Nfts. These Nfts gives our customer <br></br>
           access to loads of our exclusive services
           
           </p>
           </div>
           <div className=" md:h-10 lg:pt-0 pt-3 ">
           <button className="bg-white text-lilac text-gradiant rounded-md text-sm py-2 px-5 ">learn more</button>
           </div>
          </div>
          <div className=" lg:pl-0 flex justify-center  ">
         <img className="lg:h-20  " src="image/collections.png"/>
          </div>
        </div>
    )
}