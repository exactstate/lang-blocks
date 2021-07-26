import './index.scss';

import classNames from '../../utils/classNames';

export default function Card({
    children,
    className,
    title,
    subtitle,
    buttons,
    header,
    tile,
    flat,
    ...args
})
{
    return <div
        className={classNames({
            "lb-card": true,
            [className]: className,
            tile,
            flat
        })}
        { ...args }
    >
        {header && header}
        { (title || subtitle) && <div className="header">
            <h5>{title}</h5>
            <p>{subtitle}</p>
        </div> }

        <div className="inner">
            {children}
        </div>

        { buttons && <div className="buttons">
            {buttons}
        </div> }
    </div>
}