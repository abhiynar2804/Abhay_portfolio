import { useState } from "react";
import type { FormEvent } from "react";

type SubmitStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20">
      {/* Heading */}
      <section className="mb-14">
        <h1 className="relative inline-block text-3xl font-extrabold tracking-tight text-white md:text-4xl">
          Let&apos;s Work Together
          <span className="absolute -bottom-2 left-0 h-[3px] w-12 rounded-full bg-gradient-to-r from-[#da7c25] to-[#b923e1]" />
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg">
          Have a project idea, opportunity, or just want to talk tech?
          Feel free to reach out. I&apos;d love to hear from you.
        </p>
      </section>

      {/* Contact content */}
      <section className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        {/* Contact information */}
        <div>
          <h2 className="mb-6 text-2xl font-bold text-white">
            Get in touch
          </h2>

          <p className="mb-8 max-w-md leading-relaxed text-neutral-400">
            Whether it&apos;s about a project, collaboration, internship,
            or something interesting you want to discuss, you can reach me
            through the form or directly using the links below.
          </p>

          <div className="space-y-5">
            <a
              href="mailto:abhiforbusiness2804@gmail.com"
              className="block text-neutral-300 transition-colors hover:text-white"
            >
              <span className="mb-1 block text-sm text-neutral-500">
                Email
              </span>
              abhiforbusiness2804@gmail.com
            </a>

            <a
              href="https://github.com/abhiynar2804"
              target="_blank"
              rel="noreferrer"
              className="block text-neutral-300 transition-colors hover:text-white"
            >
              <span className="mb-1 block text-sm text-neutral-500">
                GitHub
              </span>
              github.com/abhiynar2804
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="block text-neutral-300 transition-colors hover:text-white"
            >
              <span className="mb-1 block text-sm text-neutral-500">
                LinkedIn
              </span>
              LinkedIn
            </a>

            <div className="block text-neutral-300">
              <span className="mb-1 block text-sm text-neutral-500">
                Location
              </span>
              Maharashtra, India
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8"
        >
          <div className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-neutral-300"
              >
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Enter your name"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition focus:border-[#b923e1]/70"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-neutral-300"
              >
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition focus:border-[#b923e1]/70"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-neutral-300"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="What would you like to discuss?"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition focus:border-[#b923e1]/70"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-neutral-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={7}
                placeholder="Write your message..."
                className="w-full resize-y rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition focus:border-[#b923e1]/70"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-full border-2 border-[#b923e1] px-8 py-3 font-medium text-white transition hover:border-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send Message →"}
            </button>

            {status === "success" && (
              <p className="text-sm text-green-400">
                Message sent successfully. Thanks for reaching out!
              </p>
            )}

            {status === "error" && (
              <p className="text-sm text-red-400">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        </form>
      </section>
    </main>
  );
}