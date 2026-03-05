const SkeletonCard = () => (
  <div className="bg-white rounded-xl border border-gray-200 p-5">
    {/* Title + Status */}
    <div className="flex justify-between items-start mb-3">
      <div className="skeleton h-6 w-3/5"></div>
      <div className="skeleton h-7 w-24 rounded-full"></div>
    </div>

    {/* Description */}
    <div className="space-y-2.5 mb-5">
      <div className="skeleton h-3.5 w-full"></div>
      <div className="skeleton h-3.5 w-4/5"></div>
    </div>

    {/* Footer: ID, Priority, Customer, Date */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="skeleton h-4 w-14"></div>
        <div className="skeleton h-4 w-28"></div>
      </div>
      <div className="flex items-center gap-4">
        <div className="skeleton h-4 w-24"></div>
        <div className="skeleton h-4 w-20"></div>
      </div>
    </div>
  </div>
);

const TicketSkeleton = () => {
  return (
    <div className="pb-20">
      <div className="grid grid-cols-12 gap-7">
        {/* Ticket Section */}
        <div className="col-span-9">
          <div className="skeleton h-8 w-52 mb-3"></div>
          <div className="grid grid-cols-2 gap-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </div>

        {/* Task Section */}
        <div className="col-span-3">
          <div className="mb-10">
            <div className="skeleton h-8 w-36 mb-3"></div>
            <div className="skeleton h-3 w-52"></div>
          </div>
          <div>
            <div className="skeleton h-8 w-36 mb-3"></div>
            <div className="skeleton h-3 w-44"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketSkeleton;
