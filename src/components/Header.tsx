export const Header = () => {
  return (
    <div>
      <div className="header-2">
        <nav className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-gray-300 py-2 md:py-4 ">
          <div className="container px-4 mx-auto md:flex md:items-center ">
            <div className="flex justify-between items-center ">
              <a href="#" className="font-bold text-xl text-indigo-600">
                BKK
              </a>
              <button
                className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden "
                id="navbar-toggle"
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
            <div
              className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0 shadow-lg  rounded-full"
              id="navbar-collapse"
            >
              <a
                href="#"
                className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
              >
                Home
              </a>
              <a
                href="#"
                className="p-2 lg:px-4 md:mx-2 text-gray-300 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#"
                className="p-2 lg:px-4 md:mx-2 text-gray-300 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
              >
                Projects
              </a>
              <a
                href="#"
                className="p-2 lg:px-4 md:mx-2 text-gray-300 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
              >
                Pricing
              </a>
              <a
                href="#"
                className="p-2 lg:px-4 md:mx-2 text-gray-300 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
