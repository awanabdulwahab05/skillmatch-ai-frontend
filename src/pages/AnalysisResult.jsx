import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

const AnalysisResult = () => {

    const { id } = useParams()
    const [analysis, setAnalysis] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const getAnalysis = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8000/api/job/report/${id}`,
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

    }, [id])


    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-500">Loading analysis...</p>
            </div>
        )
    }


    if (!analysis) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-red-500">Analysis not found.</p>
            </div>
        )
    }


    return (
        <div className="min-h-screen bg-gray-100 px-4 py-10">

            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="bg-white rounded-2xl shadow-sm p-8 mb-6">

                    <p className="text-sm text-blue-600 font-medium mb-2">
                        Job Analysis
                    </p>

                    <h1 className="text-3xl font-bold text-gray-800">
                        {analysis.jobTitle}
                    </h1>

                    <div className="mt-6">
                        <p className="text-gray-500 mb-2">
                            Your Match Score
                        </p>

                        <div className="flex items-center gap-4">

                            <div className="text-5xl font-bold text-blue-600">
                                {analysis.matchScore}%
                            </div>

                            <div className="flex-1 bg-gray-200 rounded-full h-3">
                                <div
                                    className="bg-blue-600 h-3 rounded-full"
                                    style={{
                                        width: `${analysis.matchScore}%`
                                    }}
                                />
                            </div>

                        </div>
                    </div>

                </div>


                {/* Matched Skills */}
                <div className="bg-white rounded-2xl shadow-sm p-8 mb-6">

                    <h2 className="text-xl font-semibold text-gray-800 mb-5">
                        Matched Skills
                    </h2>

                    <div className="flex flex-wrap gap-3">

                        {analysis.matchedSkills.map((skill, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                            >
                                {skill}
                            </span>
                        ))}

                    </div>

                </div>


                {/* Skill Gap */}
                <div className="bg-white rounded-2xl shadow-sm p-8 mb-6">

                    <h2 className="text-xl font-semibold text-gray-800 mb-5">
                        Skill Gap
                    </h2>

                    <div className="flex flex-wrap gap-3">

                        {analysis.skillGap.map((skill, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium"
                            >
                                {skill}
                            </span>
                        ))}

                    </div>

                </div>


                {/* Things To Learn */}
                <div className="bg-white rounded-2xl shadow-sm p-8">

                    <h2 className="text-xl font-semibold text-gray-800 mb-5">
                        Things To Learn
                    </h2>

                    <div className="space-y-3">

                        {analysis.thingsToLearn.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
                            >
                                <span className="text-blue-600 font-bold">
                                    {index + 1}.
                                </span>

                                <span className="text-gray-700">
                                    {item}
                                </span>
                            </div>
                        ))}

                    </div>

                </div>

            </div>

        </div>
    )
}

export default AnalysisResult