import { makeStyles } from '@material-ui/core';
import { isSameMonth } from 'date-fns';
import React, { Fragment, ReactElement } from 'react';
import DateUtils from '../../../../tools/DateUtils';
import DateAvatar from '../../../dateAvatar/DateAvatar';

export interface CompactMonthGridProps {
    /**
     * Date set to any day inside of a day.
     */
    day: Date;

    onDateAvatarClick?: (event: React.MouseEvent<any>, day: Date) => void;
}

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(7, auto)',
        gridRowGap: '4px',
    },
}));

export default function CompactMonthGrid(props: CompactMonthGridProps): ReactElement {
    const classes = useStyles();

    function createGrid(): ReactElement {
        const gridDays = DateUtils.getWeeksDaysOfMonth(props.day);
        let columns: ReactElement[] = [];

        gridDays.forEach((day) => {
            columns.push(createGridElement(day));
        });

        return (
            <div className={classes.container} key={'compact-grid-container'}>
                {columns}
            </div>
        );
    }

    function createGridElement(day: Date): ReactElement {
        const isDateSameMonth = !isSameMonth(props.day, day);

        return (
            <Fragment key={['compact-grid-element', day.getMonth(), day.getDate()].join('-')}>
                <DateAvatar
                    date={day}
                    size="small"
                    highlightOnHover
                    grayOutText={isDateSameMonth}
                    onClick={props.onDateAvatarClick}
                    plainText
                    disableTodayBackground={isDateSameMonth}
                />
            </Fragment>
        );
    }

    return <Fragment>{createGrid()}</Fragment>;
}
