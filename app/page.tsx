// app/page.tsx
// Home page for the Walter Farm website. This page provides a hero section,
// a brief about section and quick links to the major sections of the site.
export default function HomePage() {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-6 items-center">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Walter Farm – Segamat, Johor
          </h1>
          <p className="text-sm md:text-base text-neutral-700">
            A family-friendly farm experience in Segamat. Reconnect with nature,
            enjoy outdoor activities, and spend quality time with your loved ones.
          </p>
          <div className="flex gap-3">
            <a
              href="/booking"
              className="inline-flex items-center justify-center rounded-md bg-green-700 px-4 py-2 text-sm font-medium text-white hover:bg-green-800"
            >
              Book Now
            </a>
            <a
              href="/accommodation"
              className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-100"
            >
              View Accommodation
            </a>
          </div>
        </div>
        <div className="h-48 md:h-64 rounded-xl bg-neutral-200 flex items-center justify-center text-xs text-neutral-500">
          {/* TODO: replace with an actual Walter Farm photo in production */}
          Farm image placeholder
        </div>
      </section>

      {/* About Preview */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">About Walter Farm</h2>
        <p className="text-sm text-neutral-700 max-w-3xl">
          Walter Farm is a nature-based destination in Segamat, Johor, focusing on
          family-friendly outdoor and farm experiences.
        </p>
      </section>

      {/* Quick Links Grid */}
      <section className="grid md:grid-cols-3 gap-4 text-sm">
        <a
          href="/accommodation"
          className="rounded-lg border bg-white p-4 hover:border-green-600 hover:shadow-sm transition"
        >
          <h3 className="font-semibold mb-1">Accommodation</h3>
          <p className="text-neutral-700">
            Farm-style stays for families and groups. Details and availability managed
            from the booking system.
          </p>
        </a>
        <a
          href="/activities"
          className="rounded-lg border bg-white p-4 hover:border-green-600 hover:shadow-sm transition"
        >
          <h3 className="font-semibold mb-1">Activities</h3>
          <p className="text-neutral-700">
            Real farm activities such as animal interactions and outdoor
            experiences.
          </p>
        </a>
        <a
          href="/booking"
          className="rounded-lg border bg-white p-4 hover:border-green-600 hover:shadow-sm transition"
        >
          <h3 className="font-semibold mb-1">Booking</h3>
          <p className="text-neutral-700">
            Centralised booking flow for stays and experiences at Walter Farm.
          </p>
        </a>
      </section>
    </div>
  );
}