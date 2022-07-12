/// <reference types="react" />
import { Entity } from './type';
export interface Props {
    entities: Entity[];
    activeEntity: Entity | null;
    entityTypeName: string | undefined;
    onCreateEntity: (() => void) | undefined;
    onToggleEntity: (id: string) => void;
    onSelectEntity: (entity: Entity) => void;
}
declare function EntitiesList(props: Props): JSX.Element;
export default EntitiesList;
