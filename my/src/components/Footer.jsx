const Footer = () => {
    return (
        <footer className="py-12 border-t border-slate-800/50 text-center">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-slate-500 text-sm">
                    Designed & Built by <span className="text-indigo-400 font-medium">Shashikant Giri</span>
                </p>
                <p className="text-slate-600 text-[10px] mt-2 uppercase tracking-widest">
                    © {new Date().getFullYear()} All Rights Reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
