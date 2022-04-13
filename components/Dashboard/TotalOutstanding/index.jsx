import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from '@nextui-org/react';
import Accountpayable from './AccountPayable';
import Account from './AccountPayable/Account';

export default function TotalOutstanding() {
  return (
    <>
      {/* Title */}
      <div className="py-3 font-semibold text-maha-purple flex items-center">
        Total Outstanding Payables{' '}
        <Tooltip
          content="Only outstanding & overdue invoices are displayed."
          placement="top"
        >
          <span className="text-gray-400 ml-2">
            <FontAwesomeIcon icon={faCircleInfo} />
          </span>
        </Tooltip>
      </div>

      {/* Content */}
      <div className="flex flex-col space-y-4">
        {/* Account */}
        <Account />

        {/* Account Payable */}
        <div className="container bg-white rounded-md shadow h-auto p-4 border-[1px] border-gray-200">
          <Accountpayable />
        </div>
      </div>
    </>
  );
}
