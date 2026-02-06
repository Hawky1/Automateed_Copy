import React from 'react';
import { Play } from 'lucide-react';

export const Demo = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                    Interactive AI-Powered eBook Maker
                </h2>
                <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-16">
                    Instead of spending months on your next ebook, simply use this advanced tool to create professional ebooks in a flash. Let our AI handle the heavy lifting of content generation.
                </p>

                {/* Browser Mockup */}
                <div className="max-w-5xl mx-auto relative px-4">
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden relative">
                        {/* Header */}
                        <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 flex items-center gap-2">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                            </div>
                            <div className="flex-1 max-w-md mx-auto bg-white border border-gray-200 rounded-full py-1 px-4 text-[10px] text-gray-400 font-medium">
                                ai.automateed.com
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 sm:p-12 flex flex-col md:flex-row gap-12 text-left">
                            {/* Form Side */}
                            <div className="flex-1 space-y-6">
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 mb-2">eBook Information</h4>
                                    <div className="space-y-4">
                                        <div className="relative">
                                            <label className="text-[10px] font-bold text-gray-400 uppercase mb-1 block">Title</label>
                                            <input
                                                type="text"
                                                readOnly
                                                value="How to Succeed in Life"
                                                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium"
                                            />
                                            {/* Annotation Arrow 1 */}
                                            <div className="absolute -left-32 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-2 text-red-500 font-bold text-sm">
                                                Enter your title <span className="text-2xl">→</span>
                                            </div>
                                        </div>

                                        <div className="relative">
                                            <label className="text-[10px] font-bold text-gray-400 uppercase mb-1 block">Target Audience</label>
                                            <input
                                                type="text"
                                                readOnly
                                                value="Everyone"
                                                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium"
                                            />
                                            {/* Annotation Arrow 2 */}
                                            <div className="absolute -left-32 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-2 text-red-500 font-bold text-sm">
                                                Choose the audience <span className="text-2xl">→</span>
                                            </div>
                                        </div>

                                        <div className="relative">
                                            <label className="text-[10px] font-bold text-gray-400 uppercase mb-1 block">Tone of the book</label>
                                            <input
                                                type="text"
                                                readOnly
                                                value="Engaging, promising, and humorous"
                                                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium"
                                            />
                                            {/* Annotation Arrow 3 */}
                                            <div className="absolute -left-32 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-2 text-red-500 font-bold text-sm">
                                                Pick the tone of the ebook <span className="text-2xl">→</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button className="w-full bg-indigo-600 text-white py-4 rounded-full font-bold shadow-lg shadow-indigo-100 relative group">
                                    Create eBook Outline
                                    {/* Annotation Arrow 4 */}
                                    <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1 text-red-500 font-bold text-center leading-tight whitespace-nowrap">
                                        <span className="text-2xl">↑</span>
                                        Create & approve outline<br />to write a book in less<br />than 5 minutes!
                                    </div>
                                </button>
                            </div>

                            {/* Video/Preview Side */}
                            <div className="flex-1">
                                <div className="aspect-[16/9] bg-gray-900 rounded-2xl relative overflow-hidden group border border-gray-800">
                                    <img
                                        src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80"
                                        alt="Video thumbnail"
                                        className="w-full h-full object-cover opacity-60"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-white shadow-2xl transition-transform group-hover:scale-110">
                                            <Play className="w-8 h-8 fill-white ml-1" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-white text-[10px] font-medium">
                                        Automateed Demo (5 min)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
