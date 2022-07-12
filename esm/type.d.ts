export declare type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export declare type RecurrenceFrequency = 'weekly' | undefined;
export declare type ScheduleEvent = {
    _id: string;
    scheduleId: string;
    entityType: string;
    entityId: string;
    startTime: string;
    endTime: string;
    startDate: string;
    endDate?: string;
    frequency?: RecurrenceFrequency;
    daysOfWeek?: DayOfWeek[];
};
export declare type ScheduleEntity = {
    _id: string;
    name: string;
    date: string;
};
export declare type Entity = {
    _id: string;
    name: string;
    date: string;
    color: string;
    visible: boolean;
};
export declare type BusinessHours = {
    daysOfWeek: DayOfWeek[];
    startTime: string;
    endTime: string;
};
export interface Props {
    businessHours?: BusinessHours[];
    colors?: string[];
    createEntity?: () => void;
    darkMode?: boolean;
    editable?: boolean;
    entityType?: string;
    entityTypeName?: string;
    fetchEntities: () => Promise<ScheduleEntity[]>;
    fetchEvents: () => Promise<ScheduleEvent[]>;
    language?: string;
    onEventAdd?: (event: ScheduleEvent) => void;
    onEventChange?: (event: ScheduleEvent) => void;
    onEventRemove?: (event: ScheduleEvent) => void;
    rtl?: boolean;
    scheduleId?: string;
    toggleExpand?: () => void;
}
