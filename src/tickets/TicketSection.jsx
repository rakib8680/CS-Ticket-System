import TicketCard from "../Tickets/TicketCard";

const TicketSection = ({ tickets }) => {
  return (
    <div>
      <h1 className="text-[#40586d] text-2xl font-medium mb-3">
        Customer Tickets :
      </h1>
      <div className="grid grid-cols-2 gap-5">
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default TicketSection;
