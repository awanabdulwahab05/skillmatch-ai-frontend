import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
const API_URL = import.meta.env.VITE_API_URL;

const SingleReport = () => {

    const { id } = useParams()

    const [jobAnalysis, setJobAnalysis] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const getAnalysis = async () => {

            try {

                const response = await axios.get(
                    `${API_URL}/api/job/my-report/${id}`,
                    {
                        withCredentials: true
                    }
                )
                setJobAnalysis(response.data.analysis)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        getAnalysis()

    }, [id])


    // Loading
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">

                <div className="text-center">

                    <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-700 border-t-blue-500"></div>

                    <p className="mt-4 text-slate-400">
                        Loading report...
                    </p>

                </div>

            </div>
        )
    }


    // Report not found
    if (!jobAnalysis) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-950 px-6 text-white">

                <div className="text-center">

                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10 text-2xl text-red-400">
                        !
                    </div>

                    <h1 className="mt-5 text-2xl font-bold">
                        Report Not Found
                    </h1>

                    <p className="mt-2 text-slate-500">
                        We couldn't find this job analysis.
                    </p>

                    <Link
                        to="/my-reports"
                        className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
                    >
                        Back to Reports
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
                        to="/my-reports"
                        className="rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
                    >
                        My Reports
                    </Link>

                </div>

            </nav>


            <main className="mx-auto max-w-6xl px-6 py-12">

                {/* Header */}
                <div className="text-center">

                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-400">

                        <span className="h-2 w-2 rounded-full bg-green-500"></span>

                        Analysis Complete

                    </div>

                    <h1 className="text-4xl font-bold md:text-5xl">

                        {jobAnalysis.jobTitle}

                    </h1>

                    <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                        Your complete AI job match analysis.
                    </p>

                </div>


                {/* Match Score */}
                <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-white/10 bg-slate-900 p-8">

                    <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

                        <div className="text-center md:text-left">

                            <p className="text-sm text-slate-400">
                                Your Match Score
                            </p>

                            <h2 className="mt-2 text-5xl font-bold">
                                {jobAnalysis.matchScore}
                                <span className="text-2xl text-slate-500">
                                    %
                                </span>
                            </h2>

                            <p className="mt-3 text-sm text-slate-500">
                                Based on your skills and the job requirements.
                            </p>

                        </div>


                        <div className="flex h-36 w-36 items-center justify-center rounded-full border-[10px] border-blue-500/20">

                            <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-blue-500">

                                <span className="text-3xl font-bold text-blue-400">
                                    {jobAnalysis.matchScore}%
                                </span>

                            </div>

                        </div>

                    </div>

                </div>


                {/* Skills */}
                <div className="mt-6 grid gap-6 md:grid-cols-2">

                    {/* Matched Skills */}
                    <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">

                        <h2 className="text-xl font-semibold">
                            Your Strengths
                        </h2>

                        <p className="mt-1 text-sm text-slate-500">
                            Skills that match this job
                        </p>


                        <div className="mt-6 space-y-3">

                            {jobAnalysis.matchedSkills.length > 0 ? (

                                jobAnalysis.matchedSkills.map((skill, index) => (

                                    <div
                                        key={index}
                                        className="flex items-center justify-between rounded-xl border border-white/5 bg-slate-950 px-4 py-3"
                                    >

                                        <span className="text-sm">
                                            {skill}
                                        </span>

                                        <span className="text-xs text-green-400">
                                            Matched
                                        </span>

                                    </div>

                                ))

                            ) : (

                                <p className="text-sm text-slate-500">
                                    No matching skills found.
                                </p>

                            )}

                        </div>

                    </div>


                    {/* Skill Gap */}
                    <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">

                        <h2 className="text-xl font-semibold">
                            Skill Gaps
                        </h2>

                        <p className="mt-1 text-sm text-slate-500">
                            Skills you need to improve
                        </p>


                        <div className="mt-6 space-y-3">

                            {jobAnalysis.skillGap.length > 0 ? (

                                jobAnalysis.skillGap.map((skill, index) => (

                                    <div
                                        key={index}
                                        className="flex items-center justify-between rounded-xl border border-white/5 bg-slate-950 px-4 py-3"
                                    >

                                        <span className="text-sm">
                                            {skill}
                                        </span>

                                        <span className="text-xs text-yellow-400">
                                            Improve
                                        </span>

                                    </div>

                                ))

                            ) : (

                                <p className="text-sm text-green-400">
                                    No major skill gaps found.
                                </p>

                            )}

                        </div>

                    </div>

                </div>


                {/* Things To Learn */}
                <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">

                    <h2 className="text-xl font-semibold">
                        Skills You Should Learn
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        Skills that can improve your job match
                    </p>


                    <div className="mt-6 grid gap-4 md:grid-cols-2">

                        {jobAnalysis.thingsToLearn.map((skill, index) => (

                            <div
                                key={index}
                                className="rounded-xl border border-blue-500/10 bg-blue-500/5 p-5"
                            >

                                <div className="flex items-center justify-between gap-4">

                                    <h3 className="font-medium">
                                        {skill}
                                    </h3>

                                    <span className="shrink-0 rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-400">
                                        Recommended
                                    </span>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>


                {/* Descriptions */}
                <div className="mt-6 grid gap-6 md:grid-cols-2">

                    {/* Job Description */}
                    <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">

                        <h2 className="text-lg font-semibold">
                            Job Description
                        </h2>

                        <p className="mt-4 whitespace-pre-line text-sm leading-7 text-slate-400">
                            {jobAnalysis.jobDescription}
                        </p>

                    </div>


                    {/* User Description */}
                    <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">

                        <h2 className="text-lg font-semibold">
                            Your Profile
                        </h2>

                        <p className="mt-4 whitespace-pre-line text-sm leading-7 text-slate-400">
                            {jobAnalysis.selfDescription}
                        </p>

                    </div>

                </div>


                {/* Bottom */}
                <div className="mt-8 text-center">

                    <Link
                        to="/dashboard"
                        className="inline-block rounded-xl bg-blue-600 px-7 py-3 font-semibold transition hover:bg-blue-500"
                    >
                        Analyze Another Job
                    </Link>

                </div>

            </main>

        </div>
    )
}

export default SingleReport