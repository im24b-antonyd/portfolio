'use client'

export default function ContactForm() {
  return (
    <form className="flex w-full flex-col space-y-4">
      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="mb-1 block text-sm font-medium text-gray-900 dark:text-gray-100"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Dein Name"
          className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
          required
        />
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="mb-1 block text-sm font-medium text-gray-900 dark:text-gray-100"
        >
          E-Mail-Adresse
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="deine.email@beispiel.de"
          className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
          required
        />
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="mb-1 block text-sm font-medium text-gray-900 dark:text-gray-100"
        >
          Nachricht
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Deine Nachricht hier..."
          className="w-full resize-y rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
          required
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-primary-500 hover:bg-primary-600 dark:bg-primary-500 dark:hover:bg-primary-600 rounded-full px-8 py-3 font-semibold text-white shadow-sm transition-colors"
      >
        Nachricht senden
      </button>
    </form>
  )
}
