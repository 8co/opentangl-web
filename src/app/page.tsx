const valueProps: { title: string; description: string }[] = [
  {
    title: "Open-source foundation",
    description:
      "Transparent agents, auditable plans, and a community-driven roadmap.",
  },
  {
    title: "API-first orchestration",
    description:
      "Plug OpenTangl into your stack with composable endpoints and webhooks.",
  },
  {
    title: "Cloud execution",
    description:
      "Run tasks in secure, isolated environments that scale with your backlog.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16 sm:px-10 lg:px-16">
        <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
              OpenTangl
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Autonomous development while you sleep.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-zinc-300">
              OpenTangl coordinates agents, infrastructure, and your roadmap so
              you wake up to merged pull requests and resolved issues.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#waitlist"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-black transition hover:bg-zinc-200"
              >
                Join the waitlist
              </a>
              <a
                href="https://github.com/opentangl"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/5"
              >
                View GitHub
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-white/5 p-6 shadow-2xl">
            <div className="mb-4 flex items-center gap-2 text-xs text-zinc-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              <span className="h-2 w-2 rounded-full bg-rose-400" />
              <span className="ml-2 font-mono">opentangl-demo</span>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/80 p-5 font-mono text-sm leading-6 text-zinc-200">
              <p className="text-zinc-500">$ opentangl run nightly</p>
              <p className="mt-3 text-emerald-300">
                ✓ 8 issues triaged, 4 PRs generated, 3 merged
              </p>
              <p className="text-zinc-300">
                → Deployed build 1921 to preview channel
              </p>
              <p className="text-zinc-500">
                → Summary sent to #engineering at 07:02 AM
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {valueProps.map((prop) => (
            <div
              key={prop.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-semibold text-white">{prop.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                {prop.description}
              </p>
            </div>
          ))}
        </section>

        <section
          id="waitlist"
          className="rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 via-black to-white/5 p-8 sm:p-10"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white">
                Build with OpenTangl early.
              </h2>
              <p className="mt-2 text-sm text-zinc-300">
                Get early access, roadmap updates, and private beta invites.
              </p>
            </div>
            <a
              href="mailto:hello@opentangl.ai"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-black transition hover:bg-zinc-200"
            >
              Request access
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
