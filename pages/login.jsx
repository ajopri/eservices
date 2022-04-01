/* eslint-disable import/no-unresolved */
import Link from 'next/link';
import LayoutAuth from '@components/Layout/auth';

export default function Login() {
  return (
    <LayoutAuth>
      {/* content */}
      <div className="w-96">
        {/* title */}
        <div className="text-left mb-8">
          <h1 className="text-3xl font-bold text-gray-700">
            Welcome to E-services
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Please sign in to continue
          </p>
        </div>
        <div className="w-80">
          <form className="mb-4">
            <div className="mb-3">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 "
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 "
              />
            </div>
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <label
                    className="block text-gray-500 font-light"
                    htmlFor="remember"
                  >
                    <input
                      className="ml-2 leading-tight"
                      type="checkbox"
                      id="remember"
                      name="remember"
                    />
                    <span className="text-sm"> Remember me </span>
                  </label>
                </div>
                <div>
                  <a
                    className="font-light text-sm text-indigo-500 hover:text-indigo-600 hover:font-normal"
                    href="#password-request"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <button
                type="button"
                className="w-full px-3 py-3 text-white bg-maha-purple rounded-full hover:opacity-70 focus:outline-none duration-100 ease-in-out uppercase"
              >
                sign in
              </button>
            </div>
            <p className="text-sm text-center text-gray-400">
              <Link href="/register">
                <span className="font-light text-indigo-500 focus:text-indigo-600 focus:outline-none focus:underline hover:font-normal cursor-pointer">
                  Register for a customer account
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
