import { useState } from "react"

export default function UseStatePage() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const updateCounter1 = () => {
    setCounter1(counter1 + 1);
    setCounter1(counter1 + 1);
    setCounter1(counter1 + 1);
  }

  const updateCounter2 = () => {
    setCounter2(counter2 => counter2 + 1);
    setCounter2(counter2 => counter2 + 1);
    setCounter2(counter2 => counter2 + 1);
  }

  return (
    <div className="mt-3">
      <p>useState update is async and waits for re-render.</p>
      <div className="row">
        <div className="col">
          <p>Setting counter 1 with value. Value not updated in already running code:</p>
          <pre>
            {"setCounter1(counter1 + 1);\n"}
            {"setCounter1(counter1 + 1);\n"}
            {"setCounter1(counter1 + 1);\n"}
          </pre>
          <button className="btn btn-primary" onClick={updateCounter1}>{counter1}</button>
        </div>
        <div className="col">
          <p>Setting counter 2 with function, first argument is pending state:</p>
          <pre>
            {"setCounter2(counter2 => counter2 + 1);\n"}
            {"setCounter2(counter2 => counter2 + 1);\n"}
            {"setCounter2(counter2 => counter2 + 1);\n"}
          </pre>
          <button className="btn btn-primary" onClick={updateCounter2}>{counter2}</button>
        </div>
      </div>
      <div className="mt-5">
        <div className="row">
          <div className="col col-md-6">
            <p>State variables might look like regular JavaScript variables that you can read and write to. However, state behaves more like a snapshot. Setting it does not change the state variable you already have, but instead triggers a re-render.</p>
            <p><a href="https://react.dev/learn/state-as-a-snapshot" target="_blank">https://react.dev/learn/state-as-a-snapshot</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}