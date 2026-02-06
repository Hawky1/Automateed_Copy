import React from 'react';

export const Illustration = () => {
    return (
        <section className="py-24 bg-[#FAFAFC]">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-extrabold text-[#111827] mb-4">
                    Create Illustration Books in Seconds!
                </h2>
                <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-16 font-medium">
                    Watch how simple it is to create beautiful storybooks with our AI. From concept to completion in just moments.
                </p>

                {/* Storybook Browser Mockup */}
                <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                    <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400" />
                            <div className="w-3 h-3 rounded-full bg-yellow-400" />
                            <div className="w-3 h-3 rounded-full bg-green-400" />
                        </div>
                        <div className="flex gap-4">
                            <div className="w-24 h-4 bg-gray-200 rounded-full" />
                            <div className="w-8 h-4 bg-indigo-100 rounded-full" />
                        </div>
                    </div>

                    <div className="p-8 sm:p-12 bg-white">
                        <div className="flex flex-col items-center">
                            <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs mb-8">
                                <span>← BACK TO STORYBOOKS</span>
                            </div>

                            <h3 className="text-2xl font-bold text-[#111827] mb-10">The Dragon with the Beard</h3>

                            {/* Open Book Visualization */}
                            <div className="flex flex-col md:flex-row gap-8 w-full">
                                {/* Left Page */}
                                <div className="flex-1 bg-white border border-gray-100 rounded-lg p-6 shadow-sm relative overflow-hidden group">
                                    <div className="aspect-[3/4] bg-gray-50 rounded-lg mb-4 flex items-center justify-center">
                                        <div className="w-32 h-32 bg-indigo-100 rounded-full flex items-center justify-center">
                                            <div className="w-16 h-16 bg-indigo-200 rounded-lg rotate-12" />
                                        </div>
                                    </div>
                                    <p className="text-[10px] text-gray-400 line-clamp-6 leading-relaxed">
                                        With the feather tucked safely in his claw, Spark started back toward the Emerald Tree. The excitement bubbled inside him. When he landed, Sparcie greeted him with a twinkle in her eye. "Did you find what you were looking for?" she asked, noticing the feather. Spark smiled and nodded, holding it out to her.
                                    </p>
                                    <div className="absolute bottom-2 right-4 text-[10px] font-bold text-gray-300 italic">Page 1</div>
                                </div>

                                {/* Right Page */}
                                <div className="flex-1 bg-white border border-gray-100 rounded-lg p-6 shadow-sm relative overflow-hidden group">
                                    <div className="aspect-[3/4] bg-gray-50 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                                        <img
                                            src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80"
                                            alt="Story Illustration"
                                            className="w-full h-full object-cover opacity-80"
                                        />
                                    </div>
                                    <p className="text-[10px] text-gray-400 line-clamp-6 leading-relaxed">
                                        Sparcie accepted the feather with gratitude. "Thank you, Spark! This feather is special. It reminds me of our adventure together and the importance of understanding ourselves." Spark felt proud and happy. His journey had not only changed his appearance but also strengthened his friendship with Sparcie. "Our adventures are the best!" he chirped cheerfully.
                                    </p>
                                    <div className="absolute bottom-2 right-4 text-[10px] font-bold text-gray-300 italic">Page 2</div>
                                </div>
                            </div>

                            <div className="mt-12 flex items-center gap-4">
                                <button className="p-2 rounded-full border border-gray-200 text-gray-400 hover:bg-gray-50">
                                    <span className="text-lg">←</span>
                                </button>
                                <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-bold text-sm shadow-lg shadow-indigo-100">
                                    DOWNLOAD PDF
                                </button>
                                <button className="p-2 rounded-full border border-gray-200 text-gray-400 hover:bg-gray-50">
                                    <span className="text-lg">→</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
