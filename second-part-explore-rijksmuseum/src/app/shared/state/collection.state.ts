import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { catchError, tap, throwError } from "rxjs";
import { Collection, ICollectionState } from "../interfaces/collection.interface";
import { CollectionService } from "../services/collection.service";
import { GetCollection, GetCollectionSuccess } from "./collection.actions";

@State<ICollectionState>({
  name: 'collection',
  defaults: {
    artObjects: [],
    error: false,
    loading: false,
  }
})
@Injectable()
export class CollectionState {

  constructor(
    private collectionService: CollectionService
  ) {}

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

  @Action(GetCollection)
  getCollection({ setState, getState, dispatch}: StateContext<ICollectionState>, { }: any) {
    const state = getState();
    setState({...state, loading: true})

    return this.collectionService.getCollection().pipe(
      catchError((err, caught) => {
        setState({
          error: true,
          loading: false,
          artObjects: []
        });
        return throwError(err);
      }),
      tap((result: Collection ) => {
        dispatch(new GetCollectionSuccess(result.artObjects))
      })
    );
  }

  @Action(GetCollectionSuccess)
  feedAnimals(ctx: StateContext<ICollectionState>, { payload }: GetCollectionSuccess) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      loading: false,
      artObjects: [...payload],
    });
  }

}
