import { Action } from '@ngrx/store';
import { Pagination, createPagination } from './pagination';


/**
 * Creates a pagination reducer.
 * 
 * @param initialState the initial state.
 * @param type the type of fetch. Should match an action type
 * @param payloadProp the property on the action payload
 */
export function paginationReducer(state: Pagination, action: Action, type: string, payloadProp: string) {
  const { payload } = action;

  switch (action.type) {
    case `FETCH_${type}_SUCCESS`:
      if (!payload[payloadProp]) {
        return state;
      }
      return createPagination(payload[payloadProp])
        .withMutations(pagination => {
          pagination
            .set('pagesLoaded', [...state.get('pagesLoaded'), pagination.get('number')])
      });

    default:
      return state;
  }
}
