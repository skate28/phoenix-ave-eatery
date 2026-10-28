import { Phone } from "lucide-react";
import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { container, focusRing } from "@/components/styles";
import { site } from "@/content";
import { cn } from "@/lib/cn";
import { phoneLabel, telHref } from "@/lib/contact";
import { hasAbout } from "@/lib/nav";
import { photoDimensions, storyPhoto } from "@/lib/photos";

/** Guest-check card listing only confirmed basics. Shown when there is no storefront photo. */
function GuestCheck() {
  const tel = telHref(site.phone);
  const number = site.address.street.trim().split(/\s+/)[0] ?? "";
  const lines = [
    ...(site.servesCuisine ?? []).map((label) => ({ label, value: "✓" })),
    site.address.neighborhood.trim() ? { label: site.address.neighborhood.trim(), value: "✓" } : null,
  ].filter((line) => line !== null);

  return (
    <div className="relative mx-auto w-full max-w-[20rem] rotate-1 drop-shadow-[8px_8px_0_var(--fs-ink)] sm:max-w-sm sm:rotate-2">
      <div className="scallop-bottom rounded-t-2xl border-x-[3px] border-t-[3px] border-ink bg-paper pb-10">
        <div className="flex items-center justify-between rounded-t-xl bg-teal px-5 py-3 text-cream">
          <span className="font-display text-sm uppercase tracking-[0.2em]">Guest check</span>
          {/^\d+$/.test(number) && <span className="font-display text-sm tracking-wider">No. {number}</span>}
        </div>
        <div className="px-6 pt-5">
          <p className="font-script text-3xl text-brand">{site.name}</p>
          <ul className="mt-4 space-y-3">
            {lines.map((line) => (
              <li key={line.label} className="flex items-baseline gap-2 border-b-2 border-dashed border-ink/20 pb-2">
                <span className="font-display text-lg uppercase">{line.label}</span>
                <span aria-hidden="true" className="flex-1" />
                <span className="font-display text-xl text-teal">{line.value}</span>
              </li>
            ))}
          </ul>
          {tel && (
            <a href={tel} className={cn("mt-5 inline-flex items-center gap-2 font-display text-lg text-ink hover:text-brand", focusRing)}>
              <Phone className="size-4" aria-hidden="true" />
              {phoneLabel(site.phone)}
            </a>
          )}
          <p className="mt-6 text-center font-script text-2xl text-teal">Thank you!</p>
        </div>
      </div>
    </div>
  );
}

/** "About" block. Hidden when there are no paragraphs. */
export function About() {
  if (!hasAbout()) return null;
  const paragraphs = site.about.paragraphs.map((p) => p.trim()).filter(Boolean);
  const photo = storyPhoto(site.photos);

  return (
    <section id="about" aria-labelledby="about-title" className="relative overflow-hidden border-b-[3px] border-ink bg-paper py-20 sm:py-28">
      <div className={cn(container, "grid items-center gap-14 lg:grid-cols-[1.2fr_1fr]")}>
        <Reveal>
          <SectionHeading
            id="about-title"
            kicker="Pull up a stool"
            title={site.about.heading.trim() || "About"}
          />
          <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-ink/85">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          {photo ? (
            <figure className="mx-auto max-w-md -rotate-2 rounded-3xl border-[3px] border-ink bg-cream p-3 shadow-[8px_8px_0_0_var(--fs-ink)]">
              <Image
                src={photo.src}
                alt={photo.alt}
                {...photoDimensions(photo)}
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="h-auto w-full rounded-2xl object-cover"
              />
            </figure>
          ) : (
            <GuestCheck />
          )}
        </Reveal>
      </div>
    </section>
  );
}
