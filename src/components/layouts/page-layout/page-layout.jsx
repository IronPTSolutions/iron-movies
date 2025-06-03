import { Jumbotron } from "../../ui";

function PageLayout({ jumbotron, children }) {
  return (
    <>
      {jumbotron && (<Jumbotron {...jumbotron} />)}
      <div className="container py-3">
        {children}
      </div>
    </>
  );
}

export default PageLayout;