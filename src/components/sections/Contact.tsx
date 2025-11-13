import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await res.json();

    if (res.ok) {
      setStatus(result.message);
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus(result.message);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-dvh pt-[52px] sm:pt-[56px] px-10 sm:pb-6 flex items-center"
    >
      <div className="flex flex-col md:flex-row w-full justify-center md:justify-start gap-10">
        {/* Left Side */}
        <div className="hidden md:flex flex-col w-1/2">
          <h2
            className="font-semibold
        text-4xl
        lg:text-6xl"
          >
            Make Your  <br />
            Own Storybook
          </h2>
        </div>

        {/* Right Side - Contact Form in Card */}
        <div className="w-full md:w-2/3 xl:w-1/3">
          <div className="card card-light p-6 sm:p-10">
            <p className="text-xl mb-6 font-bold">
              Every story is unique, <br />
              yours starts here.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <label htmlFor="name">Full Name*</label>
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
              <label htmlFor="email">Email*</label>
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
              <label htmlFor="message">Message*</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="text-base md:text-lg"
              />
              <button
                type="submit"
                className="btn-primary btn-large w-full font-semibold normal-case px-6 py-3"
              >
                Send message
              </button>
              {status && <p className="text-sm text-gray-500">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
