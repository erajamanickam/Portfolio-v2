import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="text-white py-4 shadow-[0_0_3px_rgba(255,255,255,0.15)] bg-slate-900">
            <div className="text-center md:text-left container mx-auto flex flex-col md:flex-row md:justify-between">
                <div className="text-sm mb-2 md:mb-0">&copy; {currentYear}. All rights reserved.</div>
                <div className="text-sm">Design & Dev by Raja</div>
            </div>
        </footer>
    );
};

export default Footer;
