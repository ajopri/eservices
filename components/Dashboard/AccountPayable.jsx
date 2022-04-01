export default function Accountpayable() {
  const invoices = [
    {
      id: 1,
      inv: 'MCA-291823',
      dueDate: '15-04-2022',
      status: 'Overdue',
      dueIn: '-60 days',
      amountDue: '17,102.88',
    },
    {
      id: 2,
      inv: 'MCA-354168',
      dueDate: '17-05-2022',
      status: 'Overdue',
      dueIn: '-60 days',
      amountDue: 'USD 18,714.30',
    },
    {
      id: 3,
      inv: 'MCA-531234',
      dueDate: '21-06-2022',
      status: 'Overdue',
      dueIn: '-60 days',
      amountDue: 'USD 18,714.30',
    },
    {
      id: 4,
      inv: 'MCA-123156',
      dueDate: '09-07-2022',
      status: 'Outstanding',
      dueIn: '90 days',
      amountDue: 'SGD 17,102.88',
    },
    {
      id: 5,
      inv: 'MCA-494531',
      dueDate: '31-09-2022',
      status: 'Outstanding',
      dueIn: '90 days',
      amountDue: 'SGD 17,102.88',
    },
  ];

  const renderCell = (val) => (
    <span
      className={`${
        val === 'Overdue'
          ? 'bg-red-100 text-red-500 border-2 border-red-300'
          : 'bg-orange-100 text-orange-500 border-2 border-orange-300'
      }  px-2 py-0.5 rounded-lg mr-1 font-semibold`}
    >
      {val}
    </span>
  );
  const renderDueIn = (val, stat) => (
    <span
      className={`${
        stat === 'Overdue' ? 'text-red-500' : 'text-orange-500'
      }  px-2 py-0.5 mr-1 font-semibold`}
    >
      {val}
    </span>
  );
  return (
    <table className="min-w-full leading-normal text-[10px]">
      <thead>
        <tr>
          <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left font-semibold text-gray-500 uppercase tracking-wider">
            invoice#
          </th>
          <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left font-semibold text-gray-500 uppercase tracking-wider">
            due date
          </th>
          <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left font-semibold text-gray-500 uppercase tracking-wider">
            status
          </th>
          <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left font-semibold text-gray-500 uppercase tracking-wider">
            due in
          </th>
          <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left font-semibold text-gray-500 uppercase tracking-wider">
            amount due
          </th>
        </tr>
      </thead>
      <tbody>
        {invoices.map((inv) => (
          <tr key={inv.id}>
            <td className="px-3 py-2">
              <span className="font-semibold text-blue-800">{inv.inv}</span>
            </td>
            <td className="px-3 py-2">{inv.dueDate}</td>
            <td className="px-3 py-2">{renderCell(inv.status)}</td>
            <td className="px-3 py-2">{renderDueIn(inv.dueIn, inv.status)}</td>
            <td className="px-3 py-2">{inv.amountDue}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
