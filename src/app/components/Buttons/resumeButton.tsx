export default function ResumeButton() {
    return (
      <a
        href="/resume.pdf" // Replace with your actual resume file path
        download="RESUME.pdf"
        className="relative px-4 py-2 text-white bg-black rounded-2xl overflow-hidden group flex justify-center items-center h-8 w-32"
      >
        {/* Default text (Moves up & rotates naturally on hover) */}
        <span className="absolute transition-all duration-500 ease-out group-hover:-translate-y-6 group-hover:-rotate-12 group-hover:opacity-0">
          Resume
        </span>
  
        {/* Hover text (Comes in from below with smooth rotation) */}
        <span className="absolute transition-all duration-500 ease-out translate-y-6 rotate-12 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:rotate-0">
          Download
        </span>
      </a>
    );
  }
  