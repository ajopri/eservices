import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from '@nextui-org/react';
import Accountpayable from './AccountPayable';
import Account from './AccountPayable/Account';

export default function TotalOutstanding({
  dataPayable,
  accountPayable,
  openInv,
}) {
  return (
    <>
      {/* Title */}
      <div className="flex items-center py-3 font-semibold text-maha-purple">
        Total Outstanding Payables{' '}
        <Tooltip
          content="Only outstanding & overdue invoices are displayed."
          placement="top"
        >
          <span className="ml-2 text-gray-400">
            <FontAwesomeIcon icon={faCircleInfo} />
          </span>
        </Tooltip>
      </div>

      {/* Content */}
      <div className="flex flex-col space-y-4">
        {/* Account */}
        <Account accountPayable={accountPayable} />

        {/* Account Payable */}
        <div className="container h-[28rem] rounded-md border-[1px] border-gray-200 bg-white p-4 shadow">
          <Accountpayable dataPayable={dataPayable} openInv={openInv} />
        </div>
      </div>
    </>
  );
}
