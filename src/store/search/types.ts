import { Issues, PageInfo } from '../../interfaces/issueList.interface';

export const SET_ISSUES = 'SET_ISSUES';
export const SET_ISSUE_DETAILS = 'SET_ISSUE_DETAILS';
interface SetIssuesAction {
  type: typeof SET_ISSUES;
  payload: any;
}
interface SetIssueDetailsAction {
  type: typeof SET_ISSUE_DETAILS;
  payload: any;
}

export interface State {
  issues: [];
  issueDetails: Issues;
  issueCount: number;
  pageInfo: PageInfo;
}

export type ActionsTypes = SetIssuesAction | SetIssueDetailsAction;
