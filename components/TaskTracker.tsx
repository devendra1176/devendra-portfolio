export default function TaskTracker() {
  return (
    <section
      id="systems"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      {/* Header */}

      <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">
        Live Production System
      </p>

      <h2 className="text-5xl font-bold mb-4">
        Task Tracker Platform
      </h2>

      <p className="text-gray-400 max-w-3xl mb-8">
        Production-ready task management platform combining
        secure authentication, AI-powered productivity guidance,
        cloud deployment, and automated CI/CD delivery.
      </p>

      <div className="flex flex-wrap gap-4 mb-16">
        <a
          href="https://tasktracker.app.devendra.indevs.in"
          target="_blank"
          rel="noopener noreferrer"
          className="border rounded-lg px-5 py-3 hover:bg-white hover:text-black transition"
        >
          Live Application
        </a>

        <a
          href="https://github.com/devendra1176/task-tracker-api"
          target="_blank"
          rel="noopener noreferrer"
          className="border rounded-lg px-5 py-3 hover:bg-white hover:text-black transition"
        >
          Backend Repo
        </a>

        <a
          href="https://github.com/devendra1176/task-tracker-frontend"
          target="_blank"
          rel="noopener noreferrer"
          className="border rounded-lg px-5 py-3 hover:bg-white hover:text-black transition"
        >
          Frontend Repo
        </a>
      </div>

      {/* Why This System Exists */}

      <div className="border rounded-xl p-8 mb-16">
        <h3 className="text-2xl font-bold mb-4">
          Why This System Exists
        </h3>

        <p className="text-gray-400 leading-8">
          Managing tasks is easy. Managing priorities,
          deadlines, and productivity at scale is difficult.

          <br />
          <br />

          Task Tracker was built to combine secure task
          management with AI-powered productivity guidance
          using authenticated user task data.
        </p>
      </div>

      {/* Architecture + Infrastructure */}

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="border rounded-xl p-8">
          <h3 className="text-xl font-bold mb-6">
            System Architecture
          </h3>

          <pre className="leading-8 text-gray-300">
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

        <div className="border rounded-xl p-8">
          <h3 className="text-xl font-bold mb-6">
            Production Infrastructure
          </h3>

          <pre className="leading-8 text-gray-300">
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

      {/* Engineering Decisions */}

      <h3 className="text-3xl font-bold mb-8">
        Engineering Decisions
      </h3>

      <div className="grid md:grid-cols-3 gap-6 mb-20">

        <div className="border rounded-xl p-6">
          <p className="text-xs uppercase text-gray-500 mb-3">
            Problem
          </p>

          <p className="mb-4">
            Users should never access another user's tasks.
          </p>

          <p className="text-xs uppercase text-gray-500 mb-3">
            Decision
          </p>

          <p className="mb-4">
            Identity is derived from JWT claims instead of
            trusting client-provided user IDs.
          </p>

          <p className="font-semibold">
            ✓ Ownership validation enforced.
          </p>
        </div>

        <div className="border rounded-xl p-6">
          <p className="text-xs uppercase text-gray-500 mb-3">
            Problem
          </p>

          <p className="mb-4">
            Large task lists become difficult to manage.
          </p>

          <p className="text-xs uppercase text-gray-500 mb-3">
            Decision
          </p>

          <p className="mb-4">
            Search, filtering, sorting, and pagination
            were added for scalability.
          </p>

          <p className="font-semibold">
            ✓ Scalable task management experience.
          </p>
        </div>

        <div className="border rounded-xl p-6">
          <p className="text-xs uppercase text-gray-500 mb-3">
            Problem
          </p>

          <p className="mb-4">
            Users struggle to identify priorities.
          </p>

          <p className="text-xs uppercase text-gray-500 mb-3">
            Decision
          </p>

          <p className="mb-4">
            AI analyzes authenticated user task context
            to generate recommendations.
          </p>

          <p className="font-semibold">
            ✓ Personalized productivity guidance.
          </p>
        </div>

      </div>

      {/* Capability Proof */}

      <h3 className="text-3xl font-bold mb-8">
        What This System Demonstrates
      </h3>

      <div className="grid md:grid-cols-3 gap-4">

        <div className="border rounded-xl p-5">
          Authentication & Authorization
        </div>

        <div className="border rounded-xl p-5">
          REST API Design
        </div>

        <div className="border rounded-xl p-5">
          Database Modeling
        </div>

        <div className="border rounded-xl p-5">
          AI Integration
        </div>

        <div className="border rounded-xl p-5">
          Cloud Deployment
        </div>

        <div className="border rounded-xl p-5">
          CI/CD Automation
        </div>

      </div>
    </section>
  );
}