import { ActionsTypes, State, SET_ISSUES, SET_ISSUE_DETAILS } from './types';
import { Node } from '../../interfaces/issueList.interface';
const initialState: State = {
  issueDetails: {},
  issues: [],
  issueCount: 0,
  pageInfo: {},
};

export const searchReducer = (state = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case SET_ISSUES:
      return {
        ...state,
        issues: action.payload?.nodes?.filter((node: Node) => node.title) || [],
        issueCount: action.payload.issueCount,
        pageInfo: action.payload.pageInfo,
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
