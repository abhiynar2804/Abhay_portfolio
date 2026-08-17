import { User, Code2, BookOpen } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const cards = [
  {
    icon: User,
    title: 'About Me',
    description: 'Final Year CSE Student Software Engineering & Full Stack',
    buttonText: 'Know Me',
    href: '/about',
  },
  {
    icon: Code2,
    title: 'Full Stack Developer',
    description: 'React \u2022 Next.js \u2022 Node.js \u2022 PostgreSQL \n Building scalable full-stack web applications.',
    buttonText: 'See Projects',
    href: '/projects',
  },
  {
    icon: BookOpen,
    title: 'Latest Blog',
    description: 'Rebuilding My Portfolio with React & TypeScript',
    buttonText: 'Read Blog',
    href: '/blog',
  },
];

export default function OverviewCards() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className={`w-full flex justify-center px-4 sm:px-5 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-5xl">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group flex flex-col gap-4 p-6 sm:p-8 rounded-2xl border border-neutral-800 bg-neutral-900/60 hover:border-[#b415ff]/50 hover:bg-neutral-900/80 transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#b415ff]/10 text-[#b415ff]">
                <card.icon size={22} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                {card.title}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed whitespace-pre-line">
              {card.description}
            </p>

            <a
              href={card.href}
              className="mt-auto inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 rounded-full border-2 border-[#b415ff] text-sm font-medium text-white hover:bg-[#b415ff] hover:text-white transition-all duration-300"
            >
              {card.buttonText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
