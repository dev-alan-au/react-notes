import { useEffect, useState, useRef } from "react"

export default function UseEffectPage() {
  // const [counterAlways, setCounterAlways] = useState(0);
  const [counterOnce, setCounterOnce] = useState(0);
  const [counterBtn1, setCounterBtn1] = useState(0);
  const [counterBtn2, setCounterBtn2] = useState(0);
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const counterAlways = useRef(0);

  useEffect(() => {
    console.log("I run on each re-render");
    // setCounterAlways(counter => counter + 1); // will create a loop!
    counterAlways.current++; // does not cause re-render
  });

  useEffect(() => {
    // console.log("I run on the first render");
    setCounterOnce(counter => counter + 1);
  }, []); //empty array

  useEffect(() => {
    console.log("I run whenever counter1 updates");
    setCounterBtn1(counter => counter + 1)
  }, [counter1]);

  useEffect(() => {
    console.log("I run whenever counter2 updates");
    setCounterBtn2(counter => counter + 1)
  }, [counter2]);

  return (
    <div className="mt-3">
      <button className="btn btn-primary" onClick={() => { setCounter1(counter => counter + 1) }}>Counter 1</button>
      <p>Counter 1 Clicked: {counter1} (causes 2 state changes)</p>
      <button className="btn btn-primary" onClick={() => { setCounter2(counter => counter + 1) }}>Counter 2</button>
      <p>Counter 2 Clicked: {counter2} (causes 2 state changes)</p>
      <div className="row">
        <div className="col">
          <p><strong>useEffect with no dependency array</strong></p>
          {counterAlways.current}
        </div>
        <div className="col">
          <p><strong>useEffect with empty dependency array</strong></p>
          {counterOnce}
        </div>
        <div className="col">
          <p><strong>useEffect with Counter 1 in dependency array</strong></p>
          {counterBtn1}
        </div>
        <div className="col">
          <p><strong>useEffect with Counter 2 in dependency array</strong></p>
          {counterBtn2}
        </div>
      </div>
    </div>
  )
}