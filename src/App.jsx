
import { useState, useEffect, useCallback } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Instagram,
  Heart,
  Camera,
  MessageCircle,
} from "lucide-react";

import image1 from "./1.png";
import image2 from "./2.webp";
import image3 from "./3.webp";
import image4 from "./4.webp";
import image5 from "./5.webp";
import image6 from "./6.webp";
import image7 from "./7.webp";
import image8 from "./8.webp";
import image9 from "./9.webp";
import image10 from "./10.webp";

const instagram = "https://www.instagram.com/akshays_photography_/";

// Replace this placeholder with Akshay's actual WhatsApp number.
const phone = "919700006709";

const whatsapp = `https://wa.me/${phone}?text=${encodeURIComponent(
  "Hi Akshay Photography, I would like to enquire about wedding photography."
)}`;

const stories = [
  { id: 1, img: image1, category: "Pre-Wedding", title: "Before Forever", shape: "large" },
  { id: 2, img: image2, category: "Weddings", title: "The Beginning", shape: "portrait" },
  { id: 3, img: image3, category: "Mangalya Dharanam", title: "A Sacred Promise", shape: "portrait" },
  { id: 4, img: image4, category: "Haldi", title: "In Shades of Gold", shape: "landscape" },
  { id: 5, img: image5, category: "Kids & Birthday", title: "Little Wonders", shape: "portrait" },
  { id: 6, img: image6, category: "Pre-Birthday", title: "A World of Their Own", shape: "landscape" },
  { id: 7, img: image7, category: "Pre-Wedding", title: "Just the Two of Us", shape: "landscape" },
  { id: 8, img: image8, category: "Weddings", title: "The Wedding Chapter", shape: "portrait" },
  { id: 9, img: image9, category: "Haldi", title: "Golden Traditions", shape: "landscape" },
  { id: 10, img: image10, category: "Kids & Birthday", title: "Little, Loved, Remembered", shape: "portrait" },
];

const filters = [
  "All Stories",
  "Weddings",
  "Pre-Wedding",
  "Mangalya Dharanam",
  "Haldi",
  "Kids & Birthday",
  "Pre-Birthday",
];

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Our Philosophy", href: "#philosophy" },
  { label: "Experiences", href: "#experiences" },
  { label: "Contact", href: "#contact" },
];

function Logo() {
  return (
    <a href="#home" className="logo" aria-label="Akshay Photography home">
      <span className="logo-symbol">A</span>
      <span className="logo-copy">
        <strong>AKSHAY</strong>
        <small>WEDDING PHOTOGRAPHY</small>
      </span>
    </a>
  );
}

