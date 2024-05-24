import React from 'react';

const ContactUs = () => {
    return (
        <div className="container mx-auto p-8">
            <div className="grid grid-cols-2 gap-10">
                <div>
                    <h2 className="text-3xl font-bold text-red-600 mb-4">FIND US</h2>
                    <div className="space-y-6">
                        <div className="flex items-center">
                            <img src="/images/Phone.png" alt="Phone" className="h-8 w-8 mr-3" />
                            <p className="text-xl">+94 77 194 9223</p>
                        </div>
                        <div className="flex items-center">
                            <img src="/images/mail.png" alt="Email" className="h-8 w-8 mr-3" />
                            <p className="text-xl">skmotors92@gmail.com</p>
                        </div>
                        <div className="flex items-center">
                            <img src="/images/Location.png" alt="Location" className="h-8 w-8 mr-3" />
                            <p className="text-xl">SK Motors, Kurunegala Road, Dambulla</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-red-600 mb-4">SEND US A MESSAGE</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-lg">Name *</label>
                            <input type="text" className="border border-gray-300 p-2 w-full rounded" placeholder="First" />
                            <input type="text" className="mt-2 border border-gray-300 p-2 w-full rounded" placeholder="Last" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-lg">Email *</label>
                            <input type="email" className="border border-gray-300 p-2 w-full rounded" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-lg">Comment or Message</label>
                            <textarea className="border border-gray-300 p-2 w-full rounded" rows="4"></textarea>
                        </div>
                        <button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;

