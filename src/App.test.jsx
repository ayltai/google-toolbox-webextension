import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import chrome from 'sinon-chrome/webextensions';

import { App } from './App';

window.chrome = chrome;

describe('<App />', () => {
    it('renders correctly', () => {
        expect(renderer.create(<App />).toJSON()).toMatchSnapshot();
    });

    it('renders without errors', () => {
        const div = document.createElement('div');

        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