export default function App() {
  const [filter, setFilter] = useState("All Stories");
  const [active, setActive] = useState(null);
  const [menu, setMenu] = useState(false);

  const visible =
    filter === "All Stories"
      ? stories
      : stories.filter((story) => story.category === filter);

  const move = useCallback(
    (direction) => {
      if (!active || visible.length === 0) return;

      const currentIndex = visible.findIndex(
        (story) => story.id === active.id
      );

      const nextIndex =
        (currentIndex + direction + visible.length) % visible.length;

      setActive(visible[nextIndex]);
    },
    [active, visible]
  );

  useEffect(() => {
    if (!active) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") move(1);
      if (event.key === "ArrowLeft") move(-1);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [active, move]);

  const chooseFilter = (category) => {
    setFilter(category);
    setMenu(false);
  };

  return (
    <main>
      {/* Top announcement */}
      <div className="topline">
        <span>THE ART OF REMEMBERING</span>
        <span className="topline-location">HYDERABAD · TELANGANA</span>

        <a href={instagram} target="_blank" rel="noreferrer">
          FOLLOW OUR JOURNEY <ArrowUpRight size={15} />
        </a>
      </div>

      {/* Navigation */}
      <header className="header">
        <Logo />

        <button
          className="menu-toggle"
          onClick={() => setMenu((open) => !open)}
          aria-label={menu ? "Close navigation" : "Open navigation"}
          aria-expanded={menu}
        >
          {menu ? <X size={23} /> : <Menu size={23} />}
        </button>

        <nav className={menu ? "nav nav-open" : "nav"} aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenu(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href={whatsapp} target="_blank" rel="noreferrer">
          Let's Talk <ArrowUpRight size={16} />
        </a>
      </header>

      {/* Cinematic hero */}
      <section className="hero" id="home">
        <img
          className="hero-photo"
          src={image1}
          alt="Wedding photography"
          fetchPriority="high"
        />

        <div className="hero-shade" />

        <div className="hero-content">
          <p className="overline">
            <span className="hero-overline-line" />
            WEDDINGS · LOVE · LEGACY
          </p>

          <h1>
            Your day.
            <br />
            <em>Your forever.</em>
          </h1>

          <p className="hero-copy">
            Beautifully captured. Forever remembered.
          </p>

          <div className="hero-buttons">
            <a href="#portfolio" className="gold-button">
              Explore Our Work <ArrowRight size={17} />
            </a>

            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="text-button"
            >
              Let's Talk <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="hero-bottom">
          <span>01 / EVERY MOMENT MATTERS</span>
          <a href="#portfolio">SCROLL TO EXPLORE ↓</a>
        </div>

        <div className="hero-vertical">
          AKSHAY PHOTOGRAPHY — MADE OF MEMORIES
        </div>
      </section>

      {/* Brand philosophy */}
      <section className="manifesto" id="philosophy">
        <div className="manifesto-label">
          <span>OUR PHILOSOPHY</span>
          <span>EST. WITH LOVE</span>
        </div>

        <div className="manifesto-main">
          <p className="overline">BEYOND THE PERFECT PICTURE</p>

          <h2>
            Not just how it looked.
            <br />
            <em>How it felt.</em>
          </h2>

          <p>
            The trembling hands before a ceremony. A parent's quiet tears.
            A smile shared without words. We believe the most beautiful
            photographs are the ones that bring you back to the feeling.
          </p>
        </div>

        <span className="manifesto-mark" aria-hidden="true">“</span>
      </section>

      {/* Portfolio gallery */}
      <section className="portfolio" id="portfolio">
        <div className="portfolio-heading">
          <div>
            <p className="overline">A CURATED COLLECTION</p>
            <h2>
              Stories worth <em>keeping.</em>
            </h2>
          </div>

          <p>
            Honest emotions. Beautiful details.
            <br />
            Memories that become family heirlooms.
          </p>
        </div>

        <div className="filters" aria-label="Filter photographs">
          {filters.map((category) => (
            <button
              key={category}
              onClick={() => chooseFilter(category)}
              className={
                filter === category ? "filter active-filter" : "filter"
              }
              aria-pressed={filter === category}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="story-grid">
          {visible.map((story, index) => (
            <button
              key={story.id}
              className={`story-card story-${story.shape}`}
              onClick={() => setActive(story)}
              style={{ animationDelay: `${index * 45}ms` }}
              aria-label={`View ${story.title}`}
            >
              <img
                src={story.img}
                alt={story.title}
                loading="lazy"
              />

              <span className="story-shade" />

              <span className="story-count">
                {String(story.id).padStart(2, "0")}
              </span>

              <span className="story-text">
                <small>{story.category}</small>
                <strong>{story.title}</strong>
              </span>

              <span className="story-arrow">
                <ArrowUpRight size={19} />
              </span>
            </button>
          ))}
        </div>

        <div className="portfolio-footer">
          <span>PHOTOGRAPHED WITH INTENTION</span>
          <span>{visible.length} STORIES</span>
        </div>
      </section>

      {/* Telugu wedding feature */}
      <section className="telugu-story">
        <div className="telugu-photo">
          <img
            src={image3}
            alt="Traditional Telugu wedding moments"
            loading="lazy"
          />
        </div>

        <div className="telugu-copy">
          <p className="overline">ROOTED IN TRADITION</p>

          <h2>
            Every ritual.
            <br />
            <em>Every emotion.</em>
          </h2>

          <p>
            From the sacred Mangalya Dharanam to the joyful Haldi,
            Telugu weddings hold a thousand beautiful moments.
            We honour every ritual and every emotion that makes your
            celebration uniquely yours.
          </p>

          <a
            href="#portfolio"
            onClick={() => chooseFilter("Mangalya Dharanam")}
            className="text-button"
          >
            Explore wedding stories <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      {/* Photography experiences */}
      <section className="experiences" id="experiences">
        <div className="portfolio-heading">
          <div>
            <p className="overline">YOUR DAY, YOUR STORY</p>
            <h2>
              Made for <em>your moments.</em>
            </h2>
          </div>

          <p>Thoughtfully captured. Beautifully told.</p>
        </div>

        <div className="experience-list">
          <a
            href="#portfolio"
            onClick={() => chooseFilter("Weddings")}
          >
            <span>01</span>
            <Camera />
            <strong>Wedding Stories</strong>
            <em>The rituals, the people, the beginning.</em>
            <ArrowUpRight />
          </a>

          <a
            href="#portfolio"
            onClick={() => chooseFilter("Pre-Wedding")}
          >
            <span>02</span>
            <Heart />
            <strong>Pre-Wedding</strong>
            <em>Your story before forever begins.</em>
            <ArrowUpRight />
          </a>

          <a
            href="#portfolio"
            onClick={() => chooseFilter("Kids & Birthday")}
          >
            <span>03</span>
            <Camera />
            <strong>Little Celebrations</strong>
            <em>Small moments, enormous love.</em>
            <ArrowUpRight />
          </a>
        </div>
      </section>

      {/* Call to action */}
      <section className="closing">
        <p className="overline">THE NEXT CHAPTER IS YOURS</p>

        <h2>
          Some days become
          <br />
          <em>part of your forever.</em>
        </h2>

        <a
          href={whatsapp}
          target="_blank"
          rel="noreferrer"
          className="gold-button"
        >
          Let's tell your story <ArrowUpRight size={17} />
        </a>
      </section>

      {/* Contact and footer */}
      <footer className="contact" id="contact">
        <div className="contact-main">
          <div>
            <p className="overline">LET'S MAKE SOMETHING MEANINGFUL</p>

            <h2>
              Your story deserves
              <br />
              <em>to be remembered.</em>
            </h2>

            <p>
              Tell us about your wedding, your celebration,
              and the moments that matter most.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="gold-button"
            >
              <MessageCircle size={16} />
              Enquire on WhatsApp
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="contact-panel">
            <Logo />

            <p>
              Thoughtful wedding photography, made to last beyond the moment.
            </p>

            <a href={instagram} target="_blank" rel="noreferrer">
              <Instagram size={17} />
              Instagram
              <ArrowUpRight size={15} />
            </a>

            <a href={whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle size={17} />
              WhatsApp
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <Logo />
          <span>CAPTURING MOMENTS. PRESERVING FEELINGS.</span>
          <span>© {new Date().getFullYear()} AKSHAY PHOTOGRAPHY</span>
        </div>
      </footer>

      {/* Image lightbox */}
      {active && (
        <div
          className="lightbox"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
        >
          <button
            className="lightbox-close"
            onClick={() => setActive(null)}
            aria-label="Close image"
          >
            <X />
          </button>

          <button
            className="lightbox-prev"
            onClick={(event) => {
              event.stopPropagation();
              move(-1);
            }}
            aria-label="Previous image"
          >
            <ChevronLeft />
          </button>

          <div
            className="lightbox-inner"
            onClick={(event) => event.stopPropagation()}
          >
            <img src={active.img} alt={active.title} />

            <div>
              <span>
                <small>{active.category}</small>
                <h3>{active.title}</h3>
              </span>
              <span className="lightbox-counter">
                {String(visible.findIndex((s) => s.id === active.id) + 1).padStart(2, "0")}
                {" / "}
                {String(visible.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          <button
            className="lightbox-next"
            onClick={(event) => {
              event.stopPropagation();
              move(1);
            }}
            aria-label="Next image"
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </main>
  );
}
