"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
    const projects = [
        {
            title: "PassOP",
            description: "Secure password management web application with clean and responsive UI.",
            tech: ["React.js", "Tailwind CSS", "MongoDB"],
            github: "https://github.com/Shashikantgiri-web/PassOP",
            live: "https://pass-op-phi-nine.vercel.app/"
        },
        {
            title: "Bitline - URL Shortener",
            description: "Converts long URLs into short, shareable links with server-side API handling.",
            tech: ["Next.js", "MongoDB", "Tailwind"],
            github: "https://github.com/Shashikantgiri-web/Url-Shortener",
            live: "https://url-shortener-seven-orpin.vercel.app/"
        },
        {
            title: "Link Tree Clone",
            description: "Organize and display multiple personal and social links in one page.",
            tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
            github: "https://github.com/Shashikantgiri-web/LinkTree-Clone",
            live: "https://linktree-pink-eight.vercel.app/"
        },
        {
            title: "To-Do App",
            description: "Responsive application with complete add, update, and delete functionality.",
            tech: ["React.js", "Tailwind CSS"],
            github: "https://github.com/Shashikantgiri-web/Todo-App",
            live: "https://todo-app-gamma-eight-67.vercel.app/"
        },
        {
            title: "Twitter (X.com) Clone",
            description: "Frontend clone of the popular social media platform with modern features.",
            tech: ["HTML", "Tailwind CSS", "JavaScript"],
            github: "https://github.com/Shashikantgiri-web/Twitter-X.com-",
            live: "https://twitter-x-com.vercel.app/"
        },
        {
            title: "Bookoe",
            description: "Book library website with categories and proper API integration.",
            tech: ["React", "Custom API", "CSS"],
            github: "https://github.com/Shashikantgiri-web/Bookoe",
            live: "https://bookoe.netlify.app/"
        }
    ];

    return (
        <section id="projects" className="py-24 bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-16 flex items-center">
                    <span className="text-indigo-400 mr-4">03.</span> Featured Work
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-slate-800/40 border border-slate-700/50 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition-all"
                        >
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400">
                                        {/* Folder Icon Placeholder */}
                                        <span className="text-2xl">📁</span>
                                    </div>
                                    <div className="flex space-x-4 text-slate-400">
                                        <a href={project.github} target="_blank" className="hover:text-indigo-400 transition-colors">
                                            <Github size={20} />
                                        </a>
                                        <a href={project.live} target="_blank" className="hover:text-indigo-400 transition-colors">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-xs font-mono text-indigo-400/80">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
