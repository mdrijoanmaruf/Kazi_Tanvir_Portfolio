import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Banner */}
      <section className="bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-5xl font-bold mb-4">Contact Me</h2>
            <div className="flex items-center justify-center space-x-2 text-purple-200">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span>/</span>
              <span>Contact Us</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Google Map */}
          <div className="mb-12">
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.8254843434315!2d90.34331796539797!3d23.78922803457039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c19decd4e519%3A0x976ff16e33c5d0d7!2sLalkuthi%20Bazar!5e0!3m2!1sen!2sbd!4v1667196252254!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl text-purple-600">🏠</div>
                  <div>
                    <h6 className="font-bold text-gray-800 mb-2">Dhaka, Bangladesh</h6>
                    <p className="text-gray-600">296/2, Lalkuthi, 1st Colony, Mazar Road, Mirpur-1</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl text-purple-600">📞</div>
                  <div>
                    <h6 className="font-bold text-gray-800 mb-2">
                      <a href="tel:+8801322622121" className="hover:text-purple-600 transition-colors">
                        +880 1322 622121
                      </a>
                    </h6>
                    <p className="text-gray-600">Mon to Fri 9am to 6 pm</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl text-purple-600">✉️</div>
                  <div>
                    <h6 className="font-bold text-gray-800 mb-2">
                      <a href="mailto:kazitanvir.bangladesh@gmail.com" className="hover:text-purple-600 transition-colors break-all">
                        kazitanvir.bangladesh@gmail.com
                      </a>
                    </h6>
                    <p className="text-gray-600">Send me your query anytime!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Placeholder */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
                <p className="text-gray-600 mb-8">
                  Feel free to reach out to me through any of the contact methods listed. I&apos;m always happy to connect with fellow developers, researchers, and potential collaborators.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg">
                    <h4 className="font-bold text-gray-800 mb-2">Email Me</h4>
                    <a href="mailto:kazitanvir.bangladesh@gmail.com" className="text-purple-600 hover:text-purple-700 font-medium">
                      Send an Email →
                    </a>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg">
                    <h4 className="font-bold text-gray-800 mb-2">Call Me</h4>
                    <a href="tel:+8801322622121" className="text-purple-600 hover:text-purple-700 font-medium">
                      +880 1322 622121 →
                    </a>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg">
                    <h4 className="font-bold text-gray-800 mb-2">LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/kazi-tanvir/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 font-medium">
                      Connect on LinkedIn →
                    </a>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg">
                    <h4 className="font-bold text-gray-800 mb-2">GitHub</h4>
                    <a href="https://github.com/KaziTanvir" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 font-medium">
                      View Projects →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
