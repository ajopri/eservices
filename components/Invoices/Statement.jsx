import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from '@nextui-org/react';

export default function Statement() {
  const statement = (
    <div>
      Overall statement of accounts for orders transacted
      <br />
      in both local and US currency.
    </div>
  );
  return (
    <div className="w-full sm:w-1/6">
      {/* Title */}
      <div className="py-3 font-semibold text-maha-purple flex items-center">
        Statement of Accounts{' '}
        <Tooltip
          content={statement}
          placement="left"
          css={{
            width: 'fit-content',
          }}
        >
          <span className="text-gray-400 ml-2">
            <FontAwesomeIcon icon={faCircleInfo} />
          </span>
        </Tooltip>
      </div>
      <div className="bg-white border-[1px] border-gray-200 py-4 px-4">
        <div className="flex">
          <div className="bg-gray-200 text-center uppercase text-xs font-semibold text-gray-500 px-2 py-0.5 rounded-full w-full">
            MONTHLY SOA DOCUMENTS
          </div>
        </div>
      </div>
    </div>
  );
}
