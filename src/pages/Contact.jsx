export default function Contact() {
  return (
    <section className="pt-24 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-600 text-lg">
            Have questions about destinations, trips or custom travel plans?
            We’d love to hear from you.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT: CONTACT INFO */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">📍 Our Office</h3>
              <p className="text-gray-600">
                TravelExplorer Pvt. Ltd.
                <br />
                New Delhi, India
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">📞 Phone</h3>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">✉️ Email</h3>
              <p className="text-gray-600">support@travelexplorer.com</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">⏰ Working Hours</h3>
              <p className="text-gray-600">
                Monday – Saturday
                <br />
                9:00 AM – 7:00 PM
              </p>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="bg-white p-8 rounded-xl shadow">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-3 rounded font-semibold hover:bg-orange-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
