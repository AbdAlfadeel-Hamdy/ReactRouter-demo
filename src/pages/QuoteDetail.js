import { Fragment } from "react";
import { Link, Route, Switch, useParams } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import { DUMMY_QUOTES } from "./AllQuotes";
const QuoteDetail = () => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (!quote) return <p>Quote not found!</p>;
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Switch>
        <Route path={`/quotes/${params.quoteId}`} exact>
          <div className="centered">
            <Link
              className="btn--flat"
              to={`/quotes/${params.quoteId}/comments`}
            >
              Load Comments
            </Link>
          </div>
        </Route>

        <Route path={`/quotes/${params.quoteId}/comments`}>
          <Comments />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default QuoteDetail;
