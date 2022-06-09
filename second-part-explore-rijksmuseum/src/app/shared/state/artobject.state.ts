import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { patch } from '@ngxs/store/operators';
import { catchError, tap, throwError } from 'rxjs';
import {
  ArtObejectResponse,
  IArtObejectState,
} from '../interfaces/artobject.interface';
import { CollectionService } from '../services/collection.service';
import { GetArtObject, GetArtObjectSuccess } from './artobject.actions';

@State<IArtObejectState>({
  name: 'artobject',
  defaults: {
    artObject: null,
    error: false,
    loading: false,
  },
})
@Injectable()
export class ArtObejectState {
  constructor(private collectionService: CollectionService) {}

  @Selector()
  static getObjSelected(state: IArtObejectState) {
    return state.artObject;
  }

  @Selector()
  static isLoading(state: IArtObejectState) {
    return state.loading;
  }

  @Selector()
  static hasError(state: IArtObejectState) {
    return state.error;
  }

  @Action(GetArtObject)
  getArtObject(
    { setState, getState, dispatch }: StateContext<IArtObejectState>,
    { payload }: GetArtObject
  ) {
    const state = getState();

    setState({ ...state, loading: true });

    return this.collectionService.getCollectionArtObject(payload).pipe(
      catchError((err, caught) => {
        setState({
          error: true,
          loading: false,
          artObject: null,
        });
        return throwError(err);
      }),
      tap((result: ArtObejectResponse) => {
        dispatch(new GetArtObjectSuccess(result.artObject));
      })
    );
  }

  @Action(GetArtObjectSuccess)
  getCollectionSuccess(
    ctx: StateContext<IArtObejectState>,
    { payload }: GetArtObjectSuccess
  ) {
    const state = ctx.getState();
    ctx.setState(
      patch({
        loading: false,
        artObject: payload,
      })
    );
  }
}
