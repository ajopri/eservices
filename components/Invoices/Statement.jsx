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
      <div className="flex items-center py-3 font-semibold text-maha-purple">
        Monthly Statements{' '}
        <Tooltip
          content={statement}
          placement="left"
          css={{
            width: 'fit-content',
          }}
        >
          <span className="ml-2 text-gray-400">
            <FontAwesomeIcon icon={faCircleInfo} />
          </span>
        </Tooltip>
      </div>
      <div className="rounded-md border-[1px] border-gray-200 bg-white py-4 px-4">
        <div className="flex" />
      </div>
    </div>
  );
}
