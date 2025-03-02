
function Card({name , btnText="Click Me"}){
    return(
        <>
        <div className="relative h-[400px] w-[300px] rounded-md mb-4">
        <img
          src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg"
          alt="AirMax Pro"
          className="z-0 h-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{name}</h1>
          <p className="mt-2 text-sm text-gray-300">My name is Delba from USA , currently I am working as a Software Developer in India under Yash Tripathi
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">{btnText} -</button>
        </div>
      </div>
        </>
    )
}

export default Card