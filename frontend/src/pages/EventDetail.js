import { useParams } from 'react-router-dom';

function EventsDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>EventDetailPage</h1>
      <p>Event ID: {params.eventId}</p>
    </>
  );
}

export default EventsDetailPage;
