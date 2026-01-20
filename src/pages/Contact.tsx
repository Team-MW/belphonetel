import React from 'react';
import { PageWrapper } from '../components/PageWrapper';
import { Mail, MessageSquare, Phone, Send } from 'lucide-react';

export const Contact: React.FC = () => {
    return (
        <PageWrapper title="Contact - Belphonetel" description="Contactez-nous pour votre projet.">
            <section className="py-20 bg-gray-50 min-h-screen flex items-center">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Info */}
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Parlons de<br />votre vision</h1>
                            <p className="text-xl text-gray-500 mb-12">
                                Vous avez un projet en tête ? Nous serions ravis de collaborer avec vous. Remplissez le formulaire et nous vous répondrons sous 24h.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg">Email</h3>
                                        <p className="text-gray-500">hello@futura.com</p>
                                        <p className="text-gray-500">support@futura.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg">Téléphone</h3>
                                        <p className="text-gray-500">+33 1 23 45 67 89</p>
                                        <p className="text-sm text-gray-400">Du Lundi au Vendredi, 9h-18h</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary shrink-0">
                                        <MessageSquare size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg">Live Chat</h3>
                                        <p className="text-gray-500">Disponible sur le site</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h2>
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-gray-700">Nom complet</label>
                                        <input type="text" id="name" className="w-full px-4 py-3 bg-gray-50 border-gray-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                                        <input type="email" id="email" className="w-full px-4 py-3 bg-gray-50 border-gray-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="john@example.com" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">Sujet</label>
                                    <select id="subject" className="w-full px-4 py-3 bg-gray-50 border-gray-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all">
                                        <option value="">Sélectionnez un sujet</option>
                                        <option value="devis">Demande de devis</option>
                                        <option value="partenariat">Partenariat</option>
                                        <option value="autre">Autre</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                                    <textarea id="message" rows={4} className="w-full px-4 py-3 bg-gray-50 border-gray-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="Parlez-nous de votre projet..."></textarea>
                                </div>

                                <button className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                                    Envoyer le message <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </PageWrapper>
    );
};
