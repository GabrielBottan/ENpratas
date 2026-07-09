"use client";

import { useState, type FormEvent } from "react";

export default function Newsletter() {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section className="bg-panel">
      <div className="mx-auto max-w-[960px] px-5 py-12 text-center md:px-6">
        <h2 className="m-0 mb-5 font-serif text-[26px] font-semibold text-ink md:text-[28px]">
          Receba as novidades em primeira mão
        </h2>
        {sent ? (
          <p className="font-serif text-[18px] italic text-wine">
            Obrigado! Em breve você recebe nossas novidades.
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="flex flex-wrap justify-center gap-2.5"
          >
            <input
              required
              placeholder="Nome"
              aria-label="Nome"
              className="min-w-[180px] flex-1 border border-line-strong bg-white px-4 py-3 text-[14px] text-ink outline-none"
            />
            <input
              required
              type="email"
              placeholder="E-mail"
              aria-label="E-mail"
              className="min-w-[180px] flex-1 border border-line-strong bg-white px-4 py-3 text-[14px] text-ink outline-none"
            />
            <button
              type="submit"
              className="bg-dark px-9 py-3 text-[12px] uppercase tracking-[0.16em] text-[#f6ede3] transition-colors hover:bg-wine"
            >
              Cadastrar
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
