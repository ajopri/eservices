import Image from 'next/image';

export default function LayoutAuth({ children }) {
  return (
    <section className="font-poppins">
      <div className="flex bg-maha-purple min-h-screen">
        {/* Logo */}
        <div className="w-5/12 flex items-center justify-center">
          <Image
            src="/images/maha-logo-white.png"
            layout="fixed"
            width={400}
            height={100}
            alt="Logo Mahachem"
          />
        </div>

        {/* Form */}
        <div className="w-7/12 bg-white rounded-tl-[3.5rem] rounded-bl-[3.5rem] flex flex-col items-center justify-center">
          <div className="absolute top-2 right-5">
            <select className="border-0 text-gray-500 leading-tight focus:outline-none">
              <option>Singapore</option>
              <option>Indonesia</option>
            </select>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
