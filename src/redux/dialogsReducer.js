let initialState = {
    dialogsData: [
        { id: 1, name: "Dima", class: "dialog-acive" },
        { id: 2, name: "Oleg" },
        { id: 3, name: "Viktor" },
        { id: 4, name: "Jame" }
      ],
      messagesData: [
        { id: 1, name: "Dima", message: "Привіт, козаче!" },
        { id: 2, name: "Me", class: "me", message: "ООО, які люди, привіт!" },
        { id: 3, name: "Dima", message: "Як сямаєш?" },
        { id: 4, name: "Me", class: "me", message: "Та все гуд, а ти шо?" }
      ]
}


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "addNewMessage": 
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 4, name: "Me", class: "me", message: action.text}],
            }; 
        default:
            return state;
    }
}

export const addNewMessageActionCreater = (text) => {
    return { type: "addNewMessage", text }
}

export default dialogsReducer