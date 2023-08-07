import { useEffect, useState } from 'react';
import Alert from './components/Alert';
import DiabetesForm from './components/forms/DiabetesForm';

function PageTitle() {
  return (
    <h1 className="text-center pt-6 md:pt-10 pb-7 md:pb-10 font-semibold tracking-wide text-xl sm:text-2xl lg:text-3xl text-gray-800 dark:text-gray-50">
      Diabetes Prediction System
    </h1>
  );
}

const initialState = {
  pg: '',
  gc: '',
  bp: '',
  st: '',
  ins: '',
  bmi: '',
  dpf: '',
  age: '',
};

const App = () => {
  const [value, setValue] = useState(initialState);
  const [result, setResult] = useState({
    message: '',
    prediction: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://127.0.0.1:8000/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(value),
    });

    const data = await response.json();
    setResult(data);

    setValue(initialState);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setResult({ message: '', prediction: null });
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [result]);

  return (
    <div className="dark:bg-[#0E1117] min-h-screen">
      <div className="container mx-auto pb-6">
        <PageTitle />
        {/* Whole Form */}
        <div className="mx-5 md:mx-auto max-w-screen-md">
          {result.message && (
            <div className="mb-4">
              <Alert
                severity={
                  result.prediction === 1 ? 'success' : 'error'
                }
              >
                {result.message}
              </Alert>
            </div>
          )}
          <DiabetesForm
            value={value}
            setValue={setValue}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
