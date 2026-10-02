import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router'
import { toast } from 'sonner'

const RegisterPage = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const formSubmit = async (e) => {
        e.preventDefault()

        const user = {
            username,
            email,
            password
        }

        try {
            const response = await axios.post(
                'http://localhost:8000/user/register',
                user
            )

            toast.success('Successfully Register')
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        }
    }

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 text-white">

            {/* Background Glow */}
            <div className="absolute left-1/2 top-0 -z-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl"></div>


            {/* Register Card */}
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
                            Create Your Account
                        </h1>

                        <p className="mt-2 text-slate-400">
                            Start analyzing your job matches with AI
                        </p>

                    </div>


                    {/* Form */}
                    <form
                        onSubmit={formSubmit}
                        className="space-y-5"
                    >

                        {/* Username */}
                        <div>

                            <label className="mb-2 block text-sm font-medium text-slate-300">
                                Username
                            </label>

                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter your username"
                                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                                required
                            />

                        </div>


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
                                placeholder="Create a password"
                                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                                required
                            />

                        </div>


                        {/* Register Button */}
                        <button
                            type="submit"
                            className="w-full rounded-xl bg-blue-600 py-3.5 font-semibold text-white transition hover:bg-blue-500 active:scale-[0.98]"
                        >
                            Create Account
                        </button>

                    </form>


                    {/* Login */}
                    <p className="mt-7 text-center text-sm text-slate-500">

                        Already have an account?{' '}

                        <Link
                            to="/login"
                            className="font-medium text-blue-400 transition hover:text-blue-300 hover:underline"
                        >
                            Login
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

export default RegisterPage

