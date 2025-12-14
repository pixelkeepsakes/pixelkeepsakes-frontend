import { useState } from "react";

export default function TestimonialForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    photo: null as File | null,
    testimonial: "",
    consent: true,
    photoconsent: false,
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, type } = e.target;

    if (type === "checkbox") {
      setFormData(prev => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else if (type === "file") {
      const file = (e.target as HTMLInputElement).files?.[0] || null;
      setFormData(prev => ({
        ...prev,
        photo: file,
        photoconsent: file && !prev.photo ? true : prev.photoconsent, 
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: e.target.value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "testimonial_form_submit", {
        form_name: "testimonials",
      });
    }

    const form = new FormData();

    // Core fields
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("message", formData.testimonial);

    // Consent + metadata (important for legal & grants)
    form.append("consent", String(formData.consent));
    form.append("photoconsent", String(formData.photoconsent));
    form.append("has_photo", String(!!formData.photo));
    form.append("submission_type", "testimonial");

    // File (no DOM querying)
    if (formData.photo) {
      form.append("photo", formData.photo);
    }

    try {
      const res = await fetch("https://usebasin.com/f/6958c7f3eaaf", {
        method: "POST",
        body: form,
      });

      if (res.ok) {
        setStatus("Thanks for sharing your story with Pixel Keepsakes!");
        setTimeout(() => setStatus(""), 5000);
        setFormData({
          name: "",
          email: "",
          phone: "",
          photo: null as File | null,
          testimonial: "",
          consent: false,
          photoconsent: false,
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
            Share Your<br />
            Pixel Keepsakes<br />
            Story
          </h2>
        </div>

        {/* Right Side - Contact Form in Card */}
        <div className="w-full md:w-2/3 xl:w-1/3">
          <div className="card card-light p-6 sm:p-10">
            <p className="text-xl mb-6 font-bold">
              We&apos;d love to hear what you <br />thought about your book.
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
              <label htmlFor="email">Your Email (optional)</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="e.g. john@example.com"
                value={formData.email}
                onChange={handleChange}
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
              <label htmlFor="photo">
                Upload a photo you&apos;re happy to have displayed on our website (optional)
              </label>
              <input
                type="file"
                id="photo"
                name="photo"
                accept="image/*"
                onChange={handleChange}
              />
              <small className="text-gray-500">
                JPG or PNG. Please upload a photo you’d proudly share publicly.
              </small>
              <label htmlFor="testimonial">Testimonial*</label>
              <textarea
                id="testimonial"
                name="testimonial"
                placeholder="Your Notes"
                value={formData.testimonial}
                onChange={handleChange}
                required
                className="text-base md:text-lg"
              />
              <label htmlFor="consent">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                />&nbsp;
                I agree to have my testimonial displayed on the Pixel Keepsakes website.
              </label>
              <label htmlFor="photoconsent">
                <input
                  type="checkbox"
                  id="photoconsent"
                  name="photoconsent"
                  checked={formData.photoconsent}
                  onChange={handleChange}
                  disabled={!formData.photo} // still disable if no photo
                  required={!!formData.photo}
                />&nbsp;
                I give permission for Pixel Keepsakes to display my photo and illustrated
                character on its website and marketing materials.
              </label>
              <button
                type="submit"
                className="btn-primary btn-large w-full font-semibold normal-case px-6 py-3"
              >
                Share Your Story
              </button>
              {status && <p className="text-sm text-gray-500">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
