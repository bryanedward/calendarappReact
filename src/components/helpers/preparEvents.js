import moment from "moment";

export const preparEvents = (events = []) => {
   return events.map((item) => ({
       ...item,
       end: moment(item.end).toDate(),
       start: moment(item.start).toDate()
   }))
}