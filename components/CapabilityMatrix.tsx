export default function CapabilityMatrix() {
  const capabilities = [
    {
      capability: "Authentication & Authorization",
      evidence: "JWT Authentication, RBAC",
      proof: "Task Tracker + Hotel Management",
    },
    {
      capability: "REST API Design",
      evidence: "Layered Architecture, DTO Pattern",
      proof: "Both Systems",
    },
    {
      capability: "Database Design",
      evidence: "PostgreSQL, JPA, Hibernate",
      proof: "Both Systems",
    },
    {
      capability: "Business Rule Validation",
      evidence: "Booking Engine, Ownership Validation",
      proof: "Hotel Management",
    },
    {
      capability: "AI Integration",
      evidence: "Spring AI Productivity Assistant",
      proof: "Task Tracker",
    },
    {
      capability: "Cloud Deployment",
      evidence: "AWS EC2, Nginx, HTTPS",
      proof: "Task Tracker",
    },
    {
      capability: "CI/CD Automation",
      evidence: "GitHub Actions Pipeline",
      proof: "Task Tracker",
    },
    {
      capability: "Testing",
      evidence: "JUnit, Mockito",
      proof: "Hotel Management",
    },
    {
      capability: "API Documentation",
      evidence: "Swagger/OpenAPI",
      proof: "Hotel Management",
    },
  ];

  return (
    <section
      id="capabilities"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">
        Capability Matrix
      </p>

      <h2 className="text-4xl font-bold mb-4">
        What I Can Deliver
      </h2>

      <p className="text-gray-400 max-w-3xl mb-12">
        Every capability below is backed by a real system,
        production implementation, or engineering decision.
      </p>

      <div className="overflow-x-auto border rounded-xl">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="p-4">Capability</th>
              <th className="p-4">Evidence</th>
              <th className="p-4">Proven In</th>
            </tr>
          </thead>

          <tbody>
            {capabilities.map((item, index) => (
              <tr
                key={index}
                className="border-b last:border-b-0"
              >
                <td className="p-4 font-medium">
                  {item.capability}
                </td>

                <td className="p-4 text-gray-400">
                  {item.evidence}
                </td>

                <td className="p-4 text-gray-400">
                  {item.proof}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}