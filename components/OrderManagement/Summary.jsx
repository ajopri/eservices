import {
  faBoxes,
  faBoxOpen,
  faCalendarCheck,
  faCalendarWeek,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Summary({ sum }) {
  return (
    <div className="basis-1/5 rounded-sm border-[1px] border-gray-50 bg-white py-2 px-3 shadow">
      <div className="flex h-96 flex-col sm:h-full">
        <div className="mx-4 flex h-1/4 flex-1 basis-1/4 items-center space-x-7 whitespace-nowrap border-b-[1px] border-gray-200 px-32 sm:px-0">
          <span className="rounded-full bg-red-100 px-3.5 py-3 text-red-600">
            <FontAwesomeIcon icon={faBoxOpen} fixedWidth />
          </span>
          <div>
            <div className="text-xs font-light text-gray-500">Unfulfilled</div>
            <div className="text-2xl font-bold">{sum.unfulfilled}</div>
          </div>
        </div>
        <div className="mx-4 flex h-1/4 flex-1 basis-1/4 items-center space-x-7 whitespace-nowrap border-b-[1px] border-gray-200 px-32 sm:px-0">
          <span className="rounded-full bg-maha-purple bg-opacity-10 px-3.5 py-3 text-maha-purple">
            <FontAwesomeIcon icon={faCalendarWeek} fixedWidth />
          </span>
          <div>
            <div className="text-xs font-light text-gray-500">Scheduled</div>
            <div className="text-2xl font-bold">{sum.scheduled}</div>
          </div>
        </div>
        <div className="mx-4 flex h-1/4 flex-1 basis-1/4 items-center space-x-7 whitespace-nowrap border-b-[1px] border-gray-200 px-32 sm:px-0">
          <span className="rounded-full bg-orange-100 px-3.5 py-3 text-orange-600">
            <FontAwesomeIcon icon={faBoxes} fixedWidth />
          </span>
          <div>
            <div className="text-xs font-light text-gray-500">
              Partially Fulfilled
            </div>
            <div className="text-2xl font-bold">{sum.partially}</div>
          </div>
        </div>
        <div className="mx-4 flex h-1/4 flex-1 basis-1/4 items-center space-x-7 whitespace-nowrap px-32 sm:px-0">
          <span className="rounded-full bg-green-100 px-3.5 py-3 text-green-600">
            <FontAwesomeIcon icon={faCalendarCheck} fixedWidth />
          </span>
          <div>
            <div className="text-xs font-light text-gray-500">Fulfilled</div>
            <div className="text-2xl font-bold">{sum.fulfilled}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
