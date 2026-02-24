export default function DashboardHomePage() {
  return (
    <section className="flex flex-col gap-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold text-white">Dashboard</h1>
        <p className="max-w-2xl text-sm leading-6 text-zinc-300">
          This overview will consolidate active initiatives, agent summaries,
          and critical alerts across the OpenTangl platform. Once connected, it
          will become the daily command center for autonomous development.
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {[
          {
            title: "Active initiatives",
            description:
              "Track projects that are currently being scoped, built, or reviewed by autonomous agents.",
          },
          {
            title: "Recent autonomous runs",
            description:
              "Review the latest execution cycles, completion rates, and artifacts.",
          },
          {
            title: "Upcoming deployments",
            description:
              "See which deliverables are queued for release once validation checks pass.",
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
