function OurCases() {
    return (
        <div className="max-w-6xl mt-32 xl:mx-auto mx-5">
            <div className="flex flex-col items-center space-y-3 my-5">
                <h1 className="text-orange-600 text-2xl font-bold sm:text-4xl md:text-6xl">OUR CASES</h1>
                <p className="text-sm sm:text-lg md:text-2xl">Our Recent Leadership Program for YOUTH</p>
            </div>
            <div className="grid justify-items-center grid-cols-1 gap-x-5 gap-y-5 md:grid-cols-2 lg:grid-cols-3 mb-10">
                <div className="flex flex-col justify-between items-center pb-12 rounded-xl shadow-xl shadow-gray-400 bg-red-50">
                    <img src="/pubg.png" alt="image" className=" object-contain rounded-t-xl" />
                    <p className="p-5 text-sm sm:text-md">For all the e-sport lovers, Youth OMR is organising a BGMI and Free Fire battleship 28, 29 July and 1, 2 August respectively. Registration are open with a price drop.</p>
                    <button className="rounded-full px-4 py-2 border-2 border-orange-600 text-orange-600">To Register</button>
                </div>
                <div className="flex flex-col justify-between items-center pb-12 rounded-xl shadow-xl shadow-gray-400 bg-blue-50">
                    <img src="/sunbeam.jpg" alt="image" className=" object-contain rounded-t-xl" />
                    <p className="p-5 text-sm sm:text-md">The Sunbeam society, U.P. is organising a series of competitions for all the young talents out there. Unleash the hidden astist in you and showcase your talent through story-telling, acting, stand-up, art and much more. Register now from our website.</p>
                    <button className="rounded-full px-4 py-2 border-2 border-orange-600 text-orange-600">To Register</button>
                </div>
                <div className="flex flex-col justify-between items-center pb-12 rounded-xl shadow-xl shadow-gray-400 bg-green-50">
                    <img src="/hackethon.jpeg" alt="image" className=" object-contain rounded-t-xl" />
                    <p className="p-5 text-sm sm:text-md">Youth India KTR chapter is here with an exciting hackathon, a web-development tech event organised on 29th and 30th July. Gear up yourself and register now!</p>
                    <button className="rounded-full px-4 py-2 border-2 border-orange-600 text-orange-600">To Register</button>
                </div>
            </div>
        </div>
    )
}

export default OurCases