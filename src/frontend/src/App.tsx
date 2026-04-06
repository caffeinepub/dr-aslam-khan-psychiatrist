import {
  Award,
  Baby,
  Brain,
  CalendarDays,
  CheckCircle,
  ChevronRight,
  Clock,
  GraduationCap,
  Heart,
  HeartHandshake,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  Phone,
  Quote,
  Shield,
  Star,
  Users,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const WHATSAPP_URL = "https://wa.me/917400065423";
const PHONE_NUMBER = "+91 7400065423";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Locations", href: "#locations" },
  { label: "Timings", href: "#timings" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    icon: Brain,
    title: "Depression & Anxiety",
    desc: "Evidence-based treatment for depression, anxiety disorders and panic attacks with counseling and medication.",
  },
  {
    icon: Shield,
    title: "OCD & Stress Management",
    desc: "Specialized therapy for obsessive-compulsive disorder and chronic stress, restoring daily functioning.",
  },
  {
    icon: Zap,
    title: "Addiction Treatment",
    desc: "Comprehensive de-addiction programs for alcohol and drug dependency with long-term recovery support.",
  },
  {
    icon: Moon,
    title: "Sleep Disorders",
    desc: "Diagnosis and treatment of insomnia, sleep apnea, and other sleep-related conditions.",
  },
  {
    icon: Heart,
    title: "Anger Management",
    desc: "Structured counseling to identify triggers and develop healthy emotional regulation strategies.",
  },
  {
    icon: HeartHandshake,
    title: "Sexual Health Counseling",
    desc: "Confidential, non-judgmental counseling for sexual health concerns with professional guidance.",
  },
  {
    icon: Baby,
    title: "Child & Behavioral Issues",
    desc: "Compassionate care for ADHD, behavioral challenges, learning difficulties and childhood anxiety.",
  },
  {
    icon: Users,
    title: "Couple & Marriage Counseling",
    desc: "Strengthening relationships through improved communication, conflict resolution and emotional bonding.",
  },
];

const locations = [
  {
    name: "Dr. Aslam Khan Clinic",
    tag: "Main Clinic – Kurla West",
    address: "City Hospital, Sonapur Lane, Friends Colony, Kurla West, Mumbai",
    phone: "+91 7400065423",
    timings: "Mon–Thu & Sat: 7:00 PM – 8:00 PM",
    primary: true,
  },
  {
    name: "Apex Multi Speciality Hospital",
    tag: "Sakinaka",
    address: "Apex Multi Speciality Hospital, Sakinaka, Mumbai",
    phone: "+91 7400065423",
    timings: "By appointment",
    primary: false,
  },
  {
    name: "Noble Plus Hospital",
    tag: "Ghatkopar West",
    address: "Noble Plus Hospital, Ghatkopar West, Mumbai",
    phone: "+91 7400065423",
    timings: "By appointment",
    primary: false,
  },
];

const timings = [
  { day: "Monday", time: "7:00 PM – 8:00 PM", open: true },
  { day: "Tuesday", time: "7:00 PM – 8:00 PM", open: true },
  { day: "Wednesday", time: "7:00 PM – 8:00 PM", open: true },
  { day: "Thursday", time: "7:00 PM – 8:00 PM", open: true },
  { day: "Friday", time: "Closed", open: false },
  { day: "Saturday", time: "7:00 PM – 8:00 PM", open: true },
  { day: "Sunday", time: "Closed", open: false },
];

const testimonials = [
  {
    text: "Very patient and understanding doctor who listens carefully and provides effective treatment. I felt genuinely heard for the first time in years.",
    author: "Rahul S.",
    tag: "Verified Patient",
    rating: 5,
  },
  {
    text: "Dr. Aslam Khan helped me overcome severe anxiety and stress. His calm approach and personalized treatment plan changed my life completely.",
    author: "Priya M.",
    tag: "Verified Patient",
    rating: 5,
  },
  {
    text: "Highly recommend for anyone struggling with addiction. The doctor is non-judgmental and supportive. My family is forever grateful for his care.",
    author: "Imran K.",
    tag: "Verified Patient",
    rating: 5,
  },
];

const usps = [
  "Patient-friendly & non-judgmental approach",
  "Strong focus on counseling + medication balance",
  "Personalized treatment plans for every patient",
  "Trusted for anxiety, depression & addiction cases",
];

