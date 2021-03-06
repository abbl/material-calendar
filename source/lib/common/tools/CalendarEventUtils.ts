import CalendarEvent from '../api/CalendarEvent';
import { EventStorage } from '../api/EventStorage';

export default class CalendarEventUtils {
    public static getDayEvents(eventStorage: EventStorage, date: Date): CalendarEvent[] | undefined {
        return eventStorage?.[date.getFullYear()]?.[date.getMonth()]?.[date.getDate()];
    }

    public static getMonthEvents(eventStorage: EventStorage, date: Date): CalendarEvent[] {
        const monthEvents = eventStorage?.[date.getFullYear()]?.[date.getMonth()];
        let calendarEvents: CalendarEvent[] = [];

        if (monthEvents) {
            for (let day of Object.values(monthEvents)) {
                calendarEvents.push(...day);
            }

            return calendarEvents;
        }
        return [];
    }
}
