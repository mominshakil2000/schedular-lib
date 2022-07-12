import { BusinessHours, ScheduleEntity, ScheduleEvent } from './type';
export declare const DEFAULT_COLORS: string[];
export declare const DEFAULT_ENTITIES: ScheduleEntity[];
export declare const TEMP_BUSINESS_HOURS: BusinessHours[];
export declare const DEFAULT_BUSINESS_HOURS: BusinessHours[];
export declare const DEFAULT_EVENTS: ScheduleEvent[];
export declare function daysForLocale(localeName?: string, weekday?: 'long' | 'short' | 'narrow' | undefined): string[];
