/* eslint-disable react/button-has-type */
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from '@nextui-org/react';

export default function Orders({ item }) {
  const renderCell = (val) =>
    val.map((v) => (
      <span
        key={v}
        className={`${
          v === 'Open'
            ? 'bg-blue-100 text-blue-500 border-2 border-blue-300'
            : 'bg-purple-100 text-maha-purple border-2 border-purple-300'
        }  px-2 py-0.5 rounded-lg mr-1 font-semibold`}
      >
        {v}
      </span>
    ));
  return (
    <div className="rounded-lg border-[1px] text-[0.65rem] relative overflow-auto max-h-screen">
      <table className="w-full overflow-y-auto">
        <thead>
          <tr>
            <th className="px-3 py-3 rounded-tl-md bg-gray-100 text-left font-semibold text-gray-500 uppercase tracking-wider">
              &nbsp;
            </th>
            <th className="px-3 py-3 bg-gray-100 text-left font-semibold text-gray-500 uppercase tracking-wider">
              P/O#
            </th>
            <th className="px-3 py-3 bg-gray-100 text-left font-semibold text-gray-500 uppercase tracking-wider">
              PO received
            </th>
            <th className="px-3 py-3 rounded-tr-md bg-gray-100 text-left font-semibold text-gray-500 uppercase tracking-wider">
              PO status
            </th>
          </tr>
        </thead>
        <tbody>
          {item.map((order) => (
            <tr key={order.id}>
              <td className="px-3 py-2">
                <Tooltip content="Details" placement="right">
                  <button
                    onClick={() => console.log('View user %s', order.id)}
                    className="bg-gray-100 hover:bg-gray-300 text-gray-800 font-bold py-2 px-2 rounded inline-flex items-center"
                  >
                    <FontAwesomeIcon icon={faChevronDown} />
                  </button>
                </Tooltip>
              </td>
              <td className="px-3 py-2">
                <span className="font-semibold text-blue-800">{order.po}</span>
              </td>
              <td className="px-3 py-2">{order.received}</td>
              <td className="px-3 py-2">{renderCell(order.status)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
