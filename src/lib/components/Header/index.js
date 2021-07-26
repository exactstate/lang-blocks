import React from 'react';
import './index.scss';

export default function Header({
    children,
    title,
    subtitle
})
{
    return <div className="lb-header">
        <div>
            <h3>{title}</h3>
            <p className="mt-1">{subtitle}</p>
        </div>

        { children && <div>
            {children}
        </div> }
    </div>;
}