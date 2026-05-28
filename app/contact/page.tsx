import ContactForm from '@/components/ContactForm'
import PageTitle from '@/components/PageTitle'

export default function Contact() {
  return (
    <div className="py-12 md:py-16">
      <div className="space-y-10">
        {/* Header Outside Container */}
        <PageTitle>Kontaktformular</PageTitle>

        {/* Main Card Container */}
        <div className="rounded-2xl border border-gray-200 bg-slate-50 p-8 shadow-sm lg:p-12 dark:border-gray-700 dark:bg-gray-800">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            {/* Left Column: Text */}
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                In Kontakt kommen
              </h2>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                Haben Sie Fragen zu mir oder meinen Projekten?
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
