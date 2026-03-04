import Navbar from "./components/Navbar/Navbar";
import StatusCards from "./components/Banner/StatusCards";
import TicketSection from "./tickets/TicketSection";

const App = () => {
  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <Navbar />
      <div className="container mx-auto">
        <StatusCards />
        <TicketSection />
      </div>
    </div>
  );
};

export default App;
