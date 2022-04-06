export const CalendarEvent = ({ event }) => {
  const { title, notes } = event

  return (
    <div>
      <small>
        {title}
      </small>
      <small>
        {notes}
      </small>
    </div>
  )
}
