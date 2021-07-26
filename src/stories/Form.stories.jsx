import '../lib/styles/index.scss';

import { useState } from 'react';
import { Button, Form, Input } from '../lib';

export default {
    title: 'Forms/Form',
    component: Form,
    argTypes: {
        dense: { control: 'boolean' },
        denser: { control: 'boolean' }
    }
}

const Template = (args) => {
    const [username, setUsername] = useState('Lunar');

    return <Form {...args} className="w-1/2">
        <Input 
            placeholder='Username'
            label='Username'
            hint='You can find your username on the letter.'
            clear
            value={username}
            setValue={setUsername}
        />
        <Input 
            placeholder='Email'
            required
            label='Email'
            type="email"
            hint='The email you used to sign up with.'
        />
        <Input
            placeholder='Password'
            label='Password'
            type="password"
            toggle
            clear
            sticky-controls
            counter={10}
            hint='Make it secure!'
            errors={['Password must be 8 characters or more.', 'Password must have at least two numbers.']}
        />
    </Form>;
}

export const Base = Template.bind({});

export const Dense = Template.bind({});
Dense.args = {
    dense: true
}
