"use client";

import { motion } from "framer-motion";

const About = () => {
    const stats = [
        { label: "B.Sc. IT", value: "3rd Year" },
        { label: "Projects", value: "10+" },
        { label: "Experience", value: "Hands-on" },
    ];

    const info = [
        { label: "Languages", value: "English, Hindi" },
        { label: "Certifications", value: "MSCIT, C/C++ Programming" },
        { label: "Location", value: "Navi Mumbai, India" },
    ];

    return (
        <section id="about" className="py-24 bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-8 flex items-center">
                            <span className="text-indigo-400 mr-4">01.</span> About Me
                        </h2>
                        <div className="space-y-6 text-slate-400 leading-relaxed">
                            <p>
                                I am a motivated <span className="text-indigo-300">B.Sc. IT student</span> in my 3rd year at Chhatrapati Shivaji Maharaj University,
                                with a deep passion for Web Development and Programming.
                            </p>
                            <p>
                                My journey involves building responsive, user-centric web applications using modern tech stacks like
                                <span className="text-teal-300"> React.js, Next.js, and Tailwind CSS</span>. I focus on writing clean, efficient code
                                while continuously learning new technologies to solve real-world problems.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 mb-10">
                            {stats.map((stat) => (
                                <div key={stat.label} className="p-4 bg-slate-800/50 rounded-xl border border-slate-800">
                                    <div className="text-2xl font-bold text-indigo-400">{stat.value}</div>
                                    <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4">
                            {info.map((item) => (
                                <div key={item.label} className="flex items-center text-sm">
                                    <span className="text-indigo-400 w-32 flex-shrink-0 font-semibold">{item.label}</span>
                                    <span className="text-slate-300">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="w-full aspect-square bg-gradient-to-br from-indigo-500 to-teal-500 rounded-3xl opacity-10 absolute -top-6 -left-6 blur-2xl" />
                        <div className="w-full aspect-square bg-slate-800 rounded-2xl border border-slate-700 relative overflow-hidden flex items-center justify-center p-12 group transition-all hover:border-indigo-500/50">
                            <div className="text-indigo-400/20 text-9xl font-black select-none group-hover:scale-110 transition-transform duration-500">SG</div>
                            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-slate-900 to-transparent">
                                <div className="text-lg font-bold text-white">Shashikant Giri</div>
                                <div className="text-sm text-indigo-400 uppercase tracking-widest font-medium">Full Stack Developer</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
