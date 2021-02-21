const search = (state = { items: [] }, action) => {
  switch(action.type){
    case "SEARCH_ITEMS_SUCCESS":
      return {
          ...state,
          items: action.payload.results,
          total: action.payload.resultCount,
          keyword: action.payload.keyword,
      }
    default:
        return state
  }
}

export default search;
