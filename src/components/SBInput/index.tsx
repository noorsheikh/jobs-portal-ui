import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
    Col,
    Form,
    InputGroup
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SBIProps {
    colSize: number;
    isDivider?: boolean;
    icon: IconProp;
    placeholder: string;
    name: string;
    defaultValue: string;
    onChangeFunc: React.FormEventHandler<this>;
    inputSize?: 'sm' | 'lg';
}

const SBInput = (props: SBIProps) => {
    const { colSize, isDivider, icon, placeholder, name, defaultValue, onChangeFunc, inputSize} = props;
    return (<Col lg={colSize} className={isDivider ? 'search-bar__divider' : ''}>
        <InputGroup>
            <InputGroup.Prepend>
                <InputGroup.Text className="search-bar__icon">
                    <FontAwesomeIcon className="search-bar__icon--color" icon={icon}></FontAwesomeIcon>
                </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
                className="search-bar__text"
                type="text"
                placeholder={placeholder}
                name={name}
                defaultValue={defaultValue}
                onChange={onChangeFunc}
                size={inputSize}
            ></Form.Control>
        </InputGroup>
    </Col>)
}

export default SBInput;
