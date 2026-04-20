export const RegisterBanner = () => {
  return (
    <section className="bg-[#17b400]">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-[20px] py-[28px]">

        <div>
          <h2 className="text-[20px] font-bold text-white">
            Еще не зарегистрированы?
          </h2>

          <p className="mt-[6px] text-[12px] uppercase text-white">
            НЕ УПУСКАЙТЕ ВОЗМОЖНОСТЬ БЫТЬ ВСЕГДА В КУРСЕ ПОСЛЕДНИХ СОБЫТИЙ В IT РЫНКЕ УЗБЕКИСТАНА
          </p>
        </div>

        <button
          type="button"
          className="rounded-full bg-white px-[24px] py-[10px] text-[12px] font-semibold uppercase text-[#17b400] hover:bg-[#e8ffe1]"
        >
          ЗАРЕГИСТРИРОВАТЬСЯ
        </button>

      </div>
    </section>
  );
};