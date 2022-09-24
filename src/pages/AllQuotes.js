import QuoteList from "../components/quotes/QuoteList";
export const DUMMY_QUOTES = [
  { id: "q1", author: "Gonzalo", text: "Front end is awesome" },
  { id: "q2", author: "Adham", text: "Back end is awesome" },
];
const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
