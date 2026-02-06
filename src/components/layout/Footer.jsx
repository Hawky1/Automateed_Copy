import React from 'react';
import { Button } from "@heroui/react";
import { Facebook, Instagram, Twitter, Youtube, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-[#0f0426] text-white pt-32 pb-16 relative overflow-hidden">
            {/* Subtle Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f0426] via-[#1a0a3a] to-[#0f0426]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-32">
                    {/* Brand Column */}
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-2 mb-10">
                            <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                Automateed
                            </span>
                        </div>
                        <p className="text-slate-400 font-bold text-sm leading-relaxed mb-10 max-w-sm">
                            AI powered business automation and productivity tools for modern entrepreneurs. Transform your workflow with cutting-edge technology.
                        </p>

                        <div className="flex items-center gap-3">
                            <Button isIconOnly variant="flat" className="bg-white/5 hover:bg-white/10 text-slate-400 rounded-full border border-white/5 transition-all">
                                <Facebook className="w-4 h-4" />
                            </Button>
                            <Button isIconOnly variant="flat" className="bg-white/5 hover:bg-white/10 text-slate-400 rounded-full border border-white/5 transition-all">
                                <Instagram className="w-4 h-4" />
                            </Button>
                            <Button isIconOnly variant="flat" className="bg-white/5 hover:bg-white/10 text-slate-400 rounded-full border border-white/5 transition-all">
                                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                                    <path d="M11.944 13L18.42 22H21.012L13.104 11L19.5 3H16.908L10.512 11.88L5.58 3H2.988L11.376 14.52L4.5 22H7.092L11.944 13ZM12 13.5L11.5 12.8L2.5 3V3H12V13.5Z" className="opacity-0" />
                                    <path d="M19.507 19H4.908L11.177 10.327L12.583 12.274L19.507 19ZM20 21L12 10L20 4H17L11 12.5L5 4H2L10 15L2 21H5L11 13.5L17 21H20Z" />
                                </svg>
                            </Button>
                            <Button isIconOnly variant="flat" className="bg-white/5 hover:bg-white/10 text-slate-400 rounded-full border border-white/5 transition-all">
                                <Youtube className="w-4 h-4" />
                            </Button>
                            <Button isIconOnly variant="flat" className="bg-white/5 hover:bg-white/10 text-slate-400 rounded-full border border-white/5 transition-all">
                                <Twitter className="w-4 h-4" />
                            </Button>
                            <Button isIconOnly variant="flat" className="bg-white/5 hover:bg-white/10 text-slate-400 rounded-full border border-white/5 transition-all">
                                <Mail className="w-4 h-4" />
                            </Button>
                            <Button isIconOnly variant="flat" className="bg-white/5 hover:bg-white/10 text-slate-400 rounded-full border border-white/5 transition-all">
                                <Linkedin className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
                        <div>
                            <h5 className="font-black text-white text-lg mb-8">Quick Links</h5>
                            <ul className="space-y-4 text-slate-400 text-sm font-bold">
                                <li><a href="#" className="hover:text-white transition-colors">Resources & Guides</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">🚀 Launch Express</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">No-Refund Policy</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Best eBook Creation Software</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">AI Automateed Affiliate</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Earn Credits</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">LLMs.txt</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Editorial Policy</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-black text-white text-lg mb-8 opacity-0">Hidden</h5>
                            <ul className="space-y-4 text-slate-400 text-sm font-bold">
                                <li className="flex items-center gap-2">
                                    <span className="w-3 h-3 bg-orange-500 rounded flex items-center justify-center text-[8px] text-white">W</span>
                                    <a href="#" className="hover:text-white transition-colors">AI eBook Creator Comparison</a>
                                </li>
                                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Data Deletion Policy</a></li>
                                <li className="flex items-center gap-2">
                                    <span className="text-xs">✨</span>
                                    <a href="#" className="hover:text-white transition-colors">Features (NEW!)</a>
                                </li>
                                <li><a href="#" className="hover:text-white transition-colors">AI Automateed Pricing</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">eBook Examples PDF</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">LLMs Full</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Licensing</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-bold text-slate-400">
                    <p>© 2026 Content Print LLC, Coastal Highway 16192, Lewes, Delaware. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Data Deletion</a>
                        <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
