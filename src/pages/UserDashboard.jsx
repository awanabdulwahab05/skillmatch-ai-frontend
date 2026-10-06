import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'sonner'
import { useNavigate } from 'react-router'
const API_URL = import.meta.env.VITE_API_URL;

const UserDashboard = () => {
    const [jobDescription, setJobDescription] = useState('')
    const [selfDescription, setSelfDescription] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    const navigate = useNavigate()

    // Form Submit
    const formSubmit = async (e) => {
        e.preventDefault()
        if (isSubmitting) return

        setIsSubmitting(true)

        try {
            const response = await axios.post(
                `${API_URL}/api/job/analysis`,
                { jobDescription, selfDescription },
                {
                    withCredentials: true
                }
            )
            navigate(`/analysis-result/${response.data.result._id}`)
        } catch (error) {
            console.log(error, 'Error in job-analysis')
            toast.error('Error in job Analysis')
        } finally {
            setIsSubmitting(false)
        }
    }

    // Logout
    const logout = async () => {
        try {
            await axios.get(`${API_URL}/api/user/logout`,
                { withCredentials: true }
            )
            toast.success('Logout Successfully!')
            navigate('/')
        } catch (error) {
            console.log(error)
            toast.error("Can't logout")
        }
    }

    // Previos Report
    const previosReport = async () => {
        try {

        } catch (error) {

        }
    }

    return (
        <div className="min-h-screen bg-slate-950 text-white">

            {/* Navbar */}
            <nav className="border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

                    {/* Logo */}
                    <div className="text-2xl font-bold tracking-tight">
                        Skill<span className="text-blue-500">Match</span>
                        <span className="ml-2 text-xs text-slate-500">
                            AI
                        </span>
                    </div>

                    {/* User */}
                    <div className="flex items-center gap-4">
                        <span className="hidden text-sm text-slate-400 sm:block">
                            AI Job Analyzer
                        </span>

                        <button
                            type="button"
                            onClick={logout}
                            className="rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
                        >
                            Logout
                        </button>
                    </div>

                </div>
            </nav>


            {/* Main */}
            <main className="relative overflow-hidden">

                {/* Background Glow */}
                <div className="absolute left-1/2 top-0 -z-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl"></div>


                <div className="relative z-10 mx-auto max-w-5xl px-6 py-16">

                    {/* Previos Analysis */}
                    <div className='mb-3 text-center'>
                        <button
                            type="button"
                            onClick={() => navigate('/my-reports')}
                            className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400"
                        >
                            <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                            Previos Report
                        </button>
                    </div>


                    {/* Heading */}
                    <div className="mb-10 text-center">


                        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                            Analyze Your
                            <span className="text-blue-500"> Job Match</span>
                        </h1>


                        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
                            Enter the job requirements and tell us about yourself.
                            Our AI will analyze both and show you how well you match
                            the position.
                        </p>

                    </div>


                    {/* Form */}
                    <form
                        onSubmit={formSubmit}
                        aria-busy={isSubmitting}
                        className="rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-2xl shadow-blue-950/20 md:p-8"
                    >

                        {/* Job Description */}
                        <div className="mb-7">

                            <div className="mb-3 flex items-center justify-between">

                                <label
                                    htmlFor="jobDescription"
                                    className="text-sm font-semibold text-slate-200"
                                >
                                    Job Description
                                </label>

                                <span className="text-xs text-slate-600">
                                    Required
                                </span>

                            </div>


                            <textarea
                                id="jobDescription"
                                value={jobDescription}
                                onChange={(e) => setJobDescription(e.target.value)}
                                placeholder="Paste the job description and requirements here..."
                                rows="8"
                                className="w-full resize-none rounded-xl border border-white/10 bg-slate-950 px-4 py-4 text-sm leading-6 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                                required
                            />


                            <p className="mt-2 text-xs text-slate-600">
                                Include the required skills, experience, education, and technologies.
                            </p>

                        </div>


                        {/* Self Description */}
                        <div className="mb-8">

                            <div className="mb-3 flex items-center justify-between">

                                <label
                                    htmlFor="selfDescription"
                                    className="text-sm font-semibold text-slate-200"
                                >
                                    About Yourself
                                </label>

                                <span className="text-xs text-slate-600">
                                    Required
                                </span>

                            </div>


                            <textarea
                                id="selfDescription"
                                value={selfDescription}
                                onChange={(e) => setSelfDescription(e.target.value)}
                                placeholder="Describe your skills, experience, education, and technologies you know..."
                                rows="8"
                                className="w-full resize-none rounded-xl border border-white/10 bg-slate-950 px-4 py-4 text-sm leading-6 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                                required
                            />


                            <p className="mt-2 text-xs text-slate-600">
                                Give AI enough information to understand your current abilities.
                            </p>

                        </div>


                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="group flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-500 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
                        >

                            {isSubmitting && (
                                <span
                                    aria-hidden="true"
                                    className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white"
                                />
                            )}

                            <span>
                                {isSubmitting ? 'Analyzing...' : 'Analyze Job With AI'}
                            </span>

                            {!isSubmitting && (
                                <span className="text-lg transition-transform group-hover:translate-x-1">
                                    →
                                </span>
                            )}

                        </button>


                        {/* Analysis Information */}
                        <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-slate-600">

                            <span>✓ Match Score</span>

                            <span>✓ Your Strengths</span>

                            <span>✓ Missing Skills</span>

                            <span>✓ Skills to Learn</span>

                        </div>

                    </form>

                </div>

            </main>

        </div>
    )
}

export default UserDashboard
