import vectorBg from "../../assets/vector1.png";

const StatusCard = ({ title, count, gradient }) => {
  return (
    <div
      className="rounded-xl px-6 py-20 text-white text-center relative overflow-hidden shadow-none border-none flex flex-col items-center justify-end"
      style={{ background: `linear-gradient(to right, ${gradient})` }}
    >
      {/* Background pattern - left */}
      <img
        src={vectorBg}
        className="absolute top-0 left-0 h-full pointer-events-none opacity-80"
      />
      {/* Background pattern - right (mirrored) */}
      <img
        src={vectorBg}
        className="absolute top-0 right-0 h-full pointer-events-none opacity-80"
        style={{ transform: "scaleX(-1)" }}
      />
      <p className="text-2xl font-light relative z-10">{title}</p>
      <p className="text-6xl font-medium  mt-5 relative z-10">{count}</p>
    </div>
  );
};

const StatusCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-20">
      <StatusCard title="In-Progress" count={0} gradient="#632EE3, #9F62F2" />
      <StatusCard title="Resolved" count={0} gradient="#54CF68, #00827A" />
    </div>
  );
};

export default StatusCards;
