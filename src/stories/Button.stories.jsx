import '../lib/styles/index.scss';

import { Button } from '../lib';

export default {
    title: 'Core/Button',
    component: Button,
    argTypes: {
        large: { control: 'boolean' },
        outlined: { control: 'boolean' },
        flat: { control: 'boolean' },
        text: { control: 'boolean' },
        tile: { control: 'boolean' },
        dense: { control: 'boolean' },
        thin: { control: 'boolean' },
        nohover: { control: 'boolean' },
        pill: { control: 'boolean' },
        block: { control: 'boolean' },
        disabled: { control: 'boolean' }
    },
};

const Template = (args) => <Button {...args}>Click me</Button>;

export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

export const Dark = Template.bind({});
Dark.args = {
    dark: true
}

export const Large = Template.bind({});
Large.args = {
    large: true
}

export const Dense = Template.bind({});
Dense.args = {
    dense: true
}

export const Thin = Template.bind({});
Thin.args = {
    thin: true
}

export const Outlined = Template.bind({});
Outlined.args = {
    outlined: true
}

export const Flat = Template.bind({});
Flat.args = {
    flat: true
}

export const Text = Template.bind({});
Text.args = {
    text: true
}

export const Tile = Template.bind({});
Tile.args = {
    tile: true
}

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true
}

export const NoHover = Template.bind({});
NoHover.args = {
    nohover: true
}

export const Pill = Template.bind({});
Pill.args = {
    pill: true
}

export const Block = Template.bind({});
Block.args = {
    block: true
}