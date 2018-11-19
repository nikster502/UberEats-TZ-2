const initialState =[]

export  default function bucketList(state = initialState,action) {
    if(action.type === 'ADD_TO_BUCKET') {
        return [
            ...state,
            action.payload
            ];
    }
    return state;
}