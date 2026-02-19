"use client";

import { motion } from "framer-motion";

const Skills = () => {
    const skillsData = [
        {
            category: "Frontend",
            skills: ["HTML", "CSS", "JavaScript", "React Js", "Next Js", "Vite", "Bootstrap", "Tailwind CSS", "Framer Motion"]
        },
        {
            category: "Backend & DB",
            skills: ["Node JS", "Express Js", "MongoDB", "NPM", "Postman"]
        },
        {
            category: "Tools & OS",
            skills: ["VS Code", "Github", "Cursor", "Windows", "Figma", "Excel", "PowerBI (Learning)"]
        },
        {
            category: "Others",
            skills: ["C", "C++", "DSA", "Vercel", "Netlify", "Cloudflare"]
        }
    ];

    return (
        <section id="skills" className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-16 flex items-center">
                    <span className="text-indigo-400 mr-4">02.</span> Technical Skills
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillsData.map((item, idx) => (
                        <motion.div
                            key={item.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-colors"
                        >
                            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                                <div className="w-2 h-2 rounded-full bg-indigo-500 mr-3" />
                                {item.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {item.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-slate-800 text-slate-300 rounded-md text-sm border border-slate-700"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
