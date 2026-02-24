export default function ProjectsPage() {
  return (
    <section className="flex flex-col gap-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold text-white">Projects</h1>
        <p className="max-w-2xl text-sm leading-6 text-zinc-300">
          Projects will organize autonomous workstreams, including milestones,
          success metrics, and agent assignments. Use this space to plan and
          monitor every initiative across your organization.
        </p>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-lg font-semibold text-white">
          No projects connected yet
        </h2>
        <p className="mt-3 text-sm leading-6 text-zinc-300">
          When project data is connected, you will see timelines, owners, and
          agent status in one place. This view will also highlight blockers and
          suggested next actions.
        </p>
        <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-400">
          <span className="rounded-full border border-white/10 px-3 py-1">
            Roadmaps
          </span>
          <span className="rounded-full border border-white/10 px-3 py-1">
            Milestones
          </span>
          <span className="rounded-full border border-white/10 px-3 py-1">
            Agent owners
          </span>
        </div>
      </div>
    </section>
  );
}
