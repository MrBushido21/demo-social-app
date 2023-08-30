import profileReducer, { deletPost, renderPostActionCreater } from "./profileReducer";

let state = {
    postData: [
        { id: 1, message: "Hello, how are you?" },
        { id: 2, message: "Tima, hello!" },
      ]
}
//==========
test('length of post should be incremented', () => {
    let action = renderPostActionCreater("mrbushido")
    
    let newState = profileReducer(state, action)

    expect(newState.postData.length).toBe(3)
})
//========
test('message of post should be "mrbushido"', () => {
    let action = renderPostActionCreater("mrbushido")
   
    let newState = profileReducer(state, action)

    expect(newState.postData[2].message).toBe("mrbushido")
})
//=========
test('after deleting length of messages should be decrementing', () => {
    let action = deletPost(2)
   
    let newState = profileReducer(state, action)

    expect(newState.postData.length).toBe(1)
})
test('after deleting messages should be "Hello, how are you?"', () => {
    let action = deletPost(2)
   
    let newState = profileReducer(state, action)

    expect(newState.postData[0].message).toBe("Hello, how are you?")
})