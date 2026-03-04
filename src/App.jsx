import Navbar from "./components/Navbar/Navbar";
import StatusCards from "./components/Banner/StatusCards";
import { Suspense } from "react";
import Main from "./tickets/Main";

const TicketsPromise = fetch("/tickets.json").then((res) => res.json());

const App = () => {
  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <Navbar />
      <div className="container mx-auto">
        <StatusCards />
        <Suspense fallback={<div>Loading...</div>}>
          <Main ticketsPromise={TicketsPromise} />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
