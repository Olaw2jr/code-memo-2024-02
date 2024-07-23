import { lazy, Suspense } from "react";

// Dynamically import the List component for lazy loading
const List = lazy(() => import("./List"));

/**
 * App component demonstrates the use of Suspense for lazy loading the List component.
 *
 * @returns {JSX.Element} The rendered App component.
 */
const App = () => {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <List />
      </Suspense>
    </>
  );
};

// Export the App component as the default
export default App;
