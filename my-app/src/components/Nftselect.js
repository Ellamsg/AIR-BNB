export default function Nftselect(){

    return(
        <div className="flex md:flex-row lg:gap-6 flex-col lg:text-xl md:text-base text-xl lg:justify-start justify-around md:py-4 lg:px-7 lg:py-6">
            <div className="flex  text-center flex-col md:flex-row md:gap-2 lg:gap-5.5 mt-6 md:mt-2">
            <p>Restaurant</p>
            <p>Cottage</p>
            <p>Castle</p>
            <p>Fantast city</p>
            <p>Beach</p>
            <p>Cabins</p>
            <p>Off-grid</p>
            <p>Farms</p>
            </div>
            <div className="border-2 border-boxwind flex justify-center gap-5  rounded-md md:px-4 mx-7 md:mx-0  py-2">
                <p>location</p>
                <img className="" src="image/setting-5.png"/>
            </div>
            
        </div>
    )
}