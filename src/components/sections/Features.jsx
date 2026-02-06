import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Image, BookCheck, Info, Timer, Rocket } from 'lucide-react';

const features = [
    {
        icon: <Brain className="w-6 h-6" />,
        title: 'Unique AI Content',
        color: 'bg-indigo-600',
        lightColor: 'bg-indigo-50',
        textColor: 'text-indigo-600'
    },
    {
        icon: <Image className="w-6 h-6" />,
        title: 'Covers & Images',
        color: 'bg-sky-500',
        lightColor: 'bg-sky-50',
        textColor: 'text-sky-500'
    },
    {
        icon: <BookCheck className="w-6 h-6" />,
        title: 'KDP Ready',
        color: 'bg-emerald-500',
        lightColor: 'bg-emerald-50',
        textColor: 'text-emerald-500'
    },
    {
        icon: <Info className="w-6 h-6" />,
        title: 'Up-to-date Info',
        color: 'bg-orange-500',
        lightColor: 'bg-orange-50',
        textColor: 'text-orange-500'
    },
    {
        icon: <Timer className="w-6 h-6" />,
        title: '5-10 Minutes',
        color: 'bg-pink-500',
        lightColor: 'bg-pink-50',
        textColor: 'text-pink-500'
    },
    {
        icon: <Rocket className="w-6 h-6" />,
        title: 'Sell as Yours',
        color: 'bg-violet-500',
        lightColor: 'bg-violet-50',
        textColor: 'text-violet-600'
    }
];

export const Features = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Content */}
                    <div className="lg:w-1/2 space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-xs tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
                            AI-Powered
                        </div>

                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                            Transform Your Ideas <br />
                            Into <span className="text-indigo-600">Published eBooks</span>
                        </h2>

                        <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                            Create professional eBooks effortlessly with Automateed. Whether you're a seasoned author or writing your first book, our AI handles the heavy lifting—perfect for busy creators.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-8 py-4 rounded-2xl font-bold transition-all hover:shadow-xl hover:shadow-indigo-100 hover:-translate-y-1 flex items-center gap-2">
                                Get Free Sample <span>→</span>
                            </button>
                            <button className="px-8 py-4 rounded-2xl font-bold border-2 border-gray-100 text-gray-700 hover:bg-gray-50 transition-all">
                                View Plans
                            </button>
                        </div>
                    </div>

                    {/* Right Grid */}
                    <div className="lg:w-1/2">
                        <div className="grid grid-cols-2 gap-4">
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-100/50 transition-all duration-300 group cursor-default"
                                >
                                    <div className={`w-12 h-12 ${feature.color} rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                                        {feature.icon}
                                    </div>
                                    <h4 className="text-sm font-bold text-gray-900 tracking-tight">
                                        {feature.title}
                                    </h4>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
