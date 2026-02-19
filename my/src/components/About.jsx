"use client";

import { motion } from "framer-motion";

const About = () => {
    const stats = [
        { label: "B.Sc. IT", value: "3rd Year" },
        { label: "Projects", value: "10+" },
        { label: "Language", value: "Hindi/English" },
    ];

    return (
        <section id="about" className="py-24 bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-8 flex items-center">
                            <span className="text-indigo-400 mr-4">01.</span> About Me
                        </h2>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            I am a motivated B.Sc. IT student with a strong interest in Web Development
                            and Programming. I have hands-on experience in building responsive web applications
                            using modern technologies like React.js and Next.js.
                        </p>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            My goal is to contribute to real-world projects while continuously learning and
                            refining my technical skills. I enjoy solving complex problems and turning designs
                            into reality with clean, efficient code.
                        </p>

                        <div className="grid grid-cols-3 gap-4">
                            {stats.map((stat) => (
                                <div key={stat.label} className="p-4 bg-slate-800/50 rounded-xl border border-slate-800">
                                    <div className="text-2xl font-bold text-indigo-400">{stat.value}</div>
                                    <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
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
                        <div className="w-full aspect-square bg-gradient-to-br from-indigo-500 to-teal-500 rounded-2xl opacity-20 absolute -top-4 -left-4" />
                        <div className="w-full aspect-square bg-slate-800 rounded-2xl border border-slate-700 relative overflow-hidden flex items-center justify-center p-12">
                            {/* Placeholder for an image or graphic */}
                            <div className="text-indigo-400/30 text-8xl font-black select-none">SG</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
