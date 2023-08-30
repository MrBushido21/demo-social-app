import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: "Hello, how are you?" },
        { id: 2, message: "Tima, hello!" },
      ],
      newTextPost: ""
    },

    messagesPage: {
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
      ],
      newMessageText: ""
    },

  },

  _callSubscriber () {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },

  subscribe (observer) {
    this._callSubscriber = observer
  },

  //==========


  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);

    this._callSubscriber(store._state)
  },
}



export default store;
window.store = store;
