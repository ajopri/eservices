import {
  faExclamationTriangle,
  faMoneyCheckAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Profileinvoice() {
  return (
    <>
      {' '}
      <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-3 gap-0 space-y-3 sm:space-y-0 min-h-[5.5rem]">
        <div className="flex items-center bg-white rounded-md border-[1px] border-gray-200 px-5 py-3">
          {/* Credit terms */}
          <div className="flex w-full space-x-4 justify-center">
            <span className="bg-maha-purple bg-opacity-10 text-maha-purple px-3 py-3 rounded-full">
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
        <div className="flex items-center bg-white rounded-md border-[1px] border-gray-200 px-5 py-3 col-span-2">
          {/* Overdue */}
          <div className="flex w-full justify-center space-x-4 border-r-[1px] border-gray-300">
            <span className="bg-red-100 text-red-600 px-3 py-3 rounded-full">
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
            <span className="bg-orange-100 text-orange-600 px-3 py-3 rounded-full">
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
