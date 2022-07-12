/// <reference types="react" />
import { EventContentArg } from '@fullcalendar/react';
export interface Props {
    eventContent: EventContentArg;
    lang: string;
    setOpened: (v: boolean) => void;
}
declare function PopoverTarget(props: Props): JSX.Element;
export default PopoverTarget;
