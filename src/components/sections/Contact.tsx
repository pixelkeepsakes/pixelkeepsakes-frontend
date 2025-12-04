import { useState } from "react";
import Script from "next/script";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bookFor: "",
    storyType: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "landing_form_submit", {
        form_name: "ask_about_book",
      });
    }

    try {
      const res = await fetch("https://usebasin.com/f/edffe3767c6a", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Thank you! We&apos;ll be in touch soon.");
        setTimeout(() => setStatus(""), 5000);
        setFormData({
          name: "",
          email: "",
          phone: "",
          bookFor: "",
          storyType: "",
          message: "",
        });
      } else {
        setStatus("Oops! Something went wrong. Please try again.");
      }
    } catch {
      setStatus("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="book"
      className="px-10 flex items-center min-h-[calc(100dvh-64px)] py-[32px]"
    >
      <div className="flex flex-col md:flex-row w-full justify-center md:justify-start gap-10">
        {/* Left Side */}
        <div className="hidden md:flex flex-col w-1/2">
          <h2
            className="font-semibold
        text-4xl
        lg:text-6xl"
          >

            Start Your <br />Personalized <br />Book
          </h2>
        </div>

        {/* Right Side - Contact Form in Card */}
        <div className="w-full md:w-2/3 xl:w-1/3">
          <div className="card card-light p-6 sm:p-10">
            <p className="text-xl mb-6 font-bold">
              Tell us a little bit about <br />the book you want created.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <label htmlFor="name">Your Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="e.g. John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                className="text-base md:text-lg"
              />
              <label htmlFor="email">Your Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="e.g. john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="text-base md:text-lg"
              />
              <label htmlFor="phone">Phone Number (optional)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="e.g. 555-555-5555"
                value={formData.phone}
                onChange={handleChange}
                className="text-base md:text-lg"
              />
              <label htmlFor="bookFor">Who is the book for?*</label>
              <select
                id="bookFor"
                name="bookFor"
                value={formData.bookFor}
                onChange={handleChange}
                required
                className={`text-base md:text-lg
                ${formData.bookFor === "" ? "text-gray-400" : "text-black"
                  }`}
              >
                <option value="" disabled>Select one...</option>
                <option value="Myself">Myself</option>
                <option value="My child">My child</option>
                <option value="My partner">My partner</option>
                <option value="A friend">A friend</option>
                <option value="A coworker">A coworker</option>
                <option value="Other">Other</option>
              </select>
              <label htmlFor="storyType">What type of story are you interested in?*</label>
              <select
                id="storyType"
                name="storyType"
                value={formData.storyType}
                onChange={handleChange}
                required
                className={`text-base md:text-lg
                ${formData.storyType === "" ? "text-gray-400" : "text-black"
                  }`}
              >
                <option value="" disabled>Select one...</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Adventure">Adventure</option>
                <option value="Romance">Romance</option>
                <option value="Friendship">Friendship</option>
                <option value="Holiday / Occasion">Holiday / Occasion</option>
                <option value="Custom idea">Custom idea</option>
              </select>
              <label htmlFor="message">Anything specific you want included? (optional)</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Notes"
                value={formData.message}
                onChange={handleChange}
                className="text-base md:text-lg"
              />
              <button
                type="submit"
                className="btn-primary btn-large w-full font-semibold normal-case px-6 py-3"
              >
                Book a story
              </button>
              {status && <p className="text-sm text-gray-500">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
