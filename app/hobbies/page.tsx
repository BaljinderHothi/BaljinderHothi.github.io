import { Navigation } from "@/components/navigation"
import Link from "next/link"

const hobbies = [
    {
        title: "Photography",
        description: "Seattle skyline view from my visit - Summer 2025. I love photography in my free time and own a Fujifilm camera.",
        image: "/images/DSCF3635.JPEG",
    },
    {
        title: "Museums",
        description: "Chihuly Garden and Glass museum in Seattle, Washington - Summer 2025. I have a deep appreciation for museums and art installations.",
        image: "/images/DSCF3655.jpg",
    },
    {
        title: "Hiking",
        description: "[Coming soon] Photos from my hiking adventures in the Pacific Northwest.",
    },
    {
        title: "Cooking",
        description: "[Coming soon] Culinary experiments and favorite recipes.",
    },
    {
        title: "Reading",
        description: "[Coming soon] Books I'm currently reading and recommendations.",
    },
]

export default function HobbiesPage() {
    return (
        <main className="min-h-screen bg-[#1a1d24]">
            <Navigation />
            <div className="pt-24 px-6 pb-16 max-w-4xl mx-auto">
                <Link href="/" className="text-slate-500 hover:text-slate-300 transition-colors text-sm mb-8 inline-block">
                    ← back
                </Link>
                <h1 className="font-serif text-4xl sm:text-5xl text-slate-200 mb-12">hobbies</h1>

                <div className="grid gap-8 sm:grid-cols-2">
                    {hobbies.map((hobby) => (
                        <article
                            key={hobby.title}
                            className="bg-slate-800/40 backdrop-blur-sm rounded-lg overflow-hidden border border-slate-700/50"
                        >
                            {hobby.image && (
                                <div className="aspect-video relative">
                                    <img
                                        src={hobby.image}
                                        alt={hobby.title}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            )}
                            <div className="p-6">
                                <h2 className="font-serif text-xl text-slate-200 mb-2">{hobby.title}</h2>
                                <p className="text-slate-400 text-sm leading-relaxed">{hobby.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    )
}
