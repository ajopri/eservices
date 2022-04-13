import ReactCountryFlag from 'react-country-flag';

export default function Account() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="bg-white rounded-md border-[1px] border-gray-200 px-5 py-3">
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
        <div className="font-bold sm:text-2xl text-xl text-gray-800 w-full pt-1">
          S$ 103,675.93
        </div>
      </div>
      <div className="bg-white rounded-md border-[1px] border-gray-200 px-5 py-3">
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
        <div className="font-bold sm:text-2xl text-xl text-gray-800 w-full pt-1">
          US$ 295,414.61
        </div>
      </div>
    </div>
  );
}
