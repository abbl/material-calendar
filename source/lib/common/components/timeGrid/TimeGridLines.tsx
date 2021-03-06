import { makeStyles } from '@material-ui/core';
import React, { ReactElement } from 'react';

interface TimeGridLines {
    cellHeight: number;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: 8,
        marginTop: 1
    },
    line: {
        width: '100%',
        borderBottom: '1px solid',
        borderBottomColor: theme.palette.grey[300],
    },
}));

export default function TimeGridLines(props: TimeGridLines): ReactElement {
    const classes = useStyles();
    const numberOfHours = 24;

    function renderLines(): ReactElement[] {
        let elements = [];

        for (let i = 1; i < numberOfHours; i++) {
            elements.push(<div className={classes.line} style={{ height: props.cellHeight }} />);
        }

        return elements;
    }

    return <div className={classes.root}>{renderLines()}</div>;
}
