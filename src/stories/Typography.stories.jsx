import '../lib/styles/index.scss';

import { Button, Form, Input } from '../lib';

export default {
    title: 'Core/Typography',
    argTypes: {

    }
}

export const All = (args) => <div className="w-1/2">
    <h1>Lang Blocks</h1>
    <h4 className="mt-5">Ready built components for rapid prototyping</h4>

    <h3 className="mt-12">Introduction</h3>
    <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pretium nunc quis diam dapibus, in venenatis ante venenatis. Quisque ac arcu lobortis, interdum mauris nec, aliquam metus. Integer eget mauris consequat, pretium ex vel.</p>

    <h5 className="mt-8">Button</h5>
    <div className="flex flex-wrap gap-5 mt-2">
        <div>
            <Button className="mt-2">Click me</Button>
            <h6 className="mt-2">Default</h6>
        </div>
        <div>
            <Button className="mt-2" dark>Click me</Button>
            <h6 className="mt-2">Dark</h6>
        </div>
        <div>
            <Button className="mt-2" large>Click me</Button>
            <h6 className="mt-2">Large</h6>
        </div>
        <div>
            <Button className="mt-2" outlined>Click me</Button>
            <h6 className="mt-2">Outlined</h6>
        </div>
        <div>
            <Button className="mt-2" flat>Click me</Button>
            <h6 className="mt-2">Flat</h6>
        </div>
        <div>
            <Button className="mt-2" disabled>Click me</Button>
            <h6 className="mt-2">Disabled</h6>
        </div>
    </div>

    <h5 className="my-8">Form</h5>
    <Form className="w-96">
        <Input
            placeholder='Username'
            label='Username'
            hint='You can find your username on the letter.'
            clear
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
        />
    </Form>

    <h5 className="my-8">Dense</h5>
    <Form className="w-96" denser>
        <Input
            placeholder='Username'
            clear
        />
        <Input 
            placeholder='Email'
            type="email"
        />
        <Input 
            placeholder='Password'
            type="password"
            toggle
        />
    </Form>
</div>

export const Display = (args) => <div>
    <h1 className="display-1">Display 1</h1>
    <h1 className="display-2">Display 2</h1>
</div>;

export const Headings = (args) => <div>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
</div>;

export const Paragraph = (args) => <p>The quick brown fox jumped over the lazy dog.</p>