/* eslint-disable import/no-unresolved */
import LayoutAuth from '@components/Layout/auth';
import Link from 'next/link';

export default function Activate() {
  return (
    <LayoutAuth pageTitle="Activate your account">
      {/* content */}
      <div className="w-96">
        {/* title */}
        <div className="text-left mb-6">
          <h1 className="text-3xl font-bold text-gray-700">
            Activate your account
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Create a password to log into e-services.
          </p>
        </div>
        <div className="w-[21rem]">
          <form className="mb-4">
            <div className="mb-3">
              <input
                name="email"
                id="email"
                placeholder="Email"
                readOnly
                disabled
                value="lily.chong@nipponpaint.com.sg"
                className="w-full px-3 py-2 placeholder-gray-300 border text-gray-400 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
            </div>
            <div className="mb-3">
              <input
                name="password"
                id="password"
                type="password"
                placeholder="Password"
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
            </div>
            <div className="mb-3">
              <input
                name="password-confirmation"
                id="password-confirmation"
                type="password"
                placeholder="Confirm password"
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
            </div>
            <div className="my-6">
              <Link href="/activated" passHref>
                <button
                  type="button"
                  className="w-full px-3 py-3 text-white bg-maha-purple rounded-full hover:opacity-70 focus:outline-none duration-100 ease-in-out uppercase"
                >
                  activate
                </button>
              </Link>
            </div>
            <p className="text-xs text-left text-gray-400">
              <span>
                This portal is reserved for MahaChem customers only. Your
                account will be disabled until it’s activated by you.
                <Link href="/" passHref>
                  <span className="font-light text-indigo-500 focus:text-indigo-600 focus:outline-none focus:underline hover:font-normal cursor-pointer">
                    {' '}
                    Learn more
                  </span>
                </Link>
              </span>
            </p>
          </form>
        </div>
      </div>
      {/* end content */}
    </LayoutAuth>
  );
}
