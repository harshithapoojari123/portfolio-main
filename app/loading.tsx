export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 text-white">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0b0f1a] to-[#141b2d]" />
        <div className="absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_120deg,rgba(99,102,241,0.28),rgba(168,85,247,0.18),rgba(236,72,153,0.12),transparent_65%)] blur-3xl anim-aurora" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.22),_transparent_58%)]" />
      </div>

      <div className="flex flex-col items-center px-6 text-center">
        <div className="relative h-24 w-24">
          <div className="absolute inset-0 rounded-full border border-indigo-400/30" />
          <div className="absolute inset-2 rounded-full border-2 border-transparent border-t-indigo-400 border-r-fuchsia-400 animate-spin" />
          <div className="absolute inset-6 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-purple-500 shadow-lg shadow-indigo-500/30 anim-pulse-soft" />
        </div>

        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.32em] text-indigo-200">Loading Portfolio</p>
        <h1 className="mt-3 bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-purple-300 bg-clip-text text-4xl font-bold text-transparent anim-gradient">
          Harshitha Poojari
        </h1>
        <p className="mt-3 max-w-sm text-sm text-slate-400">Full Stack Developer & Founder of Codexa</p>
      </div>
    </div>
  )
}
