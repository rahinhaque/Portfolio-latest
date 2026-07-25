"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  ExternalLink,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

/* ================================================================
   Contact.jsx — "Get in Touch" section (homepage footer section)

   Two-column layout: contact details (left) + form (right).
   Form submits to /api/contact which sends email via Resend.
   ================================================================ */

// ── Contact detail cards data ──────────────────────────────────
const contactDetails = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "haquerahin743@gmail.com",
    href: "mailto:haquerahin743@gmail.com",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
  },
  {
    icon: FaLinkedin,
    label: "LINKEDIN",
    value: "rahin-haque-web",
    href: "https://www.linkedin.com/in/rahin-haque-web/",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
  },
  {
    icon: SiGithub,
    label: "GITHUB",
    value: "rahinhaque",
    href: "https://github.com/rahinhaque",
    iconBg: "bg-neutral-500/10",
    iconColor: "text-text-primary",
  },
  {
    icon: MapPin,
    label: "LOCATION",
    value: "Narsingdi, Bangladesh",
    href: null,
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
  },
];

/** Single contact detail row. */
function ContactCard({ detail }) {
  const Icon = detail.icon;
  const Wrapper = detail.href ? "a" : "div";
  const wrapperProps = detail.href
    ? { href: detail.href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group flex items-center gap-4 rounded-xl border border-border bg-bg-secondary p-4 transition-all duration-200 hover:border-accent/30 hover:bg-bg-secondary/80"
    >
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${detail.iconBg}`}
      >
        <Icon className={`h-5 w-5 ${detail.iconColor}`} />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-semibold tracking-widest uppercase text-text-secondary">
          {detail.label}
        </p>
        <p className="truncate text-sm font-medium text-text-primary">
          {detail.value}
        </p>
      </div>

      {detail.href && (
        <ExternalLink className="h-4 w-4 shrink-0 text-text-secondary/40 transition-colors group-hover:text-accent" />
      )}
    </Wrapper>
  );
}

/** Form input field (text, email, textarea). */
function FormField({
  label,
  name,
  type = "text",
  placeholder,
  required,
  value,
  onChange,
  error,
  textarea,
}) {
  const baseClasses =
    "w-full rounded-lg border bg-bg-secondary px-4 py-2.5 text-sm text-text-primary placeholder:text-text-secondary/60 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/60";
  const borderClass = error ? "border-red-500/60" : "border-border";

  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-text-primary">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          rows={5}
          className={`${baseClasses} ${borderClass} resize-none`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          className={`${baseClasses} ${borderClass}`}
        />
      )}
      {error && (
        <p className="mt-1 text-xs text-red-500">{error}</p>
      )}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", website: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  }

  function validate() {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!form.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "", website: "" });
      setErrors({});
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* ── Header ────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-bg-secondary/60 px-3 py-1 text-xs font-medium tracking-wide text-text-secondary backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            GET IN TOUCH
          </div>

          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            <span className="text-text-primary">Let&apos;s Work </span>
            <span className="bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent">
              Together
            </span>
          </h2>

          <p className="mx-auto max-w-xl text-text-secondary">
            Have a project in mind or just want to say hi? My inbox is always
            open.
          </p>
        </motion.div>

        {/* ── Two-column layout ─────────────────────────────── */}
        <div className="grid gap-8 lg:grid-cols-5">

          {/* ── LEFT — Contact details ──────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4 lg:col-span-2"
          >
            <p className="text-[10px] font-semibold tracking-widest uppercase text-text-secondary">
              Contact Details
            </p>

            {contactDetails.map((detail) => (
              <ContactCard key={detail.label} detail={detail} />
            ))}

            {/* Availability card */}
            <div className="mt-1 flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/5 px-4 py-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <div>
                <p className="text-sm font-semibold text-text-primary">
                  Available for new projects
                </p>
                <p className="text-xs text-text-secondary">
                  Usually responds within 24 hours
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT — Contact form ────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="overflow-hidden rounded-2xl border border-border border-t-4 border-t-accent bg-bg-secondary">
              <div className="p-6 sm:p-8">
                <h3 className="mb-1 text-lg font-bold text-text-primary">
                  Send a Message
                </h3>
                <p className="mb-6 text-sm text-text-secondary">
                  Fill out the form and I&apos;ll get back to you as soon as
                  possible.
                </p>

                {/* Success message */}
                {status === "success" && (
                  <div className="mb-6 flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    Message sent! I&apos;ll get back to you soon.
                  </div>
                )}

                {/* Error message */}
                {status === "error" && (
                  <div className="mb-6 flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-500">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    Something went wrong. Please try again or email me directly.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name + Email row */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <FormField
                      label="Your Name"
                      name="name"
                      placeholder="John Doe"
                      required
                      value={form.name}
                      onChange={handleChange}
                      error={errors.name}
                    />
                    <FormField
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      value={form.email}
                      onChange={handleChange}
                      error={errors.email}
                    />
                  </div>

                  <FormField
                    label="Subject"
                    name="subject"
                    placeholder="Project Inquiry / Just saying hi..."
                    value={form.subject}
                    onChange={handleChange}
                  />

                  <FormField
                    label="Message"
                    name="message"
                    placeholder="Tell me about your project, idea, or just say hello..."
                    required
                    value={form.message}
                    onChange={handleChange}
                    error={errors.message}
                    textarea
                  />

                  {/* Honeypot — hidden from humans, filled by bots */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: "-9999px",
                      opacity: 0,
                      height: 0,
                      width: 0,
                      overflow: "hidden",
                      pointerEvents: "none",
                    }}
                  >
                    <label htmlFor="website">Leave this empty</label>
                    <input
                      id="website"
                      name="website"
                      type="text"
                      value={form.website}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="
                      flex w-full items-center justify-center gap-2
                      rounded-xl bg-gradient-to-r from-accent to-purple-500
                      px-6 py-3 text-sm font-semibold text-white
                      shadow-lg shadow-accent/25
                      transition-all duration-200
                      hover:shadow-accent/40 hover:brightness-110 hover:-translate-y-0.5
                      disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0
                      focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent
                    "
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>

                <p className="mt-4 text-center text-xs text-text-secondary/60">
                  Your information is safe and will never be shared.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
