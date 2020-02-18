import { mount } from 'enzyme';
import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import renderer from 'react-test-renderer';

import { DraggableButton } from './DraggableButton';

const service = {
    id   : 'android-auto',
    name : 'Android Auto',
    url  : 'https://www.android.com/intl/en_us/auto/',
};

const configuration = {
    size : 48,
    cols : 4,
    rows : 2,
};

describe('<DraggableButton />', () => {
    it('renders correctly', () => {
        expect(renderer.create(
            <SortableContainer>
                <DraggableButton
                    index={0}
                    service={service}
                    configuration={configuration} />
            </SortableContainer>
        ).toJSON()).toMatchSnapshot();
    });

    it('mounts without error', () => {
        mount(
            <SortableContainer>
                <DraggableButton
                    index={0}
                    service={service}
                    configuration={configuration} />
            </SortableContainer>
        );
    });
});
