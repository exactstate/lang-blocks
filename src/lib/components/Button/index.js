import React from 'react';
import './index.scss';
import classNames from '../../utils/classNames';

export default function Button({
    children,
    large, 
    text,
    disabled, 
    dense,
    icon,
    flat,
    nohover,
    tile,
    outlined,
    thin,
    pill,
    className,
    block,
    dark,
    short,
    "attach-left": attachLeft,
    "attach-right": attachRight,
    "attach-bottom": attachBottom,
    "attach-top": attachTop,
    ...args
})
{
    return <button
        { ...args }
        className={classNames({
            [className]: className,
            "lb-btn": true,
            flat,
            nohover,
            tile,
            outlined,
            large,
            text,
            disabled,
            dense,
            thin,
            pill,
            block,
            dark,
            short,
            attachLeft,
            attachRight,
            attachBottom,
            attachTop
        })}
    >
        {icon && icon}
        {children}
    </button>
}