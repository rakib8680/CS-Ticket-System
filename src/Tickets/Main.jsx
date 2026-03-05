import { use } from "react";
import TaskSection from "./TaskSection";
import TicketSection from "./TicketSection";

const Main = ({
  ticketsPromise,
  handleTicketClick,
  handleResolveTicket,
  selectedTickets,
  resolvedTickets,
}) => {
  const tickets = use(ticketsPromise);
  return (
    <div className="pb-20">
      <div className="flex flex-col-reverse md:grid md:grid-cols-12 gap-7">
        <div className="md:col-span-9">
          <TicketSection
            tickets={tickets}
            handleTicketClick={handleTicketClick}
            selectedTickets={selectedTickets}
            resolvedTickets={resolvedTickets}
          />
        </div>
        <div className="md:col-span-3">
          <TaskSection
            selectedTickets={selectedTickets}
            handleResolveTicket={handleResolveTicket}
            resolvedTickets={resolvedTickets}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
