import TechCard from '@/components/TechCard'

// Import custom SVGs
import NextJsIcon from '@/data/icons/nextjs.svg'
import ReactIcon from '@/data/icons/react.svg'
import HtmlIcon from '@/data/icons/html.svg'
import CssIcon from '@/data/icons/css.svg'
import TailwindIcon from '@/data/icons/tailwind.svg'
import JsIcon from '@/data/icons/js.svg'
import SpringIcon from '@/data/icons/spring.svg'
import PythonIcon from '@/data/icons/python.svg'
import FlaskIcon from '@/data/icons/flask.svg'
import PostgresIcon from '@/data/icons/psql.svg'
import MysqlIcon from '@/data/icons/mysql.svg'
import MongoIcon from '@/data/icons/mongo.svg'
import PostmanIcon from '@/data/icons/postman.svg'
import GitIcon from '@/data/icons/git.svg'
import WebstormIcon from '@/data/icons/webstorm.svg'
import VscodeIcon from '@/data/icons/vscode.svg'

const technologies = {
  frontend: [
    { name: 'Next.js', icon: <NextJsIcon className="h-8 w-8" /> },
    { name: 'React', icon: <ReactIcon className="h-8 w-8" /> },
    { name: 'HTML', icon: <HtmlIcon className="h-8 w-8" /> },
    { name: 'CSS', icon: <CssIcon className="h-8 w-8" /> },
    { name: 'Tailwind CSS', icon: <TailwindIcon className="h-8 w-8" /> },
    { name: 'JavaScript', icon: <JsIcon className="h-8 w-8" /> },
  ],
  backend: [
    { name: 'Java Spring Boot', icon: <SpringIcon className="h-8 w-8" /> },
    { name: 'Python', icon: <PythonIcon className="h-8 w-8" /> },
    { name: 'Flask', icon: <FlaskIcon className="h-8 w-8" /> },
  ],
  datenbanken: [
    { name: 'PostgreSQL', icon: <PostgresIcon className="h-8 w-8" /> },
    { name: 'MySQL', icon: <MysqlIcon className="h-8 w-8" /> },
    { name: 'MongoDB', icon: <MongoIcon className="h-8 w-8" /> },
  ],
  tools: [
    { name: 'Postman', icon: <PostmanIcon className="h-8 w-8" /> },
    { name: 'Git', icon: <GitIcon className="h-8 w-8" /> },
    { name: 'WebStorm', icon: <WebstormIcon className="h-8 w-8" /> },
    { name: 'VS Code', icon: <VscodeIcon className="h-8 w-8" /> },
  ],
}

export default function Tech() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header Outside the Main Grid */}
      <h1 className="mb-12 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-gray-100">
        Technologien
      </h1>

      {/* Main Grid: 1 column mobile, 2 columns desktop */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
        {/* Frontend Category */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Frontend</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {technologies.frontend.map((tech) => (
              <TechCard key={tech.name} name={tech.name} icon={tech.icon} />
            ))}
          </div>
        </div>

        {/* Backend Category */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Backend</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {technologies.backend.map((tech) => (
              <TechCard key={tech.name} name={tech.name} icon={tech.icon} />
            ))}
          </div>
        </div>

        {/* Databases Category */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Datenbanken</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {technologies.datenbanken.map((tech) => (
              <TechCard key={tech.name} name={tech.name} icon={tech.icon} />
            ))}
          </div>
        </div>

        {/* Tools Category */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Tools</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {technologies.tools.map((tech) => (
              <TechCard key={tech.name} name={tech.name} icon={tech.icon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
