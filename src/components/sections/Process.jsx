import React from 'react';
import { motion } from 'framer-motion';

export const Process = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Column: Vertical Timeline */}
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl font-extrabold text-[#111827] mb-6">Ignite Your Creative Spark</h2>
                        <p className="text-lg text-gray-500 mb-12 leading-relaxed">
                            Our AI doesn't just write—it inspires. Transform your ideas into compelling narratives that captivate readers from the first page to the last.
                        </p>

                        <div className="relative pl-12 space-y-12">
                            <div className="absolute left-4 top-2 bottom-2 w-px bg-gray-100" />

                            <div className="relative">
                                <div className="absolute -left-12 top-0 w-8 h-8 rounded-full bg-[#111827] text-white flex items-center justify-center text-xs font-bold ring-4 ring-white">1</div>
                                <div>
                                    <h4 className="text-xl font-bold text-[#111827] mb-1">You put in title 💡</h4>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute -left-12 top-0 w-8 h-8 rounded-full bg-[#111827] text-white flex items-center justify-center text-xs font-bold ring-4 ring-white">2</div>
                                <div>
                                    <h4 className="text-xl font-bold text-[#111827] mb-1">Tool creates outline 📝</h4>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute -left-12 top-0 w-8 h-8 rounded-full bg-[#111827] text-white flex items-center justify-center text-xs font-bold ring-4 ring-white">3</div>
                                <div>
                                    <h4 className="text-xl font-bold text-[#111827] mb-1">Review & approve 🛠️</h4>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute -left-12 top-0 w-8 h-8 rounded-full bg-[#111827] text-white flex items-center justify-center text-xs font-bold ring-4 ring-white">4</div>
                                <div>
                                    <h4 className="text-xl font-bold text-[#111827] mb-1">10-15 mins - done 🏁</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: 3D Image & Professional Content Branding */}
                    <div className="lg:w-1/2">
                        <div className="bg-indigo-50/30 rounded-[40px] p-12 relative">
                            <div className="space-y-6 mb-12">
                                <h3 className="text-3xl font-bold text-indigo-600">Professional Content in Minutes</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    Instead of spending months on your next ebook, simply use this advanced tool to create professional ebooks in a flash. Let our AI handle the heavy lifting—all you have to do is choose your topic, define chapters, and watch our system create a polished manuscript.
                                </p>
                            </div>

                            {/* Book Stack Mockup Placeholder */}
                            <div className="relative h-[400px] flex items-center justify-center">
                                <motion.div
                                    initial={{ rotateY: -20, x: -20 }}
                                    whileInView={{ rotateY: -10, x: 0 }}
                                    transition={{ duration: 1 }}
                                    className="w-48 h-72 bg-gradient-to-br from-[#111827] to-[#374151] rounded shadow-2xl relative z-10 border-l-[12px] border-black/20"
                                >
                                    <div className="p-4 text-white">
                                        <p className="text-[10px] font-bold opacity-50 uppercase mb-2">AI-Powered</p>
                                        <h4 className="font-bold text-sm leading-tight">Content Creation Secrets</h4>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ rotateY: -10, x: 20 }}
                                    whileInView={{ rotateY: 0, x: 40 }}
                                    transition={{ duration: 1 }}
                                    className="w-48 h-72 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded shadow-2xl absolute border-l-[12px] border-black/20"
                                >
                                    <div className="p-4 text-white">
                                        <p className="text-[10px] font-bold opacity-50 uppercase mb-2">Automateed</p>
                                        <h4 className="font-bold text-sm leading-tight">The Art of Teaching Online</h4>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
