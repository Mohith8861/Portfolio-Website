export default function Header() {
  return (
    <div className="w-full border-b-2-[#0f149a] h-[5rem] flex justify-between">
      <div className="h-full w-[10%] text-center p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[5rem] h-[5rem]"
          viewBox="0 0 512 512">
          <path
            d="M256 256s-48-96-126-96c-54.12 0-98 43-98 96s43.88 96 98 96c37.51 0 71-22.41 94-48M256 256s48 96 126 96c54.12 0 98-43 98-96s-43.88-96-98-96c-37.51 0-71 22.41-94 48"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="32"
          />
        </svg>
      </div>
      <div className="w-[30%] flex justify-end">
        <button className="h-full text-[1.2rem] mx-4 px-6 font-semibold leading-8 hover:bg-colorSelectLight hover:text-colorGreyLight transition-all duration-300 ease-in">
          Home
        </button>
        <button className="h-full text-[1.2rem] mx-4 px-6 font-semibold leading-8 hover:bg-colorSelectLight hover:text-colorGreyLight transition-all duration-300 ease-in">
          Contact
        </button>
        <button className="h-full text-[1.2rem] mx-4 px-6 font-semibold leading-8 hover:bg-colorSelectLight hover:text-colorGreyLight transition-all duration-300 ease-in">
          About
        </button>
      </div>
    </div>
  );
}
