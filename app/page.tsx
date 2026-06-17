import { InstallTabs } from "@/components/InstallTabs";
import { Faq } from "@/components/Faq";
import { CopyButton } from "@/components/CodeBlock";
import { ICONS } from "@/components/icons";
import { FEATURES, STEPS, SSE_URL } from "@/lib/configs";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      {/* ---------- Nav ---------- */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-brand to-brand-2 font-mono text-sm text-[#07070b]">
              &lt;/&gt;
            </span>
            Htmly
          </a>
          <div className="hidden items-center gap-8 text-sm text-muted md:flex">
            <a href="#how" className="transition hover:text-ink">How it works</a>
            <a href="#install" className="transition hover:text-ink">Install</a>
            <a href="#faq" className="transition hover:text-ink">FAQ</a>
          </div>
          <a
            href="#install"
            className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-[#07070b] transition hover:opacity-90"
          >
            Add the server
          </a>
        </nav>
      </header>

      {/* ---------- Hero ---------- */}
      <section id="top" className="relative">
        <div className="glow pointer-events-none absolute inset-0 -z-10" />
        <div className="grid-bg pointer-events-none absolute inset-0 -z-10 h-[600px]" />
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 text-center md:pt-28">
          <a
            href="https://modelcontextprotocol.io"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs text-muted transition hover:border-brand hover:text-ink"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-2" />
            An MCP server for AI agents
          </a>

          <h1 className="mx-auto mt-7 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Let your AI render real web pages,{" "}
            <span className="bg-gradient-to-r from-brand to-brand-2 bg-clip-text text-transparent">
              not just describe them
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted md:text-lg">
            Htmly is a hosted MCP server. Your AI writes HTML/CSS/JS, pushes it
            through one tool, and instantly gets back a live preview link — no
            install, no local server, just a URL.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#install"
              className="w-full rounded-full bg-gradient-to-r from-brand to-brand-2 px-7 py-3.5 text-sm font-semibold text-[#07070b] transition hover:opacity-90 sm:w-auto"
            >
              Add Htmly in 1 minute →
            </a>
            <a
              href="#how"
              className="w-full rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-ink transition hover:border-brand sm:w-auto"
            >
              See how it works
            </a>
          </div>

          {/* Hero visual: a connect snippet */}
          <div className="mx-auto mt-14 max-w-2xl text-left">
            <div className="overflow-hidden rounded-2xl border border-border bg-bg-soft shadow-2xl shadow-brand/5">
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
                <span className="ml-3 font-mono text-xs text-muted">
                  claude_desktop_config.json
                </span>
              </div>
              <pre className="overflow-x-auto px-5 py-5 font-mono text-sm leading-relaxed text-ink">
{`{
  "mcpServers": {
    "htmly": {
      "url": "`}<span className="text-brand-2">{SSE_URL}</span>{`"
    }
  }
}`}
              </pre>
              <div className="flex items-center justify-between border-t border-border px-4 py-3">
                <span className="font-mono text-xs text-muted">Tool exposed: render_files</span>
                <CopyButton text={SSE_URL} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Social proof / trust bar ---------- */}
      <section className="border-y border-border bg-bg-soft/40">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-6 text-center text-sm text-muted">
          <span>Works with</span>
          {["Claude Desktop", "Claude Code", "Cursor", "VS Code", "Any MCP client"].map((c) => (
            <span key={c} className="font-medium text-ink/80">{c}</span>
          ))}
        </div>
      </section>

      {/* ---------- What is it (simple words) ---------- */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-brand">
          In simple words
        </h2>
        <p className="mt-5 text-2xl font-medium leading-snug tracking-tight md:text-3xl">
          AI is great at writing code, but it can&apos;t <em className="not-italic text-muted">show</em> you
          the result. Htmly is the missing screen — it takes the web page your
          assistant just wrote and{" "}
          <span className="text-brand-2">puts it online instantly</span> so you can
          click and look.
        </p>
      </section>

      {/* ---------- Features ---------- */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => {
            const Icon = ICONS[f.icon];
            return (
              <div
                key={f.title}
                className="rounded-2xl border border-border bg-card p-6 transition hover:border-brand/50"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand/20 to-brand-2/20 text-brand-2">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------- How it works ---------- */}
      <section id="how" className="border-t border-border bg-bg-soft/30">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              How it works
            </h2>
            <p className="mx-auto mt-3 max-w-md text-muted">
              Three steps from connecting the server to a live page.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="relative rounded-2xl border border-border bg-card p-7">
                <span className="font-mono text-3xl font-bold text-brand/30">{s.n}</span>
                <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Install (multiple ways) ---------- */}
      <section id="install" className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Add Htmly your way
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted">
            Same one-line endpoint, five different clients. Pick yours, copy the
            config, and you&apos;re connected.
          </p>
        </div>
        <div className="mt-12">
          <InstallTabs />
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section id="faq" className="border-t border-border bg-bg-soft/30">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-center text-3xl font-semibold tracking-tight md:text-4xl">
            Frequently asked
          </h2>
          <div className="mt-10">
            <Faq />
          </div>
        </div>
      </section>

      {/* ---------- Final CTA ---------- */}
      <section className="relative overflow-hidden">
        <div className="glow pointer-events-none absolute inset-0 -z-10" />
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Give your AI a place to render.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-muted">
            Copy the endpoint, drop it into your client, and your next prompt can
            come back as a live web page.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <code className="rounded-full border border-border bg-card px-5 py-3 font-mono text-sm text-brand-2">
              {SSE_URL}
            </code>
            <CopyButton text={SSE_URL} className="px-5 py-3 text-sm" />
          </div>
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="grid h-6 w-6 place-items-center rounded-md bg-gradient-to-br from-brand to-brand-2 font-mono text-xs text-[#07070b]">
              &lt;/&gt;
            </span>
            <span>Htmly — HTML visualization for AI agents</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://html.shloksheth.tech" className="transition hover:text-ink">Live server</a>
            <a href="https://github.com/shethshlok" target="_blank" rel="noreferrer" className="transition hover:text-ink">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
