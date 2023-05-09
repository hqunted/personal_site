export const Body = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 py-6 md:py-12 text-shadow">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-6xl  font-medium text-indigo-100 mb-8">
            <span className="text-indigo-600">B</span>erke{" "}
            <span className="text-indigo-600">K</span>aan{" "}
            <span className="text-indigo-600">K</span>ırcı{" "}
          </h1>

          <h1 className="text-sm md:text-4xl font-medium mb-2 text-indigo-300 motion-safe:animate-fadeIn">
            A software developer with a Mathematics & Computer Science
            background who is passionate about AI and the latest JavaScript
            technologies.
          </h1>

          <div className="mt-8">
            <img
              src="https://media.licdn.com/dms/image/D4D03AQEhS6fPMYpVOw/profile-displayphoto-shrink_800_800/0/1671535966345?e=1689206400&v=beta&t=2oU3qAMWssmuECrMTq1WjYhrCCeEzSKnzCZv6yrOBPE"
              alt="Profile Photo"
              className="d-block max-w-sm rounded-full shadow-lg mx-auto"
            />
          </div>
        </div>

        <div className="md:flex md:flex-wrap md:-mx-4 mt-6 md:mt-12 ">
          <div className="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center shadow-lg pb-11 rounded-full">
            <span className="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3"></span>
            <h5 className="text-xl font-medium uppercase mb-4 text-indigo-600">
              Determined
            </h5>
            <p className="text-gray-300">
              Talking about determined part of myself blblalbablabla
            </p>
          </div>

          <div className="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center shadow-lg pb-11 rounded-full">
            <span className="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3"></span>
            <h5 className="text-xl font-medium uppercase mb-4 text-indigo-500">
              Innovator
            </h5>
            <p className="text-gray-300">
              Some cool shit about developing myself enormously through my whole
              life
            </p>
          </div>

          <div className="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center shadow-lg pb-11 rounded-full">
            <span className="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3"></span>
            <h5 className="text-xl font-medium uppercase mb-4 text-indigo-600">
              Open-minded
            </h5>
            <p className="text-gray-300">
              Open minded thing about stuff yea that is really cool that you are
              open minded wow man thats insane but didnt ask!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
