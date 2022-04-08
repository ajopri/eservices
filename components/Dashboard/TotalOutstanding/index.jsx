import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from '@nextui-org/react';
import ReactCountryFlag from 'react-country-flag';
import Accountpayable from './AccountPayable';

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
        {/* Summary */}
        <div className="flex space-x-4">
          <div className="w-1/2 bg-white rounded-md shadow-xl h-auto py-4 px-6 border-[1px] border-gray-200">
            <div className="flex justify-start items-center">
              <div className="mr-3">
                <ReactCountryFlag
                  countryCode="SG"
                  svg
                  cdnUrl="https://hatscripts.github.io/circle-flags/flags/"
                  style={{
                    width: '1.5em',
                    height: '1.5em',
                  }}
                  title="SGD"
                />
              </div>
              <div className="bg-gray-200 uppercase text-xs font-semibold text-gray-500 px-2 py-0.5 rounded-full">
                SGD Account
              </div>
            </div>
            <div className="font-bold text-2xl text-gray-800 w-full pt-1">
              S$ 103,675.93
            </div>
          </div>
          <div className="w-1/2 bg-white rounded-md shadow-xl h-auto py-4 px-6 border-[1px] border-gray-200">
            <div className="flex justify-start items-center">
              <div className="mr-3">
                <ReactCountryFlag
                  countryCode="US"
                  svg
                  cdnUrl="https://hatscripts.github.io/circle-flags/flags/"
                  style={{
                    width: '1.5em',
                    height: '1.5em',
                  }}
                  title="USD"
                />
              </div>
              <div className="bg-gray-200 uppercase text-xs font-semibold text-gray-500 px-2 py-0.5 rounded-full">
                usd Account
              </div>
            </div>
            <div className="font-bold text-2xl text-gray-800 w-full pt-1">
              US$ 295,414.61
            </div>
          </div>
        </div>

        {/* Account Payable */}
        <div className="container bg-white rounded-md shadow-xl h-auto p-4 border-[1px] border-gray-200">
          <Accountpayable />
        </div>
      </div>
    </>
  );
}
