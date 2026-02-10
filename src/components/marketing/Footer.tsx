
import { Logo } from "@/components/shared/Logo";
import { certifications } from "@/lib/data";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function MarketingFooter() {
    return (
        <footer className="bg-slate-900 text-slate-200 border-t border-slate-800">
            <div className="container mx-auto px-4 md:px-6 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    <div className="space-y-4">
                        <Logo className="text-white" />
                        <p className="text-sm text-slate-400 max-w-xs">
                            Your trusted partner for global logistics, simplified sourcing, and seamless visa processing. Empowering businesses to trade without borders.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            <Link href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></Link>
                            <Link href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></Link>
                            <Link href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></Link>
                            <Link href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Services</h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="#" className="hover:text-emerald-400 transition-colors">Global Logistics</Link></li>
                            <li><Link href="#" className="hover:text-emerald-400 transition-colors">Warehousing</Link></li>
                            <li><Link href="#" className="hover:text-emerald-400 transition-colors">Sourcing</Link></li>
                            <li><Link href="#" className="hover:text-emerald-400 transition-colors">Visa Services</Link></li>
                            <li><Link href="#" className="hover:text-emerald-400 transition-colors">Trade Consulting</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="#" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-emerald-400 transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-emerald-400 transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-emerald-400 transition-colors">Contact</Link></li>
                            <li><Link href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Certifications</h3>
                        <div className="flex flex-wrap gap-2">
                            {certifications.map((cert) => (
                                <span key={cert} className="px-2 py-1 bg-slate-800 border border-slate-700 rounded text-xs text-slate-300 font-mono">
                                    {cert}
                                </span>
                            ))}
                        </div>
                        <div className="mt-6">
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Newsletter</h4>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="bg-slate-800 border-slate-700 text-sm p-2 rounded w-full focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                />
                                <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-2 rounded text-sm font-medium transition-colors">
                                    Go
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>© {new Date().getFullYear()} Akfam, Inc. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-slate-300">Terms</Link>
                        <Link href="#" className="hover:text-slate-300">Privacy</Link>
                        <Link href="#" className="hover:text-slate-300">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
