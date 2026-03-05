const Resolved = ({ resolvedTickets }) => {
  console.log(resolvedTickets);
  return (
    <div>
      <h1 className="text-[#40586d] text-2xl font-medium mb-3">
        Resolved Task
      </h1>
      {resolvedTickets.length === 0 ? (
        <p className="text-gray-500 text-xs">No Resolved Task yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-2">
          {resolvedTickets.map((ticket) => (
            <div
              key={ticket.id}
              className="bg-[#E0E7FF] p-5 rounded-lg shadow-sm border border-gray-200 font-medium "
            >
              {ticket.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Resolved;
