import '../lib/styles/index.scss';

import { Card, Button } from '../lib';

export default {
    title: 'Core/Card',
    component: Card,
    argTypes: {
        flat: { control: 'boolean' },
        tile: { control: 'boolean' }
    }
}

export const Base = (args) => <Card className="w-96">
    <h5>Hey!</h5>
    <p className="mt-2">Click the button below to become awesome.</p>
    <Button className="mt-8" block>Click me</Button>
    <small className="mt-2">Don't click if you are scared.</small>
</Card>

export const WithHeader = (args) => <Card 
    className="w-96"
    title="Hey!"
    subtitle="Click the button below to become awesome."
>
    <Button block>Click me</Button>
    <small>Don't click if you are scared.</small>
</Card>

export const CustomHeader = (args) => <Card 
    className="w-96"
    header={
        <div className="p-5 border-b">
            <h1>Hey!</h1>
            <p className="mt-5">Stop staring at my boxes.</p>
        </div>
    }
>
    <small className="mt-2">Don't click if you are scared.</small>
</Card>

export const WithButtons = (args) => <Card 
    className="w-96"
    title="Hey!"
    subtitle="Click the button below to become awesome."
    buttons={[
        <Button dark flat attach-top attach-right>Cancel</Button>,
        <Button flat attach-top attach-left>Continue</Button>
    ]}
>
    <small className="mt-2">Don't click if you are scared.</small>
</Card>

export const Modifiers = (args) => <Card
    { ...args }
    className="w-96"
    title="Hey!"
    subtitle="Click the button below to become awesome."
    buttons={[
        <Button dark flat>Cancel</Button>,
        <Button flat>Continue</Button>
    ]}
>
    <small className="mt-2">Don't click if you are scared.</small>
</Card>
Modifiers.args = {
    flat: true,
    tile: true
}