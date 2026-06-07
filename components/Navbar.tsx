export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

      <div className="text-xl font-bold">
        Devendra
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm">

        <a href="#systems">Systems</a>

        <a href="#decisions">Decisions</a>

        <a href="#infrastructure">Infrastructure</a>

        <a href="#capabilities">Capabilities</a>

        <a href="#contact">Contact</a>

      </div>

      <div className="flex gap-3">

        <button className="border px-4 py-2 rounded-lg">
          Resume
        </button>

        <button className="border px-4 py-2 rounded-lg">
          GitHub →
        </button>

      </div>

    </nav>
  );
}