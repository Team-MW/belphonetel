import React from 'react';
import { PageWrapper } from '../components/PageWrapper';
import { ExternalLink } from 'lucide-react';

export const Portfolio: React.FC = () => {
    const projects = [
        {
            title: "iPhone 13 Pro Max",
            category: "Écran & Dos",
            image: "bg-gradient-to-br from-gray-800 to-gray-900",
            description: "Remplacement bloc écran OLED et vitre arrière laser."
        },
        {
            title: "MacBook Air M1",
            category: "Désoxydation",
            image: "bg-gradient-to-br from-indigo-200 to-blue-200",
            description: "Nettoyage complet carte mère suite dégâts des eaux."
        },
        {
            title: "Samsung S23 Ultra",
            category: "Micro-Soudure",
            image: "bg-gradient-to-br from-purple-800 to-indigo-900",
            description: "Réparation connecteur FPC caméra sur carte mère."
        },
        {
            title: "iPad Pro 12.9",
            category: "Batterie",
            image: "bg-gradient-to-br from-slate-200 to-gray-300",
            description: "Remplacement batterie haute capacité et calibrage."
        }
    ];

    return (
        <PageWrapper title="Portfolio - Belphonetel" description="Nos dernières réparations.">
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nos Interventions</h1>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                            Découvrez notre savoir-faire à travers nos dernières réparations complexes.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {projects.map((project, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-3xl shadow-lg aspect-video cursor-pointer">
                                {/* Background Representation */}
                                <div className={`absolute inset-0 ${project.image} transition-transform duration-500 group-hover:scale-105`} />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6 backdrop-blur-sm">
                                    <span className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        {project.category}
                                    </span>
                                    <h3 className="text-3xl font-bold text-white mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                        {project.title}
                                    </h3>
                                    <p className="text-white/90 mb-6 max-w-md translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                        {project.description}
                                    </p>
                                    <button className="px-6 py-2 bg-white text-gray-900 rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-150 hover:bg-primary hover:text-white">
                                        Voir le projet <ExternalLink size={16} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </PageWrapper>
    );
};
