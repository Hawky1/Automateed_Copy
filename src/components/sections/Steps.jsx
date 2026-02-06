import React from 'react';
import { BookOpen, Zap, Send } from 'lucide-react';

const steps = [
    {
        icon: <BookOpen className="w-8 h-8" />,
        title: 'Choose Topic',
        description: 'Pick your ebook topic and define chapters',
        color: 'bg-indigo-600'
    },
    {
        icon: <Zap className="w-8 h-8" />,
        title: 'AI Generation',
        description: 'Watch our AI create professional content',
        color: 'bg-blue-600'
    },
    {
        icon: <Send className="w-8 h-8" />,
        title: 'Publish & Sell',
        description: 'Publish in a few clicks on Automateed and start selling',
        color: 'bg-indigo-500'
    }
];

export const Steps = () => {
    return (
        <section className="py-24 bg-[#FAFAFC]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, idx) => (
                        <div key={idx} className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300">
                            <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform`}>
                                {step.icon}
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h4>
                            <p className="text-gray-500 font-medium leading-relaxed px-4">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
