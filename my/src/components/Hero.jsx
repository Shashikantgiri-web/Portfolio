"use client";

import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-indigo-400 font-medium tracking-widest mb-4"
                >
                    HI THERE, I'M
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold mb-6"
                >
                    Shashikant <span className="text-white/20">Giri</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    A passionate Full Stack Web Developer and B.Sc. IT student driven by creating
                    interactive, modern, and high-performance web applications.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-4"
                >
                    <a
                        href="#projects"
                        className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold transition-all shadow-lg shadow-indigo-500/20"
                    >
                        View My Work
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 border border-slate-700 hover:border-indigo-400 text-slate-300 rounded-full font-semibold transition-all"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
