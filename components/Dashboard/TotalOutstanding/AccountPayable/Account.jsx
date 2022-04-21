/* eslint-disable react/no-array-index-key */
import ReactCountryFlag from 'react-country-flag';

export default function Account({ accountPayable }) {
  const { details } = accountPayable.data[0];
  return (
    <div className="grid grid-cols-2 gap-3">
      {details.map((detail, idx) => (
        <div
          key={idx}
          className="rounded-md border-[1px] border-gray-200 bg-white px-5 py-3"
        >
          <div className="flex items-center justify-start">
            <div className="mr-3">
              <ReactCountryFlag
                countryCode={detail.currency.slice(0, 2)}
                svg
                cdnUrl="https://hatscripts.github.io/circle-flags/flags/"
                style={{
                  width: '1.5em',
                  height: '1.5em',
                }}
                title={detail.currency}
              />
            </div>
            <div className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold uppercase text-gray-500">
              {detail.currency} Account
            </div>
          </div>
          <div className="w-full pt-1 text-xl font-bold text-gray-800 sm:text-2xl">
            {detail.currency.slice(0, 2)}$ {detail.payable.toLocaleString()}
          </div>
        </div>
      ))}
    </div>
  );
}
