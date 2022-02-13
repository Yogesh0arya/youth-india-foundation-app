import { PhoneIcon, MailIcon, LocationMarkerIcon } from '@heroicons/react/outline'

function ContactUs() {
    return (
    <div className="bg-amber-50 pt-24">
        <div className="max-w-6xl xl:mx-auto mx-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
                <div>
                    <h1 className="text-xl font-bold">Charity</h1>
                    <h1 className="text-orange-600 text-2xl font-bold sm:text-4xl md:text-6xl my-3">Get in touch</h1>
                    <p>Our wonderful team is always here to help clearing your doubts about our
                        organization. If you have a tiniest bit of doubt, let us help you in understanding our organization
                        in a way we understand it. You can also donate your hard earned money to help someone having a hard
                        time. Send us a message and we know we will not let you down.
                    </p>
                </div>

                <div className="">
                    <div className='max-w-md mx-auto flex flex-col text-center space-y-3 py-3 px-8 rounded-3xl border border-gray-300 bg-white'>
                        <h1 className="font-bold text-2xl mb-4">Send Us a Message</h1>
                        <input className="bg-gray-100 p-2 rounded-lg border border-gray-300 focus:outline-orange-600" type="text" placeholder='First name' />
                        <input className="bg-gray-100 p-2 rounded-lg border border-gray-300 focus:outline-orange-600" type="text" placeholder='Last name' />
                        <input className="bg-gray-100 p-2 rounded-lg border border-gray-300 focus:outline-orange-600" type="text" placeholder='Email' />
                        <input className="bg-gray-100 p-2 rounded-lg border border-gray-300 focus:outline-orange-600" type="text" placeholder='Phone' />
                        <input className="bg-gray-100 p-2 rounded-lg border border-gray-300 focus:outline-orange-600" type="text" placeholder='Message' />
                        <button className="navBtn my-6 text-xl px-4 py-2 w-max mx-auto">SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="max-w-screen-2xl xl:mx-auto mt-24">
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="bg-yellow-300/30 text-center flex items-center p-3">
                    <PhoneIcon className="w-10 sm:w-16 bg-white rounded-full p-2 sm:p-4"/>
                    <div className="flex-1">
                        <h1 className="text-xl font-bold">PHONE</h1>
                        <p>+91 91765 59056</p>
                    </div>
                </div>
                <div className="bg-yellow-500/30 text-center flex items-center p-3">
                    <MailIcon className="w-10 sm:w-16 bg-white rounded-full p-2 sm:p-4" />
                    <div className="flex-1">
                        <h1 className="text-xl font-bold">MAIL</h1>
                        <p className="md:text-xs lg:text-base">contactus@youthindiafoundation.com</p>
                    </div>
                </div>
                <div className="bg-yellow-700/30 text-center flex items-center p-3">
                    <LocationMarkerIcon className="w-10 sm:w-16 bg-white rounded-full p-2 sm:p-4" />
                    <div className="flex-1">
                        <h1 className="text-xl font-bold">ADDRESS</h1>
                        <p>CM-1 VSS Nagar, Bhubaneswar, Orisha, 751007</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default ContactUs