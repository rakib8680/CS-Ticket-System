import { use } from "react";
import TicketSection from "./TicketSection";
import TaskSection from "./TaskSection";

const Main = ({ ticketsPromise }) => {
  const tickets = use(ticketsPromise);
  return (
    <div className="pb-20">
      <div className="grid grid-cols-12 gap-7">
        <div className="col-span-9">
          <TicketSection tickets={tickets} />
        </div>
        <div className="col-span-3">
          <TaskSection />
        </div>
      </div>
    </div>
  );
};

export default Main;
