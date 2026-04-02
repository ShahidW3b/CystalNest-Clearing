lucide.createIcons();

const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const themeToggleMobile = document.getElementById("themeToggleMobile");
const savedTheme = localStorage.getItem("cleaning-theme");

if (savedTheme === "dark") {
  root.classList.add("dark");
}

function toggleTheme() {
  root.classList.toggle("dark");
  localStorage.setItem(
    "cleaning-theme",
    root.classList.contains("dark") ? "dark" : "light",
  );
}

themeToggle.addEventListener("click", toggleTheme);
themeToggleMobile.addEventListener("click", toggleTheme);

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
  const icon = menuToggle.querySelector("i");
  icon.setAttribute(
    "data-lucide",
    mobileMenu.classList.contains("open") ? "x" : "menu",
  );
  lucide.createIcons();
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    const icon = menuToggle.querySelector("i");
    icon.setAttribute("data-lucide", "menu");
    lucide.createIcons();
  });
});

const testimonials = [
  {
    name: "Sophia Carter",
    role: "Homeowner",
    quote:
      "The team made my apartment look hotel-level clean. The booking process was effortless, and the results were even better than expected.",
  },
  {
    name: "Daniel Brooks",
    role: "Office Manager",
    quote:
      "We switched to them for weekly office cleaning and the difference was immediate. Professional, punctual, and very detail-oriented.",
  },
  {
    name: "Maya Thompson",
    role: "Busy Parent",
    quote:
      "I love the eco-friendly option and the consistency. It saves me time every week and gives me real peace of mind.",
  },
];

const quoteEl = document.getElementById("testimonialQuote");
const nameEl = document.getElementById("testimonialName");
const roleEl = document.getElementById("testimonialRole");
const tabEls = Array.from(document.querySelectorAll(".testimonial-tab"));
let activeTestimonial = 0;
let testimonialTimer;

function renderTestimonial(index) {
  activeTestimonial = index;
  quoteEl.style.opacity = "0";
  quoteEl.style.transform = "translateY(8px)";

  setTimeout(() => {
    quoteEl.textContent = `“${testimonials[index].quote}”`;
    nameEl.textContent = testimonials[index].name;
    roleEl.textContent = testimonials[index].role;
    quoteEl.style.opacity = "1";
    quoteEl.style.transform = "translateY(0)";
  }, 180);

  tabEls.forEach((tab, i) => tab.classList.toggle("active", i === index));
}

function startTestimonialTimer() {
  clearInterval(testimonialTimer);
  testimonialTimer = setInterval(() => {
    renderTestimonial((activeTestimonial + 1) % testimonials.length);
  }, 4500);
}

tabEls.forEach((tab) => {
  tab.addEventListener("click", () => {
    renderTestimonial(Number(tab.dataset.testimonial));
    startTestimonialTimer();
  });
});

