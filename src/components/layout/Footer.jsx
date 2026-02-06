import React from 'react';

export const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center">
                                <div className="w-3 h-3 bg-white rounded-full" />
                            </div>
                            <span className="text-xl font-bold text-gray-900">Automateed</span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Empowering creators around the world with AI-powered eBook generation tools.
                        </p>
                    </div>

                    <div>
                        <h5 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Product</h5>
                        <ul className="space-y-4 text-sm text-gray-500 font-medium">
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">How it works</a></li>
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">Lifetime Deal</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Resources</h5>
                        <ul className="space-y-4 text-sm text-gray-500 font-medium">
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">AI News</a></li>
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">Knowledge Base</a></li>
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">Tutorials</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Company</h5>
                        <ul className="space-y-4 text-sm text-gray-500 font-medium">
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-xs font-medium">
                    <p>© 2026 Automateed Inc. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-gray-600 transition-colors">Twitter</a>
                        <a href="#" className="hover:text-gray-600 transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-gray-600 transition-colors">Discord</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
