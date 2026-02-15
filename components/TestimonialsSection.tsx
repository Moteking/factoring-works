const testimonials = [
  {
    tags: ['製造業', '法人', '301〜500万円'],
    text: '手数料5%で30分後に入金されました。銀行融資の審査待ちをせずに済み、急な設備投資に間に合いました。',
  },
  {
    tags: ['建設業', '個人事業主', '101〜300万円'],
    text: 'フリーランスでも利用できました。手数料7%、3時間で入金。外注費の支払いに間に合い本当に助かりました。',
  },
  {
    tags: ['IT業', '法人', '501万円以上'],
    text: '複数社を比較できたので、最安の手数料6%で契約できました。2時間で入金され、給与支払いに間に合いました。',
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-[var(--navy)] text-center mb-12 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-[var(--primary)] after:mx-auto after:mt-4 after:rounded">
          お客様の声
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-md relative before:content-['"'] before:absolute before:top-4 before:left-6 before:text-6xl before:text-[var(--primary)] before:opacity-20"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {testimonial.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="bg-[var(--light-gray)] text-[var(--gray)] px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-[var(--gray)] leading-relaxed italic">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
