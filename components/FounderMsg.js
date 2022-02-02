function FounderMsg() {
    return (
        <div className="bg-orange-100 mt-32 mb-12 py-24">
            <h1 className="text-orange-600 text-center text-2xl font-bold sm:text-4xl md:text-6xl mb-4">OUR FOUNDER MESSAGE</h1>
            <div className="max-w-6xl xl:mx-auto mx-5 grid grid-cols-1 justify-items-center md:grid-cols-2">
                
                <img src="/founder.jpg" alt="image"/>
                <div className="flex flex-col justify-between items-center">
                    <div>
                        <h1 className="font-semibold text-lg text-black mb-2">Mr Subhankar Nanda</h1>
                        <p className="text-gray-700">
                        The Founder and the Chairman but mostly importantly, the backbone of the organization. A brave hearted man, powerful and continuously growing to better. Shubhankar has been service oriented and worked on mammoth projects since his teenage. He organized a tech-fest just at the age of 16.
                        He started Youth India to mobilize the youth of our nation to unleash their potentials to the fullest. Starting with only 4 people, Youth India was led by Shubhankar and now has 7000 members. He started the organization with a good cause and to build a social entrepreneurship platform where the youth of the nation gather to become an organization where development, funding, and implementation of solutions to all kinds of problems takes place.
                        </p>
                    </div>
                    <button className="navBtn text-xl px-4 py-2 mt-5">Know More</button>
                </div>
            </div>
        </div>
    )
}

export default FounderMsg