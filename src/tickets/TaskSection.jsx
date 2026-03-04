import Status from "../Tickets/Tasks/Status";
import Resolved from "../Tickets/Tasks/Resolved";

const TaskSection = () => {
  return (
    <div>
      <Status />
      <Resolved />
    </div>
  );
};

export default TaskSection;
