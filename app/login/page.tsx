"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { ArrowLeft, LockKeyhole, Mail, WandSparkles } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [workspaceName, setWorkspaceName] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setMessage("");
    try {
      const supabase = createClient();
      if (mode === "signup") {
        const { data, error } = await supabase.auth.signUp({
          email, password,
          options: { data: { full_name: fullName, workspace_name: workspaceName || "My SEO Agency" } },
        });
        if (error) throw error;
        setMessage(data.session ? "Account created. Your workspace is ready." : "Account created. Check your email to confirm, then sign in.");
        if (data.session) router.replace("/");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        router.replace("/");
        router.refresh();
      }
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return <main className="flex min-h-screen items-center justify-center bg-slate-950 px-5 py-12">
    <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid-cols-2">
      <section className="hidden flex-col justify-between bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 p-10 text-white lg:flex">
        <div className="flex items-center gap-3"><span className="rounded-xl bg-white/10 p-3"><WandSparkles/></span><span className="font-semibold">Master SEO CRM</span></div>
        <div><div className="mb-4 inline-flex rounded-full border border-white/20 px-3 py-1 text-xs text-slate-300">AGENCY OPERATIONS PLATFORM</div><h1 className="text-4xl font-semibold leading-tight tracking-tight">Your agency.<br/>Your publishing network.<br/><span className="text-indigo-300">One command center.</span></h1><p className="mt-5 max-w-sm text-sm leading-6 text-slate-300">Manage clients, SEO delivery, outreach, content production and business operations from one secure workspace.</p></div>
        <div className="text-xs text-slate-400">Master SEO CRM · Workspace access</div>
      </section>
      <section className="p-7 sm:p-10">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900"><ArrowLeft size={15}/> Back to overview</Link>
        <div className="mt-9"><div className="mb-3 inline-flex rounded-xl bg-slate-100 p-3 text-slate-800"><LockKeyhole size={20}/></div><h2 className="text-2xl font-semibold tracking-tight">{mode === "login" ? "Welcome back" : "Create your workspace"}</h2><p className="mt-2 text-sm text-slate-500">{mode === "login" ? "Sign in to continue to your agency dashboard." : "Your private workspace and owner access are provisioned automatically."}</p></div>
        <form onSubmit={submit} className="mt-8 space-y-4">
          {mode === "signup" && <><label className="block text-sm font-medium text-slate-700">Your name<input required value={fullName} onChange={e=>setFullName(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-500" placeholder="Full name"/></label><label className="block text-sm font-medium text-slate-700">Agency / workspace name<input value={workspaceName} onChange={e=>setWorkspaceName(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-500" placeholder="My SEO Agency"/></label></>}
          <label className="block text-sm font-medium text-slate-700">Email address<span className="relative mt-2 block"><Mail className="absolute left-4 top-3.5 text-slate-400" size={17}/><input required type="email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 outline-none focus:border-slate-500" placeholder="you@company.com"/></span></label>
          <label className="block text-sm font-medium text-slate-700">Password<input required minLength={8} type="password" value={password} onChange={e=>setPassword(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-500" placeholder="At least 8 characters"/></label>
          {message && <p role="status" className="rounded-xl bg-slate-100 p-3 text-sm text-slate-700">{message}</p>}
          <button disabled={busy} className="w-full rounded-xl bg-slate-950 px-4 py-3 font-medium text-white transition hover:bg-slate-800 disabled:opacity-60">{busy ? "Please wait..." : mode === "login" ? "Sign in" : "Create account"}</button>
        </form>
        <p className="mt-6 text-center text-sm text-slate-500">{mode === "login" ? "New to Master SEO CRM?" : "Already have an account?"} <button onClick={()=>{setMode(mode === "login" ? "signup" : "login");setMessage("");}} className="font-semibold text-slate-900 underline underline-offset-4">{mode === "login" ? "Create account" : "Sign in"}</button></p>
      </section>
    </div>
  </main>;
}
