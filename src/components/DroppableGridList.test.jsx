import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import browser from 'sinon-chrome/webextensions';

import { DroppableGridList } from './DroppableGridList';

window.browser = browser;

const services = [
    {
        id   : 'android-auto',
        name : 'Android Auto',
        url  : 'https://www.android.com/intl/en_us/auto/',
    },
    {
        id   : 'android-os',
        name : 'Android OS',
        url  : 'https://www.android.com/intl/en_us/',
    },
];

const configuration = {
    size : 48,
    cols : 4,
    rows : 2,
};

describe('<DroppableGridList />', () => {
    it('renders correctly', () => {
        expect(renderer.create(
            <DroppableGridList
                services={services}
                configuration={configuration}
            />
        ).toJSON()).toMatchSnapshot();
    });

    it('mounts without error', () => {
        mount(
            <DroppableGridList
                services={services}
                configuration={configuration}
            />
        );
    });
});
