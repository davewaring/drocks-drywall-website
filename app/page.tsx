import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#111111] text-white py-4 px-6 sticky top-0 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.jpg"
              alt="D-Rocks Dynamic Drywall Repair Logo"
              width={60}
              height={60}
              className="rounded"
            />
            <div className="text-center sm:text-left">
              <h1 className="text-xl sm:text-2xl font-bold">D-Rocks Dynamic Drywall Repair</h1>
              <p className="text-sm text-gray-300">LLC - Licensed & Insured</p>
            </div>
          </div>
          <a
            href="tel:973-552-8051"
            className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold py-2 px-6 rounded-lg transition-colors"
          >
            Call: 973-552-8051
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#111111] to-[#222222] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Image
            src="/logo.jpg"
            alt="D-Rocks Dynamic Drywall Repair"
            width={200}
            height={200}
            className="mx-auto mb-8 rounded-lg"
          />
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Clean. Honest. Experienced.
          </h2>
          <p className="text-xl sm:text-2xl mb-4 text-gray-200">
            Top-tier drywall and carpentry results with respectful, meticulous work.
          </p>
          <p className="text-lg mb-8 text-gray-300">
            Proudly serving Sussex County, NJ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:973-552-8051"
              className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Call or Text for Free Estimate
            </a>
            <a
              href="#services"
              className="border-2 border-white hover:bg-white hover:text-[#111111] font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#111111] mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              title="Drywall Installation"
              description="Complete drywall installation for new construction and renovations."
            />
            <ServiceCard
              title="Drywall Finishing"
              description="Expert taping, mudding, and finishing for seamless walls."
            />
            <ServiceCard
              title="Drywall Repairs"
              description="Specializing in clean, invisible drywall repairs of all sizes."
            />
            <ServiceCard
              title="Painting"
              description="Professional interior painting to complete your project."
            />
          </div>
          <div className="mt-8 max-w-md mx-auto">
            <ServiceCard
              title="Small/Medium Carpentry"
              description="Quality carpentry projects from a certified craftsman."
            />
          </div>
        </div>
      </section>

      {/* Work Gallery Section */}
      <section id="gallery" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#111111] mb-4">
            Our Work
          </h2>
          <p className="text-center text-gray-600 mb-12">
            From demolition to flawless finish - see the D-Rocks difference
          </p>
          <div className="space-y-12">
            <BeforeAfter
              beforeSrc="/project1-before.jpg"
              afterSrc="/project1-after.jpg"
              title="Hallway Renovation"
            />
            <BeforeAfter
              beforeSrc="/project2-before.jpg"
              afterSrc="/project2-after.jpg"
              title="Entryway Restoration"
            />
            <BeforeAfter
              beforeSrc="/project3-before.jpg"
              afterSrc="/project3-after.jpg"
              title="Room Transformation"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#111111] mb-12">
            Why Choose D-Rocks?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Clean & Respectful"
              description="Hard to find in drywall work - we take pride in leaving your home as clean as we found it. Respectful of your space and your time."
            />
            <FeatureCard
              title="12 Years Experience"
              description="Over a decade of hands-on experience in drywall installation and finishing. Carpentry certificate from Sussex County Vocational School."
            />
            <FeatureCard
              title="Licensed & Insured"
              description="Full LLC with insurance for your peace of mind. Professional, reliable service you can trust."
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-[#111111] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Meticulous Craftsmanship
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed mb-6">
            With 12 years of experience specializing in drywall installation and finishing,
            I bring a level of care and attention to detail that&apos;s hard to find.
            As a certified carpenter from Sussex County Vocational School,
            I approach every project with precision and pride.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed text-gray-300">
            &ldquo;A very considerate and meticulous carpenter.&rdquo;
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] mb-8">
            Get Your Free Estimate
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Call or text today - serving Sussex County, NJ
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <a
              href="tel:973-552-8051"
              className="bg-[#111111] hover:bg-[#222222] text-white p-6 rounded-lg transition-colors"
            >
              <div className="text-3xl mb-2">📞</div>
              <div className="font-bold text-lg">Call or Text</div>
              <div className="text-gray-300">973-552-8051</div>
            </a>
            <a
              href="mailto:derrikg1@aol.com"
              className="bg-[#111111] hover:bg-[#222222] text-white p-6 rounded-lg transition-colors"
            >
              <div className="text-3xl mb-2">✉️</div>
              <div className="font-bold text-lg">Email</div>
              <div className="text-gray-300 break-all">derrikg1@aol.com</div>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61555648498498"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111111] hover:bg-[#222222] text-white p-6 rounded-lg transition-colors"
            >
              <div className="text-3xl mb-2">📘</div>
              <div className="font-bold text-lg">Facebook</div>
              <div className="text-gray-300">Follow Us</div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <Image
            src="/logo.jpg"
            alt="D-Rocks Dynamic Drywall Repair"
            width={80}
            height={80}
            className="mx-auto mb-4 rounded"
          />
          <p className="font-bold text-lg mb-2">D-Rocks Dynamic Drywall Repair LLC</p>
          <p className="text-gray-400 mb-4">Licensed & Insured | Sussex County, NJ</p>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} D-Rocks Dynamic Drywall Repair LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
      <h3 className="text-xl font-bold text-[#111111] mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="text-center p-6">
      <div className="w-16 h-16 bg-[#111111] rounded-full flex items-center justify-center mx-auto mb-4">
        <svg
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-[#111111] mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function BeforeAfter({
  beforeSrc,
  afterSrc,
  title,
}: {
  beforeSrc: string;
  afterSrc: string;
  title: string;
}) {
  return (
    <div>
      <h3 className="text-xl font-bold text-[#111111] mb-4 text-center">{title}</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="relative">
          <Image
            src={beforeSrc}
            alt={`${title} - Before`}
            width={600}
            height={400}
            className="w-full h-72 object-cover rounded-xl shadow-lg"
          />
          <div className="absolute top-4 left-4 bg-[#111111] text-white px-3 py-1 rounded-full text-sm font-bold">
            Before
          </div>
        </div>
        <div className="relative">
          <Image
            src={afterSrc}
            alt={`${title} - After`}
            width={600}
            height={400}
            className="w-full h-72 object-cover rounded-xl shadow-lg"
          />
          <div className="absolute top-4 left-4 bg-[#2563eb] text-white px-3 py-1 rounded-full text-sm font-bold">
            After
          </div>
        </div>
      </div>
    </div>
  );
}
