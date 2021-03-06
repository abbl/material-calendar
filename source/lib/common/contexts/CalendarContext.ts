import React, { ComponentClass, FunctionComponent } from 'react';
import localeList from '../../locale/LocaleList';
import localization, { LocaleSource } from '../../locale/Localization';
import { CalendarView } from '../api/CalendarView';

export interface CalendarContextStructure {
    locale: string;
    localeSource: LocaleSource;
    globalEventPopoutContent?: FunctionComponent<any> | ComponentClass<any, any>;
    views: CalendarView[];

    setLocale: (locale: string) => void;
    setLocaleSource: (localeSource: LocaleSource) => void;
    setViews: (views: CalendarView[]) => void;
}

export const DEFAULT_CALENDAR_CONTEXT: CalendarContextStructure = {
    locale: localeList.plPL,
    localeSource: localization,
    globalEventPopoutContent: undefined,
    views: [],

    setLocale: () => {},
    setLocaleSource: () => {},
    setViews: () => {},
};

export const CalendarContext = React.createContext<CalendarContextStructure>(DEFAULT_CALENDAR_CONTEXT);
