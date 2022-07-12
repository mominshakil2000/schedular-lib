/// <reference types="react" />
import { Entity, ScheduleEvent } from './type';
export interface Props {
    show: boolean;
    onClose: () => void;
    onSubmit: (event: ScheduleEvent) => void;
    onDelete: (id: string) => void;
    onDuplicate: (id: string) => void;
    entities: Entity[];
    event: ScheduleEvent | null;
    lang: string;
}
declare function EditEvent(props: Props): JSX.Element;
export default EditEvent;
