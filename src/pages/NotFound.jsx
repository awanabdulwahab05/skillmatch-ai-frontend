import React from 'react'
import { Link } from 'react-router'

const NotFound = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">

            <div className="text-center">

                <p className="text-8xl font-bold text-blue-500">
                    404
                </p>

                <h1 className="mt-6 text-3xl font-bold">
                    Page Not Found
                </h1>

                <p className="mt-3 max-w-md text-slate-400">
                    The page you are looking for doesn't exist or may have
                    been moved.
                </p>

                <Link
                    to="/"
                    className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
                >
                    Back to HomePage
                </Link>

            </div>

        </div>
    )
}

export default NotFound