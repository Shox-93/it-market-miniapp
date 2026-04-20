import Link from "next/link";
import ContactInfo from "./contact-info";
import ContactForm from "./contact-form";

export default function ContactsSection() {
  return (
    <main className="min-h-screen bg-[#f3f3f3]">
      <section className="bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
        <div className="mx-auto max-w-240 px-6 pt-5 pb-7">
          <div className="mb-4 flex items-center gap-2 text-[12px] text-[#8f96a3]">
            <Link href="/" className="text-[#42d315]">
              Главная
            </Link>
            <span>/</span>
            <span>Связаться с нами</span>
          </div>

          <h1 className="text-[42px] font-extrabold leading-[1.1] text-[#1e2d3d]">
            Контакты и обратная связь
          </h1>

          <p className="mt-3 text-[13px] font-bold uppercase tracking-[0.3px] text-[#8a8f98]">
            СВЯЖИТЕСЬ С НАМИ, ЕСЛИ У ВАС ЕСТЬ ВОПРОСЫ ИЛИ КОММЕНТАРИИ
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-240 px-6 py-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[330px_1fr]">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </main>
  );
}