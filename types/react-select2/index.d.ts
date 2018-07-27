// Type definitions for react-select 2.0
// Project: https://github.com/JedWatson/react-select
// Definitions by: Guillaume Chartier <https://github.com/RCGuillaume>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import * as React from 'react';

export default class ReactSelectClass<TValue = OptionValues> extends React.Component<ReactSelectProps<TValue>> {
    focus(): void;
    setValue(value: Option<TValue>): void;
}

export type Options<TValue = OptionValues> = Array<Option<TValue>>;

export interface Option<TValue = OptionValues> {
    /** Text for rendering */
    label?: string;
    /** Value for searching */
    value?: TValue;
    /**
     * Allow this option to be cleared
     * @default true
     */
    clearableValue?: boolean;
    /**
     * Do not allow this option to be selected
     * @default false
     */
    disabled?: boolean;
    /**
     * In the event that a custom menuRenderer is provided, Option should be able
     * to accept arbitrary key-value pairs. See react-virtualized-select.
     */
    [property: string]: any;
}

export type OptionValues = string | number | boolean;

export type OnChangeHandler<TValue = OptionValues, TOption = Option<TValue> | Options<TValue>> = (newValue: TOption | null) => void;

export interface SelectComponents {
    MultiValueContainer: React.ComponentType<any>;
}

export const components: SelectComponents;


export type MultiValueGenericProps = {
    children: Node;
    data: any;
    innerProps: { className?: String };
    selectProps: any;
  };

export interface ReactSelectProps<TValue = OptionValues> {
    /**
     * @see https://react-select.com/components
     */
    components?: Partial<SelectComponents>;    
    /**
     * whether selected options still appear on the menu
     */
    hideSelectedOptions?: boolean;
    /**
     * whether it is possible to reset value. if enabled, an X button will appear at the right side.
     * @default true
     */
    isClearable?: boolean;
    /**
     * whether the Select is disabled or not
     * @default false
     */
    isDisabled?: boolean;
    /**
     * id for the underlying HTML input element
     * @default undefined
     */
    id?: string;
    /**
     * allows for synchronization of component id's on server and client.
     * @see https://github.com/JedWatson/react-select/pull/1105
     */
    instanceId?: string;
    /**
     * whether the Select is loading externally or not (such as options being loaded). if true, a loading spinner will be shown at the right side.
     * @default false
     */
    isLoading?: boolean;
    /**
     * multi-value input
     * @default false
     */
    isMulti?: boolean;
    /**
     * placeholder displayed when there are no matching search results or a falsy value to hide it
     * @default "No results found"
     */
    noOptionsMessage?: string | JSX.Element;
    /**
     * onChange handler: function (newValue) {}
     */
    onChange?: OnChangeHandler<TValue>;
    /**
     * array of Select options
     * @default false
     */
    options?: Options<TValue>;
    /**
     * whether to enable searching feature or not
     * @default true;
     */
    isSearchable?: boolean;
    /**
     * whether to select the currently focused value when the  [tab]  key is pressed
     */
    tabSelectsValue?: boolean;
    /**
     * initial field value
     */
    value?: Option<TValue> | Options<TValue>;

    /**
     *  optional tab index of the control
     */
    tabIndex?: string | number;
}
