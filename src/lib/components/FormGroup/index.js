import './index.scss';

export default function FormGroup({
    children,
    label,
    hint,
    required,
    labelid,
    errors
})
{
    return <div className="lb-formgroup">
        { label && <label htmlFor={labelid}>
            {label}
            {required && <span className="required"> *</span>}
        </label> }

        {children}

        { hint && <small>{hint}</small> }

        { errors.length > 0 && <ul className="errors mt-4">
            { errors.map(error => <li key={error}>{error}</li>) }
        </ul> }
    </div>
}