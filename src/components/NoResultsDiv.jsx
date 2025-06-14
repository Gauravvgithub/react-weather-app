const NoResultsDiv = () => {
  return (
    <>
      <div className="no-results">
        <img src="icons/no-result.svg" alt="No results found" className="icon" />
        <h3 className="title">Something went wrong</h3>
        <p className="message">We&apos;re unable to retrive the weather details. Ensure you&apos;ve entered a vaild city or try again later.</p>
      </div>
    </>
  );
};

export default NoResultsDiv;
