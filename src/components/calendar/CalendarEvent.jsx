export const CalendarEvent = ({ event }) => {
  const { title, notes } = event

  return (
    <div>
      <small>
        {title}
      </small>
      <p>
        {notes}
      </p>
    </div>
  )
}