startTestimonialTimer();

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item, index) => {
  const button = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  function setOpen(open) {
    item.classList.toggle("active", open);
    answer.style.maxHeight = open ? answer.scrollHeight + "px" : "0px";
  }

  setOpen(index === 0);

  button.addEventListener("click", () => {
    const isOpen = item.classList.contains("active");
    faqItems.forEach((other) => {
      other.classList.remove("active");
      other.querySelector(".faq-answer").style.maxHeight = "0px";
    });
    setOpen(!isOpen);
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 },
);

document
  .querySelectorAll("[data-animate]")
  .forEach((el) => observer.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("bookingForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Booking request submitted successfully.");
});

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      pricing: "Pricing",
      faq: "FAQ",
      testimonials: "Testimonials",
      booking: "Booking",
      bookNow: "Book Now",
    },
    hero: {
      trust: "Trusted by 2,50+ happy clients",
      title: "Premium cleaning services for homes that deserve to shine.",
      subtitle:
        "Fast booking, trained professionals, eco-friendly products, and a polished experience from first click to final sparkle.",
      quote: "Get a Free Quote",
      explore: "Explore Services",
      insured: "Fully insured",
      eco: "Eco-safe options",
      satisfaction: "100% satisfaction",
      rating: "Average rating",
      support: "Support",
      staff: "Insured staff",
      sameDayStrong: "Same Day",
      available: "Available",
    },
    process: {
      step1Title: "Choose your service",
      step1Text:
        "Select a one-time, recurring, deep clean, move-in/move-out, or office package in minutes.",
      step2Title: "Pick a convenient time",
      step2Text:
        "Book a preferred date and we confirm quickly with transparent pricing and clear service details.",
      step3Title: "Enjoy a spotless space",
      step3Text:
        "Our trained team arrives on time, cleans thoroughly, and leaves your space refreshed and ready.",
    },

    badges: {
      insured: "Insured & Trusted",
      eco: "Eco-Friendly Products",
      guarantee: "Satisfaction Guarantee",
      flexible: "Flexible Scheduling",
    },

    about: {
      eyebrow: "About Us",
      title: "Luxury-level cleaning with a human touch.",
      subtitle:
        "We combine modern systems, vetted professionals, and detail-first cleaning standards to deliver a premium service experience every time.",
      card1Title: "Meticulous Standards",
      card1Text:
        "Every room follows a clear quality checklist for consistency and care.",
      card2Title: "Friendly Professionals",
      card2Text:
        "Our team is punctual, respectful, and trained to protect your space.",
      card3Title: "Simple Booking",
      card3Text: "Choose your service, date, and details in just a few clicks.",
      card4Title: "Tailored Plans",
      card4Text:
        "From weekly upkeep to one-time deep cleans, we adapt to your needs.",
    },

    services: {
      eyebrow: "Services",
      title: "Cleaning plans built around your lifestyle.",
      subtitle:
        "Choose from flexible services designed for apartments, family homes, offices, and specialty cleaning needs.",
      card1Title: "Residential Cleaning",
      card1Text:
        "Spotless recurring and one-time home cleaning tailored to your schedule, preferences, and lifestyle.",
      card2Title: "Office Cleaning",
      card2Text:
        "Premium workplace cleaning that keeps your space fresh, professional, and ready for clients and teams.",
      card3Title: "Deep Cleaning",
      card3Text:
        "Detailed top-to-bottom cleaning for kitchens, bathrooms, living areas, and overlooked corners.",
      card4Title: "Move In / Out",
      card4Text:
        "Stress-free move-in and move-out cleaning that leaves every room polished and inspection-ready.",
      card5Title: "Eco-Friendly Cleaning",
      card5Text:
        "Safe and effective green products for families, children, pets, and environmentally conscious homes.",
      card6Title: "Post-Construction",
      card6Text:
        "Dust, debris, and residue removal that transforms newly renovated spaces into move-in-ready rooms.",
      bookService: "Book this service",
    },

    compare: {
      eyebrow: "Before & After",
      title: "A visible difference you can feel instantly.",
      subtitle:
        "Showcase your value with a strong visual comparison block that highlights the transformation your service delivers.",
      before: "Before",
      after: "After",
    },

    pricing: {
      eyebrow: "Pricing",
      title: "Transparent plans with no hidden surprises.",
      subtitle:
        "Simple packages designed to help visitors compare quickly and book with confidence.",
      perVisit: "/ visit",
      popular: "Most Popular",

      basicTitle: "Basic",
      basicSubtext: "Best for small apartments",
      basic1: "Up to 2 rooms",
      basic2: "Kitchen surface cleaning",
      basic3: "Bathroom sanitization",
      basic4: "Vacuum & mopping",
      basic5: "Standard supplies included",
      chooseBasic: "Choose Basic",

      premiumTitle: "Premium",
      premiumSubtext: "Most popular for family homes",
      premium1: "Up to 5 rooms",
      premium2: "Detailed kitchen cleaning",
      premium3: "Bathrooms deep sanitized",
      premium4: "Dusting all surfaces",
      premium5: "Inside microwave & appliances",
      premium6: "Priority booking",
      choosePremium: "Choose Premium",

      eliteTitle: "Elite",
      eliteSubtext: "Complete deep clean experience",
      elite1: "Whole-home deep cleaning",
      elite2: "Inside fridge on request",
      elite3: "Baseboards & detailing",
      elite4: "Move in/out ready finish",
      elite5: "Eco-friendly products",
      elite6: "Dedicated cleaning lead",
      chooseElite: "Choose Elite",
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "Clients stay because the experience feels effortless.",
      subtitle:
        "Social proof helps visitors trust the quality, professionalism, and consistency of your service.",
      quote1:
        "The team made my apartment look hotel-level clean. The booking process was effortless, and the results were even better than expected.",
      role1: "Homeowner",
      role2: "Office Manager",
      role3: "Busy Parent",
    },

    faq: {
      eyebrow: "FAQ",
      title: "Everything your clients usually ask before booking.",
      subtitle:
        "A simple accordion reduces friction, builds trust, and helps people move toward booking faster.",
      q1: "Do I need to be home during the cleaning?",
      a1: "Not at all. Many clients provide access instructions. Our team is vetted and insured.",
      q2: "Do you bring your own cleaning products?",
      a2: "Yes. We bring professional supplies. Eco options available.",
      q3: "Can I customize the service?",
      a3: "Yes. Choose areas, add-ons, and schedule.",
      q4: "What if I need to reschedule?",
      a4: "You can reschedule easily with 24h notice.",
      q5: "Are your cleaners insured and checked?",
      a5: "Yes. All team members are screened and trained.",
    },
    booking: {
      intro: "Contact & Booking",
      title: "Ready for a cleaner, fresher space?",
      desc: "Fill out the form and our team will confirm your quote, availability, and service details quickly.",
      chip1: "Homes",
      chip2: "Apartments",
      chip3: "Studios",
      chip4: "Airbnb turnovers",
      chip5: "Offices",
      chip6: "Move-out cleans",
      hours: "Mon - Sat · 8:00 AM - 19:00 PM",

      formTitle: "Book your cleaning",
      formDesc: "Tell us about your space and preferred schedule.",

      nameLabel: "Full Name",
      namePlaceholder: "John Carter",

      emailLabel: "Email",
      emailPlaceholder: "john@email.com",

      phoneLabel: "Phone",
      phonePlaceholder: "+1 555 000 1234",

      serviceLabel: "Service Type",
      servicePlaceholder: "Deep Cleaning",

      dateLabel: "Preferred Date",

      sizeLabel: "Home Size",
      sizePlaceholder: "3 bed / 2 bath",

      messageLabel: "Additional Notes",
      messagePlaceholder:
        "Tell us about pets, parking, priorities, or special requests...",

      submit: "Request Booking",
    },
    finalCta: {
      title: "Enjoy a cleaner space without the stress.",
      text: "From regular upkeep to deep cleaning, our team delivers reliable, premium results that make your home or office feel refreshed.",
      button: "Book a Cleaning Today",
    },

    footer: {
      brandTagline: "Premium service. Premium results.",
      description:
        "Professional cleaning services designed to keep your home and workspace spotless, fresh, and comfortable. Our trained team delivers reliable results with attention to detail and care you can trust.",
      quickLinks: "Quick Links",
      connect: "Connect",
      rights: "All rights reserved.",
      devPrefix: "Website developed by",
    },

    floating: {
      whatsapp: "WhatsApp",
      bookNow: "Book Now",
    },
  },

  de: {
    nav: {
      home: "Startseite",
      about: "Über uns",
      services: "Leistungen",
      pricing: "Preise",
      faq: "FAQ",
      testimonials: "Bewertungen",
      booking: "Buchung",
      bookNow: "Buchen",
    },
    hero: {
      trust: "Vertraut von 2.50+ zufriedenen Kunden",
      title:
        "Premium-Reinigungsservices für Häuser, die es verdienen zu glänzen.",
      subtitle:
        "Schnelle Buchung, geschulte Fachkräfte, umweltfreundliche Produkte und ein erstklassiges Erlebnis vom ersten Klick bis zum letzten Glanz.",
      quote: "Gratis Angebot",
      explore: "Leistungen",
      insured: "Voll versichert",
      eco: "Ökoe",
      satisfaction: "100% Zufriedenheit",
      rating: "Bewertung",
      support: "Support",
      staff: "Versichert",
      sameDayStrong: "Gleich",
      available: "Verfügbar",
    },

    process: {
      step1Title: "Service wählen",
      step1Text:
        "Wählen Sie in wenigen Minuten eine einmalige, regelmäßige, gründliche Umzugs- oder Büroreinigung.",
      step2Title: "Passende Zeit wählen",
      step2Text:
        "Buchen Sie Ihren Wunschtermin und wir bestätigen schnell mit transparenten Preisen und klaren Leistungen.",
      step3Title: "Sauberen Raum genießen",
      step3Text:
        "Unser geschultes Team kommt pünktlich, reinigt gründlich und hinterlässt Ihren Raum frisch und bereit.",
    },
    badges: {
      insured: "Versichert & geprüft",
      eco: "Umweltfreundliche Produkte",
      guarantee: "Zufriedenheitsgarantie",
      flexible: "Flexible Termine",
    },

    about: {
      eyebrow: "Über uns",
      title: "Reinigung auf Premium-Niveau mit persönlicher Note.",
      subtitle:
        "Wir verbinden moderne Abläufe, geprüfte Fachkräfte und hohe Reinigungsstandards, um jedes Mal ein erstklassiges Serviceerlebnis zu bieten.",
      card1Title: "Hohe Standards",
      card1Text: "Jeder Raum folgt klaren Qualitätsstandards.",
      card2Title: "Freundliche Profis",
      card2Text: "Unser Team ist pünktlich, respektvoll und geschult.",
      card3Title: "Einfache Buchung",
      card3Text: "Wählen Sie Service, Datum und Details in nur wenigen Klicks.",
      card4Title: "Flexible Pläne",
      card4Text: "Von wöchentlich bis einmalig – wir passen uns an.",
    },

    services: {
      eyebrow: "Leistungen",
      title: "Reinigungspläne passend zu Ihrem Alltag.",
      subtitle:
        "Wählen Sie flexible Leistungen für Wohnungen, Familienhäuser, Büros und besondere Reinigungsbedürfnisse.",
      card1Title: "Wohnungsreinigung",
      card1Text:
        "Makellose regelmäßige und einmalige Hausreinigung abgestimmt auf Ihren Zeitplan und Ihre Wünsche.",
      card2Title: "Büroreinigung",
      card2Text:
        "Professionelle Reinigung für Arbeitsplätze, damit Ihr Raum frisch, gepflegt und bereit für Kunden und Teams ist.",
      card3Title: "Grundreinigung",
      card3Text:
        "Gründliche Reinigung von Küche, Bad, Wohnbereichen und oft übersehenen Ecken.",
      card4Title: "Ein- / Auszug",
      card4Text:
        "Stressfreie Reinigung beim Ein- und Auszug, damit jeder Raum sauber und bezugsfertig ist.",
      card5Title: "Öko-Reinigung",
      card5Text:
        "Sichere und wirksame grüne Produkte für Familien, Kinder, Haustiere und umweltbewusste Haushalte.",
      card6Title: "Nach Bauarbeiten",
      card6Text:
        "Entfernung von Staub, Schmutz und Rückständen, damit renovierte Räume sofort nutzbar sind.",
      bookService: "Diesen Service buchen",
    },
    compare: {
      eyebrow: "Vorher & Nachher",
      title: "Ein sichtbarer Unterschied, den Sie sofort spüren.",
      subtitle:
        "Zeigen Sie den Wert Ihrer Leistung mit einem klaren Vorher-Nachher-Vergleich.",
      before: "Vorher",
      after: "Nachher",
    },

    pricing: {
      eyebrow: "Preise",
      title: "Transparente Preise ohne Überraschungen.",
      subtitle: "Einfache Pakete zum schnellen Vergleich und sicheren Buchen.",
      perVisit: "/ Termin",
      popular: "Am beliebtesten",

      basicTitle: "Basic",
      basicSubtext: "Ideal für kleine Wohnungen",
      basic1: "Bis zu 2 Räume",
      basic2: "Küchenoberflächen reinigen",
      basic3: "Bad desinfizieren",
      basic4: "Saugen & wischen",
      basic5: "Standardmittel inklusive",
      chooseBasic: "Basic wählen",

      premiumTitle: "Premium",
      premiumSubtext: "Beliebt für Familienhäuser",
      premium1: "Bis zu 5 Räume",
      premium2: "Gründliche Küchenreinigung",
      premium3: "Bäder tief desinfiziert",
      premium4: "Alle Flächen entstauben",
      premium5: "Mikrowelle & Geräte innen",
      premium6: "Prioritätsbuchung",
      choosePremium: "Premium wählen",

      eliteTitle: "Elite",
      eliteSubtext: "Komplette Grundreinigung",
      elite1: "Komplette Hausreinigung",
      elite2: "Kühlschrank innen auf Wunsch",
      elite3: "Leisten & Details",
      elite4: "Ein-/Auszug fertig",
      elite5: "Öko-Produkte",
      elite6: "Feste Reinigungskraft",
      chooseElite: "Elite wählen",
    },
    testimonials: {
      eyebrow: "Bewertungen",
      title: "Kunden bleiben wegen des einfachen Erlebnisses.",
      subtitle: "Bewertungen schaffen Vertrauen in Qualität und Service.",
      quote1:
        "Das Team hat meine Wohnung perfekt gereinigt. Die Buchung war einfach und das Ergebnis besser als erwartet.",
      role1: "Hausbesitzer",
      role2: "Büroleiter",
      role3: "Elternteil",
    },

    faq: {
      eyebrow: "FAQ",
      title: "Häufige Fragen vor der Buchung.",
      subtitle:
        "Klare Antworten schaffen Vertrauen und erleichtern die Entscheidung.",
      q1: "Muss ich während der Reinigung zuhause sein?",
      a1: "Nein. Viele Kunden geben vorher Zugang. Unser Team ist geprüft und versichert.",
      q2: "Bringen Sie eigene Reinigungsmittel mit?",
      a2: "Ja. Wir bringen professionelle Mittel. Öko-Optionen verfügbar.",
      q3: "Kann ich den Service anpassen?",
      a3: "Ja. Bereiche, Extras und Zeiten frei wählbar.",
      q4: "Was, wenn ich verschieben muss?",
      a4: "Flexible Terminänderung bis 24h vorher.",
      q5: "Sind Ihre Mitarbeiter versichert?",
      a5: "Ja. Alle sind geprüft und geschult.",
    },
    booking: {
      intro: "Kontakt & Buchung",
      title: "Bereit für einen saubereren, frischeren Raum?",
      desc: "Füllen Sie das Formular aus und unser Team bestätigt schnell Ihr Angebot, die Verfügbarkeit und die Servicedetails.",
      chip1: "Häuser",
      chip2: "Wohnungen",
      chip3: "Studios",
      chip4: "Airbnb-Wechsel",
      chip5: "Büros",
      chip6: "Auszugsreinigung",
      hours: "Mo - Sa · 8:00 - 19:00 Uhr",

      formTitle: "Reinigung buchen",
      formDesc: "Erzählen Sie uns von Ihrem Raum und Ihrem Wunschtermin.",

      nameLabel: "Vollständiger Name",
      namePlaceholder: "Max Mustermann",

      emailLabel: "E-Mail",
      emailPlaceholder: "max@email.com",

      phoneLabel: "Telefon",
      phonePlaceholder: "+49 000 0000000",

      serviceLabel: "Serviceart",
      servicePlaceholder: "Grundreinigung",

      dateLabel: "Wunschtermin",

      sizeLabel: "Wohnungsgröße",
      sizePlaceholder: "3 Zimmer / 2 Bäder",

      messageLabel: "Zusätzliche Hinweise",
      messagePlaceholder:
        "Infos zu Haustieren, Parken, Prioritäten oder Sonderwünschen...",

      submit: "Buchung anfragen",
    },
    finalCta: {
      title: "Genießen Sie einen sauberen Raum ohne Stress.",
      text: "Von regelmäßiger Pflege bis zur Grundreinigung liefert unser Team zuverlässige Premium-Ergebnisse für Ihr Zuhause oder Büro.",
      button: "Reinigung heute buchen",
    },

    footer: {
      brandTagline: "Premium-Service. Premium-Ergebnisse.",
      description:
        "Professionelle Reinigungsdienste für ein sauberes, frisches und angenehmes Zuhause oder Büro. Unser geschultes Team liefert zuverlässige Ergebnisse mit Sorgfalt und Liebe zum Detail.",
      quickLinks: "Schnellzugriff",
      connect: "Kontakt",
      rights: "Alle Rechte vorbehalten.",
      devPrefix: "Website entwickelt von",
    },

    floating: {
      whatsapp: "WhatsApp",
      bookNow: "Jetzt buchen",
    },
  },
};

function getNestedValue(obj, path) {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
}

function setLanguage(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem("site-language", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const text = getNestedValue(translations[lang], key);
    if (text) el.textContent = text;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    const text = getNestedValue(translations[lang], key);
    if (text) el.placeholder = text;
  });

  document.querySelectorAll(".lang-switch").forEach((btn) => {
    btn.textContent = lang === "en" ? "🌐 EN" : "🌐 DE";
  });

  document.body.classList.toggle("lang-de", lang === "de");
  document.body.classList.toggle("lang-en", lang === "en");
}

document.querySelectorAll(".lang-switch").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const current = localStorage.getItem("site-language") || "en";
    setLanguage(current === "en" ? "de" : "en");
  });
});

setLanguage(localStorage.getItem("site-language") || "en");
lucide.createIcons();
