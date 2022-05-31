import { gql } from '@apollo/client';

export const SEARCH_ISSUES = gql`
         query($searchQuery: String!, $after: String, $before: String) {
           search(query: $searchQuery, type: ISSUE, first: 100, after: $after, before: $before) {
             nodes {
               ... on Issue {
                 title
                 createdAt
                 state
                 number
                 body
                 comments {
                   totalCount
                 }
                 author {
                   avatarUrl
                   login
                 }
               }
             }
             issueCount
             pageInfo {
               hasNextPage
               hasPreviousPage
               endCursor
               startCursor
             }
           }
         }
       `;

export const GET_ISSUE_DETAILS = gql`
  query($issueNumber: Int!) {
    repository(name: "react", owner: "facebook") {
      issue(number: $issueNumber) {
        title
        number
        state
        body
        createdAt
        author {
          avatarUrl
          login
        }
        comments(first: 10) {
          edges {
            node {
              author {
                avatarUrl
                login
              }
              body
              id
            }
          }
        }
      }
    }
  }
`;
