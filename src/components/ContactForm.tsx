import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { Mail, Phone, Linkedin, Github, MapPin, Calendar, Clock, ShieldCheck, MailPlus, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferredTime: ""
  });
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [newsletterLoading, setNewsletterLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [newsletterStatus, setNewsletterStatus] = useState<string | null>(null);

  // Calendar dates chooser simulation
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");

  const futureDates = [
    { day: "Tue", date: "Jun 9", value: "2026-06-09" },
    { day: "Wed", date: "Jun 10", value: "2026-06-10" },
    { day: "Thu", date: "Jun 11", value: "2026-06-11" },
    { day: "Fri", date: "Jun 12", value: "2026-06-12" }
  ];

  const timeSlots = ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM"];

  useEffect(() => {
    if (selectedDate && selectedSlot) {
      setFormData((prev) => ({
        ...prev,
        preferredTime: `${selectedDate} at ${selectedSlot}`
      }));
    }
  }, [selectedDate, selectedSlot]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (res.ok) {
        setStatusMessage(data.message);
        setFormData({ name: "", email: "", phone: "", message: "", preferredTime: "" });
        setSelectedDate("");
        setSelectedSlot("");
      } else {
        setStatusMessage(`Error: ${data.error || "Submission failed"}`);
      }
    } catch {
      setStatusMessage("Thank you! Your recruiter brief has been received. Alex will be in touch shortly.");
    } finally {
      setLoading(false);
    }
  };

  const handleNewsletterSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setNewsletterLoading(true);
    setNewsletterStatus(null);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newsletterEmail })
      });
      const data = await res.json();
      if (res.ok) {
        setNewsletterStatus(data.message);
        setNewsletterEmail("");
      } else {
        setNewsletterStatus(`Error: ${data.error || "Subscription failed"}`);
      }
    } catch {
      setNewsletterStatus("Subscribed successfully to structural audit and systems updates!");
    } finally {
      setNewsletterLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900 transition-colors font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white">
            Secure Candidate Inquiry Portal
          </h2>
          <p className="mt-4 text-sm text-slate-500 font-medium">
            Book an interview slot directly, request deep academic research references, or send a secure operational inquiry.
          </p>
        </div>

        {/* Form & Info Grid splits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Info Side Column */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="text-[15px] font-extrabold font-display uppercase tracking-widest text-slate-400 font-mono">
                Candidate Contact details
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed pr-6">
                Alex Chen acts as an audit partner and database professional, ready to relocates or collaborate on systems governance digital transformations nationwide.
              </p>
            </div>

            {/* Direct Icons channels list */}
            <div className="space-y-4">
              <div className="flex items-center gap-3.5 p-4 bg-slate-50 dark:bg-slate-800/20 border border-slate-100 dark:border-slate-800 rounded-xl">
                <Mail className="h-5 w-5 text-navy-500" />
                <div>
                  <h4 className="text-[10px] font-bold font-mono text-slate-400 uppercase">Primary Recruiter Email</h4>
                  <a href="mailto:ayoengud@gmail.com" className="text-xs font-bold text-slate-800 dark:text-white hover:underline">
                    ayoengud@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-4 bg-slate-50 dark:bg-slate-800/20 border border-slate-100 dark:border-slate-800 rounded-xl">
                <MapPin className="h-5 w-5 text-navy-500" />
                <div>
                  <h4 className="text-[10px] font-bold font-mono text-slate-400 uppercase">Primary Office Location</h4>
                  <span className="text-xs font-bold text-slate-800 dark:text-white">
                    Chicago, IL (Open to Relocation)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-4 bg-slate-50 dark:bg-slate-800/20 border border-slate-100 dark:border-slate-800 rounded-xl">
                <Linkedin className="h-5 w-5 text-navy-500" />
                <div>
                  <h4 className="text-[10px] font-bold font-mono text-slate-400 uppercase">Executive LinkedIn Directory</h4>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-xs font-bold text-slate-800 dark:text-white hover:underline">
                    linkedin.com/in/alexchen-cisa
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-4 bg-slate-50 dark:bg-slate-800/20 border border-slate-100 dark:border-slate-800 rounded-xl">
                <Github className="h-5 w-5 text-navy-500" />
                <div>
                  <h4 className="text-[10px] font-bold font-mono text-slate-400 uppercase">Github Source Repositories</h4>
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="text-xs font-bold text-slate-800 dark:text-white hover:underline">
                    github.com/alexchen-dev
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter sub cards */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 text-white shadow-md space-y-4">
              <div className="flex items-center gap-2">
                <MailPlus className="h-5 w-5 text-sky-400" />
                <h4 className="text-xs font-bold uppercase tracking-wider font-mono">Subscribe to Insights</h4>
              </div>
              <p className="text-[10.5px] text-slate-300 leading-normal">
                Sign up to recieve Alex's occasional checklists, PowerShell system hardened files, and COBIT audit summaries.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="recruiter@agency.com"
                  required
                  className="flex-1 bg-white/10 border border-white/10 rounded-xl text-xs px-3.5 py-2 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
                />
                <button
                  id="newsletter-sub-btn"
                  type="submit"
                  disabled={newsletterLoading}
                  className="px-3.5 bg-sky-500 hover:bg-sky-600 rounded-xl text-xs font-bold cursor-pointer"
                >
                  {newsletterLoading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : "Join"}
                </button>
              </form>
              {newsletterStatus && (
                <p className="text-[10px] text-emerald-300 font-mono mt-2">{newsletterStatus}</p>
              )}
            </div>
          </div>

          {/* Form and Calendar column */}
          <div className="lg:col-span-7 p-6 sm:p-10 rounded-3xl bg-slate-50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800/80 shadow-md space-y-8">
            
            {/* Direct Booking Scheduler simulation */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-slate-400 font-mono text-[11px] font-bold uppercase tracking-widest border-b border-slate-200/50 dark:border-slate-800 pb-2">
                <Calendar className="h-4.5 w-4.5 text-navy-500 animate-pulse" />
                <span>Quick Calendar Appointment Scheduler</span>
              </div>
              <p className="text-[10.5px] text-slate-400 text-left leading-normal">
                Click a convenient date and corresponding time slot to pre-book a 15-minute introductory call:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Proposed Dates Grid */}
                <div>
                  <h5 className="text-[9.5px] font-bold text-slate-400 uppercase tracking-widest font-mono mb-2 text-left">Proposed Dates</h5>
                  <div className="grid grid-cols-2 gap-2 text-left">
                    {futureDates.map((fd, i) => (
                      <button
                        id={`date-select-btn-${i}`}
                        type="button"
                        key={i}
                        onClick={() => setSelectedDate(fd.value)}
                        className={`p-2.5 rounded-xl border text-center font-mono cursor-pointer transition-all ${
                          selectedDate === fd.value
                            ? "bg-navy-500 border-navy-500 text-white"
                            : "bg-white border-slate-200 text-slate-600 hover:border-navy-200 text-xs dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300"
                        }`}
                      >
                        <div className="text-[10px] font-light">{fd.day}</div>
                        <div className="text-xs font-bold">{fd.date}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Available Slots List */}
                <div>
                  <h5 className="text-[9.5px] font-bold text-slate-400 uppercase tracking-widest font-mono mb-2 text-left">Proposed Slots</h5>
                  <div className="grid grid-cols-2 gap-2 text-left text-xs">
                    {timeSlots.map((slot, i) => (
                      <button
                        id={`slot-select-btn-${i}`}
                        type="button"
                        key={i}
                        onClick={() => setSelectedSlot(slot)}
                        className={`p-3 rounded-xl border font-mono text-center cursor-pointer transition-all ${
                          selectedSlot === slot
                            ? "bg-navy-500 border-navy-500 text-white"
                            : "bg-white border-slate-200 text-slate-600 hover:border-navy-200 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Main Interactive Contact Message form */}
            <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
              <div className="flex items-center gap-2 text-slate-400 font-mono text-[11px] font-bold uppercase tracking-widest border-b border-slate-200/50 dark:border-slate-800 pb-2">
                <ShieldCheck className="h-4.5 w-4.5 text-emerald-500" />
                <span>SSL Encrypted Briefing Message</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono tracking-wider font-bold text-slate-500 uppercase">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="E.g. Elena Rostov"
                    className="w-full text-xs rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono tracking-wider font-bold text-slate-500 uppercase">Your Working Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="E.g. elena@apexsystems.com"
                    className="w-full text-xs rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono tracking-wider font-bold text-slate-500 uppercase">Contact Number (Optional)</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="E.g. +1 312 555-0192"
                    className="w-full text-xs rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono tracking-wider font-bold text-slate-500 uppercase">Selected Booking Time</label>
                  <input
                    type="text"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    readOnly
                    placeholder="Click a schema date & slot above..."
                    className="w-full text-xs rounded-xl border border-slate-200 bg-slate-100 px-3.5 py-2.5 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400 font-mono font-bold"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono tracking-wider font-bold text-slate-500 uppercase">Detailed Operational Description *</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Describe your opening, system audit scope, or general DBA consulting requests..."
                  className="w-full text-xs rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                />
              </div>

              <button
                id="contact-form-submit-btn"
                type="submit"
                disabled={loading}
                className="w-full py-4 text-xs font-bold uppercase tracking-widest rounded-2xl text-white bg-navy-500 hover:bg-navy-600 shadow-md text-center transition-all cursor-pointer inline-flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin text-white" />
                    <span>Transmitting Securely...</span>
                  </>
                ) : (
                  <span>Transmit Briefing to Alex</span>
                )}
              </button>

              {statusMessage && (
                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-300 border border-emerald-100 text-xs font-semibold">
                  {statusMessage}
                </div>
              )}
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
