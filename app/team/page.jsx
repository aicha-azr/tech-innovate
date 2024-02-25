import Card from "@/app/component/Card";
import { User } from 'lucide-react';

export default function Team() {
    const data = [
        {
            "name": "Alice Chen",
            "role": "Développeur principal en charge de l'architecture logicielle et de la conception des systèmes."
        },
        {
            "name": "Ibrahim Khan",
            "role": "Ingénieur en chef spécialisé dans le développement backend et les bases de données."
        },
        {
            "name": "Emily Garcia",
            "role": "Designer UX/UI responsable de la conception des interfaces utilisateur et de l'expérience utilisateur."
        },
        {
            "name": "David Patel",
            "role": "Développeur frontend passionné par les dernières technologies web et les frameworks JavaScript."
        },
        {
            "name": "Sarah Kim ",
            "role": "Analyste de données et scientifique informatique qui travaille sur l'analyse des données et les modèles prédictifs."
        },
        {
            "name": "Mohamed Ali",
            "role": "Administrateur système et DevOps, garantissant la disponibilité et les performances des infrastructures et des services informatiques"
        }
    ];

    return (
        <div className="flex flex-col items-center justify-center gap-10 text-black h-fit w-fit" data-aos="fade-up">
            <h2 className="text-3xl font-bold mt-2 text-center">Notre équipe</h2>
            <div className="flex flex-wrap items-center justify-center gap-20 h-fit w-fit">
            {data.map((card, index) => (
                <Card key={index} className="max-w-[20rem]">
                    <User size={100} />
                    <h3 className="font-bold">{card.name}</h3>
                    <h2>{card.role}</h2>
                </Card>
            ))}
            </div>
        </div>
    );
}
