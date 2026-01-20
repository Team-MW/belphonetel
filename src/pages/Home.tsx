import React from 'react';
import { PageWrapper } from '../components/PageWrapper';
import { ArrowRight, Smartphone, Cpu, Battery, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

import iphoneImg from '../assets/iphone.png';

export const Home: React.FC = () => {
    return (
        <PageWrapper title="Accueil - Futura" description="Découvrez nos services de création web.">
            {/* Hero Section */}
            <section className="relative flex items-start bg-white overflow-hidden pt-0 pb-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-50 via-transparent to-transparent opacity-50" />

                <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start pt-12">
                    <div className="text-center lg:text-left">
                        <span className="inline-block px-4 py-2 rounded-full bg-indigo-50 text-primary text-sm font-semibold mb-6 animate-fade-in flex items-center gap-2 w-fit mx-auto lg:mx-0">
                            Urgences & Réparations 7j/7
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight tracking-tight animate-slide-up">
                            Les <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Docteurs</span><br />
                            de votre Mobile
                        </h1>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
                            Diagnostic précis, chirurgie de précision. Nous redonnons vie à vos compagnons technologiques avec un savoir-faire d'expert.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
                            <Link to="/contact" className="px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-primary transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2">
                                Prendre Rendez-vous <ArrowRight size={20} />
                            </Link>
                            <Link to="/portfolio" className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-medium hover:border-gray-300 hover:shadow-lg transition-all duration-300">
                                Nos Tarifs
                            </Link>
                        </div>
                    </div>

                    {/* Visual Metaphor: Image */}
                    <div className="relative flex items-start justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        <div className="relative z-10 animate-float">
                            <img src={iphoneImg} alt="iPhone Doctor" className="max-h-[700px] lg:max-h-[1100px] w-auto drop-shadow-2xl transition-transform duration-500 hover:rotate-3 hover:scale-105" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section (Dark/alt) */}
            <section className="pt-12 pb-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Interventions</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Du simple changement d'écran à la micro-soudure complexe, nous réparons ce que les autres ne peuvent pas.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Smartphone, title: "Écran & Vitre", desc: "Remplacement d'écrans cassés et vitres tactiles." },
                            { icon: Battery, title: "Batterie", desc: "Changement de batterie pour retrouver l'autonomie d'origine." },
                            { icon: Cpu, title: "Micro-Soudure", desc: "Réparation carte mère, connecteurs et composants." },
                            { icon: Wrench, title: "Dépannage", desc: "Désoxydation, problèmes audio, caméras, etc." }
                        ].map((service, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <service.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-500 leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Phone Sales Section (New) */}
            <section className="py-24 bg-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-2 block">Premium Devices</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                                La Nouvelle Ère <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Mobile</span>
                            </h2>
                        </div>
                        <Link to="/contact" className="group flex items-center gap-2 text-gray-900 font-medium hover:text-primary transition-colors">
                            Voir tout le catalogue <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                        </Link>
                    </div>

                    <div className="flex overflow-x-auto pb-8 gap-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
                        {[
                            { name: "iPhone 15 Pro Max", price: "1479€", color: "Titanium", gradient: "from-slate-700 to-slate-900" },
                            { name: "Samsung S24 Ultra", price: "1469€", color: "Titanium Violet", gradient: "from-purple-900 to-indigo-900" },
                            { name: "Pixel 8 Pro", price: "1099€", color: "Bay Blue", gradient: "from-blue-400 to-blue-600" },
                            { name: "Xiaomi 14 Ultra", price: "1499€", color: "Black", gradient: "from-gray-800 to-black" }
                        ].map((phone, i) => (
                            <div key={i} className="min-w-[280px] md:min-w-[320px] snap-center bg-gray-50 rounded-3xl p-6 group cursor-pointer hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-gray-100 relative overflow-hidden">
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${phone.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />

                                <div className="aspect-[4/5] mb-6 rounded-2xl bg-white shadow-inner flex items-center justify-center relative overflow-hidden">
                                    {/* Abstract Phone Representation */}
                                    <div className={`w-32 h-56 rounded-[2rem] bg-gradient-to-br ${phone.gradient} relative shadow-lg transform group-hover:scale-110 transition-transform duration-500`}>
                                        <div className="absolute top-0 inset-x-0 h-full bg-white/10" />
                                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-2 bg-black/20 rounded-full" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-xl font-bold text-gray-900">{phone.name}</h3>
                                        <span className="bg-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">{phone.price}</span>
                                    </div>
                                    <p className="text-sm text-gray-500">{phone.color}</p>
                                </div>

                                <button className="w-full mt-6 py-3 bg-gray-900 text-white rounded-xl font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:bg-primary">
                                    Commander
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials (White) */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Ils nous font confiance
                            </h2>
                            <p className="text-gray-500 text-lg mb-8">
                                Découvrez comment nous avons aidé nos clients à atteindre leurs objectifs et à transformer leur vision en réalité.
                            </p>
                            <Link to="/portfolio" className="text-primary font-medium hover:text-indigo-700 flex items-center gap-2">
                                Voir toutes les success stories <ArrowRight size={20} />
                            </Link>
                        </div>
                        <div className="grid gap-6">
                            {[1, 2].map((i) => (
                                <div key={i} className="bg-gray-50 p-8 rounded-3xl relative">
                                    <div className="flex gap-1 mb-4">
                                        {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-yellow-400">★</span>)}
                                    </div>
                                    <p className="text-gray-700 italic mb-6">"Une équipe incroyable, un design époustouflant et un suivi professionnel. Je recommande vivement !"</p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gray-300 rounded-full" />
                                        <div>
                                            <h4 className="font-bold text-gray-900">Sophie Martin</h4>
                                            <p className="text-sm text-gray-500">CEO, StartupFrame</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section Preview (Darker) */}
            <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-gray-900 opacity-50" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à démarrer ?</h2>
                    <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
                        Discutons de votre projet autour d'un café virtuel. L'avenir de votre entreprise commence aujourd'hui.
                    </p>
                    <Link to="/contact" className="inline-flex px-8 py-4 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg shadow-indigo-500/20">
                        Demander un devis gratuit
                    </Link>
                </div>
            </section>
        </PageWrapper>
    );
};
