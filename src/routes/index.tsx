import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Countdown } from "@/components/Countdown";
import border from "@/assets/card-border.png";
import names from "@/assets/names-calligraphy.png";
import seal from "@/assets/wax-seal.png";

import venue from "@/assets/venue-painterly.png";
import parentsFull from "@/assets/Parent-full-updated1.png";
import bismillah from "@/assets/bismillah-calligraphy.png";
import emblem from "@/assets/monogram-emblem.png";

import slide1 from "@/assets/IMG_9502.JPG";
import slide2 from "@/assets/IMG_9505.JPG";
import slide3 from "@/assets/IMG_9510.JPG";
import slide4 from "@/assets/IMG_9512.JPG";

const slideshowImages = [slide1, slide3, slide2, slide4];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Mohammad Alzeir & Tala Chaaban's Wedding Invitation" },
      {
        name: "description",
        content:
          "Mohammad Alzeir & Tala Chaaban's Wedding Invitation — October 31, 2026 at Swaneset Bay Resort, Pitt Meadows, BC.",
      },
      { property: "og:title", content: "Mohammad Alzeir & Tala Chaaban's Wedding Invitation" },
      {
        property: "og:description",
        content: "Mohammad Alzeir & Tala Chaaban's Wedding Invitation — October 31, 2026 at Swaneset Bay Resort, Pitt Meadows, BC.",
      },
    ],
  }),
});

