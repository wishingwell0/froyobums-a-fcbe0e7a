import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { trackContactSubmission } from "../lib/tracking";
import { BRAND } from "../lib/menu-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — FroyoBuns" },
      {
        name: "description",
        content:
          "Get in touch with FroyoBuns. Send us a question, book catering, or share feedback. Find our address, phone, hours, and contact form.",
      },
      { property: "og:title", content: "Contact Us — FroyoBuns" },
      {
        property: "og:description",
        content:
          "Send us a question, book catering, or share feedback. Find our address, phone, hours, and contact form.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ContactPage,
});

const INQUIRY_TYPES = [
  "General Question",
  "Catering & Events",
  "Feedback",
  "Partnership",
  "Careers",
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    inquiryType: INQUIRY_TYPES[0],
    message: "",
  });

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    if (
      !form.firstName.trim() ||
      !form.lastName.trim() ||
      !form.email.trim() ||
      !form.message.trim()
    ) {
      setError("Please fill in your name, email, and a message.");
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    if (!emailOk) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);
    try {
      // Fire-and-forget CRM tracking — submit event to the lead connector.
      trackContactSubmission({
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
        inquiryType: form.inquiryType || "General Question",
      });
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  const inputCls =
    "w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

  return (
    <div>
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
          <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl text-ring">
            Contact us
          </h1>
          <p className="mt-3 max-w-xl text-card">
            Questions, feedback, or just saying hi — we'd love to hear from you. Use the form or
            reach us directly.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact info */}
          <div className="space-y-4">
            {[
              {
                icon: MapPin,
                title: "Visit us",
                lines: [BRAND.address],
              },
              {
                icon: Phone,
                title: "Call us",
                lines: [BRAND.phone],
              },
              {
                icon: Mail,
                title: "Email us",
                lines: [BRAND.email],
              },
              {
                icon: Clock,
                title: "Hours",
                lines: [BRAND.hours],
              },
            ].map((c) => (
              <div
                key={c.title}
                className="flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-5 shadow-sm"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl gradient-pink-teal text-primary-foreground">
                  <c.icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-foreground text-froyo-darkteal">
                    {c.title}
                  </h3>
                  {c.lines.map((l) => (
                    <p key={l} className="text-sm text-muted-foreground text-color-froyo-pink">
                      {l}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            <div className="overflow-hidden rounded-2xl border border-border/60 shadow-sm">
              <iframe
                title="FroyoBuns location map"
                className="aspect-[4/3] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.openstreetmap.org/export/embed.html?bbox=174.6767%2C-36.6356%2C174.7167%2C-36.5956&layer=mapnik&marker=-36.6156%2C174.6967"
              />
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm md:p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <span className="flex size-16 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <CheckCircle2 className="size-8" />
                </span>
                <h2 className="mt-4 font-display text-2xl font-bold text-foreground">
                  Thanks for reaching out!
                </h2>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  We received your message and a FroyoBuns team member will get back to you within
                  1–2 business days.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      firstName: "",
                      lastName: "",
                      email: "",
                      inquiryType: INQUIRY_TYPES[0],
                      message: "",
                    });
                  }}
                  className="mt-6 rounded-full border border-input bg-background px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="mb-1.5 block text-sm font-medium text-foreground text-ring"
                    >
                      First name
                    </label>
                    <input
                      id="firstName"
                      className={inputCls}
                      value={form.firstName}
                      onChange={(e) => update("firstName", e.target.value)}
                      placeholder="Jamie"
                      autoComplete="given-name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="mb-1.5 block text-sm font-medium text-foreground text-ring"
                    >
                      Last name
                    </label>
                    <input
                      id="lastName"
                      className={inputCls}
                      value={form.lastName}
                      onChange={(e) => update("lastName", e.target.value)}
                      placeholder="Sweet"
                      autoComplete="family-name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-foreground text-ring"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={inputCls}
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="jamie@example.com"
                    autoComplete="email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="inquiryType"
                    className="mb-1.5 block text-sm font-medium text-foreground text-ring"
                  >
                    What can we help with?
                  </label>
                  <select
                    id="inquiryType"
                    className={inputCls}
                    value={form.inquiryType}
                    onChange={(e) => update("inquiryType", e.target.value)}
                  >
                    {INQUIRY_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-foreground text-ring"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={inputCls}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="Tell us what's on your mind…"
                  />
                </div>

                {error && (
                  <p className="rounded-lg bg-destructive/10 px-3 py-2 text-sm font-medium text-destructive">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full gradient-pink-teal px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-transform hover:scale-[1.01] disabled:opacity-60"
                >
                  <Send className="size-4" />
                  {submitting ? "Sending…" : "Send message"}
                </button>
                <p className="text-center text-xs text-muted-foreground text-froyo-darkteal">
                  We'll never share your details. By submitting you agree to be contacted about your
                  inquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
