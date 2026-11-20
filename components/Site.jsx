
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import {
  Menu,
  X,
  ChevronDown,
  MessageCircle,
  ArrowUpRight,
  Landmark,
  BriefcaseBusiness,
  GraduationCap,
  Plane,
  Route,
  ChartNoAxesCombined,
} from "lucide-react";

import { company, services, wa } from "../lib/data";

export const icons = {
  Landmark,
  BriefcaseBusiness,
  GraduationCap,
  Plane,
  Route,
  ChartNoAxesCombined,
};

const nav = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Services", "/services"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
];

// ==============================
// HEADER
// ==============================

export function Header() {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);

  const path = usePathname();

  useEffect(() => {
    setOpen(false);
    setDrop(false);
  }, [path]);

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>
            📍 Office No. 441, Chandigarh City Centre,
            VIP Road, Zirakpur
          </span>

          <a href="tel:+919041723520">
            ☎ +91 90417 23520
          </a>
        </div>
      </div>

      <header className="header">
        <div className="container nav">
          <Link className="brand" href="/">
            <Image
              src="/assets/divine-logo.jpg"
              width={98}
              height={64}
              alt="Divine Group of Companies logo"
              priority
            />

            <span>
              DIVINE GROUP
              <small>OF COMPANIES</small>
            </span>
          </Link>

          <button
            className="menu-btn"
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>

          <nav
            className={"navlinks " + (open ? "open" : "")}
            aria-label="Main navigation"
          >
            <Link
              className={path === "/" ? "active" : ""}
              href="/"
            >
              Home
            </Link>

            <Link
              className={path === "/about" ? "active" : ""}
              href="/about"
            >
              About Us
            </Link>

            <div
              className={
                "nav-dropdown " + (drop ? "expanded" : "")
              }
            >
              <div className="nav-service-line">
                <Link
                  className={
                    path.startsWith("/services")
                      ? "active"
                      : ""
                  }
                  href="/services"
                >
                  Services
                </Link>

                <button
                  className="dropdown-toggle"
                  type="button"
                  aria-label="Toggle services dropdown"
                  aria-expanded={drop}
                  onClick={() => setDrop(!drop)}
                >
                  <ChevronDown size={17} />
                </button>
              </div>

              <div className="dropdown-menu">
                <Link href="/services">
                  All Services
                </Link>

                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={"/services/" + s.slug}
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              className={
                path.startsWith("/blog") ? "active" : ""
              }
              href="/blog"
            >
              Blog
            </Link>

            <Link
              className={
                path === "/contact" ? "active" : ""
              }
              href="/contact"
            >
              Contact
            </Link>
          </nav>

          <a
            className="nav-cta"
            href={wa}
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp
            <ArrowUpRight size={15} />
          </a>
        </div>
      </header>
    </>
  );
}

// ==============================
// FOOTER
// ==============================

