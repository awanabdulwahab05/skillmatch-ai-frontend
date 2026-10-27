import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useLocation, useParams } from 'react-router'
const API_URL = import.meta.env.VITE_API_URL;

const AnalysisResult = () => {

    const { id } = useParams()
    const location = useLocation()
    const guestAnalysis = location.state?.guestAnalysis
    const [analysis, setAnalysis] = useState(guestAnalysis || null)
    const [loading, setLoading] = useState(!guestAnalysis && Boolean(id))

    useEffect(() => {

        if (guestAnalysis || !id) return

        const getAnalysis = async () => {
            try {
                const response = await axios.get(
                    `${API_URL}/api/job/report/${id}`,
                    {
                        withCredentials: true
                    }
                )

                setAnalysis(response.data.analysis)

            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        getAnalysis()

    }, [id, guestAnalysis])


    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">

                <div className="text-center">

                    <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-700 border-t-blue-500"></div>

                    <p className="mt-4 text-slate-400">
                        Loading analysis...
                    </p>

                </div>

            </div>
        )
    }


    if (!analysis) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-950 px-6 text-white">

                <div className="text-center">

                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10 text-2xl text-red-400">
                        !
                    </div>

                    <h1 className="mt-5 text-2xl font-bold">
                        Analysis Not Found
                    </h1>

                    <p className="mt-2 text-slate-500">
                        We couldn't find the analysis you're looking for.
                    </p>

                    <Link
                        to={guestAnalysis ? "/analyze" : "/dashboard"}
                        className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
                    >
                        Back to Dashboard
                    </Link>

                </div>

            </div>
        )
    }


    return (
        <div className="min-h-screen bg-slate-950 text-white">

            {/* Navbar */}
            <nav className="border-b border-white/10 bg-slate-950/80 backdrop-blur-md">

                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

                    <Link
                        to="/"
                        className="text-2xl font-bold tracking-tight"
                    >
                        Skill<span className="text-blue-500">Match</span>

                        <span className="ml-2 text-xs text-slate-500">
                            AI
                        </span>
                    </Link>

                    <Link
                        to={guestAnalysis ? "/analyze" : "/dashboard"}
                        className="rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
                    >
                        New Analysis
                    </Link>

                </div>

            </nav>


            {/* Main */}
            <main className="relative overflow-hidden">

                {/* Background Glow */}
                <div className="absolute left-1/2 top-0 -z-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl"></div>


                <div className="relative z-10 mx-auto max-w-6xl px-6 py-14">


                    {/* Page Heading */}
                    <div className="text-center">

                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-400">

                            <span className="h-2 w-2 rounded-full bg-green-500"></span>

                            Analysis Complete

                        </div>


                        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">

                            Your Job
                            <span className="text-blue-500">
                                {' '}Match Analysis
                            </span>

                        </h1>


                        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
                            Understand your strengths, skill gaps, and what you
                            should learn next.
                        </p>

                    </div>


                    {/* Job Title */}
                    <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-white/10 bg-slate-900 p-6 text-center shadow-xl shadow-blue-950/20">

                        <p className="text-sm text-slate-500">
                            Analyzed Position
                        </p>

                        <h2 className="mt-2 text-2xl font-bold">
                            {analysis.jobTitle}
                        </h2>

                    </div>


                    {/* Match Score */}
                    <div className="mx-auto mt-6 max-w-4xl rounded-2xl border border-white/10 bg-slate-900 p-8 shadow-xl shadow-blue-950/20">

                        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

                            <div className="text-center md:text-left">

                                <p className="text-sm font-medium text-slate-400">
                                    Your Match Score
                                </p>

                                <h2 className="mt-2 text-5xl font-bold">
                                    {analysis.matchScore}
                                    <span className="text-2xl text-slate-500">
                                        %
                                    </span>
                                </h2>

                                <p className="mt-3 text-sm text-slate-500">
                                    Based on your skills and the job requirements.
                                </p>

                            </div>


                            {/* Score Circle */}
                            <div className="flex h-36 w-36 items-center justify-center rounded-full border-[10px] border-blue-500/20">

                                <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-blue-500">

                                    <span className="text-3xl font-bold text-blue-400">
                                        {analysis.matchScore}%
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* Skills Cards */}
                    <div className="mt-6 grid gap-6 md:grid-cols-2">


                        {/* Matched Skills */}
                        <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">

                            <div className="flex items-center gap-3">

                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/10 text-xl text-green-400">
                                    ✓
                                </div>

                                <div>

                                    <h2 className="font-semibold">
                                        Your Strengths
                                    </h2>

                                    <p className="text-xs text-slate-500">
                                        Skills that match this job
                                    </p>

                                </div>

                            </div>


                            <div className="mt-6 space-y-3">

                                {analysis.matchedSkills.map((skill, index) => (

                                    <div
                                        key={index}
                                        className="flex items-center justify-between rounded-xl border border-white/5 bg-slate-950 px-4 py-3"
                                    >

                                        <span className="text-sm text-slate-200">
                                            {skill}
                                        </span>

                                        <span className="text-xs font-medium text-green-400">
                                            Matched
                                        </span>

                                    </div>

                                ))}

                            </div>

                        </div>


                        {/* Skill Gap */}
                        <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">

                            <div className="flex items-center gap-3">

                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-500/10 text-xl text-yellow-400">
                                    !
                                </div>

                                <div>

                                    <h2 className="font-semibold">
                                        Skill Gaps
                                    </h2>

                                    <p className="text-xs text-slate-500">
                                        Areas that need improvement
                                    </p>

                                </div>

                            </div>


                            <div className="mt-6 space-y-3">

                                {analysis.skillGap.map((skill, index) => (

                                    <div
                                        key={index}
                                        className="flex items-center justify-between rounded-xl border border-white/5 bg-slate-950 px-4 py-3"
                                    >

                                        <span className="text-sm text-slate-200">
                                            {skill}
                                        </span>

                                        <span className="text-xs font-medium text-yellow-400">
                                            Improve
                                        </span>

                                    </div>

                                ))}

                            </div>

                        </div>

                    </div>


                    {/* Things To Learn */}
                    <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">

                        <div className="flex items-center gap-3">

                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-xl text-blue-400">
                                +
                            </div>

                            <div>

                                <h2 className="font-semibold">
                                    Skills You Should Learn
                                </h2>

                                <p className="text-xs text-slate-500">
                                    Recommended skills based on your analysis
                                </p>

                            </div>

                        </div>


                        <div className="mt-6 grid gap-4 md:grid-cols-2">

                            {analysis.thingsToLearn.map((skill, index) => (

                                <div
                                    key={index}
                                    className="rounded-xl border border-blue-500/10 bg-blue-500/5 p-5"
                                >

                                    <div className="flex items-center justify-between gap-4">

                                        <h3 className="font-medium text-slate-200">
                                            {skill}
                                        </h3>

                                        <span className="shrink-0 rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-400">
                                            Recommended
                                        </span>

                                    </div>

                                    <p className="mt-3 text-sm leading-6 text-slate-500">
                                        Learning this skill can help strengthen
                                        your profile for similar positions.
                                    </p>

                                </div>

                            ))}

                        </div>

                    </div>


                    {/* Bottom CTA */}
                    <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8 text-center">

                        <h2 className="text-2xl font-bold">
                            Analyze Another Job
                        </h2>

                        <p className="mt-2 text-slate-400">
                            Compare your skills with another job opportunity.
                        </p>

                        <Link
                            to={guestAnalysis ? "/analyze" : "/dashboard"}
                            className="mt-6 inline-block rounded-xl bg-blue-600 px-7 py-3 font-semibold transition hover:bg-blue-500"
                        >
                            New Analysis
                        </Link>

                    </div>

                </div>

            </main>

        </div>
    )
}

export default AnalysisResult
