export default function Problems() {
  const problems = [
    {
      title: "Secure User Access",
      description:
        "Authentication, authorization, and ownership validation to protect user data.",
    },
    {
      title: "Business Rule Enforcement",
      description:
        "Prevent invalid operations before they reach production systems.",
    },
    {
      title: "Production Deployment",
      description:
        "Move applications from local development to cloud-hosted environments.",
    },
    {
      title: "AI-Powered Workflows",
      description:
        "Transform user data into meaningful recommendations and insights.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-12">
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
          What I Solve
        </p>

        <h2 className="text-4xl font-bold mb-4">
          Problems I Help Solve
        </h2>

        <p className="text-gray-600 max-w-2xl">
          Technologies are tools. The real goal is solving
          security, business, deployment, and productivity
          challenges in production systems.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {problems.map((problem) => (
          <div
            key={problem.title}
            className="border rounded-xl p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-3">
              {problem.title}
            </h3>

            <p className="text-gray-600">
              {problem.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}