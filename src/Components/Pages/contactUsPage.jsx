import React from "react";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl w-[90%] md:w-[50%] p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
          Contact Us
        </h1>
        <form className="space-y-6">
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="mt-1 w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-1 w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Message Input */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Type your message here"
              rows="4"
              className="mt-1 w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              Send Message
            </button>
          </div>
        </form>
        {/* Additional Contact Information */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Or reach out to us via email at{" "}
            <a
              href="mailto:support@ecommerce.com"
              className="text-blue-500 hover:underline"
            >
              support@gallfacecosmetics.com
            </a>
          </p>
          <p className="text-gray-600 mt-2">
            Call us at{" "}
            <a href="tel:+123456789" className="text-blue-500 hover:underline">
              +94 71 982 9114
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
