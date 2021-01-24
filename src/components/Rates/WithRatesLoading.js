import React from "react";

function WithRatesLoading(Component) {
  return function WithRatesLoading({ isLoading, ...props }) {
    if(!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: `center`, fontSize: `3rem` }}>Loading current rates now ...</p>
    );
  };
}

export default WithRatesLoading;