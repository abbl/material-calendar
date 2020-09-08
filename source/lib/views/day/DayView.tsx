import React, { ReactElement, useContext } from 'react';
import CalendarEvent from '../../common/api/CalendarEvent';
import { CalendarContext } from '../../common/contexts/CalendarContext';
import { ViewContext } from '../../common/contexts/ViewContext';
import DayContent from './components/dayContent/DayContent';
import DayHeader from './components/dayHeader/DayHeader';

export interface DayViewProps {}

export default function DayView(props: DayViewProps): ReactElement {
    const calendarContext = useContext(CalendarContext);
    const viewContext = useContext(ViewContext);

    /**
     * Loads events from EventStorage based on highlightDate.
     *
     * If there is no events for that day function will
     * return empty array.
     */
    function getEvents(): CalendarEvent[] {
        const dayDate: Date = viewContext.highlightDate;
        const dayEvents =
            calendarContext.eventStorage?.[dayDate.getFullYear()]?.[dayDate.getMonth()]?.[dayDate.getDate()];

        return dayEvents ? dayEvents : [];
    }

    return (
        <div>
            <DayHeader highlightDate={viewContext.highlightDate} headerContentLeftOffset={56} />
            <DayContent events={getEvents()} />
        </div>
    );
}
