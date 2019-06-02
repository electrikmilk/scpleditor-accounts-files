import React from 'react';
interface Props {
    value: string;
    values: string[];
}
export default class Select extends React.Component<Props> {
    state: {
        segmented: boolean;
    };
    node: React.RefObject<any>;
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
