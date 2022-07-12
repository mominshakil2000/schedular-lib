import React from 'react';
import FullCalendar from '@fullcalendar/react';
import { Entity, ScheduleEvent } from './type';
export interface Props {
    viewType: string;
    date: Date;
    lang: string;
    calendarRef: React.RefObject<FullCalendar>;
    darkMode: boolean | undefined;
    editable: boolean | undefined;
    entities: Entity[];
    activeEntity: Entity | null;
    showEditEventPopup: boolean;
    activeEvent: ScheduleEvent | null;
    entityType: string | undefined;
    entityTypeName: string | undefined;
    events: ScheduleEvent[];
    handleCreateEntity: (() => void) | undefined;
    onEventRemove: ((event: ScheduleEvent) => void) | undefined;
    setDate: (date: Date) => void;
    setEntities: (entities: Entity[]) => void;
    setActiveEntity: (e: Entity) => void;
    setShowEditEventPopup: (b: boolean) => void;
    setEvents: (events: ScheduleEvent[]) => void;
}
declare function LeftPanel(props: Props): JSX.Element;
export default LeftPanel;
