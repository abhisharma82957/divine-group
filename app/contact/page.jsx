
import { PageHero, ContactForm } from "../../components/Site";
import { company, wa } from "../../lib/data";

export const metadata = {
  title: "Contact Us",
};

export default function Contact() {
  return (
    <>
      <PageHero
        crumb="Contact"
        title="Let’s Connect"
        description="Have a question about our services? Contact us by phone, email or WhatsApp."
      />

      <section className="pad light">
        <div className="container contact-grid">
          <div className="contact-info">
            <div className="eyebrow">Contact details</div>

            <h2>We'd love to hear from you.</h2>

            <p>
              <strong>Contact Person</strong>
              <br />
              {company.contact}
            </p>

            <p>
              <strong>Phone / WhatsApp</strong>
              <br />
              <a href="tel:+919041723520">
                +91 90417 23520
              </a>
            </p>

            <p>
              <strong>Email</strong>
              <br />
              <a href={"mailto:" + company.email}>
                {company.email}
              </a>
            </p>

            <p>
              <strong>Office Address</strong>
              <br />
              {company.address}
            </p>

            <a
              className="btn btn-gold"
              href={wa}
              target="_blank"
              rel="noreferrer"
            >
              Open WhatsApp ↗
            </a>

            <p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Chandigarh+City+Centre+VIP+Road+Zirakpur"
                target="_blank"
                rel="noreferrer"
              >
                View approximate location on Google Maps ↗
              </a>
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
