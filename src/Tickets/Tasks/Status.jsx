const TaskStatusCard = ({ title }) => {
  return (
    <div className="bg-white p-5 space-y-3 rounded-lg border border-gray-200">
      <p className=" text-lg font-medium">{title}</p>
      <button className="w-full btn bg-green-600  text-white text-base font-normal py-5 rounded-md">
        Complete
      </button>
    </div>
  );
};

const Status = ({ selectedTickets }) => {
  return (
    <div className="mb-10">
      <h1 className="text-[#40586d] text-2xl font-medium mb-3">Task Status</h1>
      {selectedTickets.length === 0 && (
        <p className="text-gray-500 text-xs">
          Select a ticket to add to Task Status
        </p>
      )}
      <div className="grid grid-cols-1 gap-5">
        {selectedTickets.map((ticket) => (
          <TaskStatusCard key={ticket.id} title={ticket.title} />
        ))}
      </div>
    </div>
  );
};

export default Status;
