/* eslint-disable import/no-unresolved */
import LayoutAuth from '@components/Layout/auth';
import Link from 'next/link';

export default function Register() {
  return (
    <LayoutAuth>
      {/* content */}
      <div className="w-96">
        {/* title */}
        <div className="text-left mb-8">
          <h1 className="text-3xl font-bold text-gray-700">Account Request</h1>
          <p className="text-sm text-gray-500 mt-2">
            This platform is for customers of MahaChem only. To request for an
            account, please submit your details.
          </p>
        </div>
        <div className="w-[21rem]">
          <form className="mb-4">
            <div className="mb-3">
              <input
                name="fullname"
                id="fullname"
                placeholder="Full Name"
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
            </div>
            <div className="mb-3">
              <input
                name="contact"
                id="contact"
                placeholder="Contact no."
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
            </div>
            <div className="mb-3">
              <input
                name="company"
                id="company"
                placeholder="Company Name"
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Business Email"
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
            </div>
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <label
                    className="block text-gray-500 font-light"
                    htmlFor="agree"
                  >
                    <input
                      className="ml-2 leading-tight"
                      type="checkbox"
                      id="agree"
                      name="agree"
                    />
                    <span className="text-sm">
                      {' '}
                      I have read and agree to the{' '}
                      <Link href="/" passHref>
                        <span className="text-blue-500 cursor-pointer">
                          Privacy Policy
                        </span>
                      </Link>
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <button
                type="button"
                className="w-full px-3 py-3 text-white bg-maha-purple rounded-full hover:opacity-70 focus:outline-none duration-100 ease-in-out uppercase"
              >
                submit
              </button>
            </div>
            <p className="text-sm text-center text-gray-400">
              <Link href="/login" passHref>
                <span className="font-light text-indigo-500 focus:text-indigo-600 focus:outline-none focus:underline hover:font-normal cursor-pointer">
                  Sign in as an existing Maha Customer
                </span>
              </Link>
            </p>
          </form>
        </div>
      </div>
      {/* end content */}
    </LayoutAuth>
  );
}
