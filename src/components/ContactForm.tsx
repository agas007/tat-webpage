export default function ContactForm() {
  return (
    <section id="konsultasi" className="py-24 bg-background dark:bg-section-bg relative overflow-hidden transition-colors">
      {/* Abstract background lines mimicking DDTC style */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="lines" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 40 M 0 0 L 40 40" fill="none" stroke="#004d99" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#lines)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center bg-card rounded-3xl shadow-xl overflow-hidden border border-border transition-colors">
          
          <div className="w-full lg:w-5/12 p-10 lg:p-14 bg-brand-blue text-white h-full relative overflow-hidden">
            <div className="absolute right-0 bottom-0 opacity-10 transform scale-150 translate-x-1/4 translate-y-1/4">
              <div className="font-bold text-[20rem] leading-none">TAT</div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Mari Berkolaborasi Bersama Kami</h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-8">
                Untuk mengetahui informasi tentang topik tertentu atau tentang layanan TAT & Partners, Anda dapat mengirimkan pesan dengan mengisi formulir ini. 
              </p>
              <p className="text-blue-200 text-sm">
                Kami menghargai komentar dan masukan Anda, namun kami menyarankan untuk tidak menyertakan informasi yang bersifat sensitif atau rahasia.
              </p>
            </div>
          </div>
          
          <div className="w-full lg:w-7/12 p-10 lg:p-14">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="sr-only">Email Anda</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Email Anda" 
                    className="w-full px-5 py-4 rounded-xl border border-border bg-background text-foreground placeholder-gray-400 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">Nomor Ponsel Anda</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="Nomor Ponsel Anda" 
                    className="w-full px-5 py-4 rounded-xl border border-border bg-background text-foreground placeholder-gray-400 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="reason" className="sr-only">Alasan untuk menghubungi</label>
                <select 
                  id="reason" 
                  defaultValue=""
                  className="w-full px-5 py-4 rounded-xl border border-border focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all appearance-none bg-background text-foreground"
                >
                  <option value="" disabled>Alasan untuk menghubungi</option>
                  <option value="konsultasi">Konsultasi Layanan</option>
                  <option value="academy">Informasi TATax Academy</option>
                  <option value="karir">Peluang Karir</option>
                  <option value="lainnya">Lainnya</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="sr-only">Bagaimana kami dapat membantu Anda?</label>
                <textarea 
                  id="message" 
                  rows={5}
                  placeholder="Bagaimana kami dapat membantu Anda?" 
                  className="w-full px-5 py-4 rounded-xl border border-border bg-background text-foreground placeholder-gray-400 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all resize-none"
                ></textarea>
              </div>
              
              <div className="flex justify-end pt-2">
                <button 
                  type="submit" 
                  className="w-full sm:w-auto px-10 py-4 rounded-xl bg-[#f97316] hover:bg-[#ea580c] text-white font-bold transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Kirim Formulir
                </button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
