const App = () => {
  return (
    <>
      <h2 className="text-2xl text-center font-bold text-violet-900">
        Counter App With Redux
      </h2>

      <div className="w-full flex items-center justify-center mt-5">
        <div className="flex gap-3 items-center">
          <button className="bg-violet-700 px-3 py-2 text-white rounded-md font-semibold">
            Increment
          </button>
          <div className="font-bold text-lg">0</div>
          <button className="bg-orange-600 px-3 py-2 text-white rounded-md font-semibold">
            Decrement
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
