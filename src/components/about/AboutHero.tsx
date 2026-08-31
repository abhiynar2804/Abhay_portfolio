import { useInView } from '../../hooks/useInView';
import about_img from '../../assets/my_pic.jpeg'; // Update this path to your desired image

export default function AboutHero() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className={`pt-10 pb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        {/* Left Side: Text Content */}
        <div className="flex-1">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#c305f8] bg-[#c305f8]/10 border border-[#c305f8]/20 px-4 py-1.5 rounded-full mb-6">
            About Me
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">
            Who I <span className="bg-gradient-to-r from-[#da7c25] to-[#b923e1] bg-clip-text text-transparent">Am</span>
          </h1>

          <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
            <p>
              I&apos;m a <strong className="text-white">Computer Science undergrad</strong> who enjoys turning complex problems into simple, elegant code. I don&apos;t just write software — I craft experiences that are fast, accessible, and genuinely useful.
            </p>
            <p>
              Right now, I&apos;m deep in the world of <strong className="text-white">full-stack development</strong>. I love the entire process: sketching out a database schema, building a clean API, and then polishing the frontend until it feels right.
            </p>
            <p>
              When I&apos;m not coding, I&apos;m usually solving problems on LeetCode, reading engineering blogs, or breaking down how popular apps are built. I&apos;m actively preparing for <strong className="text-white">software engineering roles</strong> and looking for opportunities where I can learn from great engineers while shipping real features.
            </p>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-[40%] flex justify-center shrink-0">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#da7c25] to-[#b923e1] rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
            <img
              src={about_img}
              alt="Abhay Narkhede"
              className="relative w-[260px] h-[320px] sm:w-[300px] sm:h-[360px] object-cover rounded-2xl border border-[#b923e1]/30 shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}