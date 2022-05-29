import { ActionsTypes, State, SET_ISSUES, SET_ISSUE_DETAILS } from './types';

const initialState: State = {
  issueDetails: {},
  issues: [],
  issueCount: 0,
};

export const searchReducer = (state = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case SET_ISSUES:
      return {
        ...state,
        issues: action.payload.nodes.filter((node: any) => node.title),
        issueCount: action.payload.issueCount,
        issueDetails: {},
      };
    case SET_ISSUE_DETAILS:
      return {
        ...state,
        issueDetails: action.payload,
      };
    default:
      return state;
  }
};
