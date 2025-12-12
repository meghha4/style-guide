import React, { useState } from "react";

// Tailwind + shadcn/ui friendly single-file React landing page for a "Moving Help" service.
// Default export a React component so it can be dropped into a React app.

// Note: This file uses Tailwind utility classes. It references shadcn/ui components in imports
// that are available in environments created with shadcn; if those are not present you can
// replace with basic HTML elements. The UI aims for a clean, modern, and mobile-first layout.

export default function MovingHelpLandingPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    moveDate: "",
    fromAddress: "",
    toAddress: "",
    size: "studio",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function validateForm() {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.trim() && !form.phone.trim())
      return "Please provide at least an email or phone number.";
    if (!form.moveDate) return "Please pick a preferred moving date.";
    if (!form.fromAddress.trim() || !form.toAddress.trim())
      return "Please provide both origin and destination addresses.";
    return "";
  }

  function handleSubmit(e) {
    e.preventDefault();
    const v = validateForm();
    if (v) {
      setError(v);
      return;
    }
    setError("");

    // Mock submission behaviour for demo.
    setTimeout(() => setSubmitted(true), 700);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-emerald-500 flex items-center justify-center text-white font-bold">MH</div>
          <div>
            <h1 className="text-lg font-semibold">MovingHelp</h1>
            <p className="text-xs text-gray-500">Fast · Friendly · Local</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-gray-600">
          <a href="#services" className="hover:text-gray-900">Services</a>
          <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          <a href="#testimonials" className="hover:text-gray-900">Testimonials</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </nav>
        <div className="hidden md:block">
          <a href="#booking" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md text-sm shadow">Get an estimate</a>
        </div>
        <button className="md:hidden p-2 rounded-md bg-gray-100">☰</button>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Stress-free moving help — book local pros in minutes</h2>
            <p className="mt-4 text-gray-600">Hourly movers, packing help, heavy item lifts, and full service moves. Transparent pricing, vetted teams, and on-time service so you can focus on what matters.</p>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <li className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center">📦</div>
                <div>
                  <div className="font-semibold">Packing & supplies</div>
                  <div className="text-gray-500 text-sm">Boxes, tape, protective wrap and pro packing available.</div>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center">🚚</div>
                <div>
                  <div className="font-semibold">Local & long distance</div>
                  <div className="text-gray-500 text-sm">Competitive flat rates and hourly teams.</div>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center">🛠️</div>
                <div>
                  <div className="font-semibold">Assembly / disassembly</div>
                  <div className="text-gray-500 text-sm">We take apart and re-assemble furniture safely.</div>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center">⭐</div>
                <div>
                  <div className="font-semibold">Trusted & insured</div>
                  <div className="text-gray-500 text-sm">Background-checked teams and liability coverage options.</div>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex gap-3">
              <a href="#booking" className="bg-emerald-500 text-white px-5 py-3 rounded-md font-medium shadow">Book a team</a>
              <a href="#pricing" className="border border-gray-200 px-5 py-3 rounded-md text-sm">See pricing</a>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow p-6" id="booking">
              <h3 className="text-lg font-semibold">Get an estimate</h3>
              <p className="text-xs text-gray-500 mt-1">Enter a few details and we'll send a free estimate.</p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" className="w-full border rounded-md px-3 py-2" />
                    <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full border rounded-md px-3 py-2" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="w-full border rounded-md px-3 py-2" />
                    <input name="moveDate" value={form.moveDate} onChange={handleChange} type="date" className="w-full border rounded-md px-3 py-2" />
                  </div>

                  <input name="fromAddress" value={form.fromAddress} onChange={handleChange} placeholder="From address" className="w-full border rounded-md px-3 py-2" />
                  <input name="toAddress" value={form.toAddress} onChange={handleChange} placeholder="To address" className="w-full border rounded-md px-3 py-2" />

                  <div>
                    <label className="text-sm font-medium">Estimated size</label>
                    <select name="size" value={form.size} onChange={handleChange} className="w-full mt-2 border rounded-md px-3 py-2">
                      <option value="studio">Studio / 1 BR</option>
                      <option value="2br">2 BR</option>
                      <option value="3br">3 BR</option>
                      <option value="house">House / 4+ BR</option>
                    </select>
                  </div>

                  <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Special notes (stairs, elevator, narrow street, fragile items)" className="w-full border rounded-md px-3 py-2" rows={3}></textarea>

                  {error && <div className="text-sm text-red-600">{error}</div>}

                  <div className="flex gap-3">
                    <button type="submit" className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-md">Request estimate</button>
                    <button type="button" onClick={() => setForm({ name: "", email: "", phone: "", moveDate: "", fromAddress: "", toAddress: "", size: "studio", notes: "" })} className="px-4 py-2 border rounded-md">Clear</button>
                  </div>
                </form>
              ) : (
                <div className="p-4 bg-emerald-50 rounded-md">
                  <h4 className="font-semibold">Thanks — we received your request</h4>
                  <p className="text-sm text-gray-600 mt-1">A team member will contact you soon with your estimate and next steps.</p>
                  <div className="mt-3">
                    <button onClick={() => setSubmitted(false)} className="text-sm underline">Submit another request</button>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-xs text-gray-500">Starting price</div>
                <div className="text-xl font-bold">$79 / hr</div>
                <div className="text-xs text-gray-500">(2 movers + small truck)</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-xs text-gray-500">Full service move</div>
                <div className="text-xl font-bold">From $499</div>
                <div className="text-xs text-gray-500">(depends on size & distance)</div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-10">
          <h3 className="text-2xl font-semibold">Services we offer</h3>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard title="Local Moves" desc="Flexible hourly or flat-rate local moving teams." emoji="🚚" />
            <ServiceCard title="Packing Help" desc="Professional packing, fragile care, and supplies." emoji="📦" />
            <ServiceCard title="Heavy Lifts" desc="Piano, safe, and bulky-item specialists." emoji="🪵" />
            <ServiceCard title="Storage & Short Haul" desc="Short-term storage moves and small delivery runs." emoji="🏬" />
          </div>
        </section>

        <section id="pricing" className="py-10">
          <h3 className="text-2xl font-semibold">Simple pricing</h3>
          <p className="text-gray-600 mt-2">Transparent pricing so you know exactly what to expect. All prices are examples — actual price may vary by city and availability.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <PriceCard tag="Economy" price="$79/hr" bullets={["2 movers", "Small truck", "No packing"]} />
            <PriceCard tag="Standard" price="$119/hr" bullets={["3 movers", "Medium truck", "Basic packing"]} />
            <PriceCard tag="Full Service" price="From $499" bullets={["4+ movers", "Full packing", "Assembly"]} featured />
          </div>
        </section>

        <section id="testimonials" className="py-10">
          <h3 className="text-2xl font-semibold">What customers say</h3>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Testimonial name="Jared L." text="These folks were quick and careful — moved my 2BR in under 4 hours. Highly recommend." />
            <Testimonial name="Sofia P." text="Great communication and friendly crew. They even helped assemble my bed." />
            <Testimonial name="Ramesh K." text="Professional and on time. Pricing was fair and transparent." />
          </div>
        </section>

        <section id="faq" className="py-10">
          <h3 className="text-2xl font-semibold">FAQ</h3>
          <div className="mt-4 space-y-3">
            <FAQ q="Are movers insured?" a="Yes — we offer liability coverage and recommend selecting our move protection when you book." />
            <FAQ q="How far in advance should I book?" a="For peak seasons (month-end, weekends), book 2-4 weeks ahead. For local weekday moves, 3-7 days is usually fine." />
            <FAQ q="What if I need packing supplies?" a="We can include supplies with your service or provide a separate supply order." />
          </div>
        </section>

        <section id="contact" className="py-10">
          <h3 className="text-2xl font-semibold">Contact & support</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold">Headquarters</h4>
              <p className="text-sm text-gray-600 mt-1">San Jose, CA</p>
              <p className="text-sm text-gray-600 mt-2">Email: hello@movinghelp.example</p>
              <p className="text-sm text-gray-600">Phone: (555) 123-4567</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold">Business hours</h4>
              <p className="text-sm text-gray-600 mt-1">Mon — Sat: 8:00 AM — 6:00 PM</p>
              <p className="text-sm text-gray-600 mt-1">Sun: Closed</p>
            </div>
          </div>
        </section>

        <footer className="py-10 text-center text-sm text-gray-500">© {new Date().getFullYear()} MovingHelp — Small local business friendly.</footer>
      </main>
    </div>
  );
}