export function Footer() {
  return (
    <>
      <section className="cta-band">
        <div className="container cta-grid">
          <div>
            <h2>
              Let's discuss your requirements.
            </h2>

            <p>
              Reach out to our team for service
              information and assistance.
            </p>
          </div>

          <a
            className="btn btn-gold"
            href={wa}
            target="_blank"
            rel="noreferrer"
          >
            Connect on WhatsApp
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">
                <Image
                  src="/assets/divine-logo.jpg"
                  alt="Divine logo"
                  width={180}
                  height={112}
                />
              </div>

              <p>
                Divine Group of Companies — bringing
                multiple service categories together
                through Divine Consultants, Zirakpur.
              </p>
            </div>

            <div>
              <h4>Quick Links</h4>

              <ul>
                {nav.map(([name, href]) => (
                  <li key={href}>
                    <Link href={href}>
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4>Get in Touch</h4>

              <p>
                <strong>Contact:</strong>{" "}
                {company.contact}
              </p>

              <p>{company.address}</p>

              <p>
                <a href="tel:+919041723520">
                  +91 90417 23520
                </a>
              </p>

              <p>
                <a href={"mailto:" + company.email}>
                  {company.email}
                </a>
              </p>
            </div>
          </div>

          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} Divine Group
              of Companies. All rights reserved.
            </span>

            <span>
              Designed with care • Zirakpur, Punjab
            </span>
          </div>
        </div>
      </footer>

      <a
        className="whatsapp"
        href={wa}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg
          viewBox="0 0 32 32"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M16 .8A15.1 15.1 0 0 0 3 23.6L.9 31l7.6-2A15.2 15.2 0 1 0 16 .8zm0 27.6c-2.4 0-4.7-.7-6.7-2l-.5-.3-4.5 1.2 1.2-4.4-.3-.5A12.4 12.4 0 1 1 16 28.4zm6.8-9.3c-.4-.2-2.2-1.1-2.6-1.2-.3-.1-.6-.2-.8.2-.3.4-1 1.2-1.2 1.5-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.8-1.1-1-1.8-2.2-2-2.6-.2-.4 0-.6.2-.8l.6-.7.4-.6c.1-.2 0-.5 0-.7l-1.2-2.8c-.3-.7-.6-.6-.8-.6h-.7c-.3 0-.7.1-1 .5-.4.4-1.3 1.3-1.3 3.1s1.4 3.6 1.6 3.8c.2.3 2.7 4.2 6.6 5.8.9.4 1.6.6 2.2.7.9.3 1.7.2 2.3.1.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.7.2-1.8-.1-.2-.3-.3-.7-.5z" />
        </svg>
      </a>
    </>
  );
}

// ==============================
// PAGE HERO
// ==============================

export function PageHero({
  crumb,
  title,
  description,
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          {" / "}
          {crumb}
        </div>

        <h1>{title}</h1>

        <p>{description}</p>
      </div>
    </section>
  );
}

// ==============================
// SERVICE CARD
// ==============================

export function ServiceCard({ service: s }) {
  const Icon = icons[s.icon];

  return (
    <article className="service-card">
      <div className="service-icon">
        <Icon size={26} />
      </div>

      <span className="pill">
        NIC {s.code}
      </span>

      <h3>{s.title}</h3>

      <p>{s.description}</p>

      <Link
        className="link-arrow"
        href={"/services/" + s.slug}
      >
        Explore service →
      </Link>
    </article>
  );
}

// ==============================
// BLOG CARD
// ==============================

export function BlogCard({ post: b }) {
  const Icon = icons[b.icon];

  return (
    <article className="blog-card">
      <div className="blog-cover">
        <Icon size={58} />
      </div>

      <div className="blog-content">
        <small>
          INSIGHTS & GUIDES
        </small>

        <h3>{b.title}</h3>

        <p>{b.excerpt}</p>

        <Link
          className="link-arrow"
          href={"/blog/" + b.slug}
        >
          Read article →
        </Link>
      </div>
    </article>
  );
}

// ==============================
// CONTACT FORM
// ==============================

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "General enquiry",
    message: "",
  });

  function submit(e) {
    e.preventDefault();

    const msg = `Hello Divine Group of Companies,\nName: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\nMessage: ${form.message}`;

    window.open(
      "https://wa.me/919041723520?text=" +
        encodeURIComponent(msg),
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <form
      className="contact-form"
      onSubmit={submit}
    >
      <h2
        className="section-title"
        style={{
          fontSize: 26,
          margin: "0 0 12px",
        }}
      >
        Send an enquiry
      </h2>

      <p
        style={{
          color: "#647184",
          fontSize: 13,
        }}
      >
        Submitting opens WhatsApp with your message
        prefilled; no data is stored on this website.
      </p>

      <div className="field">
        <label htmlFor="name">
          Your Name *
        </label>

        <input
          id="name"
          required
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
          placeholder="Enter your name"
        />
      </div>

      <div className="field">
        <label htmlFor="email">
          Email Address
        </label>

        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
          placeholder="you@example.com"
        />
      </div>

      <div className="field">
        <label htmlFor="service">
          Interested Service
        </label>

        <select
          id="service"
          value={form.service}
          onChange={(e) =>
            setForm({
              ...form,
              service: e.target.value,
            })
          }
        >
          <option>
            General enquiry
          </option>

          {services.map((s) => (
            <option key={s.slug}>
              {s.title}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="message">
          Your Message *
        </label>

        <textarea
          id="message"
          rows={5}
          required
          value={form.message}
          onChange={(e) =>
            setForm({
              ...form,
              message: e.target.value,
            })
          }
          placeholder="How can we help?"
        />
      </div>

      <button
        className="btn btn-gold"
        type="submit"
      >
        Continue on WhatsApp ↗
      </button>
    </form>
  );
}
