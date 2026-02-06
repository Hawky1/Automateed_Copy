import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Book, Sparkles } from 'lucide-react';

const books = [
    { title: "The Calm Advantage", category: "Self-Help & Personal Development", color: "from-blue-400 to-indigo-600" },
    { title: "Midnight in Venice", category: "Fiction & Romance", color: "from-purple-400 to-pink-600" },
    { title: "The Mind Reset", category: "Psychology", color: "from-emerald-400 to-teal-600" },
    { title: "Stronger Than Yesterday", category: "Health & Fitness", color: "from-orange-400 to-red-600" },
    { title: "From Idea to Income", category: "Business", color: "from-indigo-400 to-blue-600" },
];

export const Showcase = () => {
    const [activeIdx, setActiveIdx] = React.useState(0);

    const next = () => setActiveIdx((prev) => (prev + 1) % books.length);
    const prev = () => setActiveIdx((prev) => (prev - 1 + books.length) % books.length);

    return (
        <section className="py-24 bg-[#FAFAFC] border-y border-gray-100/50">
            <div className="container mx-auto px-4 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-100 bg-white text-indigo-600 font-semibold text-xs mb-8">
                    <Book className="w-4 h-4" />
                    Book Examples Created with automateed
                </div>

                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                    Imagine Your Book Here
                </h2>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-16">
                    These books were created using our AI-powered platform. From cover design to content structure — your next bestseller could look just like this.
                </p>

                {/* Carousel Container */}
                <div className="relative max-w-5xl mx-auto px-12 py-10 mb-12">
                    {/* Navigation */}
                    <button
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:scale-110 transition-all z-10"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:scale-110 transition-all z-10"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Book Cards */}
                    <div className="flex items-center justify-center gap-4 sm:gap-8 h-[400px]">
                        {books.map((book, idx) => {
                            const distance = idx - activeIdx;
                            const isActive = idx === activeIdx;

                            // Simple logic for circular visibility (just showing 3 for simplicity in this mockup)
                            if (Math.abs(distance) > 1 && Math.abs(distance) < books.length - 1) return null;

                            return (
                                <motion.div
                                    key={book.title}
                                    initial={false}
                                    animate={{
                                        scale: isActive ? 1.1 : 0.85,
                                        opacity: isActive ? 1 : 0.4,
                                        x: distance * 50,
                                        rotateY: distance * -20,
                                        zIndex: isActive ? 20 : 10,
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    className="relative group cursor-pointer"
                                >
                                    <div className={`w-48 h-64 sm:w-64 sm:h-80 bg-gradient-to-br ${book.color} rounded-lg shadow-2xl relative overflow-hidden flex flex-col items-center justify-center p-6 text-white text-center`}>
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                                        <Book className="w-12 h-12 mb-4 opacity-50" />
                                        <h3 className="text-xl font-bold leading-tight">{book.title}</h3>
                                        <div className="absolute bottom-0 left-0 w-full h-2 bg-black/20" />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Book Info */}
                <div className="space-y-6">
                    <div className="flex flex-col items-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{books[activeIdx].title}</h3>
                        <div className="bg-sky-500 text-white px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                            {books[activeIdx].category}
                        </div>
                    </div>

                    <div className="flex justify-center gap-2">
                        {books.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveIdx(idx)}
                                className={`w-2.5 h-2.5 rounded-full transition-all ${idx === activeIdx ? 'bg-indigo-600 w-8' : 'bg-gray-300'}`}
                            />
                        ))}
                    </div>

                    <p className="text-sm text-gray-400 font-medium">Click any book to explore • Drag to browse</p>

                    <button className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-indigo-100 hover:shadow-indigo-200 transition-all hover:-translate-y-1 inline-flex items-center gap-2 mt-8">
                        <Sparkles className="w-5 h-5" />
                        Create a Similar Book <span>→</span>
                    </button>
                </div>
            </div>
        </section>
    );
};
