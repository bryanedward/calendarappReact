export const CalendarEvent = ({ event }) => {
  const { title, description } = event

  return (
    <div>
      <small>
        {title}
      </small>
      <p>
        {description}
      </p>
    </div>
  )
}
