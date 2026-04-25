"use client";

import { useEffect, useState } from "react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import type { EnterprisePageData } from "@/types/enterprise";

const quickHighlights = ["Tailored Solutions", "Industry Insights", "Expert Guidance"];

export default function HomePage() {
  const [data, setData] = useState<EnterprisePageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/enterprise-data");
        if (!response.ok) {
          throw new Error("Failed to load page data.");
        }
        const payload = (await response.json()) as EnterprisePageData;
        setData(payload);
      } catch (requestError) {
        setError(
          requestError instanceof Error ? requestError.message : "Unexpected error occurred."
        );
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <main className="state-screen">Loading enterprise page...</main>;
  }

  if (error || !data) {
    return <main className="state-screen">Unable to render page: {error ?? "No data found."}</main>;
  }

  return (
    <>
      <Navbar items={data.navItems} />
      <main>
        <Section id="home" className="hero">
          <div className="hero-grid">
            <div>
              <p className="eyebrow">Next-Gen Expertise for Your Enterprise</p>
              <h1>Cultivate high-performance teams through expert learning.</h1>
              <div className="pill-row">
                {quickHighlights.map((highlight) => (
                  <span key={highlight} className="pill">
                    {highlight}
                  </span>
                ))}
              </div>
              <a href="#contact" className="primary-btn">
                Enquire Now
              </a>
            </div>
            <div className="hero-art" aria-hidden>
              <div className="hero-shape" />
              <p>headerImage</p>
            </div>
          </div>
        </Section>

        <Section
          id="stats"
          subtitle="Our Track Record"
          title="The Numbers Behind Our Success"
          className="surface"
        >
          <div className="card-grid">
            {data.stats.map((item) => (
              <article key={item.value} className="card">
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="clients"
          subtitle="Our Proven Partnerships"
          title="Successful Collaborations With the Industry's Best"
        >
          <div className="logo-grid">
            {data.clients.map((client, index) => (
              <div key={`${client}-${index}`} className="logo-card">
                <strong>{client}</strong>
              </div>
            ))}
          </div>
        </Section>

        <Section id="edge" subtitle="The Accredian Edge" title="Key Aspects of Our Strategic Training">
          <h3 className="inline-heading">Our Solutions</h3>
          <h4 className="section-subheading">Our Domain Expertise</h4>
          <p className="section-copy">Specialized Programs Designed to Fuel Innovation</p>
          <div className="tag-grid">
            {data.domains.map((domain) => (
              <span key={domain} className="tag">
                {domain}
              </span>
            ))}
          </div>

          <h4 className="section-subheading">Tailored Course Segmentation</h4>
          <p className="section-copy">
            Explore Custom-fit Courses Designed to Address Every Professional Focus
          </p>
          <div className="card-grid">
            {data.courseBuckets.map((bucket) => (
              <article key={bucket.title} className="card">
                <h3>{bucket.title}</h3>
                <p>{bucket.subtitle}</p>
                <p>{bucket.detail}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="who-should-join" title="Who Should Join?" subtitle="Strategic Skill Enhancement">
          <p className="section-copy muted">Human Illustration</p>
          <div className="card-grid">
            {data.personas.map((persona) => (
              <article key={persona.title} className="card">
                <h3>{persona.title}</h3>
                <p>{persona.description}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="cat"
          subtitle="The CAT Framework"
          title="Our Proven Approach to Learning Excellence"
          className="surface"
        >
          <h3 className="inline-heading">Our Solutions</h3>
          <h4 id="how-it-works" className="section-subheading">
            How We Deliver Results That Matter?
          </h4>
          <p className="section-copy">A Structured Three-Step Approach to Skill Development</p>
          <div className="timeline">
            {data.steps.map((step, index) => (
              <article key={step.title} className="timeline-item">
                <span>{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="faqs" className="faq-section">
          <div className="faq-grid">
            {data.faqs.map((group) => (
              <article key={group.category} className="faq-group">
                <h3>{group.category}</h3>
                {group.questions.length > 0 ? (
                  <ul>
                    {group.questions.map((question) => (
                      <li key={question}>{question}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
          <p className="section-copy">
            We offer expertise across Leadership Development, Tech and Data, Fintech, Digital
            Business, Product Innovation, Operations Management, and Generative AI.
          </p>
          <a href="#contact" className="primary-btn">
            Enquire Now
          </a>
        </Section>

        <Section
          id="testimonials"
          subtitle="Testimonials from Our Partners"
          title="What Our Clients Are Saying"
          className="surface"
        >
          <div className="card-grid">
            {data.testimonials.map((item) => (
              <article key={item.company} className="card">
                <h3>{item.company}</h3>
                <p>{item.quote}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Want to Learn More About Our Training Solutions?">
          <p className="section-copy">
            Get Expert Guidance for Your Team&apos;s Success!
          </p>
          <p className="section-copy">Contact Us</p>
          <a href="#contact" className="primary-btn">
            Enquire Now
          </a>
          <p className="section-copy" style={{ marginTop: "1rem" }}>
            Speak with our Advisor
          </p>
        </Section>
      </main>
      <Footer />
    </>
  );
}
