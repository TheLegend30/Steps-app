import { useState } from "react";

const messages = ["Learn Nothing ⚛️", "Be homeless 💼", "Git money🤑"];

export default function App() {
  // return <Steps />;
  return <Counter />;
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }

  return (
    <>
      <button
        className="close"
        onClick={() => {
          setIsOpen((is) => !is);
        }}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950fa", color: "#fff" }}
              onClick={() => handlePrevious()}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950fa", color: "#fff" }}
              onClick={() => handleNext()}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  function handleStepSub() {
    setStep((s) => s - 1);
  }

  function handleStepAdd() {
    setStep((s) => s + 1);
  }

  function handleCountSub() {
    setCount((c) => c - step);
  }

  function handleCountAdd() {
    setCount((c) => c + step);
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div>
        <button onClick={handleStepSub}>-</button>
        <span>Step: {step}</span>
        <button onClick={handleStepAdd}>+</button>
      </div>
      <div>
        <button onClick={handleCountSub}>-</button>
        <span>Count: {count}</span>
        <button onClick={handleCountAdd}>+</button>
      </div>
      <div>
        {} is {}
      </div>
    </div>
  );
}
