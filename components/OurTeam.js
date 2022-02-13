function OurTeam() {
    return (
        <div className="max-w-6xl mt-32 xl:mx-auto mx-5 text-center">
            <h1 className="text-black text-left text-lg mt-5 sm:text-2xl">Volunteer</h1>
            <h1 className="text-orange-600 text-left text-2xl mb-5 font-bold sm:text-4xl md:text-6xl">Our Team</h1>
               
            <div className="grid justify-items-center grid-cols-1 gap-x-5 gap-y-5 md:grid-cols-2 lg:grid-cols-4 mb-10">

                <div className="relative group cursor-pointer sm:text-sm text-orange-600 text-left overflow-hidden rounded-xl shadow-xl shadow-gray-400">
                    <img src="/profile/cofo1.png" alt="image" className=" object-contain rounded-xl" />
                    <div className="absolute left-0 right-0 bottom-0 bg-black bg-opacity-80 z-10 transform transition duration-500 ease-out group-hover:-translate-y-36 -translate-y-0">
                        <div className="relative">
                            <h1 className="p-2">Founder</h1>
                            <h1 className="text-white p-2 text-xl sm:text-2xl font-bold">Subhankar Nanda</h1>
                            <p className="absolute p-2 bg-black bg-opacity-80 z-10 ">True success is not acing all your exams, working at the top notch companies, earnings millions of money but becoming a humble human who uses his power to bring smiles on the faces.</p>
                        </div>
                    </div>
                </div>


                <div className="relative group cursor-pointer sm:text-sm text-orange-600 text-left overflow-hidden rounded-xl shadow-xl shadow-gray-400">
                    <img src="/profile/cofo2.png" alt="image" className=" object-contain rounded-xl" />
                    <div className="absolute left-0 right-0 bottom-0 bg-black bg-opacity-80 z-10 transform transition duration-500 ease-out group-hover:-translate-y-36 -translate-y-0">
                        <div className="relative">
                            <h1 className="p-2">Co-Founder</h1>
                            <h1 className="text-white p-2 text-xl sm:text-2xl font-bold">Aanis Narnolia</h1>
                            <p className="absolute p-2 bg-black bg-opacity-80 z-10 ">I've always believed that every nook and cranny has a story waiting to be told and I am set to make sure those beautiful stories are heard</p>
                        </div>
                    </div>
                </div>

                <div className="relative group cursor-pointer sm:text-sm text-orange-600 text-left overflow-hidden rounded-xl shadow-xl shadow-gray-400">
                    <img src="/profile/cofo3.png" alt="image" className=" object-contain rounded-xl" />
                    <div className="absolute left-0 right-0 bottom-0 bg-black bg-opacity-80 z-10 transform transition duration-500 ease-out group-hover:-translate-y-36 -translate-y-0">
                        <div className="relative">
                            <h1 className="p-2">Co-Founder</h1>
                            <h1 className="text-white p-2 text-xl sm:text-2xl font-bold">Sangram Sahoo</h1>
                            <p className="absolute p-2 bg-black bg-opacity-80 z-10 ">Capturing precious moments from life - photography - is something that helps you to know who you are, connecting you to your past</p>
                        </div>
                    </div>
                </div>

                <div className="relative group cursor-pointer sm:text-sm text-orange-600 text-left overflow-hidden rounded-xl shadow-xl shadow-gray-400">
                    <img src="/profile/cofo4.png" alt="image" className=" object-contain rounded-xl" />
                    <div className="absolute left-0 right-0 bottom-0 bg-black bg-opacity-80 z-10 transform transition duration-500 ease-out group-hover:-translate-y-36 -translate-y-0">
                        <div className="relative">
                            <h1 className="p-2">Co-Founder</h1>
                            <h1 className="text-white p-2 text-xl sm:text-2xl font-bold">Pushney Mahapatra</h1>
                            <p className="absolute p-2 bg-black bg-opacity-80 z-10 ">Versatility - the key competency of the future. Just as important it is to master something you have a talent for, it is equally important to take up new hobbies and develop them</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="navBtn text-xl mb-5 px-4 py-2">Read More</button>
        </div>
    )
}

export default OurTeam