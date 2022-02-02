function Services() {
    return (
        <div className="max-w-6xl mt-32 xl:mx-auto mx-5">
            <div className="flex flex-col items-center space-y-3 my-5">
                <h1 className="text-orange-600 text-2xl font-bold sm:text-4xl md:text-6xl">OUR SERVICES</h1>
                <p className="text-sm sm:text-lg md:text-2xl">Service We Provide</p>
            </div>
            <div className="grid justify-items-center grid-cols-1 gap-x-5 gap-y-5 md:grid-cols-2 lg:grid-cols-3 mb-10">

                <div className="max-w-md flex flex-col space-y-14 items-start justify-between p-4 pt-6 shadow-xl shadow-gray-400 bg-red-50">
                    <div className="w-full flex justify-around items-center text-lg text-black">
                        <img src="/Your Friends.png" alt="image" className=" object-contain h-16 md:h-24 rounded-t-xl" />
                        <h1>Your Friends</h1>
                    </div>
                    <p className="text-sm sm:text-md">One for all and all for one, Youth India Foundation is your friend through the best or the worst, nothing in between.</p>
                    <button className="rounded-full px-4 py-2 border-2 border-orange-600 text-orange-600">Learn More</button>
                </div>

                <div className="max-w-md flex flex-col space-y-14 items-start justify-between p-4 pt-6 shadow-xl shadow-gray-400 bg-blue-50">
                    <div className="w-full flex justify-around items-center text-lg text-black">
                        <img src="/E-Commerce.png" alt="image" className=" object-contain h-16 md:h-24 rounded-t-xl" />
                        <h1>Karton</h1>
                    </div>
                    <p className="text-sm sm:text-md">An online initiative for marketing that provides an open and safe platform for all entrepreneurs to promote and sell their products.</p>
                    <button className="rounded-full px-4 py-2 border-2 border-orange-600 text-orange-600">Learn More</button>
                </div>

                <div className="max-w-md flex flex-col space-y-14 items-start justify-between p-4 pt-6 shadow-xl shadow-gray-400 bg-green-50">
                    <div className="w-full flex justify-around items-center text-lg text-black">
                        <img src="/E-School.png" alt="image" className=" object-contain h-16 md:h-24 rounded-t-xl" />
                        <h1>E-School</h1>
                    </div>
                    <p className="text-sm sm:text-md">Distance is no barrier in the way of education. Youth India Foundation’s initiative to help the society by providing study materials and guidance to every being despite anything. Because a better tomorrow starts with today.</p>
                    <button className="rounded-full px-4 py-2 border-2 border-orange-600 text-orange-600">Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Services