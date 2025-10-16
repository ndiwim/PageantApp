// app/event/[slug]/page.js
import Image from 'next/image'

async function getEvent(slug) {
  const res = await fetch('https://votelog.tsdevcut.co.za/wp-json/ts/pageant/models/v1/occassions')
  const data = await res.json()
  return data.find(item => item.slug === slug)
}

export default async function EventPage({ params }) {
  const event = await getEvent(params.slug)

  if (!event) {
    return <div className="p-6">Event not found.</div>
  }

  return (
    <>
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">{event.title}</h1>

      <div className="mb-6">
        <img src={event.banner_event_main?.url} alt={event.title} className="w-full rounded-md" />
      </div>

      <div className="prose mb-6 max-w-none" dangerouslySetInnerHTML={{ __html: event.description_event }} />

      <div className="mb-6">
        <iframe
          src={event.link_main_youtube}
          className="w-full aspect-video rounded-md"
          allowFullScreen
        />
      </div>

      {/* {event.winning_candidate && (
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-2">Winner: {event.winning_candidate.candidate_name} {event.winning_candidate.candidate_surname}</h2>
          <img src={event.winning_candidate.candidate_featured_image?.url} className="w-full max-w-md rounded-md" />
          <div className="prose mt-4 max-w-none" dangerouslySetInnerHTML={{ __html: event.winning_candidate.candidate_bio }} />
        </div>
      )} */}
    </main>

    </>
  )
}
