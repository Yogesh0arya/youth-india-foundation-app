import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Stories() {
    return (
    <div className="mt-32 bg-gray-100 py-12">
        <div className="max-w-6xl xl:mx-auto mx-5">
            <div className="flex flex-col items-center space-y-3 my-5">
                <h1 className="text-orange-600 text-2xl font-bold sm:text-4xl md:text-6xl">Read Stories</h1>

                <div className="text-gray-700 w-80 sm:w-96 md:w-[700px]">
                    <Carousel  autoPlay interval="5000" transitionTime="2000" infiniteLoop showStatus={false} 
                        renderIndicator={(onClickHandler, isSelected, index, label) => {
                        const defStyle = { marginLeft: 20, color: "orange", cursor: "pointer" };
                        const style = isSelected
                        ? { ...defStyle, color: "black" }
                        : { ...defStyle };
                        return (
                        <span
                            style={style}
                            onClick={onClickHandler}
                            onKeyDown={onClickHandler}
                            value={index}
                            key={index}
                            role="button"
                            tabIndex={0}
                            aria-label={`${label} ${index + 1}`}
                        >
                            {"●"}
                        </span>
                        );
                    }}

                    >
                        <div>
                            <div className="mb-8 mt-4 mx-8">
                                <div className="bg-[url('/profile/ankit-soni.png')] mx-auto w-28 h-28 rounded-full bg-cover mb-5"/>
                                <h2 className="text-2xl font-bold mb-4">Ankit Soni</h2>
                                <p className="text-orange-600">I am Ankit Soni, National General Secretary of Youth India Foundation. I started my journey in youth india in January 2021 as a business development member. It&apos;s been almost 7 months, and the graph of my learning experience has shown tremendous growth. With every passing day, not just on how to be a better worker or manager, but also, how to be a better person. Started in the field of public relations, marketing and business development, youth india has become the bedrock to my career. Nevertheless, it gives me the space to think and model my ideas as well as the opportunity to implement and see them in action. I believe that the potential of this foundation is beyond the seven skies and we, the youth in true sense, can make unbelievable changes, only if we believe in ourselves.</p>
                            </div>   
                        </div>
                        <div>
                            <div className="mb-8 mt-4 mx-8">
                                <div className="bg-[url('/profile/deeksha.png')] mx-auto w-28 h-28 rounded-full bg-cover mb-5"/>
                                <h2 className="text-2xl font-bold mb-4">Deeksha Lamba</h2>
                                <p className="text-orange-600">My name is Deeksha Lamba, my experience at Youth India foundation has been wholesome, I started as a member of the Ramanujan Society&apos;s PR department, where I not only learned a lot of new skills, but also grew professionally.I was promoted as a PR head of society , and learned the know-how of team management, and cultivated healthy relations with people which improved my communication skills.Youth India Foundation was my first internship, and I put my heart and soul into it. Working as the public relations director for All States and overseeing the entire PR department as interim PR director, I am always learning and growing. I am elevated to be a part of this organisation because it has provided me with constant support and a familiar setting.</p>
                            </div>   
                        </div>
                        <div>
                            <div className="mb-8 mt-4 mx-8">
                                <div className="bg-[url('/profile/harsh-joshi.png')] mx-auto w-28 h-28 rounded-full bg-cover mb-5"/>
                                <h2 className="text-2xl font-bold mb-4">Harsh Joshi</h2>
                                <p className="text-orange-600">My name is Harsh and I&apos;m currently a part of the Marketing Department. My journey at Youth India Foundation has been amazing. The Marketing department is like one big family for me. Youth India Foundation has one of the best working environments, where I got to develop myself, both professionally and as a person. People here are doing crazy things at young ages, there&apos;s a lot to learn from every single person. Everyone is valued here, their success is celebrated and problems are solved with serenity. Such professionalism combined with a positive environment makes me feel very comfortable and involved. I have actually seen myself growing day by day, learning new skills and developing new relations. It&apos;s just a beginning for me and I consider myself very lucky to be a part of this wonderful organization. Anyone who seeks to be a part of YIF, this is one of the best platforms that can help you build a better future. </p>
                            </div>
                        </div>
                        <div>
                            <div className="mb-8 mt-4 mx-8">
                                <div className="bg-[url('/profile/karan.png')] mx-auto w-28 h-28 rounded-full bg-cover mb-5"/>
                                <h2 className="text-2xl font-bold mb-4">Karan Nandwani</h2>
                                <p className="text-orange-600">There comes a time in every person&apos;s life, when they wish to be a part of something bigger than themselves. It is either a way to reassure themselves that they have a path worth walking or to experience control over their progress. This is what made me sign up with this organization whose workings I would describe as nothing short of quintessential. Haranguing about myself would be inconsequential, for I am nothing but a man here to help in the way I know best, IT and people. Help me make a change, no matter how small it is.</p>
                            </div>   
                        </div>
                        <div>
                            <div className="mb-8 mt-4 mx-8">
                                <div className="bg-[url('/profile/shaleen.png')] mx-auto w-28 h-28 rounded-full bg-cover mb-5"/>
                                <h2 className="text-2xl font-bold mb-4">Shaleen Kispotta</h2>
                                <p className="text-orange-600"> My name is Shaleen Kispotta, currently working as National HR Director for the Youth India Foundation. It&apos;s been a year now with YIF and I can honestly say that it&apos;s been fantastic since I&apos;ve not only met friends, but also found a family. It&apos;s been a long journey that has aided my professional and personal development. I&apos;d say it was a difficult task for me to build a team, being president of Viman Nagar Society, Maharashtra but it was the one from which I learned a great day. I was promoted to National HR Director after three months. I can&apos;t even count how many things I&apos;ve learned in the last one year. The people here are absolute sweethearts and I just love working with each one of them. The organisation has really aided me in honing my leadership skills and has also shown me that I am capable of much more than I previously believed! </p>
                            </div>   
                        </div>
                        <div>
                            <div className="mb-8 mt-4 mx-8">
                                <div className="bg-[url('/profile/sukhraj.png')] mx-auto w-28 h-28 rounded-full bg-cover mb-5"/>
                                <h2 className="text-2xl font-bold mb-4">Sukhraj Singh SAPAL</h2>
                                <p className="text-orange-600"> My name is Sukhraj, and I began my journey as the National Ambassador for the Youth India Foundation. In addition, I was the country&apos;s first Ambassador. I was looking for different viewpoints on various roles, and I knew the Youth India Foundation was a trustworthy source. I started with a team of 15 campus ambassadors and have since grown to a fully trained team of 200+ campus ambassadors from throughout the country.  Also People at YIF have always treated me as if I were a member of their family, always supporting and cherishing. Presently I&apos;m the National Departmental HR Head of Youth India foundation. The experience, the knowledge and professionalism I am gaining while working with Youth India Foundation are phenomenal. The art of recruiting people, concepts and ideas that I learned are the ones that have changed the way I see and &quot;do.&quot;! </p>
                            </div>   
                        </div>
                    
                    </Carousel>
                </div>


                <div className="grid justify-items-center grid-cols-1 gap-x-5 gap-y-5 md:grid-cols-2 lg:grid-cols-3 mb-10">
                    <div className="rounded-3xl shadow-lg shadow-gray-600 border-8 border-orange-600 hover:shadow-xl hover:shadow-gray-700 transform transition duration-500 hover:scale-105 ease-out">
                        <img src="/graph1.png" alt="image" className=" object-contain rounded-xl" />               
                    </div>
                    <div className="rounded-3xl shadow-lg shadow-gray-600 border-8 border-orange-600 hover:shadow-xl hover:shadow-gray-700 transform transition duration-500 hover:scale-105 ease-out">
                        <img src="/graph2.png" alt="image" className=" object-contain rounded-xl" /> 
                    </div>
                    <div className="rounded-3xl shadow-lg shadow-gray-600 border-8 border-orange-600 hover:shadow-xl hover:shadow-gray-700 transform transition duration-500 hover:scale-105 ease-out">
                        <img src="/graph3.png" alt="image" className="h-full rounded-xl" />
                    </div>
                </div>

            </div>
        </div>
    </div>
    )
}

export default Stories