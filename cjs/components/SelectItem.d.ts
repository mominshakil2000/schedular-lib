import React from 'react';
export interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
    value: string;
    label: string;
    color: string;
}
declare const SelectItem: React.ForwardRefExoticComponent<ItemProps & React.RefAttributes<HTMLDivElement>>;
export default SelectItem;
