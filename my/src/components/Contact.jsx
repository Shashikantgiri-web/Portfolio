"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-24">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
                    <p className="text-slate-400 mb-12 max-w-lg mx-auto">
                        I'm currently seeking an entry-level Web Developer role to apply my technical
                        skills and contribute to real-world projects. Whether you have a question
                        or just want to say hi, my inbox is always open!
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <a
                            href="mailto:shashikntshankar707@gmail.com"
                            className="p-6 bg-slate-900 border border-slate-800 rounded-2xl flex items-center space-x-4 hover:border-indigo-500 transition-colors"
                        >
                            <div className="w-12 h-12 bg-indigo-500/10 rounded-full flex items-center justify-center text-indigo-400">
                                <Mail size={24} />
                            </div>
                            <div className="text-left">
                                <div className="text-sm text-slate-500">Email Me</div>
                                <div className="font-semibold text-slate-200">shashikntshankar707@gmail.com</div>
                            </div>
                        </a>

                        <a
                            href="tel:+917873059283"
                            className="p-6 bg-slate-900 border border-slate-800 rounded-2xl flex items-center space-x-4 hover:border-indigo-500 transition-colors"
                        >
                            <div className="w-12 h-12 bg-indigo-500/10 rounded-full flex items-center justify-center text-indigo-400">
                                <Phone size={24} />
                            </div>
                            <div className="text-left">
                                <div className="text-sm text-slate-500">Call Me</div>
                                <div className="font-semibold text-slate-200">+91 7873059283</div>
                            </div>
                        </a>
                    </div>

                    <div className="flex justify-center space-x-6">
                        <a href="https://github.com/Shashikantgiri-web" target="_blank" className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition-all">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/shashikant-giri-7a4549297" target="_blank" className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition-all">
                            <Linkedin size={24} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
