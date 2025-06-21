import React from 'react';
import { Header } from '../components/header';
// import { Mail, Phone, Clock, MapPin } from 'lucide-react'; // optional icons

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted");
  };

  return (
    <>
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900">Get In Touch With Us</h1>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto text-lg">
              For inquiries about our products & services, drop us an email. We’re happy to help you out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Info Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-1">Address</h2>
                <p className="text-gray-600 flex items-start gap-2">
                  {/* <MapPin className="w-5 h-5 mt-1 text-indigo-600" /> */}
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-1">Phone</h2>
                <p className="text-gray-600">
                  Mobile: +(84) 546-6789<br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-1">Working Hours</h2>
                <p className="text-gray-600">
                  Mon–Fri: 9:00 AM – 10:00 PM<br />
                  Sat–Sun: 9:00 AM – 9:00 PM
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-md">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="mt-2 w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Optional"
                    className="mt-2 w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="I'd like to ask about..."
                    className="mt-2 w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded-lg text-lg hover:bg-indigo-600 transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Info Cards */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-2xl font-bold text-black mb-2">Free Delivery</h3>
              <p className="text-gray-600">On all orders over $50, with fast and safe delivery.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black mb-2">90 Days Return</h3>
              <p className="text-gray-600">Return within 90 days if your item has any issue.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black mb-2">Secure Payments</h3>
              <p className="text-gray-600">We ensure secure payment methods and data protection.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
