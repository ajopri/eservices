/* eslint-disable import/no-unresolved */
import LayoutAuth from '@components/Layout/auth';

export default function Login() {
  return (
    <LayoutAuth>
      {/* content */}
      <div className="w-[26rem]">
        {/* title */}
        <div className="text-left mb-8">
          <h1 className="text-3xl font-bold text-gray-700">
            Thank you for your submission!
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            An administrator will review your request before approval. Please
            check your email for the account verification.
          </p>
        </div>
        <div className="w-80">
          <div className="mb-6">
            <button
              type="button"
              className="w-full px-3 py-3 text-white bg-maha-purple rounded-full hover:opacity-70 focus:outline-none duration-100 ease-in-out uppercase"
            >
              return home
            </button>
          </div>
        </div>
      </div>
      {/* end content */}
    </LayoutAuth>
  );
}
