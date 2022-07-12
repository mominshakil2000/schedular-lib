/// <reference types="react" />
export interface Props {
    value: string[];
    setValue: (value: string[]) => void;
    lang: string;
}
declare function DaysOfWeekSelector(props: Props): JSX.Element;
export default DaysOfWeekSelector;
