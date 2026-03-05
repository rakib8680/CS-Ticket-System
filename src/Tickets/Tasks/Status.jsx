const TaskStatusCard = ({ title, id, handleResolveTicket }) => {
  return (
    <div className="bg-white p-5 space-y-3 rounded-lg border border-gray-200">
      <p className=" text-lg font-medium">{title}</p>
      <button
        onClick={() => handleResolveTicket({ id, title })}
        className="w-full btn bg-green-600  text-white text-base font-normal py-5 rounded-md"
      >
        Complete
      </button>
    </div>
  );
};

const Status = ({ selectedTickets, handleResolveTicket }) => {
  return (
    <div className="mb-10">
      <h1 className="text-[#40586d] text-2xl font-medium mb-3">Task Status</h1>
      {selectedTickets.length === 0 ? (
        <p className="text-gray-500 text-xs">
          Select a ticket to add to Task Status
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-2">
          {selectedTickets.map((ticket) => (
            <TaskStatusCard
              handleResolveTicket={handleResolveTicket}
              key={ticket.id}
              title={ticket.title}
              id={ticket.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Status;
