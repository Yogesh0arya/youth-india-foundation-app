

function FrontPage() {
    return (
        <div className="bg-green-100 ">
            <div className="max-w-6xl h-screen xl:mx-auto mx-5 flex flex-col justify-center space-y-12 items-center lg:flex-row-reverse">
                
                <img className='w-56 h-56 sm:w-64 sm:h-64 lg:w-96 lg:h-96 rounded-full object-cover' src='children.jpg' alt='child' />

                <div className='flex flex-col items-center space-y-3 lg:space-y-5 lg:mr-16'>
                    <h1 className="text-orange-600 font-bold text-2xl sm:text-4xl lg:text-5xl xl:text-6xl">Youth India Foundation</h1>
                    <p className="text-center text-sm  sm:text-xl sm:w-[500px] md:w-[550px] text-green-800">A community for everyone to look beyound their own interests. Join us in our journey of a better and brighter tomorrow.</p>
                    <button className='navBtn text-xl px-4 py-2'>Get Started</button>
                </div>      
            </div>      
        </div>
    )
}

export default FrontPage