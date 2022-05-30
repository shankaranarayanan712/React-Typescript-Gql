import React from 'react';

const Loading = ({ issueId }: { issueId: number }) => {
  return (
    <div className="issue-detail--loading">
      <p>Loading issue #{issueId}...</p>
    </div>
  );
};
export default Loading;
