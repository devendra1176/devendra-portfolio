export default function TaskTracker() {
  return (
    <section
      id="systems"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <div className="mb-12">
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
          Live Production System
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-10">

  <div className="border rounded-xl p-6">
    <p className="text-sm uppercase tracking-wider text-gray-500 mb-3">
      Problem
    </p>

    <h3 className="text-xl font-semibold mb-3">
      Managing tasks is easy.
      Prioritizing work is difficult.
    </h3>

    <p className="text-gray-400">
      Users often struggle to identify overdue work,
      understand priorities, and maintain productivity
      as task lists grow.
    </p>
  </div>

  <div className="border rounded-xl p-6">
    <p className="text-sm uppercase tracking-wider text-gray-500 mb-3">
      Solution
    </p>

    <h3 className="text-xl font-semibold mb-3">
      AI-assisted task management.
    </h3>

    <p className="text-gray-400">
      Built a secure platform combining authentication,
      personalized task management, productivity insights,
      and AI-powered recommendations.
    </p>
  </div>

</div>

<div className="mt-20">

  <h3 className="text-3xl font-bold mb-8">
    Key Engineering Decisions
  </h3>

  <div className="grid md:grid-cols-3 gap-6">

    <div className="border rounded-xl p-6">
      <p className="text-sm text-gray-500 mb-2">
        Problem
      </p>

      <p className="font-semibold mb-4">
        Users should never access another user's tasks.
      </p>

      <p className="text-sm text-gray-500 mb-2">
        Decision
      </p>

      <p className="mb-4">
        Identity derived from JWT token instead of
        trusting client-provided user IDs.
      </p>

      <p className="text-sm text-gray-500 mb-2">
        Result
      </p>

      <p>
        User-level data ownership enforced.
      </p>
    </div>

    <div className="border rounded-xl p-6">
      <p className="text-sm text-gray-500 mb-2">
        Problem
      </p>

      <p className="font-semibold mb-4">
        Large task lists become difficult to manage.
      </p>

      <p className="text-sm text-gray-500 mb-2">
        Decision
      </p>

      <p className="mb-4">
        Search, filtering, sorting, and pagination
        built into task APIs.
      </p>

      <p className="text-sm text-gray-500 mb-2">
        Result
      </p>

      <p>
        Scalable task management experience.
      </p>
    </div>

    <div className="border rounded-xl p-6">
      <p className="text-sm text-gray-500 mb-2">
        Problem
      </p>

      <p className="font-semibold mb-4">
        Users struggle to identify priorities.
      </p>

      <p className="text-sm text-gray-500 mb-2">
        Decision
      </p>

      <p className="mb-4">
        AI assistant analyzes task context and deadlines.
      </p>

      <p className="text-sm text-gray-500 mb-2">
        Result
      </p>

      <p>
        Personalized productivity guidance.
      </p>
    </div>

  </div>

</div>

        <h2 className="text-4xl font-bold mb-4">
          Task Tracker Platform
        </h2>

        <p className="text-gray-400 max-w-3xl">
          A secure task management platform combining authentication,
          productivity workflows, cloud deployment, and AI-powered
          recommendations for individual users.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Architecture */}
        <div className="border rounded-xl p-8">
          <h3 className="font-semibold mb-6">
            System Architecture
          </h3>

          <pre className="leading-8 text-sm">
{`React Frontend
      │
      ▼
JWT Authentication
      │
      ▼
Spring Security
      │
      ▼
Spring Boot APIs
      │
      ▼
Spring AI
      │
      ▼
PostgreSQL`}
          </pre>
        </div>

        {/* Production */}
        <div className="border rounded-xl p-8">
          <h3 className="font-semibold mb-6">
            Production Infrastructure
          </h3>

          <pre className="leading-8 text-sm">
{`GitHub
   │
   ▼
GitHub Actions
   │
   ▼
Docker Build
   │
   ▼
AWS EC2
   │
   ▼
Nginx
   │
   ▼
HTTPS Domain`}
          </pre>
        </div>

      </div>
    </section>
  );
}