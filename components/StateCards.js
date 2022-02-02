

function StateCards() {
    return (
        <div className="max-w-6xl xl:mx-auto mt-32 mx-5">
            <div className="flex flex-col items-center space-y-3 mb-5">
                <h1 className="text-orange-600 text-2xl font-bold sm:text-4xl md:text-6xl">OUR REACH IN INDIA</h1>
                <p className="text-sm sm:text-lg md:text-2xl">Check all the states we are planned into.</p>
            </div>
            <div className="gap-y-5 gap-x-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-sm text-white">

                <div className="card group">
                    <img src="/tamil-nadu.png" alt="image" className="cardImg" />
                    <h1 className="cardHeading">Tamil Nadu</h1>
                    <p className="hidden text-xs sm:text-sm group-hover:inline-block">Youth Tamil Nadu is society with over 500 members. They have put their heart and energy into development a society that we are pleased to be a part of.</p>
                 
                </div>
                <div className="card group">
                    <img src="/odisha.png" alt="image" className="cardImg" />
                    <h1 className="cardHeading">Odisha</h1>
                    <p className="hidden text-xs sm:text-sm group-hover:inline-block">Youth Odisha has aided Youth India Foundation in marketing the world a better place to live in every manner imaginable. They have recognized the power that youth possesses and have utilized it to bring smilies to many people's faces.</p>
                </div>
                <div className="card group">
                    <img src="/maharastra.png" alt="image" className="cardImg" />
                    <h1 className="cardHeading">Maharastra</h1>
                    <p className="hidden text-xs sm:text-sm group-hover:inline-block">Youth Maharastra is a group of students from over 10+ different colleges in the commercial hub of India. The team has repeatedly proved their dedication by joining us in our efforts to develop a community and raise donations for worthy social causes.</p>
                </div>
                <div className="card group">
                    <img src="/karnataka.png" alt="image" className="cardImg w-32 h-32" />
                    <h1 className="cardHeading">Karnataka</h1>
                    <p className="hidden text-xs sm:text-sm group-hover:inline-block">Welcome to the land of gold, also known as Electronic city of IT hub of India. None other tha karnataka. People here are kind hearted, Interacting with them feels as commfortable as drinking a nicely brewed coorg coffee on a early morning.</p>
                </div>
                <div className="card group">
                    <img src="/delhi.png" alt="image" className="cardImg" />
                    <h1 className="cardHeading">Delhi</h1>
                    <p className="hidden text-xs sm:text-sm group-hover:inline-block">We make, a living from what we get, but we make a life from what we give, "Youth India Delhi" is a team of dedicated members who are working towards addressing Delhi's social, cultural, and environmental issues. The goal of Youth India Delhi is to bring young peoples from all areas of life together.</p>
                </div>
                <div className="card group">
                    <img src="/west bengal.png" alt="image" className="cardImg" />
                    <h1 className="cardHeading">West Bengal</h1>
                    <p className="hidden text-xs sm:text-sm group-hover:inline-block">Youth Bengal is a thriving branch of the Youth India Foundation. It brings together young people from throughtout the country to put their expertise and skills to good use.</p>
                </div>
                <div className="card group">
                    <img src="/yif-logo.png" alt="image" className="cardImg w-32 h-32" />
                    <h1 className="cardHeading">Outreach</h1>
                    <p className="hidden text-xs sm:text-sm group-hover:inline-block">The Youth India Outreach initiative by the Youth India Foundation revolves around the idea of kindness and compassion towards the society. Currently, there is an outreach team in 12 states working to bring together young peoples to engage in and promotes social work.</p>
                </div>
                 
            </div>
        </div>
    )
}

export default StateCards