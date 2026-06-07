import { useState } from "react";
import { Send, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { socials, contact } from "../data";

const iconMap = {
  LinkedIn: Linkedin,
  Email: Mail,
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const validateField = (name, value) => {
    let error = "";
    if (name === "name") {
      if (value.trim().length < 2)
        error = "Name must be at least 2 characters.";
    } else if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) {
        error = "Email is required.";
      } else if (!emailRegex.test(value)) {
        error = "Please enter a valid email address.";
      }
    } else if (name === "message") {
      if (value.trim().length < 10)
        error = "Message must be at least 10 characters.";
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    const newErrors = {};
    Object.keys(form).forEach((key) => {
      const error = validateField(key, form[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMsg(data.message || "Message sent successfully!");
        setSent(true);
      } else {
        setErrorMsg(data.error || "An error occurred.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMsg("Unable to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  const linkClass =
    "inline-flex items-center gap-3 px-4 py-3 rounded-xl border border-divider bg-surface text-sm text-foreground/80 hover:border-primary hover:text-primary transition-all";

  const inputClass = (name) => `
    w-full px-5 py-3 rounded-xl border bg-surface text-foreground text-sm transition-all focus:outline-none focus:ring-4
    ${
      errors[name]
        ? "border-red-500 focus:border-red-500 focus:ring-red-500/5"
        : "border-divider focus:border-primary focus:ring-primary/5"
    }
  `;

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title="Contact"
          subtitle="Feel free to contact me for a project, a question, or just to chat."
        />

        {sent ? (
          <div className="flex flex-col items-center justify-center h-full text-center py-12">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-primary text-2xl">✓</span>
            </div>
            <h4 className="font-semibold text-foreground mb-1">
              Message Sent!
            </h4>
            <p className="text-sm text-muted">{successMsg}</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-x-12 gap-y-8 items-start"
          >
            {/* Left Column: Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Let's Stay in Touch
                </h3>
                <p className="text-sm text-muted leading-relaxed max-w-sm">
                  Whether you have a project in mind, a question, or just want
                  to get to know me — my mailbox is always open.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <a href={`mailto:${contact.email}`} className={linkClass}>
                  <Mail size={18} className="text-primary" />
                  <span className="font-medium">{contact.email}</span>
                </a>
                <a
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className={linkClass}
                >
                  <Phone size={18} className="text-primary" />
                  <span className="font-medium">{contact.phone}</span>
                </a>
                <div
                  className={`${linkClass} hover:border-divider hover:text-foreground/80 cursor-default`}
                >
                  <MapPin size={18} className="text-primary shrink-0" />
                  <span className="font-medium">{contact.location}</span>
                </div>

                {socials.map((s) => {
                  const Icon = iconMap[s.label] || Mail;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`${linkClass} bg-primary/5 border-primary/20 text-primary hover:bg-primary hover:text-white transition-all font-semibold`}
                    >
                      <Icon size={18} />
                      {s.label}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="bg-white border border-divider rounded-2xl p-6 md:p-8 shadow-sm space-y-5">
              {errorMsg && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm font-medium">
                  {errorMsg}
                </div>
              )}
              <div>
                <label className="block text-xs font-bold text-muted uppercase tracking-widest mb-2 ml-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  disabled={loading}
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="John Doe"
                  className={inputClass("name")}
                />
                {errors.name && (
                  <p className="text-[10px] text-red-500 mt-1 ml-1 font-semibold">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-xs font-bold text-muted uppercase tracking-widest mb-2 ml-1">
                  Your Email
                </label>
                <input
                  type="text"
                  name="email"
                  disabled={loading}
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="john@example.com"
                  className={inputClass("email")}
                />
                {errors.email && (
                  <p className="text-[10px] text-red-500 mt-1 ml-1 font-semibold">
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-xs font-bold text-muted uppercase tracking-widest mb-2 ml-1">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  disabled={loading}
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Hello Mohamed, I would like to..."
                  className={`${inputClass("message")} resize-none`}
                />
                {errors.message && (
                  <p className="text-[10px] text-red-500 mt-1 ml-1 font-semibold">
                    {errors.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 py-4 bg-primary hover:bg-primary-hover text-white rounded-xl text-base font-bold transition-all shadow-xl shadow-primary/20 hover:shadow-primary/30 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
