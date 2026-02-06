import React from 'react';
import { motion } from 'framer-motion';

const genres = [
    {
        title: "Fantasy Genre",
        subtitle: "Epic fantasy covers",
        color: "bg-yellow-400",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80",
        coverTitle: "DIGITAL WEALTH",
        author: "E. JOHN"
    },
    {
        title: "Romance Genre",
        subtitle: "Captivating romance covers",
        color: "bg-sky-400",
        image: "https://images.unsplash.com/photo-1516589174184-c685266144ef?auto=format&fit=crop&q=80",
        coverTitle: "HOW TO TAKE LIFE LIGHTLY",
        author: "Eleonora Vitali"
    },
    {
        title: "Children's Books",
        subtitle: "Magical stories for kids",
        color: "bg-emerald-400",
        image: "https://images.unsplash.com/photo-1510172951991-859a69bc4171?auto=format&fit=crop&q=80",
        coverTitle: "The Green Machine",
        author: "Dash's Quest"
    }
];

export const CoverDesign = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-extrabold text-[#111827] mb-6">
                    Design Beautiful eBook Covers
                </h2>
                <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-16 leading-relaxed">
                    A stunning cover can make or break your ebook's success. Create stunning visuals with simple requests like "a wolf." Incorporate images seamlessly into your chapters and tailor content to your brand's unique style.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {genres.map((genre, idx) => (
                        <motion.div
                            key={genre.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center group"
                        >
                            <div className="relative mb-8 transform group-hover:scale-105 transition-transform duration-500">
                                {/* 3D Book Shadow Effect */}
                                <div className="absolute -inset-4 bg-gray-200/50 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="relative w-64 h-80 bg-white rounded shadow-2xl overflow-hidden border-l-[10px] border-black/10 flex flex-col">
                                    <div className="h-[60%] w-full overflow-hidden">
                                        <img src={genre.image} alt={genre.title} className="w-full h-full object-cover" />
                                    </div>
                                    <div className={`h-[40%] w-full ${genre.color} p-6 flex flex-col justify-center items-center text-center`}>
                                        <h4 className="text-xs font-black tracking-widest text-black/80 mb-2">{genre.coverTitle}</h4>
                                        <p className="text-[10px] font-bold text-black/60">{genre.author}</p>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-[#111827] mb-2">{genre.title}</h3>
                            <p className="text-sm text-gray-400 font-medium">{genre.subtitle}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
