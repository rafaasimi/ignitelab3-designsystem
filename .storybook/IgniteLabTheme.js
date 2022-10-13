import { create } from '@storybook/theming';
import logoImg from './logo.svg'

export default create({
    base: 'dark',
    brandTitle: 'My custom storybook',
    brandUrl: 'https://example.com',
    brandImage: logoImg,
    brandTarget: '_self',
});