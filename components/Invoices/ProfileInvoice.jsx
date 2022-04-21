import {
  faExclamationTriangle,
  faMoneyCheckAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Profileinvoice() {
  return (
    <>
      {' '}
      <div className="grid min-h-[5.5rem] grid-cols-1 gap-0 space-y-3 sm:grid-cols-3 sm:gap-3 sm:space-y-0">
        <div className="flex items-center rounded-md border-[1px] border-gray-200 bg-white px-5 py-3">
          {/* Credit terms */}
          <div className="flex w-full justify-center space-x-4">
            <span className="rounded-full bg-maha-purple bg-opacity-10 px-3 py-3 text-maha-purple">
              <FontAwesomeIcon icon={faMoneyCheckAlt} size="lg" fixedWidth />
            </span>
            <div>
              <div className="text-xs font-light text-gray-500">
                Credit Terms
              </div>
              <div className="text-2xl font-bold">90 days</div>
            </div>
          </div>
        </div>
        <div className="col-span-2 flex items-center rounded-md border-[1px] border-gray-200 bg-white px-5 py-3">
          {/* Overdue */}
          <div className="flex w-full justify-center space-x-4 border-r-[1px] border-gray-300">
            <span className="rounded-full bg-red-100 px-3 py-3 text-red-600">
              <FontAwesomeIcon
                icon={faExclamationTriangle}
                size="lg"
                fixedWidth
              />
            </span>
            <div>
              <div className="text-xs font-light text-gray-500">Overdue</div>
              <div className="text-2xl font-bold">32</div>
            </div>
          </div>
          {/* Outstanding */}
          <div className="flex w-full justify-center space-x-4 border-l-[1px] border-gray-300">
            <span className="rounded-full bg-orange-100 px-3 py-3 text-orange-600">
              <FontAwesomeIcon icon={faMoneyCheckAlt} size="lg" fixedWidth />
            </span>
            <div>
              <div className="text-xs font-light text-gray-500">
                Outstanding
              </div>
              <div className="text-2xl font-bold">4</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
