// app/page.js
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function HomePage() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://votelog.tsdevcut.co.za/wp-json/ts/pageant/models/v1/occassions')
      const data = await res.json()
      setEvents(data)
    }

    fetchData()
  }, [])

  return (
    <>
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Miss South Africa over the years</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map(event => (
          <Link key={event.id} href={`/event/${event.slug}`} className="block bg-white rounded-lg shadow hover:shadow-lg transition">
            <img
              src={event.small_event_image?.url}
              alt={event.title}
              className="w-full h-100 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{event.title}</h2>
              {/* <p className="text-sm text-gray-600">{event.event_year}</p> */}
            </div>
          </Link>
        ))}
      </div>
    </main>
    </>
  )
}
