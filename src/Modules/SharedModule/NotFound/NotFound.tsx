import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";

import styles from "./NotFound.module.css"
const {notFound} = styles;



const NotFound = () => {
  const error = useRouteError();
  let errorStatus: number;
  let errorStatusText: string;

  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorStatusText = error.statusText;
  } else {
    errorStatus = 404;
    errorStatusText = "Page Not Found";
  }

  return (
    <div className={notFound}>
      <h1>{errorStatus}</h1>
      <p>{errorStatusText}</p>
      <Link to="/" replace={true}>
        How about going back to safety?
      </Link>
    </div>
  );
};

export default NotFound;