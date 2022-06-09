import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { append, patch } from '@ngxs/store/operators';
import { catchError, tap, throwError } from 'rxjs';
import {
  Collection,
  ICollectionState,
} from '../interfaces/collection.interface';
import { CollectionService } from '../services/collection.service';
import {
  ChangeFilter,
  ChangePage,
  ClearCollection,
  GetCollection,
  GetCollectionSuccess,
} from './collection.actions';

@State<ICollectionState>({
  name: 'collection',
  defaults: {
    artObjects: [],
    filters: {
      sort: '',
      page: 1,
    },
    error: false,
    loading: false,
  },
})
@Injectable()
export class CollectionState {
  constructor(private collectionService: CollectionService) {}

  @Selector()
  static getObjOfCollection(state: ICollectionState) {
    return state.artObjects;
  }

  @Selector()
  static isLoading(state: ICollectionState) {
    return state.loading;
  }

  @Selector()
  static hasError(state: ICollectionState) {
    return state.error;
  }

  @Action(ChangePage)
  changePage(
    { setState, dispatch, getState }: StateContext<ICollectionState>,
    { payload }: ChangePage
  ) {
    const state = getState();

    setState({ ...state, filters: { ...state.filters, page: payload } });
    dispatch(new GetCollection());
  }

  @Action(ChangeFilter)
  changeFilter(
    { setState, dispatch, getState }: StateContext<ICollectionState>,
    { payload }: ChangeFilter
  ) {
    const state = getState();

    setState({
      ...state,
      filters: { ...state.filters, sort: payload, page: 1 },
    });
    dispatch(new ClearCollection());
    dispatch(new GetCollection());
  }

  @Action(GetCollection)
  getCollection(
    { setState, getState, dispatch }: StateContext<ICollectionState>,
    {}: any
  ) {
    const state = getState();
    console.log(state);
    setState({ ...state, loading: true });

    return this.collectionService
      .getCollection(state.filters.sort, state.filters.page)
      .pipe(
        catchError((err, caught) => {
          setState({
            error: true,
            loading: false,
            filters: {
              sort: '',
              page: 1,
            },
            artObjects: [],
          });
          return throwError(err);
        }),
        tap((result: Collection) => {
          dispatch(new GetCollectionSuccess(result.artObjects));
        })
      );
  }

  @Action(GetCollectionSuccess)
  getCollectionSuccess(
    ctx: StateContext<ICollectionState>,
    { payload }: GetCollectionSuccess
  ) {
    const state = ctx.getState();
    ctx.setState(
      patch({
        loading: false,
        artObjects: append(payload),
      })
    );
  }

  @Action(ClearCollection)
  clearCollection(ctx: StateContext<ICollectionState>) {
    const state = ctx.getState();
    ctx.setState(
      patch({
        loading: true,
        artObjects: [],
      })
    );
  }
}
