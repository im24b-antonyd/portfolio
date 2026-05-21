'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault() // 1. Stops the page from refreshing
    setStatus('loading')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    }

    try {
      // 2. This must match the route you created in /api/contact/route.ts
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setStatus('success')
        ;(e.target as HTMLFormElement).reset() // Clears the form
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col space-y-4">
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
        disabled={status === 'loading'}
        className="bg-primary-500 hover:bg-primary-600 rounded-full px-8 py-3 font-semibold text-white shadow-sm transition-colors disabled:opacity-50"
      >
        {status === 'loading' ? 'Wird gesendet...' : 'Nachricht senden'}
      </button>

      {/* Status Messages */}
      {status === 'success' && (
        <p className="text-sm text-green-600 dark:text-green-400">
          Vielen Dank! Deine Nachricht wurde gesendet.
        </p>
      )}
      {status === 'error' && (
        <p className="text-sm text-red-600 dark:text-red-400">
          Fehler beim Senden. Bitte versuche es später erneut.
        </p>
      )}
    </form>
  )
}
