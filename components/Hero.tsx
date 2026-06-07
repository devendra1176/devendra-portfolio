export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
            Java Backend Developer
          </p>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            I build secure backend systems
            that move from idea to production.
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Focused on security, cloud deployment,
            AI-powered workflows, and engineering
            decisions that solve real business problems.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <span className="border px-3 py-1 rounded-full">
              Spring Boot
            </span>

            <span className="border px-3 py-1 rounded-full">
              AWS
            </span>

            <span className="border px-3 py-1 rounded-full">
              PostgreSQL
            </span>

            <span className="border px-3 py-1 rounded-full">
              Docker
            </span>

            <span className="border px-3 py-1 rounded-full">
              Spring Security
            </span>

            <span className="border px-3 py-1 rounded-full">
              Spring AI
            </span>
          </div>

          <div className="flex gap-4">
            <button className="px-5 py-3 border rounded-lg">
              View Systems
            </button>

            <button className="px-5 py-3 border rounded-lg">
              Resume
            </button>

            <button className="px-5 py-3 border rounded-lg">
              GitHub
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="border rounded-xl p-8">
          <pre className="text-lg leading-8">
{`GitHub
   │
   ▼
GitHub Actions
   │
   ▼
AWS EC2
   │
   ▼
Spring Boot
   │
   ▼
Spring AI
   │
   ▼
PostgreSQL`}
          </pre>
        </div>

      </div>
    </section>
  );
}