import '../lib/styles/index.scss';

import { Header, Button, Card } from '../lib';

export default {
    title: 'Core/Header',
    component: Header,
    argTypes: {

    }
}

export const Base = (args) => <div className="w-1/2">
    <Header
        title='Create a user'
        subtitle='Fill out the form to create a user. If stuck, contact IT support.'
    />
</div>

export const WithButtons = (args) => <div className="w-1/2">
    <Header
        title='Create a user'
        subtitle='Fill out the form to create a user. If stuck, contact IT support.'
    >
        <Button>Go back</Button>
    </Header>
</div>

export const InsideCard = (args) => <Card className="w-1/2" flat tile>
    <Header
        title='Create a user'
        subtitle='Fill out the form to create a user. If stuck, contact IT support.'
    >
        <Button tile>Go back</Button>
    </Header>
</Card>

