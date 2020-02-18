import { Button } from '@material-ui/core';
import { mount, shallow, } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import browser from 'sinon-chrome/webextensions';

import { ExpandablePanel } from './ExpandablePanel';

window.browser = browser;

describe('<ExpandablePanel />', () => {
    it('renders correctly', () => {
        expect(renderer.create(<ExpandablePanel />).toJSON()).toMatchSnapshot();
    });

    it('mounts without error', () => {
        mount(<ExpandablePanel />);
    });

    it('triggers onExpand when clicked', () => {
        const onExpand = jest.fn();

        shallow(<ExpandablePanel onExpand={onExpand} />)
            .find(Button)
            .simulate('click');

        expect(onExpand.mock.calls.length).toEqual(1);
    });
});
