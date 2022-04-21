import Openorders from './OpenOrders';
import TotalOutstanding from './TotalOutstanding';

export default function Dashboard({
  dataPayable,
  dataOpenPo,
  accountPayable,
  openInv,
}) {
  return (
    <div className="flex flex-wrap space-x-0 sm:flex-nowrap sm:space-x-3">
      {/* Open Order */}
      <div className="w-full sm:w-7/12">
        <Openorders dataOpenPo={dataOpenPo} />
      </div>
      {/* Total Outstanding */}
      <div className="mt-5 w-full sm:mt-0 sm:w-5/12">
        <TotalOutstanding
          dataPayable={dataPayable}
          accountPayable={accountPayable}
          openInv={openInv}
        />
      </div>
    </div>
  );
}
