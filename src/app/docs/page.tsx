const tableOfContents: { title: string; href: string }[] = [
  { title: "Getting Started", href: "#getting-started" },
  { title: "Configuration", href: "#configuration" },
  { title: "How Autopilot Works", href: "#how-autopilot-works" },
];

const sampleConfig = `project:
  name: "acme-platform"
  repo: "github.com/acme/platform"

agents:
  - role: "triage"
    focus: ["bugs", "regressions"]
  - role: "builder"
    focus: ["features", "tests"]

notifications:
  slack:
    channel: "#engineering"
    summary_at: "07:00"
`;

const cliExample = `# Run OpenTangl nightly with autopilot
opentangl run autopilot --config ./opentangl.yml --notify slack
`;

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 py-16 sm:px-10 lg:px-16">
        <header className="flex flex-col gap-4">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
            Docs
          </div>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            OpenTangl Documentation
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-300">
            Learn how to onboard, configure, and run OpenTangl with confidence.
            This quickstart covers the essentials so your teams can ship with
            autonomous agents from day one.
          </p>
          <a
            href="https://github.com/opentangl"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/5"
          >
            View on GitHub
          </a>
        </header>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-semibold text-white">
            Table of contents
          </h2>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-zinc-300">
            {tableOfContents.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition hover:text-white"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="getting-started"
          className="rounded-2xl border border-white/10 bg-black/40 p-8"
        >
          <h2 className="text-2xl font-semibold text-white">Getting Started</h2>
          <p className="mt-3 text-sm leading-7 text-zinc-300">
            Install the OpenTangl CLI, authenticate with your workspace, and run
            your first autopilot session. The agent coordinator will scan your
            backlog, prioritize work, and prepare execution plans based on your
            configuration and permissions.
          </p>
          <p className="mt-4 text-sm leading-7 text-zinc-300">
            Keep your repository connected and ensure your CI credentials are
            available so OpenTangl can open pull requests and validate changes
            automatically.
          </p>
        </section>

        <section
          id="configuration"
          className="rounded-2xl border border-white/10 bg-black/40 p-8"
        >
          <h2 className="text-2xl font-semibold text-white">Configuration</h2>
          <p className="mt-3 text-sm leading-7 text-zinc-300">
            The configuration file defines which agents run, what they focus on,
            and how updates are delivered. Store it in your repo root and keep it
            versioned alongside your roadmap.
          </p>
          <div className="mt-6 rounded-xl border border-white/10 bg-black/80 p-5 font-mono text-sm leading-6 text-zinc-200">
            <pre className="whitespace-pre-wrap">{sampleConfig}</pre>
          </div>
        </section>

        <section
          id="how-autopilot-works"
          className="rounded-2xl border border-white/10 bg-black/40 p-8"
        >
          <h2 className="text-2xl font-semibold text-white">
            How Autopilot Works
          </h2>
          <p className="mt-3 text-sm leading-7 text-zinc-300">
            Autopilot sessions start by ingesting your issue tracker and recent
            deployment telemetry. OpenTangl assigns agents to craft a plan,
            execute changes in isolated sandboxes, and validate outcomes with
            your CI pipeline.
          </p>
          <p className="mt-4 text-sm leading-7 text-zinc-300">
            When the run completes, the system publishes a summary and opens
            pull requests for review or auto-merge based on your policy.
          </p>
          <div className="mt-6 rounded-xl border border-white/10 bg-black/80 p-5 font-mono text-sm leading-6 text-zinc-200">
            <pre className="whitespace-pre-wrap">{cliExample}</pre>
          </div>
        </section>
      </main>
    </div>
  );
}
