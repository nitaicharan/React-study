import { AnyAction } from "redux";
import { FetchCommentsConstants, PostShowConstants } from "../constants/PostShowConstants";
import { PostShowState } from "../reducers/PostShowReducer";

export const postShowAction = (): AnyAction => ({
    type: PostShowConstants.POSTSHOW
});

export const postShowSuccessAction = (payload: PostShowState): AnyAction => ({
    type: PostShowConstants.POSTSHOW_SUCCESS,
    payload,
});

export const postShowFailureAction = (): AnyAction => ({
    type: PostShowConstants.POSTSHOW_FAILURE,
});

export const fetchCommentsAction = (): AnyAction => ({
    type: FetchCommentsConstants.FETCH_COMMENTS
});

export const fetchCommentsSuccessAction = (payload: PostShowState): AnyAction => ({
    type: FetchCommentsConstants.FETCH_COMMENTS_SUCCESS,
    payload,
});

export const fetchCommentsFailureAction = (): AnyAction => ({
    type: FetchCommentsConstants.FETCH_COMMENTS_FAILURE,
});