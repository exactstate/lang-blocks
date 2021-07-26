import { useState, useCallback } from 'react';

import FormGroup from '../FormGroup';
import Button from '../Button';

import classNames from '../../utils/classNames';
import './index.scss';

export default function Input({
    placeholder,
    label,
    hint,
    type = "text",
    required,
    id,
    name,
    clear,
    value,
    setValue,
    toggle,
    controls,
    counter,
    onChange,
    errors = [],
    "sticky-controls": stickyControls,
    ...args
})
{
    if (clear && !setValue) console.warn('Cannot clear input without a setValue prop.');

    const [focused, setFocused] = useState(false);
    const [show, setShow] = useState(false);
    const [count, setCount] = useState(value?.length || 0);

    const changeHandler = useCallback((e) => {
        setCount(e.target.value.length);
        if (onChange) onChange(e);
    }, [onChange])

    return <FormGroup
        label={label}
        hint={hint}
        required={required}
        labelid={id || label}
        errors={errors}
    >
        <div 
            className="lb-formcontrol-parent" 
            onMouseEnter={() => setFocused(true)}
            onMouseLeave={() => setFocused(false)}
        >
            <input
                className={classNames({
                    "lb-formcontrol": true,
                    error: (counter > 1 ? count > counter : false) || errors.length
                })}
                type={show ? 'text' : type}
                placeholder={placeholder}
                required={required}
                id={id || label}
                name={name}
                value={value}
                onChange={changeHandler}
                {...args}
            />

            { counter && <small className={classNames({
                "lb-formcontrol-counter": true,
                "over": counter > 1 ? count > counter : false
            })}>
                {count}/{counter > 1 ? counter : '~'}
            </small> }

            <div className={classNames({
                "lb-formcontrol-controls": true,
                focused: stickyControls ? true : focused
            })}>
                { clear && <Button
                    text nohover
                    attach-left
                    attach-right={toggle}
                    onClick={(e) => {
                        e.preventDefault();
                        setValue('');
                    }}
                >
                    Clear
                </Button> }

                { toggle && <Button
                    text
                    attach-left
                    tall
                    nohover 
                    onClick={(e) => {
                        e.preventDefault();
                        setShow(!show);
                    }}
                >
                    { show ? 'Hide' : 'Show' }
                </Button> }

                { controls && controls }
            </div>
        </div>

    </FormGroup>
}