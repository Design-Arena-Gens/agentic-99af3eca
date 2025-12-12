import Image from "next/image";
import Link from "next/link";

const highlights = [
  {
    title: "Prime Chamti Kheda Road Frontage",
    description:
      "Direct access to the commercial spine of Chittorgarh with wide approach roads and thriving residential activity.",
    metric: "52+",
    metricLabel: "existing establishments nearby",
  },
  {
    title: "Flexible Plot Configurations",
    description:
      "Residential and commercial plots starting from 900 sq.ft. with Vastu-compliant layouts and clear property titles.",
    metric: "900–3000",
    metricLabel: "sq.ft plot options",
  },
  {
    title: "Ready Infrastructure",
    description:
      "Underground drainage, water connections, electricity poles, and well-lit internal streets already commissioned.",
    metric: "100%",
    metricLabel: "ready civic amenities",
  },
];

const amenities = [
  "Gated periphery with 24×7 surveillance",
  "Tree-lined avenues and landscaped community zones",
  "Dedicated commercial pockets for daily conveniences",
  "Rainwater harvesting and eco-sensitive planning",
  "Walking loops and children’s play lawns",
  "On-call property management assistance",
];

const timeline = [
  {
    step: "Site Discovery",
    detail:
      "Schedule a guided tour with Manish Goswami to explore available plots and understand the development vision.",
  },
  {
    step: "Due Diligence & Reservation",
    detail:
      "Review clear titles, municipal approvals, and payment plans. Lock your preferred plot with a simple booking amount.",
  },
  {
    step: "Registration & Handover",
    detail:
      "Complete documentation with on-ground support and receive possession with ready-to-build infrastructure.",
  },
];

