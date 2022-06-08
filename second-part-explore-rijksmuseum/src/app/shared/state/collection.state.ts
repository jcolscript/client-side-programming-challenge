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
  ChangeFilters,
  GetCollection,
  GetCollectionSuccess,
} from './collection.actions';

@State<ICollectionState>({
  name: 'collection',
  defaults: {
    artObjects: [],
    filters: {
      page: 1,
      period: null,
      color: '',
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

  @Action(ChangeFilters)
  changeFilters(
    { patchState, dispatch }: StateContext<ICollectionState>,
    { payload }: ChangeFilters
  ) {
    patchState({ filters: payload });
    dispatch(new GetCollection());
  }

  @Action(GetCollection)
  getCollection(
    { setState, getState, dispatch }: StateContext<ICollectionState>,
    {}: any
  ) {
    const state = getState();
    setState({ ...state, loading: true });

    return this.collectionService
      .getCollection(
        state.filters.period,
        state.filters.color,
        state.filters.page
      )
      .pipe(
        catchError((err, caught) => {
          setState({
            error: true,
            loading: false,
            filters: {
              page: 1,
              period: null,
              color: '',
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
}
