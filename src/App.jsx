import Navbar from "./components/Navbar/Navbar";
import StatusCards from "./components/Banner/StatusCards";
import { Suspense, useState } from "react";
import TicketSkeleton from "./Tickets/TicketSkeleton";
import Main from "./Tickets/Main";

const TicketsPromise = fetch("/tickets.json").then((res) => res.json());

const App = () => {
  const [selectedTickets, setSelectedTickets] = useState([]);

  const handleTicketClick = (ticket) => {
    const ticketPayload = {
      id: ticket.id,
      title: ticket.title,
    };

    if (selectedTickets.find((t) => t.id === ticketPayload.id)) {
      return;
    }
    setSelectedTickets([...selectedTickets, ticketPayload]);
  };

  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <Navbar />
      <div className="container mx-auto">
        <StatusCards selectedTickets={selectedTickets.length} />
        <Suspense fallback={<TicketSkeleton />}>
          <Main
            ticketsPromise={TicketsPromise}
            handleTicketClick={handleTicketClick}
            selectedTickets={selectedTickets}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
