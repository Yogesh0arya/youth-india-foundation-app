import {UserGroupIcon, LocationMarkerIcon, ClipboardListIcon} from '@heroicons/react/outline'
import Volunteer from './Volunteer'

function Achieve() {
    return (
        <div className="bg-orange-100 mt-12 py-24">
            <div className="max-w-6xl xl:mx-auto mx-5 text-xl text-center font-bold text-black">
                <h1>Whatever you want to achieve,</h1>
                <h2>Youth India Foundation's community will help you reach it.</h2>

                <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5">
                    <div className="bg-white flex justify-around items-center px-5 py-8 rounded-lg shadow-lg">
                        <UserGroupIcon className="w-14 text-blue-500" />
                        <div>
                            <h1 className="text-2xl text-blue-800 md:text-3xl">1000</h1>
                            <p>People</p>
                        </div>
                    </div>
                    <div className="bg-white flex justify-around items-center px-5 py-8 rounded-lg shadow-lg">
                        <LocationMarkerIcon className="w-14 text-green-500" />
                        <div>
                            <h1 className="text-2xl text-blue-800 md:text-3xl">50</h1>
                            <p>Societies</p>
                        </div>
                    </div>
                    <div className="bg-white flex justify-around items-center px-5 py-8 rounded-lg shadow-lg md:col-span-2 lg:col-span-1">
                        <ClipboardListIcon className="w-14 text-orange-500" />
                        <div>
                            <h1 className="text-2xl text-blue-800 md:text-3xl">100</h1>
                            <p>Youth Projects</p>
                        </div>
                    </div>
                </div>
            </div>
            <Volunteer />
        </div>
    )
}

export default Achieve