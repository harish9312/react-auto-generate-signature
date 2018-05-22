import * as React from 'react';

export interface IOptions {
    value?: string;
    label?: string;
    font?: string;
}

export interface ISelectOptionComponentProps {
    className?: string;
    isDisabled?: boolean;
    isFocused?: boolean;
    isSelected?: boolean;
    onFocus?: Function;
    onSelect?: Function;
    option: IOptions;
}

export class SelectOptionComponent extends React.PureComponent<ISelectOptionComponentProps, {}> {
    constructor(props) {
        super(props);
    }

    handleMouseDown = (event) => {
        event.preventDefault();
        this.props.onSelect(this.props.option, event);
    }

    handleMouseEnter = (event) => {
        this.props.onFocus(this.props.option, event);
    }

    handleMouseMove = (event) => {
        if (this.props.isFocused) {
            this.props.onFocus(this.props.option, event);
        }
    }

    render() {
        return (
            <div className={this.props.className}
                onMouseDown={this.handleMouseDown}
                onMouseEnter={this.handleMouseEnter}
                onMouseMove={this.handleMouseMove}
            >
                <div
                    style={{ fontFamily: this.props.option.value }}
                >
                    {this.props.children || 'NA'}
                </div>
            </div>
        );
    }
}
