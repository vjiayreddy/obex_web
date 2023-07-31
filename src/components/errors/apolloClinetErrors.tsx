import React from "react";

interface ApolloClientErrorsProps {
  error: any;
}

const ApolloClientErrors = ({ error }: ApolloClientErrorsProps) => {
  if (error.graphQLErrors) {
    return error.graphQLErrors.map(({ message, locations, path }, i) => (
      <div key={i}>
        <p>{message}</p>
        <p>Locations: {locations.join(", ")}</p>
        <p>Path: {path.join(", ")}</p>
      </div>
    ));
  }
  if (error.networkError) {
    return <div>Network error: {error.networkError}</div>;
  }
  return null;
};

export default ApolloClientErrors;
