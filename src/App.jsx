import Navbar from "./components/Navbar/Navbar";
import StatusCards from "./components/StatusCards/StatusCards";

const App = () => {
  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <Navbar />
      <div className="container mx-auto p-6">
        <StatusCards />
      </div>
    </div>
  );
};

export default App;
