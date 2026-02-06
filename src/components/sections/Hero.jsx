import React from 'react';
import { Play, Sparkles, Plus, Star, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
    return (
        <section className="relative pt-40 pb-20 overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-indigo-200/30 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute top-40 -right-20 w-[400px] h-[400px] bg-purple-200/30 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-4 text-center">
                {/* Top Toggle */}
                <div className="inline-flex items-center gap-1 bg-gray-100/50 p-1.5 rounded-full mb-12 backdrop-blur-sm">
                    <button className="flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-semibold text-indigo-600 shadow-sm transition-all hover:bg-gray-50">
                        <Plus className="w-4 h-4" /> Create a book with AI
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors">
                        <BookOpen className="w-4 h-4" /> I already have a book
                    </button>
                </div>

                {/* Main Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold text-[#111827] mb-6 tracking-tight leading-[1.1]">
                        Automateed: All-in-One <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500">
                            ai eBook Generator
                        </span>
                    </h1>

                    <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Generate 150+ pages with images, an AI-designed cover, and a ready-to-publish PDF — automatically.
                    </p>
                </motion.div>

                {/* Interactive Input Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-3xl mx-auto relative group"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-indigo-50">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center justify-center gap-2">
                            What do you want to create today?
                        </h3>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1 relative">
                                <input
                                    type="text"
                                    placeholder="e.g., Building Healthy Habits"
                                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all text-lg"
                                />
                            </div>
                            <button className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-indigo-100 hover:shadow-indigo-200 transition-all hover:-translate-y-1">
                                <Sparkles className="w-5 h-5" />
                                Start Free
                                <span className="ml-1">→</span>
                            </button>
                        </div>

                        <p className="mt-4 text-sm text-gray-400 font-medium">
                            Optional: Leave blank if you're not sure yet
                        </p>
                    </div>

                    {/* Floating Element: Voice to Book */}
                    <div className="hidden lg:block absolute -right-32 top-1/2 -translate-y-1/2">
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3"
                        >
                            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white">
                                <Plus className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-indigo-600">Voice to Book</p>
                                <p className="text-[10px] text-white bg-emerald-500 px-1.5 py-0.5 rounded-full inline-block font-bold">NEW</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Action Buttons */}
                <div className="mt-12 space-y-8">
                    <p className="text-sm font-medium text-gray-400">No credit card required.</p>

                    <button className="inline-flex items-center gap-3 bg-white border border-gray-200 px-8 py-4 rounded-full text-lg font-bold text-gray-700 hover:bg-gray-50 transition-all shadow-sm">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                            <Play className="w-4 h-4 fill-gray-700 text-gray-700 ml-0.5" />
                        </div>
                        Watch Demo
                    </button>

                    <div className="bg-white/80 backdrop-blur-sm border border-gray-100 inline-flex items-center gap-4 px-6 py-3 rounded-full shadow-sm mt-8">
                        <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-indigo-500" />
                            <span className="text-sm font-bold text-gray-700 whitespace-nowrap">AI-Powered eBook Creation</span>
                        </div>
                        <div className="w-px h-4 bg-gray-200" />
                        <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                            <span className="text-sm font-medium text-gray-600 ml-1">4.9 (1,403 reviews)</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
