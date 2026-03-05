import Status from "../Tickets/Tasks/Status";
import Resolved from "../Tickets/Tasks/Resolved";

const TaskSection = ({
  selectedTickets,
  handleResolveTicket,
  resolvedTickets,
}) => {
  return (
    <div>
      <Status
        selectedTickets={selectedTickets}
        handleResolveTicket={handleResolveTicket}
      />
      <Resolved resolvedTickets={resolvedTickets} />
    </div>
  );
};

export default TaskSection;
