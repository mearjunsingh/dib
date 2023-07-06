import DiabetesForm from './components/forms/DiabetesForm';

function PageTitle() {
  return (
    <h1 className="text-center pt-6 md:pt-10 pb-7 md:pb-10 font-semibold tracking-wide text-xl sm:text-2xl lg:text-3xl text-gray-800 dark:text-gray-50">
      Diabetes Prediction System
    </h1>
  );
}

const App = () => {
  return (
    <div className="dark:bg-[#0E1117] min-h-screen">
      <div className="container mx-auto pb-6">
        <PageTitle />
        {/* Whole Form */}
        <DiabetesForm />
      </div>
    </div>
  );
};

export default App;
