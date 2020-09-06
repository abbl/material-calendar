import { Grid } from '@material-ui/core';
import React, { ReactElement } from 'react';
import CalendarEvent from '../../common/api/CalendarEvent';
import Day from './Day';
import DayEventGrid from './DayEventGrid';

interface DayGridProps {
    dayEvents: CalendarEvent[];
}

function DayGrid(props: DayGridProps): ReactElement {
    function renderGridElements(): ReactElement[] {
        let elements: ReactElement[] = [];

        for (let i = 0; i < 24; i++) {
            elements.push(
                <Grid item key={i}>
                    <Day {...props} hideBorder={i === 0 ? true : false} hour={i} />
                </Grid>,
            );
        }

        return elements;
    }

    return (
        <div style={{ position: 'relative' }}>
            <Grid container direction="column">
                {renderGridElements()}
            </Grid>
            <DayEventGrid dayEvents={props.dayEvents} />
        </div>
    );
}

export default DayGrid;
