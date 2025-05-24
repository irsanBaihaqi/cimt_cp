import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-black py-2 px-2 sm:px-6 lg:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Contact Information */}
          <div className="lg:w-1/2 space-y-8 self-center">
            <div>
              <h1 className="text-4xl font-medium text-primary mb-4">
                Contact Us
              </h1>
              <p className="text-primary">
                email, call, or complete the form to learn how snappy can solve
                your messanging problem
              </p>
              {/* Left Side - Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-medium text-primary mb-6 mt-4">
                    Informasi Kontak
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-primary text-xl">📧</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-1">
                          Email
                        </h3>
                        <p className="text-primary">info@cimt.co.id</p>
                        <p className="text-primary">support@cimt.co.id</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-green-600 text-xl">📞</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-1">
                          Telepon
                        </h3>
                        <p className="text-primary">+62 21 1234 5678</p>
                        <p className="text-sm text-white/65">
                          Sen-Jum, 09:00-17:00 WIB
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-600 text-xl">📍</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-1">
                          Alamat
                        </h3>
                        <p className="text-primary">Jl. Sudirman No. 123</p>
                        <p className="text-primary">Jakarta Pusat 10220</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column - Contact Form */}
          <div className="lg:w-1/2">
            <div className="bg-primary p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Get in Touch
              </h2>
              <p className="text-primary mb-8">You can reach us anytime</p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone number
                  </label>
                  <div className="flex">
                    <select className="w-20 px-3 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50">
                      <option>+82</option>
                      <option>+1</option>
                      <option>+44</option>
                      <option>+62</option>
                    </select>
                    <input
                      type="tel"
                      id="phone"
                      className="flex-1 px-4 py-3 border-t border-b border-r border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Phone number"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Describe your needs..."
                    maxLength={100}
                  ></textarea>
                  <p className="text-right text-sm text-gray-500 mt-1">0/100</p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition duration-200"
                >
                  Submit
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By contacting us, you agree to our{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
