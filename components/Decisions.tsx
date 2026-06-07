export default function Decisions() {
  const decisions = [
    {
      problem: "Users could manipulate user IDs and access another user's data.",
      decision: "Identity is derived from JWT instead of trusting client-supplied user IDs.",
      result: "Ownership validation enforced across the application.",
    },
    {
      problem: "Users could assign themselves ADMIN privileges during registration.",
      decision: "Role assignment moved entirely to the server side.",
      result: "Privilege escalation prevented.",
    },
    {
      problem: "Room availability cannot rely on a simple available flag.",
      decision: "Booking overlap validation checks date ranges before reservation.",
      result: "Double bookings prevented.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-12">
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
          Engineering Decisions
        </p>

        <h2 className="text-4xl font-bold mb-4">
          How I Think About Problems
        </h2>

        <p className="text-gray-600 max-w-3xl">
          Technologies are implementation details.
          Engineering decisions determine whether a system
          remains secure, maintainable, and reliable.
        </p>
      </div>

      <div className="grid gap-8">
        {decisions.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl p-8"
          >
            <div className="grid md:grid-cols-3 gap-8">

              <div>
                <p className="text-sm text-gray-500 mb-2">
                  Problem
                </p>

                <p className="font-medium">
                  {item.problem}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-2">
                  Decision
                </p>

                <p className="font-medium">
                  {item.decision}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-2">
                  Result
                </p>

                <p className="font-medium">
                  {item.result}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}