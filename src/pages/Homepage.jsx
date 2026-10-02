import React from "react";
import { Link } from "react-router";

const Homepage = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-white">

            {/* Navbar */}
            <nav className="border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold tracking-tight">
                        Skill<span className="text-blue-500">Match</span>
                        <span className="text-xs ml-2 text-slate-500">AI</span>
                    </Link>

                    {/* Navigation */}
                    <div className="hidden items-center gap-8 md:flex">
                        <a
                            href="#features"
                            className="text-sm text-slate-300 transition hover:text-white"
                        >
                            Features
                        </a>

                        <a
                            href="#how-it-works"
                            className="text-sm text-slate-300 transition hover:text-white"
                        >
                            How It Works
                        </a>

                        <a
                            href="#about"
                            className="text-sm text-slate-300 transition hover:text-white"
                        >
                            About
                        </a>
                    </div>

                    {/* Auth Buttons */}
                    <div className="flex items-center gap-3">
                        <Link
                            to="/login"
                            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition hover:text-white"
                        >
                            Login
                        </Link>

                        <Link
                            to="/register"
                            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold transition hover:bg-blue-500"
                        >
                            Get Started
                        </Link>
                    </div>

                </div>
            </nav>


            {/* Hero Section */}
            <section className="relative overflow-hidden">

                {/* Background glow */}
                <div className="absolute left-1/2 top-0 -z-10 h-125 w-175 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl"></div>

                <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:py-32">

                    {/* Hero Content */}
                    <div>

                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
                            <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                            AI-Powered Career Analysis
                        </div>

                        <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight md:text-6xl">
                            Discover how well you
                            <span className="text-blue-500"> match your dream job.</span>
                        </h1>

                        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
                            Give our AI your job description and tell us about yourself.
                            Get a detailed analysis of your skills, strengths, weaknesses,
                            and the skills you should learn to become a stronger candidate.
                        </p>

                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">

                            <Link
                                to="/register"
                                className="rounded-xl bg-blue-600 px-7 py-3.5 text-center font-semibold transition hover:bg-blue-500"
                            >
                                Analyze My Job Match
                            </Link>

                            <a
                                href="#how-it-works"
                                className="rounded-xl border border-white/10 px-7 py-3.5 text-center font-semibold text-slate-300 transition hover:bg-white/5 hover:text-white"
                            >
                                See How It Works
                            </a>

                        </div>

                        {/* Small trust information */}
                        <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-500">
                            <span>✓ AI-powered analysis</span>
                            <span>✓ Personalized results</span>
                            <span>✓ Skill recommendations</span>
                        </div>

                    </div>


                    {/* Analysis Preview */}
                    <div className="relative">

                        <div className="rounded-2xl border border-white/10 bg-slate-900 p-5 shadow-2xl shadow-blue-950/30">

                            {/* Window header */}
                            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">

                                <div>
                                    <p className="text-sm font-semibold">
                                        Job Match Analysis
                                    </p>

                                    <p className="text-xs text-slate-500">
                                        Frontend Developer
                                    </p>
                                </div>

                                <div className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400">
                                    Analysis Complete
                                </div>

                            </div>


                            {/* Score */}
                            <div className="rounded-xl bg-slate-950 p-5">

                                <div className="flex items-center justify-between">

                                    <div>
                                        <p className="text-sm text-slate-400">
                                            Your Match Score
                                        </p>

                                        <p className="mt-2 text-4xl font-bold">
                                            78<span className="text-xl text-slate-500">%</span>
                                        </p>
                                    </div>

                                    <div className="flex h-24 w-24 items-center justify-center rounded-full border-8 border-blue-500/30">
                                        <span className="text-xl font-bold text-blue-400">
                                            78%
                                        </span>
                                    </div>

                                </div>

                            </div>


                            {/* Strengths */}
                            <div className="mt-4">

                                <h3 className="mb-3 text-sm font-semibold">
                                    Your Strengths
                                </h3>

                                <div className="grid grid-cols-2 gap-3">

                                    <div className="rounded-xl border border-white/5 bg-slate-950 p-3">
                                        <p className="text-sm font-medium">
                                            React
                                        </p>
                                        <p className="mt-1 text-xs text-green-400">
                                            Strong match
                                        </p>
                                    </div>

                                    <div className="rounded-xl border border-white/5 bg-slate-950 p-3">
                                        <p className="text-sm font-medium">
                                            JavaScript
                                        </p>
                                        <p className="mt-1 text-xs text-green-400">
                                            Strong match
                                        </p>
                                    </div>

                                    <div className="rounded-xl border border-white/5 bg-slate-950 p-3">
                                        <p className="text-sm font-medium">
                                            Tailwind CSS
                                        </p>
                                        <p className="mt-1 text-xs text-green-400">
                                            Good match
                                        </p>
                                    </div>

                                    <div className="rounded-xl border border-white/5 bg-slate-950 p-3">
                                        <p className="text-sm font-medium">
                                            Git
                                        </p>
                                        <p className="mt-1 text-xs text-yellow-400">
                                            Improve
                                        </p>
                                    </div>

                                </div>

                            </div>


                            {/* Skills to learn */}
                            <div className="mt-5">

                                <h3 className="mb-3 text-sm font-semibold">
                                    Skills You Should Learn
                                </h3>

                                <div className="space-y-2">

                                    <div className="flex items-center justify-between rounded-lg bg-blue-500/10 px-4 py-3">
                                        <span className="text-sm">
                                            TypeScript
                                        </span>

                                        <span className="text-xs text-blue-400">
                                            High priority
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between rounded-lg bg-blue-500/10 px-4 py-3">
                                        <span className="text-sm">
                                            Next.js
                                        </span>

                                        <span className="text-xs text-blue-400">
                                            High priority
                                        </span>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* Features */}
            <section
                id="features"
                className="border-t border-white/10 bg-slate-900/40"
            >
                <div className="mx-auto max-w-7xl px-6 py-24">

                    <div className="mx-auto max-w-2xl text-center">

                        <p className="text-sm font-semibold uppercase tracking-wider text-blue-500">
                            What You Get
                        </p>

                        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                            Understand your position in the job market
                        </h2>

                        <p className="mt-4 text-slate-400">
                            Our AI compares your profile with the requirements
                            of the job and gives you practical feedback.
                        </p>

                    </div>


                    <div className="mt-14 grid gap-6 md:grid-cols-3">

                        {/* Feature 1 */}
                        <div className="rounded-2xl border border-white/10 bg-slate-900 p-7">

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-xl text-blue-400">
                                %
                            </div>

                            <h3 className="mt-5 text-xl font-semibold">
                                Job Match Score
                            </h3>

                            <p className="mt-3 leading-7 text-slate-400">
                                See how closely your current skills and experience
                                match the requirements of a specific job.
                            </p>

                        </div>


                        {/* Feature 2 */}
                        <div className="rounded-2xl border border-white/10 bg-slate-900 p-7">

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-xl text-green-400">
                                ✓
                            </div>

                            <h3 className="mt-5 text-xl font-semibold">
                                Discover Your Strengths
                            </h3>

                            <p className="mt-3 leading-7 text-slate-400">
                                Understand which of your existing skills are
                                already valuable for the job you're targeting.
                            </p>

                        </div>


                        {/* Feature 3 */}
                        <div className="rounded-2xl border border-white/10 bg-slate-900 p-7">

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-xl text-purple-400">
                                +
                            </div>

                            <h3 className="mt-5 text-xl font-semibold">
                                Know What to Learn
                            </h3>

                            <p className="mt-3 leading-7 text-slate-400">
                                Get personalized recommendations for skills and
                                technologies that can improve your job match.
                            </p>

                        </div>

                    </div>

                </div>
            </section>


            {/* How it works */}
            <section id="how-it-works">

                <div className="mx-auto max-w-7xl px-6 py-24">

                    <div className="mx-auto max-w-2xl text-center">

                        <p className="text-sm font-semibold uppercase tracking-wider text-blue-500">
                            Simple Process
                        </p>

                        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                            How it works
                        </h2>

                    </div>


                    <div className="mt-14 grid gap-8 md:grid-cols-3">

                        <div className="text-center">

                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-lg font-bold">
                                1
                            </div>

                            <h3 className="mt-5 text-xl font-semibold">
                                Add the Job Description
                            </h3>

                            <p className="mt-3 text-slate-400">
                                Paste the job description of the position
                                you want to apply for.
                            </p>

                        </div>


                        <div className="text-center">

                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-lg font-bold">
                                2
                            </div>

                            <h3 className="mt-5 text-xl font-semibold">
                                Tell AI About Yourself
                            </h3>

                            <p className="mt-3 text-slate-400">
                                Describe your skills, experience, education,
                                and current abilities.
                            </p>

                        </div>


                        <div className="text-center">

                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-lg font-bold">
                                3
                            </div>

                            <h3 className="mt-5 text-xl font-semibold">
                                Get Your Analysis
                            </h3>

                            <p className="mt-3 text-slate-400">
                                AI analyzes both descriptions and gives you
                                your match score and learning roadmap.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* CTA */}
            <section className="px-6 pb-24">

                <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-blue-500/20 bg-blue-600/10 px-6 py-16 text-center">

                    <h2 className="text-3xl font-bold md:text-4xl">
                        Ready to understand your job match?
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                        Create your account and let AI analyze your skills
                        against the job you want.
                    </p>

                    <Link
                        to="/register"
                        className="mt-8 inline-block rounded-xl bg-blue-600 px-8 py-3.5 font-semibold transition hover:bg-blue-500"
                    >
                        Get Started Free
                    </Link>

                </div>

            </section>


            {/* Footer */}
            <footer
                id="about"
                className="border-t border-white/10"
            >
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">

                    <p className="text-sm text-slate-500">
                        © 2026 SkillMatch AI. All rights reserved.
                    </p>

                    <div className="flex gap-6 text-sm text-slate-500">
                        <a href="#" className="hover:text-white">
                            Privacy
                        </a>

                        <a href="#" className="hover:text-white">
                            Terms
                        </a>
                    </div>

                </div>
            </footer>

        </div>
    );
};

export default Homepage