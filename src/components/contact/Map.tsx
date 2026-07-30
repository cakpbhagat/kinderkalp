export default function ContactMap() {
  return (
    <section className="bg-[#fbf9f4] pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[32px] shadow-xl">
          <iframe
            title="Kinder Kalp Preschool & Daycare location"
            src="https://www.google.com/maps?q=Kinder+Kalp+Preschool+%26+Daycare,+Ghod+Dod+Road,+Surat+395001&output=embed"
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}