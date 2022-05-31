import React from 'react';

const Loading = ({ issueId }: { issueId: number }) => {
  return (
    <div className="issue-detail--loading" role="loader">
      <p>Loading issue #{issueId}...</p>
    </div>
  );
};
export default Loading;
