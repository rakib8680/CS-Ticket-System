import TicketCard from "../Tickets/TicketCard";

const TicketSection = ({
  tickets,
  handleTicketClick,
  selectedTickets = [],
  resolvedTickets = [],
}) => {
  // this function is used to filter out the tickets that are already selected or resolved
  const reamainingTickets = tickets.filter(
    (t) =>
      !selectedTickets.some((selected) => selected.id === t.id) &&
      !resolvedTickets.some((resolved) => resolved.id === t.id),
  );

  return (
    <div>
      <h1 className="text-[#40586d] text-2xl font-medium mb-3">
        Customer Tickets
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {reamainingTickets.map((ticket) => (
          <TicketCard
            key={ticket.id}
            ticket={ticket}
            handleTicketClick={handleTicketClick}
          />
        ))}
      </div>
    </div>
  );
};

export default TicketSection;
