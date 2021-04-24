const initState = {
  events: [],
  length: 0,
  filtered: [],
  filteredLength: 0,
  maxPage: 0,
};

const reducer = (state = initState, { type, payloads }) => {
  switch (type) {
    case 'INIT':
      return {
        events: payloads.events,
        filtered: payloads.events,
        length: payloads.length,
        filteredLength: payloads.length,
        maxPage: Math.ceil(payloads.length / 5),
      };
    case 'SEARCH_ID':
      const filteredSearchID = state.events.filter(
        ({ id }) => id == payloads.id
      );
      return {
        ...state,
        filtered: filteredSearchID,
        filteredLength: filteredSearchID.length,
        maxPage: Math.ceil(filteredSearchID.length / 5),
      };
    case 'SEARCH_TITLE':
      const filteredSearchTitle = state.events.filter(({ title }) =>
        title.includes(payloads.title)
      );
      console.log(filteredSearchTitle);
      return {
        ...state,
        filtered: filteredSearchTitle,
        filteredLength: filteredSearchTitle.length,
        maxPage: Math.ceil(filteredSearchTitle.length / 5),
      };
    case 'SEARCH_LOCATION':
      const filteredSearchLocation = state.events.filter(({ location }) =>
        location.includes(payloads.location)
      );
      return {
        ...state,
        filtered: filteredSearchLocation,
        filteredLength: filteredSearchLocation.length,
        maxPage: Math.ceil(filteredSearchLocation.length / 5),
      };
    case 'SEARCH_PARTICIPANT':
      return;
    case 'SEARCH_NOTE':
      const filteredSearchNote = state.events.filter(({ note }) =>
        note.includes(payloads.note)
      );
      return {
        ...state,
        filtered: filteredSearchNote,
        filteredLength: filteredSearchNote.length,
        maxPage: Math.ceil(filteredSearchNote.length / 5),
      };
    default:
      return state;
  }
};

export default reducer;
