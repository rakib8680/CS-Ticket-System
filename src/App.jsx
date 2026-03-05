import Navbar from "./components/Navbar/Navbar";
import StatusCards from "./components/Banner/StatusCards";
import { Suspense, useState } from "react";
import TicketSkeleton from "./Tickets/TicketSkeleton";
import Main from "./Tickets/Main";
import Footer from "./components/Footer/Footer";
import { Toaster, toast } from "sonner";

const TicketsPromise = fetch("/tickets.json").then((res) => res.json());

const App = () => {
  const [selectedTickets, setSelectedTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  // handle ticket click
  const handleTicketClick = (ticket) => {
    const ticketPayload = {
      id: ticket.id,
      title: ticket.title,
    };

    if (selectedTickets.find((t) => t.id === ticketPayload.id)) {
      toast.error(`Ticket ${ticket.id} already in Task Status`);
      return;
    }
    setSelectedTickets([...selectedTickets, ticketPayload]);
    toast.success(`Ticket ${ticket.id} added to Task Status`);
  };
  // handle resolve ticket
  const handleResolveTicket = (ticket) => {
    const updatedTickets = selectedTickets.filter((t) => t.id !== ticket.id);
    setSelectedTickets(updatedTickets);
    setResolvedTickets([...resolvedTickets, ticket]);
    toast.success(`Ticket ${ticket.id} Resolved`);
  };

  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <Navbar />
      <div className="container mx-auto">
        <StatusCards
          selectedTickets={selectedTickets.length}
          resolvedTickets={resolvedTickets.length}
        />
        <Suspense fallback={<TicketSkeleton />}>
          <Main
            ticketsPromise={TicketsPromise}
            handleTicketClick={handleTicketClick}
            handleResolveTicket={handleResolveTicket}
            selectedTickets={selectedTickets}
            resolvedTickets={resolvedTickets}
          />
        </Suspense>
      </div>
      <Footer />
      <Toaster position="bottom-right" richColors />
    </div>
  );
};

export default App;
