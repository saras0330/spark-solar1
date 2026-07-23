import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";


const phones = [
  { label: "Primary", number: "9974724999", display: "+91 99747 24999" },
  { label: "Vijay Singh", number: "8401910162", display: "+91 84019 10162" },
  { label: "Avinash", number: "9898199620", display: "+91 98981 99620" },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [requirement, setRequirement] = useState("");

  type ErrorState = {
    name?: string;
    phone?: string;
    email?: string;
    requirement?: string;
  };

  const [error, setError] = useState<ErrorState>({});

  const validate = () => {
    const next: ErrorState = {};

    if (!name.trim()) next.name = "Name is required.";

    const phoneDigits = phone.replace(/\D/g, "");
    if (!phoneDigits) next.phone = "Phone number is required.";
    else if (!/^\d{10}$/.test(phoneDigits))
      next.phone = "Enter a valid 10-digit Indian phone number.";

    if (!email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Enter a valid email address.";

    if (!requirement.trim()) next.requirement = "Requirement is required.";

    return next;
  };

  const buildWhatsAppMessage = () => {
    return `Name:\n${name.trim()}\n\nPhone:\n${phone.trim()}\n\nEmail:\n${email.trim()}\n\nRequirement:\n${requirement.trim()}`;
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[var(--surface)]"
    >
      <div className="container-custom">

        <div className="text-center max-w-2xl mx-auto">

          <span className="eyebrow">Contact Us</span>

          <h2 className="section-heading">
            Let's Build Your Solar Project
          </h2>

          <p className="section-sub">
            Book a free consultation with our solar experts.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-14">

          <div className="card p-8 sm:p-10">

            <div className="space-y-7">

              <div className="flex gap-5">
                <div className="icon-tile shrink-0">
                  <Phone size={22} />
                </div>

                <div>
                  <h3 className="font-bold text-lg text-[var(--text)]">
                    Phone
                  </h3>
                  <div className="space-y-1.5 mt-2">
                    {phones.map((p) => (
                      <p key={p.number} className="text-sm text-[var(--text-light)]">
                        {p.label}:{" "}
                        <a
                          href={`tel:${p.number}`}
                          className="text-[var(--primary)] hover:underline"
                        >
                          {p.display}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-5">

                <div className="icon-tile shrink-0">
                  <Mail size={22} />
                </div>

                <div>

                  <h3 className="font-bold text-lg text-[var(--text)]">
                    Email
                  </h3>

                  <p className="text-sm text-[var(--text-light)] mt-2">
                    sparksolar68@gmail.com
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="icon-tile shrink-0">
                  <MapPin size={22} />
                </div>

                <div>

                  <h3 className="font-bold text-lg text-[var(--text)]">
                    Office
                  </h3>

                  <p className="text-sm text-[var(--text-light)] mt-2">
                    GF-10 Vinayka complex,
                    Near VIBGYOR School,Bhayli station,
                    Bhayli Vadodara, Gujarat, India-391410
                  </p>

                </div>

              </div>

            </div>

          </div>

          <div className="card p-8 sm:p-10">

            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                const errors = validate();
                setError(errors);
                if (Object.keys(errors).length) return;

                const message = buildWhatsAppMessage();
                const url =
                  "https://wa.me/919974724999?text=" +
                  encodeURIComponent(message);
                window.open(url, "_blank", "noopener,noreferrer");
              }}
              aria-label="Contact form"
            >

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="input-field"
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-invalid={!!error.name}
                aria-label="Name"
              />
              {error.name ? (
                <p className="text-sm text-red-500" aria-live="polite">
                  {error.name}
                </p>
              ) : null}

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="input-field"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                aria-invalid={!!error.phone}
                aria-label="Phone"
                inputMode="numeric"
              />
              {error.phone ? (
                <p className="text-sm text-red-500" aria-live="polite">
                  {error.phone}
                </p>
              ) : null}

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-invalid={!!error.email}
                aria-label="Email"
              />
              {error.email ? (
                <p className="text-sm text-red-500" aria-live="polite">
                  {error.email}
                </p>
              ) : null}

              <textarea
                rows={4}
                name="requirement"
                placeholder="Your Requirement"
                className="input-field resize-none"
                value={requirement}
                onChange={(e) => setRequirement(e.target.value)}
                aria-invalid={!!error.requirement}
                aria-label="Requirement"
              />
              {error.requirement ? (
                <p className="text-sm text-red-500" aria-live="polite">
                  {error.requirement}
                </p>
              ) : null}

              <button
                type="submit"
                className="btn-primary w-full"
                aria-label="Submit and open WhatsApp"
              >
                <Send size={17} />
                Get Free Quote
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
