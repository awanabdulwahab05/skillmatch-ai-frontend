import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router'
import { toast } from 'sonner'

const API_URL = import.meta.env.VITE_API_URL

const GuestAnalysis = () => {
    const [jobDescription, setJobDescription] = useState('')
    const [selfDescription, setSelfDescription] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const navigate = useNavigate()

    const formSubmit = async (event) => {
        event.preventDefault()
        if (isSubmitting) return

        setIsSubmitting(true)
        try {
            const response = await axios.post(`${API_URL}/api/job/guest-analysis`, {
                jobDescription,
                selfDescription
            })
            navigate('/analysis-result', { state: { guestAnalysis: response.data.result } })
        } catch (error) {
            toast.error(error.response?.data?.message || 'Unable to analyze this job. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <nav className="border-b border-white/10 bg-slate-950/80">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
                    <Link to="/" className="text-2xl font-bold">Skill<span className="text-blue-500">Match</span><span className="ml-2 text-xs text-slate-500">AI</span></Link>
                    <Link to="/login" className="text-sm text-slate-300 hover:text-white">Login</Link>
                </div>
            </nav>
            <main className="mx-auto max-w-5xl px-6 py-16">
                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Analyze Your <span className="text-blue-500">Job Match</span></h1>
                    <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400">Enter a job description and tell us about yourself. No account is needed; your result is shown here and is not saved.</p>
                </div>
                <form onSubmit={formSubmit} aria-busy={isSubmitting} className="rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-2xl shadow-blue-950/20 md:p-8">
                    <div className="mb-7">
                        <label htmlFor="guestJobDescription" className="mb-3 block text-sm font-semibold text-slate-200">Job Description</label>
                        <textarea id="guestJobDescription" value={jobDescription} onChange={(event) => setJobDescription(event.target.value)} placeholder="Paste the job description and requirements here..." rows="8" maxLength={12000} required className="w-full resize-none rounded-xl border border-white/10 bg-slate-950 px-4 py-4 text-sm leading-6 text-white outline-none placeholder:text-slate-600 focus:border-blue-500" />
                    </div>
                    <div className="mb-8">
                        <label htmlFor="guestSelfDescription" className="mb-3 block text-sm font-semibold text-slate-200">About Yourself</label>
                        <textarea id="guestSelfDescription" value={selfDescription} onChange={(event) => setSelfDescription(event.target.value)} placeholder="Describe your skills, experience, education, and technologies you know..." rows="8" maxLength={12000} required className="w-full resize-none rounded-xl border border-white/10 bg-slate-950 px-4 py-4 text-sm leading-6 text-white outline-none placeholder:text-slate-600 focus:border-blue-500" />
                    </div>
                    <button type="submit" disabled={isSubmitting} className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 py-4 font-semibold transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70">
                        {isSubmitting && <span aria-hidden="true" className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />}
                        {isSubmitting ? 'Analyzing...' : 'Analyze Job With AI'}
                    </button>
                    <div className="mt-5 flex flex-wrap justify-center gap-6 text-xs text-slate-600"><span>Match Score</span><span>Your Strengths</span><span>Missing Skills</span><span>Skills to Learn</span></div>
                </form>
            </main>
        </div>
    )
}

export default GuestAnalysis
