 import moxios from 'moxios';
 import { testStore } from './../../utils';
 import { fetchPosts } from './../actions'

 describe('Fetch Post actions', () => {
     
    beforeEach( ()=>{
        moxios.install();
    })

    afterEach( () => {
        moxios.uninstall();
    })

    test('Store is updated correctely', ()=>{

        const expectedState = [
            {
                title: "Some title",
                body: "Example textoooo"   
            },
            {
                title: "Some title",
                body: "Example textoooo"   
            },
            {
                title: "Some title",
                body: "Example textoooo"   
            }
        ]
        const store = testStore();
        
        moxios.wait( ()=>{
            const request = moxiost.request.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState,
            })
        })

        return store.dispatch( fetchPosts )
        .then( ()=>{
            const newState = store.getState();
            expect(newState.posts.toBe(expectedState))
        } )

    })

 })
 