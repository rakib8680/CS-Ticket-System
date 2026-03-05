import Status from "../Tickets/Tasks/Status";
import Resolved from "../Tickets/Tasks/Resolved";

const TaskSection = ({ selectedTickets }) => {
  return (
    <div>
      <Status selectedTickets={selectedTickets} />
      <Resolved />
    </div>
  );
};

export default TaskSection;
