import { site } from "@/content";
import { menuView } from "@/lib/menu";

/** Red ticker under the hero. Menu categories when a menu exists, else confirmed basics. */
export function Marquee() {
  const categories = menuView(site).map((category) => category.name);
  const words = (
    categories.length > 0
      ? categories
      : [...(site.servesCuisine ?? []), site.address.neighborhood, site.address.street, site.phone.display]
  )
    .map((word) => word.trim())
    .filter(Boolean);
  if (words.length === 0) return null;
  const row = [...words, ...words, ...words];

  return (
    <div aria-hidden="true" className="overflow-hidden border-b-[3px] border-ink bg-brand py-3 text-cream">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center">
            {row.map((word, index) => (
              <li key={`${copy}-${index}`} className="flex items-center whitespace-nowrap font-display text-xl uppercase tracking-wide sm:text-2xl">
                <span className="px-6">{word}</span>
                <span className="text-mustard">✶</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
