/// <reference types="react" />
import { EventContentArg } from '@fullcalendar/react';
export interface Props {
    eventContent: EventContentArg;
    lang: string;
}
declare function EventContentPopover(props: Props): JSX.Element;
export default EventContentPopover;
