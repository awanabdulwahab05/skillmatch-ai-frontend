import React, { useState } from 'react'
import { Link } from 'react-router'

const UserDashboard = () => {
    const [jobDescription, setJobDescription] = useState('')
    const [selfDescription, setSelfDescription] = useState('')

    return (
        <div className="min-h-screen bg-slate-950 text-white">

            {/* Navbar */}
            <nav className="border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-2xl font-bold tracking-tight"
                    >
                        Skill<span className="text-blue-500">Match</span>
                        <span className="ml-2 text-xs text-slate-500">
                            AI
                        </span>
                    </Link>

                    {/* Right Side */}
                    <div className="flex items-center gap-4">

                        <span className="hidden text-sm text-slate-400 sm:block">
                            Welcome back
                        </span>

                        <Link
                            to="/login"
                            className="rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
                        >
                            Logout
                        </Link>

                    </div>

                </div>
            </nav>


            {/* Main */}
            <main className="relative overflow-hidden">

                {/* Background Glow */}
                <div className="absolute left-1/2 top-0 -z-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl"></div>


                <div className="relative z-10 mx-auto max-w-5xl px-6 py-16">

                    {/* Heading */}
                    <div className="mb-12 text-center">

                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
                            <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                            AI Job Analysis
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                            Analyze Your
                            <span className="text-blue-500"> Job Match</span>
                        </h1>

                        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
                            Tell us about the job you're interested in and
                            describe yourself. Our AI will compare both and
                            help you understand your career match.
                        </p>

                    </div>


                    {/* Form Card */}
                    <div className="rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-2xl shadow-blue-950/20 md:p-8">

                        {/* Job Description */}
                        <div className="mb-7">

                            <div className="mb-3 flex items-center justify-between">

                                <label className="text-sm font-semibold text-slate-200">
                                    Job Description
                                </label>

                                <span className="text-xs text-slate-600">
                                    Required
                                </span>

                            </div>

                            <textarea
                                value={jobDescription}
                                onChange={(e) => setJobDescription(e.target.value)}
                                placeholder="Paste the job description here...

Example:
We are looking for a Frontend Developer with experience in React, JavaScript, Tailwind CSS, REST APIs and Git..."
                                rows="9"
                                className="w-full resize-none rounded-xl border border-white/10 bg-slate-950 px-4 py-4 text-sm leading-6 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                            />

                            <p className="mt-2 text-xs text-slate-600">
                                Paste the complete job description for a more detailed analysis.
                            </p>

                        </div>


                        {/* Self Description */}
                        <div className="mb-8">

                            <div className="mb-3 flex items-center justify-between">

                                <label className="text-sm font-semibold text-slate-200">
                                    Tell Us About Yourself
                                </label>

                                <span className="text-xs text-slate-600">
                                    Required
                                </span>

                            </div>

                            <textarea
                                value={selfDescription}
                                onChange={(e) => setSelfDescription(e.target.value)}
                                placeholder="Describe yourself...

Example:
I am a CS student with experience in React, JavaScript and Tailwind CSS. I have built several frontend projects and have basic knowledge of Node.js and MongoDB..."
                                rows="9"
                                className="w-full resize-none rounded-xl border border-white/10 bg-slate-950 px-4 py-4 text-sm leading-6 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                            />

                            <p className="mt-2 text-xs text-slate-600">
                                Include your skills, experience, education and technologies you know.
                            </p>

                        </div>


                        {/* Analyze Button */}
                        <button
                            type="button"
                            className="group flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-500 active:scale-[0.99]"
                        >

                            <span>
                                Analyze With AI
                            </span>

                            <span className="text-lg transition-transform group-hover:translate-x-1">
                                →
                            </span>

                        </button>


                        {/* Small Info */}
                        <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-slate-600">

                            <span>✓ Match Score</span>
                            <span>✓ Your Strengths</span>
                            <span>✓ Missing Skills</span>
                            <span>✓ Skills to Learn</span>

                        </div>

                    </div>

                </div>

            </main>

        </div>
    )
}

export default UserDashboard