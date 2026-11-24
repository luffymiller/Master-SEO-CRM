import {
  Activity, ArrowDownRight, ArrowUpRight, BarChart3, BookOpen, BriefcaseBusiness,
  CalendarDays, CheckCircle2, ChevronDown, CircleDollarSign, FileText, Globe2,
  LayoutDashboard, Link2, ListTodo, Plus, Search, Settings2, Users, WandSparkles
} from "lucide-react";

const navigation = [
  { label: "Overview", icon: LayoutDashboard, active: true },
  { label: "Leads & Prospects", icon: Users },
  { label: "Clients & Websites", icon: Globe2 },
  { label: "Projects & Tasks", icon: ListTodo },
  { label: "SEO Operations", icon: BarChart3 },
  { label: "Backlinks & Outreach", icon: Link2 },
  { label: "Blogging Studio", icon: BookOpen },
  { label: "Finance", icon: CircleDollarSign },
  { label: "Reports", icon: FileText },
];

const metrics = [
  { label: "Active Clients", value: "—", note: "Your client portfolio", icon: BriefcaseBusiness, tone: "blue" },
  { label: "Open Projects", value: "—", note: "Projects in progress", icon: BarChart3, tone: "violet" },
  { label: "Tasks Due", value: "—", note: "Across your workspace", icon: CalendarDays, tone: "amber" },
  { label: "Monthly Revenue", value: "—", note: "Tracked invoices & payments", icon: CircleDollarSign, tone: "green" },
];

function MetricCard({ item }: { item: typeof metrics[number] }) {
  const Icon = item.icon;
  return <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium text-slate-500">{item.label}</span>
      <span className="rounded-xl bg-slate-50 p-2 text-slate-600"><Icon size={18}/></span>
    </div>
    <div className="mt-5 text-3xl font-semibold tracking-tight text-slate-900">{item.value}</div>
    <p className="mt-1 text-xs text-slate-500">{item.note}</p>
  </div>;
}

export default function Home() {
  return <main className="min-h-screen lg:flex">
    <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-white p-5 lg:flex lg:flex-col">
      <div className="flex items-center gap-3 px-2 py-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-slate-950 text-white"><WandSparkles size={20}/></div>
        <div><div className="font-semibold tracking-tight">Master SEO</div><div className="text-xs text-slate-500">Agency workspace</div></div>
      </div>
      <div className="mt-9 px-3 text-[10px] font-semibold uppercase tracking-[.18em] text-slate-400">Workspace</div>
      <nav className="mt-3 space-y-1">
        {navigation.map(({label, icon: Icon, active}) => <a key={label} href="#" className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${active ? "bg-slate-950 font-medium text-white" : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"}`}>
          <Icon size={17}/>{label}
        </a>)}
      </nav>
      <div className="mt-auto rounded-2xl bg-slate-50 p-4">
        <div className="flex items-center gap-2 text-sm font-semibold"><Settings2 size={16}/> Workspace setup</div>
        <p className="mt-2 text-xs leading-5 text-slate-500">Your secure agency workspace is provisioned. Connect your account to start adding real records.</p>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-200"><div className="h-full w-1/4 rounded-full bg-slate-900"/></div>
        <div className="mt-2 text-[11px] text-slate-500">Foundation created</div>
      </div>
    </aside>
    <section className="min-w-0 flex-1">
      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 bg-white px-5 py-4 md:px-8">
        <div><div className="text-xs text-slate-500">Workspace / Overview</div><h1 className="mt-1 text-xl font-semibold tracking-tight">Good to see you</h1></div>
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-400 md:flex"><Search size={15}/> Search anything...</div>
          <button className="flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-medium text-white"><Plus size={16}/> Quick create</button>
          <button className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-600">LM <ChevronDown size={14}/></button>
        </div>
      </header>
      <div className="mx-auto max-w-7xl p-5 md:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div><div className="text-sm font-medium text-slate-500">Tuesday, November 25, 2026</div><h2 className="mt-1 text-2xl font-semibold tracking-tight">Agency overview</h2><p className="mt-1 text-sm text-slate-500">Your operations, SEO delivery and publishing in one place.</p></div>
          <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600">Last 30 days <ChevronDown className="ml-2 inline" size={14}/></div>
        </div>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{metrics.map(item => <MetricCard key={item.label} item={item}/>)}</div>
        <div className="mt-7 grid gap-5 xl:grid-cols-[1.5fr_1fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between"><div><h3 className="font-semibold">Getting started</h3><p className="mt-1 text-sm text-slate-500">Your core systems are ready for setup.</p></div><span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">Foundation ready</span></div>
            <div className="mt-5 space-y-4">
              {[
                ["Database foundation","Agency, SEO, finance and blogging tables provisioned",true],
                ["Create your login","Sign up to automatically create your private workspace",false],
                ["Add your first website","Organize clients, domains and SEO projects",false],
                ["Plan your content","Set up blogs, niches, writers and article calendar",false],
              ].map(([title,desc,done]) => <div key={String(title)} className="flex gap-3"><div className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full ${done ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-400"}`}>{done ? <CheckCircle2 size={15}/> : <span className="text-xs">•</span>}</div><div><div className="text-sm font-medium text-slate-800">{title}</div><div className="mt-0.5 text-xs text-slate-500">{desc}</div></div></div>)}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="font-semibold">Your platform modules</h3><p className="mt-1 text-sm text-slate-500">Designed for agency + publishing operations.</p>
            <div className="mt-5 space-y-3">
              {[
                [BriefcaseBusiness,"Agency CRM","Leads, clients, projects and team"],
                [BarChart3,"SEO command center","Keywords, audits, rankings and issues"],
                [Link2,"Link building","Backlinks, publishers and outreach"],
                [BookOpen,"Blogging studio","Multi-site content workflow and calendar"],
                [CircleDollarSign,"Business finance","Proposals, invoices, payments and costs"],
              ].map(([Icon,label,desc]) => { const I = Icon as typeof BriefcaseBusiness; return <div key={String(label)} className="flex items-center gap-3 rounded-xl bg-slate-50 p-3"><span className="rounded-lg bg-white p-2 text-slate-700 shadow-sm"><I size={17}/></span><div><div className="text-sm font-medium">{String(label)}</div><div className="text-xs text-slate-500">{String(desc)}</div></div><ArrowUpRight className="ml-auto text-slate-400" size={15}/></div>})}
            </div>
          </div>
        </div>
        <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-white/70 p-5 text-sm text-slate-500"><Activity className="mr-2 inline" size={16}/> Live metrics will populate when you sign in and start entering your agency and blog data. No sample revenue, rankings or client figures are being fabricated.</div>
        <footer className="mt-8 flex flex-wrap justify-between gap-2 border-t border-slate-200 py-5 text-xs text-slate-400"><span>Master SEO CRM · Built for serious agency operations</span><span>Secure workspace architecture</span></footer>
      </div>
    </section>
  </main>;
}
