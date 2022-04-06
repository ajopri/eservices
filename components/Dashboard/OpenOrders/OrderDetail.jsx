/* eslint-disable no-nested-ternary */
export default function Orderdetail({ isExpanded }) {
  const renderStat = (val) => (
    <span
      className={`${
        val.toLowerCase() === 'unfulfilled'
          ? 'bg-red-100 text-red-500 border-[1px] border-red-300'
          : val.toLowerCase() === 'fulfilled'
          ? 'bg-green-100 text-green-500 border-[1px] border-green-300'
          : 'bg-orange-100 text-orange-500 border-[1px] border-orange-300'
      }  px-2 py-0.5 rounded-md mr-1 font-semibold text-[0.6rem]`}
    >
      {val}
    </span>
  );

  function renderDate(str) {
    const today = new Date();
    const d = str.trim();
    const strDate = d.split('-')[0];
    const parts = strDate.split('/');
    const poDateTmp = new Date(`20${parts[2]}`, parts[1] - 1, parts[0]);
    const poDate = poDateTmp;
    return (
      <span
        className={`${poDate > today ? 'text-maha-purple font-semibold' : ''} `}
      >
        {str}
      </span>
    );
  }

  return (
    <div
      className={`${!isExpanded ? 'hidden' : 'block'} bg-green-50 py-2 px-5`}
    >
      <div className="rounded-sm border-[1px]">
        <table className="w-full">
          <thead>
            <tr className="uppercase bg-gray-50 text-gray-400 border-b-[1px] border-gray-200">
              <th className="px-3 py-2 rounded-tl-md">item</th>
              <th className="px-3 py-2">open qty</th>
              <th className="px-3 py-2">total qty</th>
              <th className="px-3 py-2">total invoice</th>
              <th className="px-3 py-2">item status</th>
              <th className="px-3 py-2 rounded-tr-md">scheduled delivery</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b-[1px] border-gray-200">
              <td className="px-3 py-2">CAB-O-SIL M5</td>
              <td className="px-3 py-2">500 KG</td>
              <td className="px-3 py-2">500 KG</td>
              <td className="px-3 py-2">SGD 3,420.00</td>
              <td className="px-3 py-2">{renderStat('Unfulfilled')}</td>
              <td className="px-3 py-2">{renderDate('14/02/22 - TBA')}</td>
            </tr>
            <tr className="bg-white border-b-[1px] border-gray-200">
              <td className="px-3 py-2">CAB-O-SIL M5</td>
              <td className="px-3 py-2">500 KG</td>
              <td className="px-3 py-2">500 KG</td>
              <td className="px-3 py-2">SGD 3,420.00</td>
              <td className="px-3 py-2">{renderStat('Fulfilled')}</td>
              <td className="px-3 py-2">{renderDate('14/04/22 - TBA')}</td>
            </tr>
            <tr className="bg-white border-b-[1px] border-gray-200">
              <td className="px-3 py-2">CAB-O-SIL M5</td>
              <td className="px-3 py-2">500 KG</td>
              <td className="px-3 py-2">500 KG</td>
              <td className="px-3 py-2">SGD 3,420.00</td>
              <td className="px-3 py-2">{renderStat('Partially fulfilled')}</td>
              <td className="px-3 py-2">{renderDate('14/04/22 - TBA')}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
