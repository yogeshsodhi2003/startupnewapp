

export default function Footer() {
  return (
    <footer className="bg-[#ff2969] text-white px-6 py-8 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold uppercase tracking-widest">
            🚀 StartupPulse
          </h3>
          <p className="text-sm mt-2">Breaking news from the world of startups, tech & innovation.</p>
        </div>

        <div className="text-center md:text-right">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Yogesh Sodhi. All rights reserved.
          </p>
          <p className="text-xs">Built with 💖 by GenZ devs for GenZ founders.</p>
        </div>
      </div>
    </footer>
  );
}
