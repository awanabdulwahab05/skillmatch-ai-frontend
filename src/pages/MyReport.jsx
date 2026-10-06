import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
const API_URL = import.meta.env.VITE_API_URL;

const MyReports = () => {
    const [jobAnalyses, setJobAnalyses] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getReports = async () => {
            try {
                const response = await axios.get(
                    `${API_URL}/api/job/my-reports`,
                    {
                        withCredentials: true
                    }
                )
                setJobAnalyses(response.data.analyses)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        getReports()
    }, [])

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
                <div className="text-center">
                    <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-700 border-t-blue-500"></div>

                    <p className="mt-4 text-slate-400">
                        Loading reports...
                    </p>
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
                        to="/dashboard"
                        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium transition hover:bg-blue-500"
                    >
                        New Analysis
                    </Link>

                </div>
            </nav>


            {/* Main */}
            <main className="mx-auto max-w-6xl px-6 py-12">

                <div className="mb-10">
                    <h1 className="text-4xl font-bold">
                        My Reports
                    </h1>

                    <p className="mt-2 text-slate-400">
                        View your previous job analysis reports.
                    </p>
                </div>


                {/* No Reports */}
                {jobAnalyses.length === 0 ? (

                    <div className="rounded-2xl border border-white/10 bg-slate-900 p-10 text-center">

                        <h2 className="text-xl font-semibold">
                            No Reports Yet
                        </h2>

                        <p className="mt-2 text-slate-400">
                            Analyze a job to create your first report.
                        </p>

                        <Link
                            to="/dashboard"
                            className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
                        >
                            Analyze a Job
                        </Link>

                    </div>

                ) : (

                    <div className="grid gap-5">

                        {jobAnalyses.map((jobAnalysis) => (

                            <div
                                key={jobAnalysis._id}
                                className="rounded-2xl border border-white/10 bg-slate-900 p-6 transition hover:border-blue-500/30"
                            >

                                <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">

                                    {/* Report Info */}
                                    <div>

                                        <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                                            Job Position
                                        </p>

                                        <h2 className="mt-1 text-xl font-semibold">
                                            {jobAnalysis.jobTitle}
                                        </h2>

                                        <p className="mt-2 text-sm text-slate-500">
                                            Created: {new Date(
                                                jobAnalysis.createdAt
                                            ).toLocaleDateString()}
                                        </p>

                                    </div>


                                    {/* Score + Button */}
                                    <div className="flex items-center gap-5">

                                        <div className="text-center">

                                            <p className="text-xs text-slate-500">
                                                Match
                                            </p>

                                            <p className="text-2xl font-bold text-blue-400">
                                                {jobAnalysis.matchScore}%
                                            </p>

                                        </div>


                                        <Link
                                            to={`/my-report/${jobAnalysis._id}`}
                                            className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold transition hover:bg-blue-500"
                                        >
                                            View Report
                                        </Link>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </main>

        </div>
    )
}

export default MyReports