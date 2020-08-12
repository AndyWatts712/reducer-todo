export const initialState = [{
    task: 'Learn about reducers',
    completed: false,
    id: 3892987589
},
{
    task: 'Eat lunch',
    completed: false,
    id: 2
}]
export const reducer = (state, action) => {
    // actions: add item, toggle complete, clear complete, update input
    switch (action.type) {
        case 'SUBMIT':
            return [
                ...state,
                action.payload
            ]
        case 'TOGGLE_COMPLETE':
            return {
                ...state,
                list: state.list.map((item) => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            completed: !item.completed
                        }
                    } else {
                        return item

                    }
                })
            }
        case 'REMOVE_TODO':
            return {}
            default:
            return state
    }   
               
    }

