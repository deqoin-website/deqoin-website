import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* TopNavBar Component */}
      <nav className="fixed top-0 z-50 w-full glass-nav border-b border-white/5">
        <div className="flex justify-between items-center w-full px-8 md:px-12 py-6 max-w-[1920px] mx-auto">
          <div className="flex flex-col">
            <Image
              src="/logo.png"
              alt="deqoin logo"
              width={120}
              height={40}
              className="object-contain"
            />
            <span className="font-label text-[9px] tracking-[0.2em] uppercase text-[#8b1a1a] mt-1">
              Desıgn Studio
            </span>
          </div>
          <div className="hidden md:flex items-center gap-10 font-headline tracking-wide text-sm">
            <a
              className="text-[#e9c176] border-b border-[#e9c176]/40 pb-1 hover:text-[#e9c176] transition-colors duration-500"
              href="#"
            >
              Mimari
            </a>
            <a
              className="text-[#e5e2e1]/70 hover:text-[#e9c176] transition-colors duration-500"
              href="#"
            >
              Tasarım
            </a>
            <a
              className="text-[#e5e2e1]/70 hover:text-[#e9c176] transition-colors duration-500"
              href="#"
            >
              Uygulama
            </a>
          </div>
          <div className="flex items-center gap-6">
            <span className="material-symbols-outlined text-primary/80 cursor-pointer hover:text-primary transition-all duration-300">
              account_circle
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
        {/* Background Texture & Ambient Light */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"></div>
          <div
            className="w-full h-full opacity-20 grayscale bg-cover bg-center"
            data-alt="Close-up of high-end dark architectural concrete texture with subtle shadows and minimalist aesthetic"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBogqwpx7wvYE_fPPf7UYvbTc9OBImc0QJ8fGL6WUUrsk6G2MLOz6yUHDt2fCoFxUHVRfhJGRLhEbpSPArA5ymne00kLz_olgx2cbNeRUHejQJ6OFsJLKD1S110YwDjdvL0ylOsW6NR1oVSdZRhuHsAimivTMaUzb8rULhMTcOrIktVnx70fvKo1i5X6tLuZbVw-AjUL1tncC_zQ3AUp3MfQmWVtMC35MwSg3wyS17lFqJMHYi3OpFnrgOzlqZSuRZDRkuDPX6jZiY')",
            }}
          ></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 text-center max-w-4xl">
          <div className="flex flex-col items-center mb-12">
            <div className="linear-light mb-8"></div>
            <h1 className="font-headline text-5xl md:text-8xl tracking-tight text-on-surface mb-8 opacity-90">
              Çok Yakında
            </h1>
            <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed font-light tracking-wide">
              Zamansız mekânlar için yeni bir deneyim hazırlanıyor.
            </p>
          </div>

          {/* Architectural CTA Detail */}
          <div className="inline-flex items-center gap-4 group cursor-pointer py-4">
            <div className="h-[1px] w-12 bg-primary/40 group-hover:w-20 transition-all duration-700"></div>
            <span className="font-label text-xs uppercase tracking-[0.3em] text-primary group-hover:tracking-[0.4em] transition-all duration-700">
              Bize Katılın
            </span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <span className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface/30">
            Keşfet
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary/60 to-transparent"></div>
        </div>
      </main>

      {/* About Section (Bento Inspired Asymmetric) */}
      <section className="py-32 px-8 md:px-24 bg-surface-container-lowest relative">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          {/* Big Image (Floating Aesthetic) */}
          <div className="md:col-span-7 relative h-[600px] w-full group overflow-hidden rounded-sm">
            <img
              className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 transition-transform duration-[2000ms]"
              data-alt="Interior shot of a luxury minimalist living room with matte dark walls, bronze accents, and warm architectural lighting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5RDQTidaX8sY_5ZGDUCLnEJNZL-7RWQiymGwN5mu9Hcb7W3Iv5KEv-5u09jACk6c4Lc4BPpLm0VVOiKr1xBQwq4_jqOc7y7jH1cNaqepgiaUnSB5bVwMXeSu7B589prUrU1Q1vTIjI6s62s_i1oFGHiQ602bUl-ASSfLybPhKQoEhXXdsLogWxB2jgJjd2e70Df3GorS5SvbvqdArfvtZLsP18JErsJC0cTs-3mBfWQAqFA6c1e8TBL31NaeDEw_5MOvbnyqD0u0"
              alt="Interior shot"
            />
            <div className="absolute inset-0 border-[20px] border-surface-container-lowest/20 pointer-events-none"></div>
          </div>

          {/* Text Content */}
          <div className="md:col-span-5 flex flex-col justify-center">
            <h2 className="font-headline text-3xl md:text-5xl text-on-surface mb-8 leading-tight">
              Fikirlerden <br />
              <span className="text-primary italic font-light">Gerçekliğe.</span>
            </h2>
            <p className="font-body text-on-surface-variant/80 text-lg leading-relaxed mb-10 font-light">
              deqoin, iç mimarlık, dekorasyon ve uygulama alanlarında bütüncül
              çözümler sunan bir tasarım stüdyosudur. Estetik, fonksiyon ve kaliteyi
              bir araya getirerek özgün mekânlar üretir.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-outline-variant/20">
              <div>
                <span className="font-label text-primary text-[10px] uppercase tracking-widest block mb-2">
                  Vizyon
                </span>
                <p className="text-sm text-on-surface/60 font-light">
                  Mekânın ruhunu modern çizgilerle harmanlayarak zamansız eserler
                  bırakmak.
                </p>
              </div>
              <div>
                <span className="font-label text-primary text-[10px] uppercase tracking-widest block mb-2">
                  Misyon
                </span>
                <p className="text-sm text-on-surface/60 font-light">
                  Maksimum konfor ve estetiği en küçük detayda dahi hissettirmek.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid (Minimal List) */}
      <section className="py-32 px-8 md:px-24 bg-surface">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between items-end mb-20">
            <h3 className="font-headline text-4xl text-on-surface">
              Hizmetlerimiz
            </h3>
            <div className="linear-light hidden md:block"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant/20">
            {/* Service 01 */}
            <div className="bg-surface p-12 hover:bg-surface-container-low transition-all duration-500 group">
              <span className="font-label text-primary/30 text-4xl block mb-12 group-hover:text-primary/60 transition-colors">
                01
              </span>
              <h4 className="font-headline text-2xl mb-6">Mimari Tasarım</h4>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed opacity-60">
                Yapısal estetiği ve fonksiyonelliği birleştiren özgün projeler.
              </p>
            </div>

            {/* Service 02 */}
            <div className="bg-surface p-12 hover:bg-surface-container-low transition-all duration-500 group">
              <span className="font-label text-primary/30 text-4xl block mb-12 group-hover:text-primary/60 transition-colors">
                02
              </span>
              <h4 className="font-headline text-2xl mb-6">İç Mekan Çözümleri</h4>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed opacity-60">
                Detaylarla zenginleşen, yaşayan ve nefes alan iç hacimler.
              </p>
            </div>

            {/* Service 03 */}
            <div className="bg-surface p-12 hover:bg-surface-container-low transition-all duration-500 group">
              <span className="font-label text-primary/30 text-4xl block mb-12 group-hover:text-primary/60 transition-colors">
                03
              </span>
              <h4 className="font-headline text-2xl mb-6">Uygulama & Kontrol</h4>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed opacity-60">
                Proje aşamasından anahtar teslimine titiz şantiye yönetimi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Footer Section */}
      <footer className="bg-surface-container-lowest pt-24 pb-12 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-8 md:px-24">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
            {/* Brand Detail */}
            <div className="max-w-xs">
              <div className="mb-6">
                <Image
                  src="/logo.png"
                  alt="deqoin logo"
                  width={140}
                  height={48}
                  className="object-contain"
                />
              </div>
              <p className="font-body text-sm text-on-surface-variant/70 leading-relaxed">
                Kapadokya'nın mistik dokusunu modern tasarımla buluşturuyoruz.
              </p>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
              <div>
                <span className="font-label text-primary text-[10px] uppercase tracking-[0.2em] block mb-6">
                  İletişim
                </span>
                <ul className="space-y-4 font-body text-lg">
                  <li>
                    <a
                      className="hover:text-primary transition-colors duration-300"
                      href="mailto:info@deqoin.com"
                    >
                      info@deqoin.com
                    </a>
                  </li>
                  <li className="text-on-surface-variant">
                    Nevşehir / Kapadokya
                  </li>
                </ul>
              </div>
              <div>
                <span className="font-label text-primary text-[10px] uppercase tracking-[0.2em] block mb-6">
                  Sosyal Medya
                </span>
                <ul className="space-y-4 font-body text-lg">
                  <li>
                    <a
                      className="flex items-center gap-3 hover:text-primary transition-colors duration-300 group"
                      href="#"
                    >
                      <span>Instagram</span>
                      <span className="material-symbols-outlined text-sm opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                        arrow_outward
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar from JSON */}
          <div className="flex flex-col md:flex-row justify-between items-center w-full pt-12 border-t border-white/5 gap-6">
            <span className="font-label text-[10px] tracking-[0.05em] uppercase text-on-surface/40">
              © deqoin Design Studio. Nevşehir / Kapadokya
            </span>
            <div className="flex gap-8">
              <a
                className="font-label text-[10px] tracking-[0.05em] uppercase text-on-surface/40 hover:text-primary transition-colors duration-500"
                href="#"
              >
                Instagram
              </a>
              <a
                className="font-label text-[10px] tracking-[0.05em] uppercase text-on-surface/40 hover:text-primary transition-colors duration-500"
                href="mailto:info@deqoin.com"
              >
                info@deqoin.com
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating UI Detail: Bottom Fixed Contact Line */}
      <div className="fixed bottom-0 left-0 w-full h-1 z-50 overflow-hidden pointer-events-none">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      </div>
    </>
  );
}