function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`gold-divider ${className}`}>
      <span className="text-sm">❖</span>
    </div>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative mx-auto w-full max-w-2xl ${className}`}>
      <img
        src={border}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-fill pointer-events-none select-none"
      />
      <div className="relative flex min-h-full flex-col items-center justify-center px-20 pt-28 pb-28 sm:px-28 sm:pt-40 sm:pb-48 [zoom:0.75] sm:[zoom:1]">{children}</div>
    </div>
  );
}

function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideshowVisible, setSlideshowVisible] = useState(false);
  const slideshowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = slideshowRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setSlideshowVisible(entry.isIntersecting),
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!slideshowVisible) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slideshowVisible]);

  return (
    <main className="min-h-screen bg-[var(--ivory)] overflow-x-hidden">
      {/* HERO */}
      <section className="relative pt-12 pb-24 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <img
            src={emblem}
            alt="Monogram"
            width={240}
            height={320}
            className="mx-auto w-32 sm:w-40 animate-fade-up"
          />
          <p className="mt-8 text-[10px] sm:text-xs tracking-[0.5em] uppercase text-gold/80 animate-fade-up">
            Together with their families
          </p>
          <p
            className="mt-2 font-arabic text-sm text-gold/80 animate-fade-up"
            style={{ animationDelay: ".1s" }}
          >
            بدعوة من عائلتيهما
          </p>
        </div>

        <div className="mt-10">
          <Card>
            <div className="w-full text-center space-y-1.5 sm:space-y-5">
              <img
                src={bismillah}
                alt="بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ"
                className="mx-auto w-full max-w-[9.75rem] sm:max-w-[15rem]"
              />

              <p
                className="font-arabic text-[8px] sm:text-sm text-foreground/70 leading-relaxed sm:leading-loose mx-auto max-w-[17rem] sm:max-w-[25rem] text-center px-1"
                dir="rtl"
              >
                وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا
                إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ
                لِّقَوْمٍ يَتَفَكَّرُونَ
              </p>

              <GoldDivider />

              {/* Parents */}
              <div className="flex justify-center">
                <img
                  src={parentsFull}
                  alt="علي وميرنا شعبان و حسين وخولة الزير"
                  className="h-auto w-full max-w-[11.25rem] sm:max-w-xs"
                />
              </div>

              <GoldDivider />

              <div className="space-y-2">
                <p className="font-display text-xs sm:text-lg text-foreground/70 italic leading-snug">
                  request the honor of your presence at the wedding of
                </p>
                <p className="font-arabic text-[10px] sm:text-sm text-foreground/70">
                  يسرّهما دعوتكم لحضور حفل زفاف أَبْنَاؤُهُمَ
                </p>
              </div>

              {/* Names calligraphy */}
              <div className="-mt-5 sm:-mt-8">
                <img
                  src={names}
                  alt="محمد و تالة — Mohammad & Tala"
                  width={1280}
                  height={640}
                  className="mx-auto w-full max-w-[14rem] sm:max-w-sm"
                />
                <p className="-mt-3 sm:-mt-4 font-tangerine text-[2.1rem] sm:text-[3.25rem] leading-none text-center text-gold-deep flex flex-col items-center sm:gap-1">
                  <span className="block">Mohammad</span>
                  <span className="block mt-1 sm:mt-0 relative -top-1">&amp;</span>
                  <span className="block mt-3 sm:mt-0">Tala</span>
                </p>
              </div>

              <div className="-mt-1 sm:-mt-2">
                <p className="font-display text-[11px] sm:text-base italic text-foreground/70 text-center leading-snug">
                  to celebrate the beginning of their journey together
                </p>
              </div>

              <GoldDivider />

              <div className="mx-auto grid max-w-[16rem] sm:max-w-xs grid-cols-2 gap-2 sm:gap-4 -mt-1 sm:-mt-2 text-center">
                <div>
                  <p className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-gold/70 mb-1">Date</p>
                  <p className="font-display text-[11px] sm:text-sm text-gold-deep leading-tight">October 31 2026</p>
                  <p className="font-display text-[11px] sm:text-sm text-gold-deep">Reception: 5:30 PM</p>
                  <p className="font-display text-[11px] sm:text-sm text-gold-deep">Zaffe: 6:00 PM</p>
                </div>
                <div>
                  <p className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-gold/70 mb-1">Venue</p>
                  <p className="font-display text-[11px] sm:text-sm text-gold-deep leading-tight">
                    Swaneset Bay
                    <br />
                    Resort &amp; Country Club
                  </p>
                  <p className="font-display text-[11px] sm:text-sm text-gold-deep mt-1 italic">Vancouver, Canada</p>
                </div>
              </div>

              <div className="mt-2 sm:mt-4 text-center">
                <p className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-gold/70">Attire</p>
                <p className="mt-1 font-display text-[11px] sm:text-sm text-gold-deep italic">Formal</p>
              </div>
            </div>

            {/* Wax seal */}
            <img
              src={seal}
              alt=""
              aria-hidden
              width={140}
              height={140}
              className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-20 sm:w-24 animate-seal"
            />
          </Card>
        </div>
      </section>

      {/* COUNTDOWN */}
      <section className="px-6 py-24 sm:py-28">
        <div className="text-center mb-12">
          <h2 className="font-script text-5xl sm:text-6xl text-gold-deep">Days Left</h2>
          <GoldDivider className="mt-6" />
        </div>
        <Countdown />
      </section>

      {/* VENUE */}
      <section className="px-6 py-20">
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.5em] uppercase text-gold/80">The Venue</p>
          <h2 className="mt-4 font-display text-2xl sm:text-3xl text-gold-deep">
            Swaneset Bay Resort &amp; Country Club
          </h2>
          <GoldDivider className="mt-6" />
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="relative p-3 bg-[var(--cream)] border border-[var(--gold-soft)]/40 shadow-[var(--shadow-soft)]">
            <div className="border border-[var(--gold-soft)]/60 p-1">
              <img
                src={venue}
                alt="Swaneset Bay Resort & Country Club, painterly rendering"
                width={1248}
                height={832}
                loading="lazy"
                className="w-full h-auto painterly"
              />
            </div>
          </div>

          <div className="mt-8 text-center space-y-3">
            <p className="font-display text-xl text-gold-deep">16651 Rannie Road</p>
            <p className="text-foreground/70 text-sm tracking-wider">
              Pitt Meadows, British Columbia, Canada
            </p>
            <div className="pt-4">
              <a
                href="https://maps.google.com/?q=Swaneset+Bay+Resort+%26+Country+Club+Pitt+Meadows"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-3 border border-[var(--gold)] text-gold text-xs tracking-[0.4em] uppercase hover:bg-[var(--gold)] hover:text-[var(--ivory)] transition-all duration-500"
              >
                Open in Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ADULTS ONLY */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-xl text-center border-y border-[var(--gold-soft)]/40 py-12">
          <p className="text-base">❖</p>
          <p className="mt-4 text-xs tracking-[0.5em] uppercase text-gold">
            An Adults-Only Celebration
          </p>
          <p className="mt-6 font-display italic text-foreground/70 leading-relaxed">
            Although we adore your little ones, we kindly request this be an adult only event.
          </p>
        </div>
      </section>

      {/* RSVP POSTCARD */}
      <section className="px-6 py-20">
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.5em] uppercase text-gold/80">Kindly Respond</p>
          <p className="mt-2 font-arabic text-base text-gold/70">نتشرف بحضوركم</p>
          <GoldDivider className="mt-6" />
        </div>

        <div className="mx-auto max-w-2xl bg-[var(--cream)] border border-[var(--gold-soft)]/50 shadow-[var(--shadow-card)] relative">
          <div className="absolute inset-3 border border-[var(--gold-soft)]/40 pointer-events-none" />
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-6 p-12 sm:p-16 items-center">
            <div className="text-center sm:text-right space-y-2">
              <p className="font-script text-3xl sm:text-4xl text-gold-deep">RSVP</p>
              <p className="text-xs tracking-[0.3em] uppercase text-gold/70">Mohammad & Tala</p>
              <p className="font-arabic text-sm text-gold/80">محمد و تالة</p>
            </div>
            <div className="hidden sm:block w-px h-24 bg-[var(--gold-soft)]/50" />
            <div className="text-center sm:text-left space-y-4">
              <p className="text-sm text-foreground/70 italic">
                Please respond by September 10, 2026
              </p>
              <a
                href="https://www.theknot.com/us/mohammad-alzeir-and-tala-chaaban-oct-2026/rsvp"
                target="_blank"
                rel="noopener noreferrer"
                className="block mx-auto w-fit px-8 py-3 bg-[var(--gold-deep)] text-[var(--ivory)] text-xs uppercase hover:bg-[var(--gold)] transition-all duration-500 text-center"
              >
                Reply
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRAVEL */}
      <section className="px-6 py-20">
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.5em] uppercase text-gold/80">Travel &amp; Stay</p>
          <h2 className="mt-4 font-display text-2xl sm:text-3xl text-gold-deep">
            Civic Hotel, Autograph Collection
          </h2>
          <GoldDivider className="mt-6" />
        </div>

        <div className="mx-auto max-w-xl text-center space-y-4">
          <p className="font-display text-lg text-gold-deep">13475 Central Ave</p>
          <p className="text-foreground/70 text-sm tracking-wider">Surrey, BC V3T 0L8, Canada</p>

          <div className="grid grid-cols-2 gap-6 mx-auto max-w-sm pt-4">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-gold/70 mb-1">Check-in</p>
              <p className="font-display text-base text-gold-deep">October 30, 2026</p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-gold/70 mb-1">Check-out</p>
              <p className="font-display text-base text-gold-deep">November 1, 2026</p>
            </div>
          </div>

          <div className="pt-6">
            <a
              href="https://www.marriott.com/en-us/hotels/yvrak-civic-hotel-autograph-collection/overview/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-3 border border-[var(--gold)] text-gold text-xs tracking-[0.4em] uppercase hover:bg-[var(--gold)] hover:text-[var(--ivory)] transition-all duration-500"
            >
              Book Hotel
            </a>
          </div>
        </div>
      </section>

      {/* REGISTRY */}
      <section className="px-6 py-20">
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.5em] uppercase text-gold/80">Gift Registry</p>
          <GoldDivider className="mt-6" />
        </div>

        <div className="mx-auto max-w-xl text-center space-y-4">
          <p className="text-foreground/70 text-sm leading-relaxed">
            Your presence is the greatest gift. However, if you wish to honor us with a gift, we have registered at the link below.
          </p>
          <div className="pt-6">
            <a
              href="https://registry.theknot.com/mohammad-alzeir-tala-chaaban-october-2026-canada/74842309"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-3 border border-[var(--gold)] text-gold text-xs tracking-[0.4em] uppercase hover:bg-[var(--gold)] hover:text-[var(--ivory)] transition-all duration-500"
            >
              View Registry
            </a>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section ref={slideshowRef} className="px-6 py-20">
        <div className="mx-auto max-w-md">
          <div className="relative">
            <img
              src={border}
              alt=""
              aria-hidden
              className="absolute inset-0 w-full h-full object-fill pointer-events-none"
            />
            <div className="relative p-12 aspect-[3/4] flex items-center justify-center">
              <div className="w-full h-full border border-[var(--gold-soft)]/40 overflow-hidden relative">
                {slideshowImages.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Mohammad & Tala ${i + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-16 text-center">
        <img
          src={emblem}
          alt=""
          aria-hidden
          width={240}
          height={320}
          className="mx-auto w-28 sm:w-32 opacity-90"
        />
        <p className="mt-6 font-script text-3xl text-gold-deep">M &amp; T</p>
        <p className="mt-2 text-[10px] tracking-[0.4em] uppercase text-gold/60">
          October 31 · 2026
        </p>
      </footer>
    </main>
  );
}
