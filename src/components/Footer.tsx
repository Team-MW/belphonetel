import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-100">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary rounded-lg"></div>
                            <span className="text-xl font-bold text-gray-900">BELPHONETEL</span>
                        </div>
                        <p className="text-gray-500 leading-relaxed">
                            Docteurs de votre technologie. Réparation, vente et maintenance de vos appareils mobiles.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all duration-300">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-6">Liens Rapides</h3>
                        <ul className="space-y-4">
                            {['Accueil', 'Services', 'Portfolio', 'Contact', 'Mentions Légales'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-500 hover:text-primary transition-colors flex items-center gap-2 group">
                                        <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-primary transition-colors" />
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-6">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-500">
                                <MapPin className="shrink-0 text-primary mt-1" size={18} />
                                <span>123 Avenue de l'Innovation,<br />75001 Paris, France</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-500">
                                <Mail className="shrink-0 text-primary" size={18} />
                                <span>contact@belphonetel.com</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-500">
                                <Phone className="shrink-0 text-primary" size={18} />
                                <span>+33 1 23 45 67 89</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-6">Newsletter</h3>
                        <p className="text-gray-500 mb-4 text-sm">Recevez nos dernières actualités et offres.</p>
                        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Votre email"
                                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            />
                            <button className="w-full py-3 bg-gray-900 text-white rounded-xl hover:bg-primary transition-colors flex items-center justify-center gap-2">
                                S'inscrire <ArrowRight size={16} />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© 2024 BELPHONETEL. Tous droits réservés.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-primary">Politique de confidentialité</a>
                        <a href="#" className="hover:text-primary">CGV</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
