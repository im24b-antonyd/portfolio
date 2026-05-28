import Link from 'next/link'
import HobbyCard from '@/components/HobbyCard'
import PageTitle from '@/components/PageTitle'
import PianoIcon from '@/data/svg/piano.svg'
import TTIcon from '@/data/svg/tt.svg'
import ChessIcon from '@/data/svg/chess.svg'

const hobbies = [
  {
    id: 1,
    title: 'Klavier',
    icon: <PianoIcon className="h-6 w-6" />,
  },
  {
    id: 2,
    title: 'Tischtennis',
    icon: <TTIcon className="h-6 w-6" />,
  },
  {
    id: 3,
    title: 'Schach',
    icon: <ChessIcon className="h-6 w-6" />,
  },
]

export default function About() {
  return (
    <div className="py-12 md:py-16">
      <div className="space-y-12">
        {/* Main Heading */}
        <PageTitle>Hier erfahren Sie mehr über mich!</PageTitle>

        {/* Bio Card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">Über Mich</h2>
          <p className="leading-relaxed text-gray-600 dark:text-gray-400">
            Hallo, ich bin Daniel Antony. Ich bin ein leidenschaftlicher Fullstack-Entwickler mit
            mit einem Fokus auf moderne Webtechnologien wie React und Next.js. Ich geniesse es,
            komplexe Probleme zu lösen und benutzerfreundliche Anwendungen zu erstellen. In meiner
            Freizeit lerne ich ständig neue Techniken.
          </p>
        </div>

        {/* Hobbys Section */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Hobbys</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {hobbies.map((hobby) => (
              <HobbyCard key={hobby.id} title={hobby.title} icon={hobby.icon} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center">
          <Link
            href="/contact"
            className="bg-primary-500 hover:bg-primary-600 dark:bg-primary-500 dark:hover:bg-primary-600 rounded-full px-8 py-3 font-semibold text-white shadow-sm transition-colors"
          >
            Kontaktieren Sie mich!
          </Link>
        </div>
      </div>
    </div>
  )
}
