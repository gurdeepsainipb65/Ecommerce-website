import Footer from "./footer";

export default function Contactcard() {
  return (
    <div className="bg-red-50">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 text-lg font-medium w-full p-8">
        <div className="flex flex-col justify-center items-center bg-white p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
          <img
            className="h-20 mb-4"
            src="/image/locationlogo.png"
            alt="Location"
          />
          <p className="text-2xl font-bold text-gray-800">Our Address</p>
          <p className="text-gray-600 text-center">Shop No 256,</p>
          <p className="text-gray-600 text-center">Zirakpur, Mohali, Punjab</p>
          <p className="text-gray-600 text-center">INDIA</p>
        </div>

        <div className="flex flex-col justify-center items-center bg-white p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
          <img className="h-20 mb-4" src="/image/email.png" alt="Email" />
          <p className="text-2xl font-bold text-gray-800">Email Us</p>
          <p className="text-gray-600 text-center">fresh@gmail.com</p>
          <p className="text-gray-600 text-center">
            Email us anytime for queries
          </p>
        </div>

        <div className="flex flex-col justify-center items-center bg-white p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
          <img className="h-20 mb-4" src="/image/contact4.png" alt="Contact" />
          <p className="text-2xl font-bold text-gray-800">Call Us</p>
          <p className="text-gray-600 text-center">Hotline: +208-666-01112</p>
          <p className="text-gray-600 text-center">24/7 priority support</p>
        </div>

        <div className="flex flex-col justify-center items-center bg-white p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
          <img className="h-20 mb-4" src="/image/clock1.png" alt="Clock" />
          <p className="text-2xl font-bold text-gray-800">Opening Hours</p>
          <p className="text-gray-600 text-center">Sun-Fri: 9 AM – 6 PM</p>
          <p className="text-gray-600 text-center">Sat: 9 AM – 4 PM</p>
        </div>
      </div>

      <div className="mt-8 shadow-lg rounded-2xl overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89233.20917569447!2d76.78339463430058!3d30.624776626997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feb3937b74163%3A0x505c6a7d9eef83a0!2sMotiaz%20Royal%20Business%20Park!5e0!3m2!1sen!2sin!4v1737798588748!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-96 border-0"
        ></iframe>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
