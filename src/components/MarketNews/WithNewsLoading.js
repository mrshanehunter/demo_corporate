import React from "react";

function WithNewsLoading(Component) {
  return function WithRatesLoading({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: `center`, fontSize: `3rem` }}>
        Loading market news now ...
      </p>
    );
  };
}

export default WithNewsLoading;
