const search = (state = { items: [] }, action) => {
  switch(action.type){
    case "SEARCH_ITEMS_SUCCESS":
      return {
          ...state,
          items: action.payload.results,
      }
    default:
        return state
  }
}

export default search;
