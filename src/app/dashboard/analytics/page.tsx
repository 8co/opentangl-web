export default function AnalyticsPage() {
  return (
    <section className="flex flex-col gap-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold text-white">Analytics</h1>
        <p className="max-w-2xl text-sm leading-6 text-zinc-300">
          Analytics will surface long-term trends across autonomous development,
          including agent reliability, cycle time reduction, and cost savings.
          Customize this view to align with leadership goals.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {[
          {
            title: "Efficiency gains",
            description:
              "Measure how quickly backlog items move from intake to merge.",
          },
          {
            title: "Agent health",
            description:
              "Track reliability scores, validation pass rates, and response time.",
          },
          {
            title: "Deployment impact",
            description:
              "Understand how autonomous changes affect releases and user outcomes.",
          },
          {
            title: "Cost optimization",
            description:
              "Monitor compute usage, run frequency, and ROI metrics.",
          },
        ].map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h2 className="text-lg font-semibold text-white">{card.title}</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-300">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
