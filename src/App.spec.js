import App from './App';
import { shallow } from 'enzyme';
import { findByTestAtrr, testStore, findByTestAttr } from './../Utils';
import React from 'react';

const setUp = ( initialState = [] ) => {
    const store = testStore();
    const wrapper = shallow(<App store={store} />).childAt(0).dive();
    return wrapper;
}

describe('App Component', () => {

    let wrapper;

    beforeEach( () => {
        const initialState = [
            {
                title: 'Sample title of One',
                body: 'Some default body like the one in the video'
            },
            {
                title: 'Sample title of Two',
                body: 'Some default body like the one in the video'
            },
            {
                title: 'Sample title of Three',
                body: 'Some default body like the one in the video'
            }
        ];
        wrapper = setUp(initialState);
        
    })

    it('Should render without errors', () => {
        const component = findByTestAttr( wrapper, 'appComponent');
        expect(component.length).toBe(1)
    })

})