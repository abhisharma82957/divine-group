
import Link from "next/link";
import Image from "next/image";

import { services, posts } from "../lib/data";
import { ServiceCard, BlogCard } from "../components/Site";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">
              Welcome to Divine Group of Companies
            </div>

            <h1>
              One Group.
              <br />
              <em>Many Possibilities.</em>
            </h1>

            <p>
              Explore a wide range of services across finance,
              employment, education and travel — all from one
              convenient point of contact in Zirakpur, Punjab.
            </p>

            <div className="actions">
              <Link
                className="btn btn-gold"
                href="/services"
              >
                Explore Our Services ↗
              </Link>

              <Link
                className="btn btn-outline"
                href="/contact"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          <div className="hero-art">
            <div className="hero-logo">
              <Image
                src="/assets/divine-logo.jpg"
                width={500}
                height={333}
                alt="Divine Group logo"
                priority
              />
            </div>

            <div className="hero-note">
              Your goals. Our commitment.
            </div>
          </div>
        </div>
      </section>

      <div className="stats">
        <div className="container stats-grid">
          <div className="stat">
            <strong>6 Service Categories</strong>
            <span>Across diverse industries</span>
          </div>

          <div className="stat">
            <strong>Zirakpur, Punjab</strong>
            <span>Our office location</span>
          </div>

          <div className="stat">
            <strong>Direct Support</strong>
            <span>Connect with us on WhatsApp</span>
          </div>
        </div>
      </div>

      <section className="pad light">
        <div className="container">
          <div className="section-top">
            <div>
              <div className="eyebrow">
                What we do
              </div>

              <h2 className="section-title">
                Services built around
                <br />
                your needs.
              </h2>
            </div>

            <p>
              From educational support to travel and financial
              service activities, discover our listed areas of work.
            </p>
          </div>

          <div className="services-grid">
            {services.map((s) => (
              <ServiceCard
                key={s.slug}
                service={s}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="pad">
        <div className="container about-grid">
          <div className="about-panel">
            <Image
              src="/assets/divine-logo.jpg"
              width={400}
              height={267}
              alt="Divine logo"
            />
          </div>

          <div className="copy">
            <div className="eyebrow">
              Who we are
            </div>

            <h2 className="section-title">
              A multi-service approach with a personal touch.
            </h2>

            <p>
              Divine Group of Companies presents the service
              areas listed for Divine Consultants, based in
              Zirakpur, Punjab. Our goal is to make it easier
              for individuals and businesses to enquire about
              different types of assistance in one place.
            </p>

            <ul className="checks">
              <li>Clear service information</li>
              <li>Multiple sectors under one umbrella</li>
              <li>Convenient direct WhatsApp communication</li>
            </ul>

            <Link
              className="btn btn-gold"
              href="/about"
            >
              More About Us ↗
            </Link>
          </div>
        </div>
      </section>

      <section className="pad light">
        <div className="container">
          <div className="section-top">
            <div>
              <div className="eyebrow">
                Knowledge centre
              </div>

              <h2 className="section-title">
                Latest from our blog.
              </h2>
            </div>

            <Link
              className="link-arrow"
              href="/blog"
            >
              View all articles →
            </Link>
          </div>

          <div className="blog-grid">
            {posts.map((b) => (
              <BlogCard
                key={b.slug}
                post={b}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
