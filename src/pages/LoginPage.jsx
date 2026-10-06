import { useState } from 'react'
import { Link } from 'react-router'
import { toast } from 'sonner'
import { useNavigate } from 'react-router'
import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL;

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const user = {
        email,
        password
    }

    const formSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const response = await axios.post(
                `${API_URL}/api/user/login`,
                user,
                {
                    withCredentials: true
                }
            )
            toast.success('Login Success!')
            navigate('/dashboard')
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 text-white">

            {/* Background Glow */}
            <div className="absolute left-1/2 top-0 -z-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl"></div>

            {/* Login Card */}
            <div className="relative z-10 w-full max-w-md">

                <div className="rounded-2xl border border-white/10 bg-slate-900 p-8 shadow-2xl shadow-blue-950/30">

                    {/* Logo */}
                    <Link
                        to="/"
                        className="mb-8 block text-center text-2xl font-bold tracking-tight"
                    >
                        Skill<span className="text-blue-500">Match</span>
                        <span className="ml-2 text-xs text-slate-500">
                            AI
                        </span>
                    </Link>


                    {/* Heading */}
                    <div className="mb-8 text-center">

                        <h1 className="text-3xl font-bold tracking-tight">
                            Welcome Back
                        </h1>

                        <p className="mt-2 text-slate-400">
                            Login to continue your career analysis
                        </p>

                    </div>


                    {/* Form */}
                    <form
                        onSubmit={formSubmit}
                        className="space-y-5"
                    >

                        {/* Email */}
                        <div>

                            <label className="mb-2 block text-sm font-medium text-slate-300">
                                Email
                            </label>

                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                                required
                            />

                        </div>


                        {/* Password */}
                        <div>

                            <label className="mb-2 block text-sm font-medium text-slate-300">
                                Password
                            </label>

                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                                required
                            />

                        </div>


                        {/* Login Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            aria-busy={loading}
                            className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 py-3.5 font-semibold text-white transition hover:bg-blue-500 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            {loading && (
                                <span className="h-5 w-5 animate-spin rounded-full border-2 border-slate-700 border-t-blue-200" />
                            )}
                            {loading ? 'Logging in...' : 'Login'}
                        </button>

                    </form>


                    {/* Register */}
                    <p className="mt-7 text-center text-sm text-slate-500">

                        Don't have an account?{' '}

                        <Link
                            to="/register"
                            className="font-medium text-blue-400 transition hover:text-blue-300 hover:underline"
                        >
                            Create an account
                        </Link>

                    </p>

                </div>


                {/* Back to Home */}
                <div className="mt-6 text-center">

                    <Link
                        to="/"
                        className="text-sm text-slate-500 transition hover:text-slate-300"
                    >
                        ← Back to homepage
                    </Link>

                </div>

            </div>

        </div>
    )
}

export default LoginPage
