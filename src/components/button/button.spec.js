import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from './../../../utils'
import SharedButton from "./index";

describe('SharedButton Component', ()=>{

    it('Should NOT throw a warning', ()=>{

        const expectedProps = {
            buttonText: 'Example button Text',
            emitEvent: ()=>{

            }
        }
        const propsError = checkProps( SharedButton, expectedProps );
        expect(propsError).toBeUndefined();

    })

    describe('Renders', () => {
        
        let wrapper;
        beforeEach(()=>{

            const props = {

                buttonText: 'Example button Text',
                emitEvent: ()=>{
    
                }
            }
            wrapper = shallow(<SharedButton {...props} />);

        })

        it('Should Render a button', ()=>{
            const button = findByTestAttr( wrapper,'buttonComponent' );
            expect( button.length ).toBe(1);
        })

    })
    

})