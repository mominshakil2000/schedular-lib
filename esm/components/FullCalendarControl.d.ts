import React from 'react';
import FullCalendar from '@fullcalendar/react';
export interface Props {
    viewType: string;
    date: Date;
    lang: string;
    toggleExpand: (() => void) | undefined;
    calendarRef: React.RefObject<FullCalendar>;
    setDate: (date: Date) => void;
    setViewType: (view: string) => void;
}
declare function FullCalendarControl(props: Props): JSX.Element;
export default FullCalendarControl;
