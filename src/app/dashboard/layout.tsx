import Link from "next/link";

const navigationItems: { label: string; href: string }[] = [
  { label: "Projects", href: "/dashboard/projects" },
  { label: "Runs", href: "/dashboard/runs" },
  { label: "Analytics", href: "/dashboard/analytics" },
];

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <div className="flex min-h-screen">
        <aside className="flex w-64 flex-col gap-10 border-r border-white/10 bg-white/5 px-6 py-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm font-bold text-black">
              OT
            </div>
            <div>
              <p className="text-sm font-semibold text-white">OpenTangl</p>
              <p className="text-xs text-zinc-400">Autonomous Ops</p>
            </div>
          </div>
          <nav className="flex flex-col gap-2">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-4 py-2 text-sm font-medium text-zinc-200 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto rounded-2xl border border-white/10 bg-black/40 p-4 text-xs text-zinc-400">
            Ship code while you sleep. This dashboard will soon surface agent
            performance, pipeline health, and deployment readiness.
          </div>
        </aside>
        <div className="flex flex-1 flex-col">
          <header className="flex items-center justify-between border-b border-white/10 px-6 py-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                Dashboard
              </p>
              <p className="text-lg font-semibold text-white">
                OpenTangl Control Room
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Workspace: opentangl-demo
            </div>
          </header>
          <main className="flex-1 px-6 py-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
