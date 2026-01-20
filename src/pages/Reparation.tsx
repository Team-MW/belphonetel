import React, { useState } from 'react';
import { PageWrapper } from '../components/PageWrapper';
import { Smartphone, Cpu, Check, ChevronDown, Wrench, ShieldCheck, Zap } from 'lucide-react';

const repairData = [
    {
        model: "iPhone 15 Series",
        repairs: [
            { name: "Écran Original", price: "À partir de 199€" },
            { name: "Batterie", price: "89€" },
            { name: "Vitre Arrière", price: "129€" },
            { name: "Connecteur de Charge", price: "79€" }
        ]
    },
    {
        model: "iPhone 14 Series",
        repairs: [
            { name: "Écran Original", price: "À partir de 169€" },
            { name: "Batterie", price: "79€" },
            { name: "Vitre Arrière", price: "99€" },
            { name: "Connecteur de Charge", price: "69€" }
        ]
    },
    {
        model: "iPhone 13 Series",
        repairs: [
            { name: "Écran Original", price: "À partir de 149€" },
            { name: "Batterie", price: "69€" },
            { name: "Vitre Arrière", price: "89€" },
            { name: "Connecteur de Charge", price: "59€" }
        ]
    },
    {
        model: "iPhone 12 Series",
        repairs: [
            { name: "Écran Original", price: "À partir de 129€" },
            { name: "Batterie", price: "59€" },
            { name: "Vitre Arrière", price: "79€" },
            { name: "Connecteur de Charge", price: "59€" }
        ]
    }
];

const microSoudureData = [
    { name: "Réparation Face ID", price: "89€" },
    { name: "Problème Audio (Puce)", price: "99€" },
    { name: "Court-circuit Carte Mère", price: "À partir de 120€" },
    { name: "Connecteur FPC (Soudure)", price: "79€" },
    { name: "Récupération de Données", price: "Sur Devis" }
];

import soudureImg from '../assets/soudure.jpg';

export const Reparation: React.FC = () => {
    const [openModel, setOpenModel] = useState<string | null>("iPhone 15 Series");

    return (
        <PageWrapper title="Tarifs Réparations - Belphonetel" description="Découvrez nos tarifs pour les réparations iPhone et micro-soudure.">
            {/* Hero Section with Image Background */}
            <section className="relative pt-32 pb-20 overflow-hidden min-h-[400px] flex items-center">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={soudureImg}
                        alt="Expertise Micro-soudure"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-[2px]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Nos Tarifs de Réparation</h1>
                    <p className="text-gray-200 text-lg max-w-2xl mx-auto font-medium">
                        Transparence totale, pièces de haute qualité et expertise certifiée pour tous vos appareils.
                    </p>
                </div>
            </section>

            {/* Micro Soudure Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="w-full md:w-1/2">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="p-2 bg-primary/10 rounded-lg text-primary">
                                    <Cpu size={24} />
                                </span>
                                <h2 className="text-3xl font-bold">Expertise Micro-Soudure</h2>
                            </div>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Nous intervenons sur les pannes les plus complexes au niveau microscopique.
                                Là où les autres boutiques échouent, nous réparons la carte mère directement.
                            </p>
                            <div className="space-y-4">
                                {microSoudureData.map((item, idx) => (
                                    <div key={idx} className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                                        <span className="font-medium text-gray-900">{item.name}</span>
                                        <span className="font-bold text-primary bg-white px-4 py-1 rounded-full shadow-sm">{item.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
                            {[
                                { icon: ShieldCheck, title: "Garantie 6 mois", desc: "Sur toutes les soudures" },
                                { icon: Zap, title: "Diagnostic Rapide", desc: "Sous 24-48h" },
                                { icon: Smartphone, title: "Sauvetage", desc: "Appareils HS" },
                                { icon: Wrench, title: "Outils Pro", desc: "Haute précision" }
                            ].map((feature, i) => (
                                <div key={i} className="p-6 bg-gray-50 rounded-3xl text-center">
                                    <feature.icon className="mx-auto text-primary mb-3" size={32} />
                                    <h4 className="font-bold mb-1">{feature.title}</h4>
                                    <p className="text-xs text-gray-500">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* iPhone Pricing Accordion */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Prix Réparations iPhone</h2>
                        <p className="text-gray-500">Sélectionnez votre modèle pour voir les tarifs détaillés.</p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-4">
                        {repairData.map((group, idx) => (
                            <div key={idx} className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100">
                                <button
                                    onClick={() => setOpenModel(openModel === group.model ? null : group.model)}
                                    className="w-full px-8 py-6 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                            <Smartphone size={20} />
                                        </div>
                                        <span className="text-xl font-bold text-gray-900">{group.model}</span>
                                    </div>
                                    <ChevronDown className={`transition-transform duration-300 ${openModel === group.model ? 'rotate-180' : ''}`} />
                                </button>

                                {openModel === group.model && (
                                    <div className="px-8 pb-8 animate-fade-in">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {group.repairs.map((repair, rIdx) => (
                                                <div key={rIdx} className="flex justify-between items-center p-4 border border-gray-100 rounded-2xl">
                                                    <div className="flex items-center gap-3">
                                                        <Check className="text-green-500" size={18} />
                                                        <span className="text-gray-700">{repair.name}</span>
                                                    </div>
                                                    <span className="font-bold text-gray-900">{repair.price}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-8 text-center p-6 bg-primary/5 rounded-2xl border border-primary/10">
                                            <p className="text-sm text-gray-600 mb-4">Votre panne n'est pas listée ? Nous réparons TOUT.</p>
                                            <button className="px-8 py-3 bg-primary text-white rounded-full font-bold shadow-lg hover:shadow-primary/30 transition-all active:scale-95">
                                                Demander un devis personnalisé
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </PageWrapper>
    );
};
