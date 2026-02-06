import React from 'react';
import { motion } from 'framer-motion';

const templates = [
    { name: "Classic", number: "#1", color: "bg-purple-100", textColor: "text-indigo-900" },
    { name: "Modern", number: "#2", color: "bg-gray-900", textColor: "text-white" },
    { name: "Elegant", number: "#3", color: "bg-yellow-400", textColor: "text-black" },
    { name: "Bold", number: "#4", color: "bg-blue-600", textColor: "text-white" },
    { name: "Artistic", number: "#5", color: "bg-indigo-400", textColor: "text-white" },
    { name: "Clean", number: "#6", color: "bg-white", textColor: "text-indigo-600", border: true },
    { name: "Geometric", number: "#7", color: "bg-gradient-to-br from-indigo-500 to-purple-500", textColor: "text-white" },
    { name: "Dynamic", number: "#8", color: "bg-[#1e293b]", textColor: "text-white" },
    { name: "Circular", number: "#9", color: "bg-pink-100", textColor: "text-pink-600" },
    { name: "Cyber", number: "#10", color: "bg-black", textColor: "text-emerald-400" },
    { name: "Minimal", number: "#11", color: "bg-gray-50", textColor: "text-gray-900", border: true },
    { name: "Monochrome", number: "#12", color: "bg-gray-800", textColor: "text-white" },
];

export const CoverTemplates = () => {
    return (
        <section className="py-24 bg-[#FAFAFC]">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-extrabold text-[#111827] mb-4">
                    Included Cover Templates
                </h2>
                <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-6">
                    20 cover styles designed for standout titles and clear typography.
                </p>
                <p className="text-sm text-gray-400 mb-16">
                    From business and self-help to romance and fantasy—find a style for every genre.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {templates.map((template, idx) => (
                        <motion.div
                            key={template.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 group flex flex-col"
                        >
                            <div className={`aspect-[3/4] rounded-xl mb-4 overflow-hidden relative ${template.color} ${template.border ? 'border border-gray-100 flex items-center justify-center' : 'p-6 flex flex-col justify-center'}`}>
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className={`space-y-2 text-center transform transition-transform group-hover:scale-105 ${template.textColor}`}>
                                    <p className="text-[10px] font-black uppercase tracking-tighter opacity-70">Your Book Beautiful</p>
                                    <h4 className="text-sm font-black leading-tight">COVER TITLE HERE</h4>
                                    <p className="text-[8px] font-bold opacity-50">BY AUTHOR NAME</p>
                                </div>

                                {/* Decorative elements for templates */}
                                {template.name === "Geometric" && (
                                    <div className="absolute top-4 right-4 w-12 h-12 rounded-full border border-white/20" />
                                )}
                                {template.name === "Cyber" && (
                                    <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #34d399 1px, transparent 1px)', backgroundSize: '10px 10px' }} />
                                )}
                            </div>

                            <div className="mt-auto flex items-center justify-between px-2 pb-1">
                                <span className="text-sm font-bold text-gray-900">{template.name}</span>
                                <span className="text-[10px] font-bold text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">{template.number}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
