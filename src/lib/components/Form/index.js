import './index.scss';

import classNames from '../../utils/classNames';

export default function Form({
    children,
    className,
    dense,
    denser
})
{
    return <form
        className={classNames({
            "lb-form": true,
            [className]: className,
            dense,
            denser
        })}
    >
        {children}
    </form>
}