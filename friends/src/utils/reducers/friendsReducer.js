const initialState = {
    friends: [],
    isLoading: false,
    isEditing: false,
    editFriend: {},
    error: ""
}

export const friendsReducer = (state = initialState, action)=>{
    switch(action.type){
        case "API_START":
            return{
                ...state,
                isLoading: true
            }
        case "API_GOOD":
            return{
                ...state,
                isLoading: false,
            }
        case "API_BAD":
            return{
                ...state,
                isLoading: false,
                erorr: action.payload
            }
        case "SET_FRIENDS":
            return{
                ...state,
                friends: action.payload
            }
        default: return state
    }
}