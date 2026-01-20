import React from 'react';
import { PageWrapper } from '../components/PageWrapper';
import { Shield, Smartphone, Battery, Cpu, Droplet, Settings } from 'lucide-react';

export const Services: React.FC = () => {
    const services = [
        {
            icon: Smartphone,
            title: "Réparation Écran",
            description: "Remplacement express de votre écran cassé ou vitre fissurée. Qualité d'origine garantie.",
            features: ["Écrans OLED/LCD", "Vitre arrière", "Calibration TrueTone"]
        },
        {
            icon: Battery,
            title: "Batterie & Autonomie",
            description: "Votre téléphone ne tient plus la charge ? Nous lui redonnons son endurance d'origine.",
            features: ["Batteries Premium", "Test de cycle", "Garantie 1 an"]
        },
        {
            icon: Cpu,
            title: "Micro-Soudure",
            description: "Intervention en profondeur sur la carte mère pour les pannes complexes.",
            features: ["Connecteur de charge", "Puce Audio/Réseau", "Récupération données"]
        },
        {
            icon: Droplet,
            title: "Désoxydation",
            description: "Sauvetage de votre appareil tombé dans l'eau. Traitement anti-corrosion professionnel.",
            features: ["Bain ultra-sons", "Nettoyage chimique", "Test complet"]
        },
        {
            icon: Settings,
            title: "Logiciel & Réseau",
            description: "Résolution des bugs, mises à jour, et déblocage réseau.",
            features: ["Réinitialisation", "Transfert de données", "Configuration"]
        },
        {
            icon: Shield,
            title: "Protection & Accessoires",
            description: "Tout pour protéger et équiper votre smartphone.",
            features: ["Verre trempé", "Coques antichoc", "Chargeurs rapides"]
        }
    ];

    return (
        <PageWrapper title="Nos Services - Belphonetel" description="Découvrez l'ensemble de nos prestations mobile.">
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Expertise 360°</h1>
                        <p className="text-xl text-gray-500">
                            Nous combinons créativité et expertise technique pour transformer vos idées en solutions digitales performantes.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group">
                                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                    <service.icon size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                <p className="text-gray-500 mb-6">{service.description}</p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-sm text-gray-600">
                                            <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Processus */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Notre Méthodologie</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {['Découverte', 'Stratégie', 'Création', 'Lancement'].map((step, i) => (
                            <div key={i} className="relative text-center">
                                <div className="text-6xl font-bold text-gray-100 mb-4 absolute -top-8 left-1/2 -translate-x-1/2 -z-10">0{i + 1}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{step}</h3>
                                <p className="text-gray-500 text-sm">Une approche structurée pour garantir le succès de votre projet.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </PageWrapper>
    );
};
