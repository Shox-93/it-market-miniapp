"use client";

import { ChangeEvent, FormEvent, useMemo, useState } from "react";

type FormState = {
  phone: string;
  email: string;
  subject: string;
  message: string;
  pageLink: string;
  file: File | null;
};

type Errors = Partial<Record<keyof Omit<FormState, "file">, string>>;

const initialForm: FormState = {
  phone: "",
  email: "",
  subject: "IT-компании",
  message: "",
  pageLink: "",
  file: null,
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverMessage, setServerMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const fileName = useMemo(
    () => form.file?.name || "Файл не выбран",
    [form.file]
  );

  const handleChange =
    (field: keyof Omit<FormState, "file">) =>
    (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      const value = event.target.value;

      setForm((prev) => ({
        ...prev,
        [field]: value,
      }));

      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));

      setServerMessage("");
    };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;

    setForm((prev) => ({
      ...prev,
      file: selectedFile,
    }));

    setServerMessage("");
  };

  const validate = () => {
    const nextErrors: Errors = {};

    if (!form.phone.trim()) {
      nextErrors.phone = "Введите номер телефона";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Введите электронную почту";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Введите корректный email";
    }

    if (!form.subject.trim()) {
      nextErrors.subject = "Выберите цель обращения";
    }

    if (!form.message.trim()) {
      nextErrors.message = "Введите текст обращения";
    } else if (form.message.trim().length < 10) {
      nextErrors.message = "Сообщение должно быть не короче 10 символов";
    }

    if (form.pageLink.trim()) {
      try {
        new URL(form.pageLink);
      } catch {
        nextErrors.pageLink = "Введите корректную ссылку";
      }
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const resetForm = () => {
    setForm(initialForm);
    setErrors({});
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSuccess(false);
    setServerMessage("");

    if (!validate()) return;

    try {
      setIsSubmitting(true);

      const payload = new FormData();
      payload.append("phone", form.phone);
      payload.append("email", form.email);
      payload.append("subject", form.subject);
      payload.append("message", form.message);
      payload.append("pageLink", form.pageLink);

      if (form.file) {
        payload.append("file", form.file);
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        body: payload,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Ошибка при отправке формы");
      }

      setIsSuccess(true);
      setServerMessage("Форма успешно отправлена");
      resetForm();
    } catch (error) {
      setIsSuccess(false);
      setServerMessage(
        error instanceof Error ? error.message : "Произошла ошибка"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-[20px] bg-white px-9 py-7">
      <h2 className="mb-6 text-[24px] font-bold leading-[1.2] text-[#1e2d3d]">
        Для связи с администратором портала
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="contact-phone"
            className="mb-2 block text-[14px] font-bold text-[#1e2d3d]"
          >
            Ваш номер телефона*
          </label>
          <input
            id="contact-phone"
            type="text"
            value={form.phone}
            onChange={handleChange("phone")}
            className="h-11 w-full rounded-[10px] border border-[#cfd8e3] bg-white px-4 text-[14px] text-[#222] outline-none transition focus:border-[#42d315]"
          />
          {errors.phone && (
            <p className="mt-2 text-[13px] text-red-500">{errors.phone}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="mb-2 block text-[14px] font-bold text-[#1e2d3d]"
          >
            Ваша электронная почта*
          </label>
          <input
            id="contact-email"
            type="email"
            value={form.email}
            onChange={handleChange("email")}
            className="h-11 w-full rounded-[10px] border border-[#cfd8e3] bg-white px-4 text-[14px] text-[#222] outline-none transition focus:border-[#42d315]"
          />
          {errors.email && (
            <p className="mt-2 text-[13px] text-red-500">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-subject"
            className="mb-2 block text-[14px] font-bold text-[#1e2d3d]"
          >
            Выберите цель обращения*
          </label>
          <select
            id="contact-subject"
            value={form.subject}
            onChange={handleChange("subject")}
            className="h-11 w-full rounded-[10px] border border-[#cfd8e3] bg-white px-4 text-[14px] text-[#707070] outline-none transition focus:border-[#42d315]"
          >
            <option>IT-компании</option>
            <option>Специалисты</option>
            <option>Вакансии</option>
            <option>Заказы</option>
          </select>
          {errors.subject && (
            <p className="mt-2 text-[13px] text-red-500">{errors.subject}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="mb-2 block text-[14px] font-bold text-[#1e2d3d]"
          >
            Текст обращения*
          </label>
          <textarea
            id="contact-message"
            rows={6}
            value={form.message}
            onChange={handleChange("message")}
            className="h-37.5 w-full resize-none rounded-[10px] border border-[#cfd8e3] bg-white px-4 py-3 text-[14px] text-[#222] outline-none transition focus:border-[#42d315]"
          />
          {errors.message && (
            <p className="mt-2 text-[13px] text-red-500">{errors.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-link"
            className="mb-2 block text-[14px] font-bold text-[#1e2d3d]"
          >
            Ссылка на страницу компании/специалиста/вакансии/заказа
          </label>
          <input
            id="contact-link"
            type="text"
            value={form.pageLink}
            onChange={handleChange("pageLink")}
            className="h-11 w-full rounded-[10px] border border-[#cfd8e3] bg-white px-4 text-[14px] text-[#222] outline-none transition focus:border-[#42d315]"
          />
          {errors.pageLink && (
            <p className="mt-2 text-[13px] text-red-500">{errors.pageLink}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-file"
            className="mb-2 block text-[14px] font-bold text-[#1e2d3d]"
          >
            Прикрепить файл
          </label>

          <label className="flex h-11 cursor-pointer overflow-hidden rounded-[10px] border border-[#cfd8e3]">
            <div className="flex flex-1 items-center px-4 text-[14px] text-[#7a7a7a]">
              {fileName}
            </div>

            <div className="flex items-center border-l border-[#cfd8e3] bg-[#f5f5f5] px-5 text-[14px] text-[#222]">
              Browse
            </div>

            <input
              id="contact-file"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        </div>

        <div className="flex h-19.5 w-76 items-center justify-between rounded-sm border border-[#d9d9d9] bg-[#f9f9f9] px-3">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 border border-[#8f8f8f] bg-white" />
            <span className="text-[14px] text-[#222]">Я не робот</span>
          </div>

          <div className="text-right">
            <div className="mb-1 flex justify-end">
              <div className="h-8 w-8 rounded-sm bg-[#4285f4]" />
            </div>
            <p className="text-[8px] leading-none text-[#777]">reCAPTCHA</p>
            <p className="mt-1 text-[7px] leading-none text-[#999]">
              Конфиденциальность • Условия использования
            </p>
          </div>
        </div>

        {serverMessage && (
          <div
            className={`rounded-lg px-4 py-3 text-[14px] ${
              isSuccess
                ? "bg-green-50 text-green-700"
                : "bg-red-50 text-red-600"
            }`}
          >
            {serverMessage}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex h-10.5 items-center justify-center rounded-full bg-[#43d61c] px-8 text-[14px] font-bold text-white transition hover:bg-[#39bd18] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Отправка..." : "Отправить"}
        </button>
      </form>
    </div>
  );
}