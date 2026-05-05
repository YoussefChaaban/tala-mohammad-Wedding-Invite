import { createFileRoute } from "@tanstack/react-router";
import { Countdown } from "@/components/Countdown";
import border from "@/assets/card-border.png";
import names from "@/assets/names-calligraphy.png";
import seal from "@/assets/wax-seal.png";
import monogram from "@/assets/monogram.png";
import venue from "@/assets/venue-painterly.png";
import parentsTala from "@/assets/parents-tala.png";
import parentsMohammad from "@/assets/parents-mohammad.png";
import parentsAnd from "@/assets/parents-and.png";
import bismillah from "@/assets/bismillah-calligraphy.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Mohammad & Tala — October 31, 2026" },
      {
        name: "description",
        content:
          "The wedding of Mohammad & Tala — October 31, 2026 at Swaneset Bay Resort, Pitt Meadows, BC.",
      },
      { property: "og:title", content: "Mohammad & Tala — Wedding Invitation" },
      {
        property: "og:description",
        content: "Join us in celebrating our wedding on October 31, 2026.",
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
      <div className="relative px-16 sm:px-28 pt-36 sm:pt-40 pb-44 sm:pb-48">{children}</div>
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-[var(--ivory)] overflow-x-hidden">
      {/* HERO */}
      <section className="relative pt-12 pb-24 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <img
            src={monogram}
            alt="Monogram"
            width={120}
            height={160}
            className="mx-auto w-16 sm:w-20 animate-fade-up"
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
            <div className="text-center space-y-5">
              <img
                src={bismillah}
                alt="بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ"
                className="mx-auto w-full max-w-xs sm:max-w-sm"
              />

              <p
                className="font-arabic text-xs sm:text-sm text-foreground/80 leading-loose mx-auto max-w-[25rem] text-center px-1"
                dir="rtl"
              >
                وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا
                إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ
                لِّقَوْمٍ يَتَفَكَّرُونَ
              </p>

              <GoldDivider />

              {/* Parents */}
              <div className="flex items-center justify-center gap-4 sm:gap-6" dir="rtl">
                <img
                  src={parentsTala}
                  alt="علي وميرنا شعبان"
                  className="h-20 sm:h-24 w-auto"
                />
                <img
                  src={parentsAnd}
                  alt="و"
                  className="h-6 sm:h-8 w-auto"
                />
                <img
                  src={parentsMohammad}
                  alt="حسين وخولا الزير"
                  className="h-20 sm:h-24 w-auto"
                />
              </div>

              <GoldDivider />

              <div className="space-y-2">
                <p className="font-display text-base sm:text-lg text-foreground/70 italic leading-snug">
                  request the honor of your presence at the wedding of
                </p>
                <p className="font-arabic text-xs sm:text-sm text-foreground/70">
                  يسرّهما دعوتكم لحضور حفل زفاف ابنيهما
                </p>
              </div>

              {/* Names calligraphy */}
              <div className="py-2">
                <img
                  src={names}
                  alt="محمد و تالة — Mohammad & Tala"
                  width={1280}
                  height={640}
                  className="mx-auto w-full max-w-xs sm:max-w-sm"
                />
                <p className="mt-3 font-alex text-4xl sm:text-5xl text-[#A48347] leading-tight">
                  Mohammad
                  <br />
                  <span className="text-[#A48347]/80">&amp;</span>
                  <br />
                  Tala
                </p>
              </div>

              <div>
                <p className="font-display text-sm sm:text-base italic text-foreground/70">
                  to celebrate the beginning of their journey together
                </p>
              </div>

              <GoldDivider />

              <div className="mx-auto max-w-xs grid grid-cols-2 gap-4 -mt-2">
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-gold/70 mb-1">Date</p>
                  <p className="font-display text-lg text-gold-deep leading-tight">October 31</p>
                  <p className="font-display text-sm text-gold-deep">2026 · 6:00 PM</p>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-gold/70 mb-1">Venue</p>
                  <p className="font-display text-sm text-gold-deep leading-tight">
                    Swaneset Bay
                    <br />
                    Resort &amp; Country Club
                  </p>
                </div>
              </div>
            </div>

            {/* Wax seal */}
            <img
              src={seal}
              alt=""
              aria-hidden
              width={140}
              height={140}
              className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-20 sm:w-24 animate-seal drop-shadow-[0_8px_20px_rgba(120,80,20,0.35)]"
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
              Pitt Meadows, British Columbia
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
            While we love your little ones, we kindly request this be an adult only event.
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
              <p className="font-display text-2xl text-gold-deep">RSVP</p>
              <p className="text-xs tracking-[0.3em] uppercase text-gold/70">Mohammad & Tala</p>
              <p className="font-arabic text-sm text-gold/80">محمد و تالة</p>
            </div>
            <div className="hidden sm:block w-px h-24 bg-[var(--gold-soft)]/50" />
            <div className="text-center sm:text-left space-y-4">
              <p className="text-sm text-foreground/70 italic">
                Please respond by September 20, 2026
              </p>
              <a
                href="#"
                className="inline-block px-8 py-3 bg-[var(--gold-deep)] text-[var(--ivory)] text-xs tracking-[0.4em] uppercase hover:bg-[var(--gold)] transition-all duration-500"
              >
                Reply
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-md">
          <div className="relative">
            <img
              src={border}
              alt=""
              aria-hidden
              className="absolute inset-0 w-full h-full object-fill pointer-events-none"
            />
            <div className="relative p-12 aspect-[3/4] flex items-center justify-center">
              <div className="w-full h-full border border-[var(--gold-soft)]/40 flex items-center justify-center bg-[var(--cream)]/30">
                <div className="text-center px-6">
                  <p className="font-display text-2xl text-gold-deep italic">Coming Soon</p>
                  <p className="mt-3 font-arabic text-sm text-gold/70">قريباً</p>
                  <div className="mt-4 mx-auto w-16 h-px bg-[var(--gold-soft)]" />
                  <p className="mt-4 text-[10px] tracking-[0.4em] uppercase text-gold/70">
                    A portrait awaits
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-16 text-center">
        <img
          src={monogram}
          alt=""
          aria-hidden
          width={80}
          height={120}
          className="mx-auto w-14 opacity-80"
        />
        <p className="mt-6 font-script text-3xl text-gold-deep">M &amp; T</p>
        <p className="mt-2 text-[10px] tracking-[0.4em] uppercase text-gold/60">
          October 31 · 2026
        </p>
      </footer>
    </main>
  );
}
