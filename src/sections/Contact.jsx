import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  useGSAP(() => {
    // Only run animations on non-mobile devices for better performance
    if (!isMobile) {
      gsap.fromTo(
        ".contact-info",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
      );

      gsap.fromTo(
        ".contact-form",
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power2.out" }
      );
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setForm({ name: "", email: "", message: "" });
      alert("Message sent successfully!");
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "Malcom.Chiaji@gmail.com",
      link: "mailto:Malcom.Chiaji@gmail.com",
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+254 702 831 865",
      link: "tel:+254702831865",
    },
    {
      icon: "📍",
      label: "Location",
      value: "Nairobi, Kenya",
      link: "#",
    },
    {
      icon: "💼",
      label: "Available for",
      value: "Freelance & Full-time",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="flex-center section-padding bg-gradient-to-b from-gray-900 to-black">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Let's Build Something Amazing Together"
          sub="🚀 Ready to bring your ideas to life? Let's connect and discuss your next project!"
        />
        
        <div className="grid-12-cols mt-16 gap-8">
          {/* Contact Information */}
          <div className="xl:col-span-4">
            <div className="contact-info bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 h-fit">
              <h3 className="text-2xl font-bold text-white mb-6">
                Get In <span className="text-blue-400">Touch</span>
              </h3>
              <p className="text-gray-300 mb-8">
                I'm always excited to discuss new opportunities and innovative projects. 
                Whether you have a specific idea in mind or just want to explore possibilities, 
                let's start a conversation.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="text-2xl">{info.icon}</div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-400 font-medium">{info.label}</p>
                      <a
                        href={info.link}
                        className="text-white hover:text-blue-400 transition-colors duration-300 font-medium"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-gray-300 text-sm mb-4">Connect with me on:</p>
                <div className="flex gap-4">
                  {[
                    { name: "GitHub", icon: "🐙", link: "https://github.com/malcomchiaji" },
                    { name: "LinkedIn", icon: "💼", link: "https://linkedin.com/in/malcomchiaji" },
                    { name: "Twitter", icon: "🐦", link: "#" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-700 hover:bg-blue-500 rounded-full flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="xl:col-span-5">
            <div className="contact-form flex-center card-border rounded-xl p-10 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name" className="text-white font-medium mb-2 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your name?"
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-white font-medium mb-2 block">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email address?"
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-white font-medium mb-2 block">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    rows="5"
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                  />
                </div>

                <button type="submit" className="w-full">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>

          {/* 3D Model */}
          <div className="xl:col-span-3 min-h-96">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-full h-full hover:cursor-grab rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/25">
              <ContactExperience />
              {/* Mobile fallback */}
              <div className="md:hidden flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">💬</span>
                  </div>
                  <p className="text-white font-semibold">Let's Connect</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
