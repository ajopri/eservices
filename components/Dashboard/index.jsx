import Openorders from './OpenOrders';
import TotalOutstanding from './TotalOutstanding';

export default function Dashboard() {
  return (
    <div className="flex flex-wrap sm:flex-nowrap sm:space-x-3 space-x-0">
      {/* Open Order */}
      <div className="sm:w-7/12 w-full">
        <Openorders />
      </div>
      {/* Total Outstanding */}
      <div className="sm:w-5/12 w-full sm:mt-0 mt-5">
        <TotalOutstanding />
      </div>
    </div>
  );
}
