function Events() {
    return (
    <div className="bg-green-100 py-12 mt-32">
        <div className="max-w-6xl  xl:mx-auto mx-5 text-center">
            <h1 className="text-orange-600 text-center text-2xl my-5 font-bold sm:text-4xl md:text-6xl">Events</h1>
               
            <div className="grid justify-items-center grid-cols-1 gap-x-5 gap-y-5 md:grid-cols-2 lg:grid-cols-3 mb-10">
                <div className="group relative overflow-hidden text-center rounded-xl shadow-xl shadow-gray-400">
                    <img src="/fitoor.png" alt="image" className=" object-contain rounded-xl" />
                    <div className="absolute cursor-pointer z-10 opacity-0 transform transition duration-500 ease-out translate-y-full top-0 group-hover:translate-y-0 group-hover:opacity-100 bg-red-100 bottom-0 p-5 md:pt-8 ">
                        <h1 className="text-lg md:text-2xl my-5 text-orange-600 font-bold">Fitoor</h1>
                        <p className="text-sm sm:text-xl">An online singing competition organized by Youth Odisha. &quot:The finale had a reach of 1.5 lakh people with over 5000 live viewers, all the top 6 were past winners of various national level competitions. </p>
                    </div>
                </div>
                <div className="group relative overflow-hidden text-center rounded-xl shadow-xl shadow-gray-400">
                    <img src="/shades.png" alt="image" className=" object-contain rounded-xl" />
                    <div className="absolute cursor-pointer z-10 opacity-0 transform transition duration-500 ease-out translate-y-full top-0 group-hover:translate-y-0 group-hover:opacity-100 bg-orange-100 bottom-0 p-5 md:pt-8 ">
                        <h1 className="text-lg md:text-2xl my-5 text-orange-600 font-bold">Shades</h1>
                        <p className="text-sm sm:text-xl">November 15th, 2020, Shades, an event organized by Youth Odisha. The event brought forth the raw unrecognised local talents of Odisha, to give them their own special stands to prove their worth before thousands of eyes. </p>
                    </div>
                </div>
                <div className="group relative overflow-hidden text-center rounded-xl shadow-xl shadow-gray-400">
                    <img src="/codeathon.png" alt="image" className=" object-contain rounded-xl" />
                    <div className="absolute cursor-pointer z-10 opacity-0 transform transition duration-500 ease-out translate-y-full top-0 group-hover:translate-y-0 group-hover:opacity-100 bg-blue-100 bottom-0 p-5 md:pt-8 ">
                        <h1 className="text-lg md:text-2xl my-5 text-orange-600 font-bold">Code-A-Thon</h1>
                        <p className="text-sm sm:text-xl">An online coding competition was organized from 6th - 10th June, 2021by the SICSR Chapter of Youth Maharashtra. The event was a great success as youth from all over the country gathered to showcase their skills. !</p>
                    </div>
                </div>
            </div>
            <button className="navBtn text-xl px-4 py-2">Check out for features</button>
        </div>
    </div>
    )
}

export default Events