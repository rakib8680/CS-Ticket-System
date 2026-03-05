const priorityColors = {
  HIGH: "text-red-500",
  MEDIUM: "text-amber-500",
  LOW: "text-green-600",
};

const statusStyles = {
  OPEN: { bg: "bg-green-100", dot: "bg-green-500", text: "Open" },
  IN_PROGRESS: {
    bg: "bg-yellow-100",
    dot: "bg-yellow-500",
    text: "In- Progress",
  },
  CLOSED: { bg: "bg-gray-200", dot: "bg-gray-500", text: "Closed" },
};

const TicketCard = ({ ticket }) => {
  const { id, title, description, customer, priority, status, createdAt } =
    ticket || {};

  const statusStyle = statusStyles[status] || statusStyles.OPEN;
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 cursor-pointer hover:border-[#40586d] transition-all duration-200">
      {/* Title + Status */}
      <div className="flex justify-between items-start mb-3">
        <h2 className="text-[#2d3748] text-lg font-bold pr-4">{title}</h2>
        <span
          className={`${statusStyle.bg} flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap`}
        >
          <span
            className={`${statusStyle.dot} w-2.5 h-2.5 rounded-full`}
          ></span>
          {statusStyle.text}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
        {description}
      </p>

      {/* Footer: ID, Priority, Customer, Date */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-4">
          <span className="text-gray-500 font-semibold">{id}</span>
          <span
            className={`${priorityColors[priority]} font-bold text-xs tracking-wide`}
          >
            {priority} PRIORITY
          </span>
        </div>
        <div className="flex items-center gap-4 text-gray-500">
          <span>{customer}</span>
          <div className="flex items-center gap-1.5">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2" />
              <path d="M16 2v4M8 2v4M3 10h18" strokeWidth="2" />
            </svg>
            <span>{createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