const faqs = [
  {
    question: "What makes Chamti Kheda Road a strong investment corridor?",
    answer:
      "Chamti Kheda Road connects the industrial zones of Chittorgarh with upcoming residential neighborhoods, ensuring steady appreciation driven by infrastructure upgrades and commercial demand.",
  },
  {
    question: "Are there financing or installment options available?",
    answer:
      "Yes. We assist with customized payment milestones and can connect you with lending partners who specialize in real estate financing within Rajasthan.",
  },
  {
    question: "Can I construct immediately after purchase?",
    answer:
      "All civic amenities are operational, so you can commence construction right after registration while our team guides you through local by-laws.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Modern residential development representing Aditya Real Estate"
            fill
            className="object-cover object-center brightness-75"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative">
          <div className="mx-auto max-w-7xl px-6 pb-32 pt-32 sm:px-8 lg:px-10 lg:pb-40 lg:pt-48">
            <div className="max-w-3xl rounded-3xl bg-white/80 p-8 backdrop-blur md:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
                Aditya Real Estate
              </p>
              <h1 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl lg:text-6xl">
                Elevating life on Chamti Kheda Road, Chittorgarh
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Curated plots and bespoke real estate advisory tailored to your
                investment goals. Speak directly with Manish Goswami for guided
                site visits, transparent documentation, and end-to-end
                assistance.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="tel:+919828484565"
                  className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                >
                  Call Manish: 98284 84565
                </Link>
                <Link
                  href="#visit"
                  className="inline-flex items-center justify-center rounded-full border border-white/70 bg-white/60 px-6 py-3 text-base font-medium text-slate-900 backdrop-blur transition hover:bg-white hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
                >
                  Book a site visit
                </Link>
              </div>
              <dl className="mt-10 grid grid-cols-1 gap-6 text-slate-900 sm:grid-cols-3">
                <div className="glass-panel rounded-2xl p-4 text-center">
                  <dt className="text-sm font-medium uppercase tracking-wide text-slate-500">
                    Primary contact
                  </dt>
                  <dd className="mt-2 text-xl font-semibold">Manish Goswami</dd>
                </div>
                <div className="glass-panel rounded-2xl p-4 text-center">
                  <dt className="text-sm font-medium uppercase tracking-wide text-slate-500">
                    Phone
                  </dt>
                  <dd className="mt-2 text-xl font-semibold">
                    <Link href="tel:+919828484565">+91 98284 84565</Link>
                  </dd>
                </div>
                <div className="glass-panel rounded-2xl p-4 text-center">
                  <dt className="text-sm font-medium uppercase tracking-wide text-slate-500">
                    Location
                  </dt>
                  <dd className="mt-2 text-xl font-semibold">
                    Chamti Kheda Road, Chittorgarh
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-20 px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
        <section className="grid gap-10 lg:grid-cols-[2fr,1fr]">
          <div className="glass-panel rounded-3xl p-10">
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Why investors choose Aditya Real Estate
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
              With a decade of localized expertise, our team simplifies land
              acquisition, ensures regulatory compliance, and accelerates
              project kick-offs for buyers across Rajasthan and beyond.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {highlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm"
                >
                  <p className="text-4xl font-semibold text-sky-600">
                    {highlight.metric}
                  </p>
                  <p className="text-sm uppercase tracking-wide text-slate-500">
                    {highlight.metricLabel}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900">
                    {highlight.title}
                  </h3>
                  <p className="mt-2 text-base text-slate-600">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <aside className="glass-panel grid-pattern flex flex-col justify-between gap-8 rounded-3xl p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">
                Project snapshot
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                Tailored plots for homes and business
              </h3>
              <p className="mt-3 text-base text-slate-600">
                We curate inventory so you only evaluate verified, growth-ready
                parcels with clean documentation and assured resale value.
              </p>
            </div>
            <ul className="space-y-3 text-base text-slate-700">
              {amenities.map((amenity) => (
                <li key={amenity} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-500" />
                  <span>{amenity}</span>
                </li>
              ))}
            </ul>
          </aside>
        </section>

        <section
          id="visit"
          className="grid gap-12 rounded-3xl bg-slate-900 px-8 py-16 text-slate-100 shadow-2xl lg:grid-cols-2 lg:px-14 lg:py-20"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
              Book your experience
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Plan a personalized site visit
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-200">
              We dedicate time to understand your aspirations—whether it is
              building a family estate, opening a retail hub, or securing an
              appreciating land bank. Expect transparent pricing, plotted
              layouts, and on-site assistance throughout.
            </p>
            <div className="mt-10 space-y-6">
              {timeline.map((milestone) => (
                <div key={milestone.step} className="border-l-2 border-sky-500 pl-6">
                  <h3 className="text-xl font-semibold text-white">
                    {milestone.step}
                  </h3>
                  <p className="mt-2 text-base text-slate-200">
                    {milestone.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-panel flex h-full flex-col justify-between rounded-3xl bg-white/10 p-8">
            <div>
              <h3 className="text-2xl font-semibold text-white">
                Direct contact
              </h3>
              <p className="mt-2 text-base text-slate-200">
                Reach out to lock your preferred plot or request additional
                information about payment plans and approvals.
              </p>
            </div>
            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/20 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-wide text-sky-200">
                  Phone
                </p>
                <Link
                  href="tel:+919828484565"
                  className="mt-1 block text-2xl font-semibold text-white"
                >
                  +91 98284 84565
                </Link>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-wide text-sky-200">
                  Address
                </p>
                <p className="mt-1 text-lg font-medium text-white">
                  Aditya Real Estate Office,
                  <br />
                  Chamti Kheda Road, Chittorgarh, Rajasthan 312001
                </p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-wide text-sky-200">
                  Hours
                </p>
                <p className="mt-1 text-lg font-medium text-white">
                  Monday - Sunday, 9:00 AM to 7:00 PM
                </p>
              </div>
            </div>
            <Link
              href="https://wa.me/919828484565"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Chat on WhatsApp
            </Link>
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-2">
          <div className="glass-panel rounded-3xl p-10">
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Connected to everything that matters
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Positioned minutes away from Chittorgarh Railway Junction, the
              Udaipur-Kota highway, educational institutions, and healthcare
              hubs. The locality benefits from the city&apos;s tourism-driven
              economy and industrial expansion.
            </p>
            <ul className="mt-8 space-y-4 text-base text-slate-700">
              <li>
                • 12 mins to Collectorate Circle & city center markets
              </li>
              <li>• 18 mins to Chittorgarh Fort (UNESCO World Heritage Site)</li>
              <li>• 25 mins to upcoming Smart Industrial Corridor</li>
              <li>• Easy connectivity to NH 27 and NH 79</li>
            </ul>
            <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                On-ground support
              </p>
              <p className="mt-3 text-base text-slate-600">
                Our team assists with legal vetting, architect introductions, and
                sanction approvals so you focus on design and construction.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-2xl">
            <iframe
              title="Chamti Kheda Road Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14731.67691538661!2d74.6234259119252!3d24.874814670794588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967ebab2ac5f3af%3A0x2b8a9cafa6213b43!2sChittorgarh%2C%20Rajasthan%20312001!5e0!3m2!1sen!2sin!4v1706025600000!5m2!1sen!2sin"
              className="h-[420px] w-full"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </section>

        <section className="glass-panel rounded-3xl p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
              Frequently asked questions
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Everything you need to know before you invest
            </h2>
          </div>
          <dl className="mt-10 space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-3xl border border-slate-200 bg-white/90 p-6"
              >
                <dt className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base leading-relaxed text-slate-600">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 text-center text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>© {new Date().getFullYear()} Aditya Real Estate. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="tel:+919828484565"
              className="font-medium text-slate-600 transition hover:text-slate-900"
            >
              Call: +91 98284 84565
            </Link>
            <Link
              href="mailto:info@adityarealestate.in"
              className="font-medium text-slate-600 transition hover:text-slate-900"
            >
              info@adityarealestate.in
            </Link>
            <span className="font-medium text-slate-600">
              Chamti Kheda Road · Chittorgarh · Rajasthan
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
