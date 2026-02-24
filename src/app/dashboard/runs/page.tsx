export default function RunsPage() {
  return (
    <section className="flex flex-col gap-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold text-white">Runs</h1>
        <p className="max-w-2xl text-sm leading-6 text-zinc-300">
          Runs will capture each autonomous execution cycle, including tasks
          completed, artifacts produced, and validation results. This is where
          you will review performance and diagnostics.
        </p>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-lg font-semibold text-white">
          Execution history coming soon
        </h2>
        <p className="mt-3 text-sm leading-6 text-zinc-300">
          Once runs are recorded, you will be able to filter by agent,
          environment, and confidence level, with links to pull requests and
          deployment logs.
        </p>
        <ul className="mt-4 space-y-2 text-sm text-zinc-300">
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Completion rate and duration metrics
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            Validation status and review outcomes
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-rose-400" />
            Linked artifacts and deployment previews
          </li>
        </ul>
      </div>
    </section>
  );
}
