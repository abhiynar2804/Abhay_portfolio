import { FileText, Download } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

export default function Resume() {
  const { ref, isInView } = useInView();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Abhay_Resume.pdf';
    link.download = 'Abhay_Resume.pdf';
    link.click();
  };

  return (
    <section
      ref={ref}
      className={`py-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="bg-gradient-to-br from-[#da7c25]/10 to-[#b923e1]/5 border border-[#b923e1]/20 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#c305f8]/10 text-[#c305f8] shrink-0">
            <FileText size={32} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">My Resume</h2>
            <p className="text-gray-400 text-sm">
              A detailed overview of my skills, experience, and education.<br />
              Last updated: <strong className="text-white">August 2026</strong>
            </p>
          </div>
        </div>

        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#da7c25] to-[#b923e1] text-white font-bold text-sm hover:scale-105 transition-transform duration-300 shrink-0"
        >
          <Download size={18} />
          <span>Download Resume</span>
        </button>
      </div>
    </section>
  );
}