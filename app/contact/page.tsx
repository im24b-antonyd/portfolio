import ContactForm from '@/components/ContactForm'

export default function Contact() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-8">
        {/* Header Outside Container */}
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-gray-100">
          Kontaktformular
        </h1>

        {/* Main Card Container */}
        <div className="rounded-2xl border border-gray-200 bg-slate-50 p-8 shadow-sm lg:p-12 dark:border-gray-700 dark:bg-gray-800">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
            {/* Left Column: Text */}
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                In Kontakt kommen
              </h2>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                Haben sie fragen über mich oder zu meinen Projekte?
              </p>
            </div>

            {/* Right Column: Form */}
            <div className="flex w-full items-center justify-center">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
