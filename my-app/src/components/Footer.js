 export default function Footer(){
  return(

    <div className="bg-airblack text-center lg:text-left lg:gap-7  grid lg:grid-cols-4 pb-5 justify-around gap-7  md:gap-0 md:grid-cols-2   pt-7 md:justify-around text-white">
        <div className="grid lg:pl-7 lg:justify-items-start justify-items-center">
         <div className="flex flex-row">
            <img src="image/whitehouse.png"/>
            <img src="image/meta.png"/>

         </div>
         <div className="flex flex-row gap-4 pt-7">
         <img src="image/twitter.png"/>
         <img src="image/facebook.png"/>
         <img src="image/instagram.png"/>
         </div>
         <div className="pt-5">
          @ 2022 meta bnb
         </div>
        </div>
        <div className="lg:pl-4">
          <p className="text-lg font-bold">Community</p>
          <p>NFT </p>
          <p>Tokens </p>
          <p>Landlords </p>
          <p>Discord</p>
        </div>
        <div>
        <p className="text-lg font-bold leading-10">Places</p>
          <p>castle </p>
          <p>farm </p>
          <p>beach</p>
          <p>learn more</p>
        </div>
        <div>
        <p className="text-lg font-bold">About us</p>
          <p>road map</p>
          <p>creators</p>
          <p>careers </p>
          <p>contact us</p>
        </div>
    </div>
  )



 }