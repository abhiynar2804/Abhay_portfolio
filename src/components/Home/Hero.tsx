import profile_img from '../../assets/my_pic.jpeg';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="flex flex-col items-center gap-5 px-4 sm:px-5 w-full">
      {/* Profile Photo & Status Badge */}
      <div className="relative w-[200px] mx-auto my-0">
        <div className="sm:hidden static sm:absolute -top-3 sm:right-[-185px] sm:left-auto mb-4 sm:mb-0 flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-500 text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap z-10">
          <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" />
          Available for Internships
        </div>
        <img 
          src={profile_img} 
          alt="Abhay Narkhede" 
          className="w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] rounded-[40%] block object-fill mx-auto" 
        />
      </div>

      {/* Titles */}
      <div className="flex flex-col items-center text-center">
        <h1 className="w-full text-center font-semibold text-2xl sm:text-4xl md:text-[48px] leading-tight md:leading-none">
          Hi, <span className="bg-[linear-gradient(270deg,#df8908_10%,#b415ff_100%)] bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">I&apos;m Abhay Narkhede</span>
        </h1>
        <h2 className="text-sm sm:text-base md:text-lg text-neutral-400 mt-2 font-medium">
          Full Stack Developer | React • Next.js • Node.js • PostgreSQL
        </h2>
      </div>

      {/* Description */}
      <p className="w-full sm:w-[85%] lg:w-[55%] text-center text-sm sm:text-lg md:text-[21px] leading-5 sm:leading-6 md:leading-[27px] text-neutral-300">
        B.Tech Computer Science student passionate about building scalable web applications. Currently developing a Placement & Internship Management Platform while strengthening Data Structures & Algorithms for software engineering roles.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-base sm:text-xl md:text-[24px] font-medium flex-wrap mb-8 sm:mb-0 w-full sm:w-auto">
        <div 
          onClick={() => scrollToSection('contact')}
          className="w-full sm:w-auto text-center px-8 sm:px-[50px] py-3 sm:py-[18px] rounded-full border-2 border-[#b415ff] cursor-pointer transition-colors duration-300 hover:border-white text-inherit"
        >
          View Projects 📂
        </div>
        <div 
          onClick={() => scrollToSection('resume')}
          className="w-full sm:w-auto text-center px-8 sm:px-[50px] py-3 sm:py-[18px] rounded-full border-2 border-[#b415ff] cursor-pointer transition-colors duration-300 hover:border-white text-inherit"
        >
          My Resume 📄
        </div>
      </div>
    </section>
  );
}