function ServiceCard({ title, desc, emoji }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5">
      <div className="text-3xl">{emoji}</div>
      <div className="mt-3 font-semibold">{title}</div>
      <div className="text-sm text-gray-500 mt-1">{desc}</div>
    </div>
  );
}

function PriceCard({ tag, price, bullets = [], featured = false }) {
  return (
    <div className={`rounded-xl p-6 ${featured ? "bg-indigo-600 text-white" : "bg-white"} shadow`}>
      <div className="flex items-center justify-between">
        <div className="text-sm font-medium">{tag}</div>
        <div className="text-xl font-bold">{price}</div>
      </div>
      <ul className="mt-4 space-y-2 text-sm">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <div className="w-6">•</div>
            <div>{b}</div>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <button className={`${featured ? "bg-white text-indigo-600" : "bg-indigo-600 text-white"} px-4 py-2 rounded-md`}>Select</button>
      </div>
    </div>
  );
}

function Testimonial({ name, text }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <div className="text-sm text-gray-600">“{text}”</div>
      <div className="mt-3 font-semibold">{name}</div>
    </div>
  );
}

function FAQ({ q, a }) {
  return (
    <details className="bg-white rounded-md p-4 shadow-sm">
      <summary className="font-medium cursor-pointer">{q}</summary>
      <div className="mt-2 text-sm text-gray-600">{a}</div>
    </details>
  );
}
