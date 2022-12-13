export default function Main() {
  
  return (
    <div>
    
      <div className=" flex lg:flex-row flex-col md:p-3 justify-center gap-7.5 pt-7 ">
        <div className="md:text-start pl-2  pt-4">
          <h1 className="md:text-5.5xl  text-3.5xl">
            Rent a <font className="text-lilac font-bold  ">Place</font> far away from
            <br></br>
            <font className="text-lilac font-bold">Home</font> in the{" "}
            <font className="text-lilac font-bold">Metaverse</font>
          </h1>
          <p className="text-xl ">
            we provide you access with luxury and affordable houses 
            <br></br>
            in he metaverse,get a chance to turn your 
            <br></br>
            imagination to reality at your comfort
            
          </p>

          <div className="flex md:justify-start justify-center lg:justify-start md:px-0 pr-2 flex-row pt-5">
            <input
              className="md:w-3/5 w-4/5 border-2 border-boxwind 
             rounded-l-lg
            "
            ></input>
            <button className="buttons gradiant text-white py-2 md:px-7 px-6">search</button>
          </div>
        </div>
        <div className=" flex md:p-0 p-2 justify-center  ">
          <img className="" src="image/grid.png" />
        </div>
      </div>
      <div className="flex mt-6 gradiant md:text-4xl text-1.5xl  flex-row justify-around text-white">
        <div className="icons ">
          <img className="md:h-auto h-4 md:p-0 " src="image/house.png" />
          <p>MBToken</p>
        </div>
        <div className="icons ">
          <img className="p-1 md:h-auto h-5 " src="image/cat.png" />
          <p>METAMASK</p>
        </div>
        <div className="icons">
          <img className="md:h-auto h-5  p-1" src="image/subtract.png" />
          <p>Opensea</p>
        </div>
      </div>
      <div className="p-4 lg:mt-5 leading-10 font-bold">
      <p className="lg:text-5xl md:text-4xl text-3xl text-center">Inspiration for your new adventures</p>
    </div>
    </div>
  );
}