function useScrollVisible() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function FadeSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useScrollVisible();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 shadow-card py-3" : "bg-transparent py-4"
        }`}
        style={{ backdropFilter: "blur(12px)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button
            type="button"
            onClick={() => handleNavClick("#home")}
            className="flex flex-col leading-tight cursor-pointer"
            data-ocid="nav.link"
          >
            <span
              className={`font-display text-xl font-bold tracking-tight transition-colors duration-300 ${
                scrolled ? "text-green-primary" : "text-white"
              }`}
            >
              Dr. Aslam Khan
            </span>
            <span
              className={`text-xs font-medium tracking-wide uppercase transition-colors duration-300 ${
                scrolled ? "text-muted-foreground" : "text-white/70"
              }`}
            >
              MBBS, MD (Psychiatry)
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`text-sm font-medium transition-colors hover:text-green-primary ${
                  scrolled ? "text-foreground" : "text-white/90"
                }`}
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-2 bg-green-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-green-dark transition-colors shadow-md"
              data-ocid="nav.primary_button"
            >
              <MessageCircle className="w-4 h-4" />
              Book Appointment
            </a>
          </nav>

          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? "text-foreground hover:bg-accent"
                : "text-white hover:bg-white/10"
            }`}
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden bg-white border-t border-border"
            >
              <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="py-2.5 px-3 text-sm font-medium text-foreground hover:text-green-primary hover:bg-accent rounded-lg transition-colors"
                    data-ocid="nav.link"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center justify-center gap-2 bg-green-primary text-white text-sm font-semibold px-5 py-3 rounded-full transition-colors"
                  data-ocid="nav.primary_button"
                >
                  <MessageCircle className="w-4 h-4" />
                  Book on WhatsApp
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* HERO — full-screen clinic background */}
        <section
          id="home"
          className="relative overflow-hidden"
          style={{
            backgroundImage:
              "url('/assets/generated/clinic-background.dim_1920x1080.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
          }}
        >
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 hero-overlay" />

          {/* Subtle bottom fade to white for transition */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent" />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="grid lg:grid-cols-2 gap-8 items-end"
              style={{ minHeight: "100vh" }}
            >
              {/* Left — text */}
              <div className="flex flex-col justify-center py-28 lg:py-32">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, ease: "easeOut" }}
                >
                  <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-white/25">
                    <Award className="w-3.5 h-3.5" />
                    Psychiatrist · Kurla, Mumbai
                  </div>
                  <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 drop-shadow-lg">
                    Your Mental
                    <span className="block text-hero-accent">
                      Health Matters
                    </span>
                  </h1>
                  <p className="text-base sm:text-lg font-semibold text-white/90 mb-3">
                    Dr. Aslam Khan – MBBS, MD (Psychiatry)
                  </p>
                  <p className="text-sm sm:text-base text-white/75 leading-relaxed mb-8 max-w-md">
                    A calm, understanding, and non-judgmental psychiatrist in
                    Mumbai with 7+ years of experience. Specialized in
                    counseling and medication-based care tailored to your unique
                    needs.
                  </p>

                  {/* Stats — glassy badges */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm font-bold text-white">
                        5.0 Rating
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-2">
                      <Users className="w-4 h-4 text-white/80" />
                      <span className="text-sm font-bold text-white">
                        400+ Reviews
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-2">
                      <CalendarDays className="w-4 h-4 text-white/80" />
                      <span className="text-sm font-bold text-white">
                        7+ Years Exp.
                      </span>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-green-dark transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                      data-ocid="hero.primary_button"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Book on WhatsApp
                    </a>
                    <a
                      href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                      className="inline-flex items-center gap-2 border-2 border-white/60 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/15 backdrop-blur-sm transition-all duration-200"
                      data-ocid="hero.secondary_button"
                    >
                      <Phone className="w-4 h-4" />
                      Call Now
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Right — doctor portrait */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                className="relative flex items-end justify-center lg:justify-end"
                style={{ minHeight: "520px" }}
              >
                <div className="relative w-full max-w-sm lg:max-w-none h-full flex items-end">
                  {/* Glow ring behind portrait */}
                  <div className="absolute inset-0 rounded-t-3xl bg-gradient-to-t from-transparent via-white/5 to-white/10 pointer-events-none" />
                  <img
                    src="/assets/generated/dr-aslam-khan-portrait.dim_600x700.jpg"
                    alt="Dr. Aslam Khan – Psychiatrist in Kurla, Mumbai"
                    className="w-full object-cover object-top rounded-t-3xl lg:rounded-tl-3xl lg:rounded-tr-none ring-2 ring-white/20 shadow-2xl"
                    style={{ maxHeight: "640px" }}
                  />
                  {/* Credential badge */}
                  <div className="absolute bottom-6 left-4 lg:left-6 bg-black/50 backdrop-blur-md rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-white/20">
                    <div className="w-10 h-10 rounded-full bg-green-primary/80 flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">
                        MBBS, MD (Psychiatry)
                      </p>
                      <p className="text-xs text-white/60">MCI Registered</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
          >
            <span className="text-white/40 text-xs tracking-widest uppercase">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="w-0.5 h-6 bg-white/30 rounded-full"
            />
          </motion.div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeSection>
                <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                  About the Doctor
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  About Dr. Aslam Khan
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Dr. Aslam Khan is a well-known psychiatrist in Mumbai,
                  specializing in treating mental health conditions with a
                  balanced approach of counseling and medical management. He is
                  highly appreciated for his calm, understanding, and
                  non-judgmental nature, helping patients feel comfortable and
                  supported throughout their recovery journey.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { icon: GraduationCap, label: "MBBS Degree" },
                    { icon: Award, label: "MD (Psychiatry)" },
                    { icon: Heart, label: "Sexologist" },
                    { icon: Shield, label: "Addiction Specialist" },
                  ].map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-2 p-3 bg-section-alt rounded-xl hover:bg-accent transition-colors duration-200"
                    >
                      <Icon className="w-5 h-5 text-green-primary flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </FadeSection>

              <FadeSection delay={0.15}>
                <div className="bg-section-alt rounded-3xl p-8 border border-border/50 shadow-card">
                  <h3 className="font-semibold text-foreground text-lg mb-5">
                    Why Patients Trust Dr. Khan
                  </h3>
                  <ul className="space-y-4">
                    {usps.map((usp) => (
                      <li key={usp} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground leading-relaxed">
                          {usp}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-border grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="font-display text-3xl font-bold text-green-primary">
                        7+
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Years Experience
                      </p>
                    </div>
                    <div>
                      <p className="font-display text-3xl font-bold text-green-primary">
                        400+
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Patient Reviews
                      </p>
                    </div>
                    <div>
                      <p className="font-display text-3xl font-bold text-green-primary">
                        5.0
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Star Rating
                      </p>
                    </div>
                  </div>
                </div>
              </FadeSection>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-20 services-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeSection className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                What We Treat
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3">
                Our Specialized Services
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Comprehensive psychiatric care across a wide spectrum of mental
                health conditions, delivered with compassion and expertise.
              </p>
            </FadeSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {services.map((service, i) => (
                <FadeSection key={service.title} delay={i * 0.06}>
                  <div
                    className="bg-white rounded-2xl p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group h-full border border-border/40"
                    data-ocid={`services.item.${i + 1}`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-green-light flex items-center justify-center mb-4 group-hover:bg-green-primary transition-colors duration-300">
                      <service.icon className="w-6 h-6 text-green-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-semibold text-foreground text-base mb-2 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </FadeSection>
              ))}
            </div>
          </div>
        </section>

        {/* LOCATIONS */}
        <section id="locations" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeSection className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                Find Us
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3">
                Clinic Locations
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Conveniently located across Mumbai. Walk in or call ahead to
                confirm availability.
              </p>
            </FadeSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.map((loc, i) => (
                <FadeSection key={loc.name} delay={i * 0.1}>
                  <div
                    className={`rounded-2xl p-6 h-full transition-all duration-300 hover:-translate-y-1 ${
                      loc.primary
                        ? "bg-green-primary text-white shadow-lg hover:shadow-xl"
                        : "bg-section-alt border border-border hover:shadow-card-hover"
                    }`}
                    data-ocid={`locations.item.${i + 1}`}
                  >
                    {loc.primary && (
                      <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                        Main Clinic
                      </span>
                    )}
                    <h3
                      className={`font-semibold text-base mb-1 ${loc.primary ? "text-white" : "text-foreground"}`}
                    >
                      {loc.name}
                    </h3>
                    <p
                      className={`text-xs font-medium mb-4 ${loc.primary ? "text-white/70" : "text-green-primary"}`}
                    >
                      {loc.tag}
                    </p>
                    <div className="space-y-2.5">
                      <div className="flex items-start gap-2.5">
                        <MapPin
                          className={`w-4 h-4 mt-0.5 flex-shrink-0 ${loc.primary ? "text-white/70" : "text-green-primary"}`}
                        />
                        <p
                          className={`text-sm leading-relaxed ${loc.primary ? "text-white/90" : "text-muted-foreground"}`}
                        >
                          {loc.address}
                        </p>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Phone
                          className={`w-4 h-4 flex-shrink-0 ${loc.primary ? "text-white/70" : "text-green-primary"}`}
                        />
                        <a
                          href={`tel:${loc.phone.replace(/\s/g, "")}`}
                          className={`text-sm font-medium hover:underline ${loc.primary ? "text-white" : "text-foreground"}`}
                        >
                          {loc.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Clock
                          className={`w-4 h-4 flex-shrink-0 ${loc.primary ? "text-white/70" : "text-green-primary"}`}
                        />
                        <p
                          className={`text-sm ${loc.primary ? "text-white/90" : "text-muted-foreground"}`}
                        >
                          {loc.timings}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeSection>
              ))}
            </div>
          </div>
        </section>

        {/* TIMINGS */}
        <section id="timings" className="py-20 bg-section-alt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeSection>
                <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                  Consultation Hours
                </div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3">
                  Clinic Timings
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-2 font-medium">
                  Kurla West (Main Clinic)
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Walk-ins welcome during listed hours. For other clinic
                  locations, please call or book via WhatsApp to confirm
                  availability.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-green-dark hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg"
                  data-ocid="timings.primary_button"
                >
                  <MessageCircle className="w-4 h-4" />
                  Book via WhatsApp
                </a>
              </FadeSection>

              <FadeSection delay={0.1}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-card border border-border/40">
                  {timings.map((t, i) => (
                    <div
                      key={t.day}
                      className={`flex items-center justify-between px-6 py-4 ${
                        i !== timings.length - 1 ? "border-b border-border" : ""
                      } ${t.open ? "hover:bg-accent/30 transition-colors" : "opacity-55"}`}
                      data-ocid={`timings.item.${i + 1}`}
                    >
                      <span className="font-medium text-foreground text-sm">
                        {t.day}
                      </span>
                      <span
                        className={`text-sm font-semibold ${
                          t.open
                            ? "text-green-primary"
                            : "text-muted-foreground"
                        }`}
                      >
                        {t.time}
                      </span>
                    </div>
                  ))}
                </div>
              </FadeSection>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="reviews" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeSection className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                Patient Feedback
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3">
                What Our Patients Say
              </h2>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star
                    key={n}
                    className="w-5 h-5 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>
              <p className="text-muted-foreground text-sm">
                5.0 average based on 400+ patient reviews
              </p>
            </FadeSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <FadeSection key={t.author} delay={i * 0.1}>
                  <div
                    className="bg-section-alt rounded-2xl p-6 h-full flex flex-col hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 border border-border/40"
                    data-ocid={`reviews.item.${i + 1}`}
                  >
                    <Quote className="w-8 h-8 text-green-primary opacity-40 mb-3 flex-shrink-0" />
                    <p className="text-sm text-foreground leading-relaxed flex-1 mb-5">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-green-light flex items-center justify-center">
                        <span className="text-sm font-bold text-green-primary">
                          {t.author[0]}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {t.author}
                        </p>
                        <p className="text-xs text-muted-foreground">{t.tag}</p>
                      </div>
                      <div className="ml-auto flex gap-0.5">
                        {Array.from({ length: t.rating }, (_, j) => j + 1).map(
                          (n) => (
                            <Star
                              key={n}
                              className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500"
                            />
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </FadeSection>
              ))}
            </div>
          </div>
        </section>

        {/* WHATSAPP CTA BAND */}
        <section className="py-16 cta-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeSection>
              <div className="cta-card rounded-3xl px-8 py-14 text-center max-w-3xl mx-auto relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-white/30" />
                  <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-white/20" />
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/30">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
                    Ready to Start Your Recovery Journey?
                  </h2>
                  <p className="text-white/80 mb-8 max-w-md mx-auto">
                    Book an appointment easily via WhatsApp – quick, private,
                    and convenient.
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white text-green-primary font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-all duration-200 text-base shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
                    data-ocid="whatsapp_cta.primary_button"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Book on WhatsApp Now
                    <ChevronRight className="w-4 h-4" />
                  </a>
                  <p className="mt-4 text-xs text-white/60">
                    Available Mon–Thu &amp; Sat &middot; 7:00 PM – 8:00 PM
                  </p>
                </div>
              </div>
            </FadeSection>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeSection className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                Get In Touch
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3">
                Contact Us
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Reach out through any of the channels below. We&apos;re here to
                help.
              </p>
            </FadeSection>
            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <FadeSection>
                <a
                  href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                  className="group flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-section-alt hover:bg-accent border border-border/40 hover:border-green-primary/30 transition-all duration-200 hover:shadow-card-hover hover:-translate-y-1"
                  data-ocid="contact.phone.button"
                >
                  <div className="w-12 h-12 rounded-full bg-green-light flex items-center justify-center group-hover:bg-green-primary transition-colors">
                    <Phone className="w-5 h-5 text-green-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      Call Us
                    </p>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      {PHONE_NUMBER}
                    </p>
                  </div>
                </a>
              </FadeSection>
              <FadeSection delay={0.1}>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-section-alt hover:bg-accent border border-border/40 hover:border-green-primary/30 transition-all duration-200 hover:shadow-card-hover hover:-translate-y-1"
                  data-ocid="contact.whatsapp.button"
                >
                  <div className="w-12 h-12 rounded-full bg-green-light flex items-center justify-center group-hover:bg-green-primary transition-colors">
                    <MessageCircle className="w-5 h-5 text-green-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      WhatsApp
                    </p>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      Book Appointment
                    </p>
                  </div>
                </a>
              </FadeSection>
              <FadeSection delay={0.2}>
                <div
                  className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-section-alt border border-border/40"
                  data-ocid="contact.location.card"
                >
                  <div className="w-12 h-12 rounded-full bg-green-light flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-green-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      Main Clinic
                    </p>
                    <p className="text-muted-foreground text-xs mt-0.5 leading-relaxed">
                      City Hospital, Sonapur Lane,
                      <br />
                      Kurla West, Mumbai
                    </p>
                  </div>
                </div>
              </FadeSection>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-foreground text-white pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">
            <div className="lg:col-span-2">
              <p className="font-display text-xl font-bold mb-1 text-white">
                Dr. Aslam Khan
              </p>
              <p className="text-white/50 text-xs mb-4">
                MBBS, MD (Psychiatry)
              </p>
              <p className="text-white/70 text-sm leading-relaxed max-w-xs">
                Committed to mental health care with compassion, patience, and
                expertise. Serving Mumbai for 7+ years.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 bg-green-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-green-dark transition-colors shadow-md"
                data-ocid="footer.primary_button"
              >
                <MessageCircle className="w-4 h-4" />
                Book on WhatsApp
              </a>
            </div>
            <div>
              <p className="text-white font-semibold text-sm mb-4">
                Quick Links
              </p>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className="text-white/60 hover:text-white text-sm transition-colors"
                      data-ocid="footer.link"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white font-semibold text-sm mb-4">Contact</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-green-primary mt-0.5 flex-shrink-0" />
                  <a
                    href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {PHONE_NUMBER}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-green-primary mt-0.5 flex-shrink-0" />
                  <span className="text-white/70 text-sm leading-relaxed">
                    City Hospital, Sonapur Lane,
                    <br />
                    Kurla West, Mumbai
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-green-primary mt-0.5 flex-shrink-0" />
                  <span className="text-white/70 text-sm leading-relaxed">
                    Mon–Thu &amp; Sat
                    <br />
                    7:00 PM – 8:00 PM
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-xs">
            <p>
              &copy; {new Date().getFullYear()} Dr. Aslam Khan. All rights
              reserved.
            </p>
            <p>
              Built with ❤️ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/70 transition-colors underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-whatsapp rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-card-hover"
        aria-label="Chat on WhatsApp"
        data-ocid="whatsapp_fab.button"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </div>
  );
}
