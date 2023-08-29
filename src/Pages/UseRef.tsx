import { useRef, useState } from "react"

export default function UseRefPage() {
  const counter = useRef(0);
  const [displayNewCount, setDisplayNewCount] = useState(0);

  return (
    <div className="mt-3">
      <p className="mt-2">useRef update is synchronous does not cause a re-render.</p>
      <div className="row">
        <div className="col">
          <p>This counter is persisted with useRef.</p>
          <pre>
            counter.current++
          </pre>
          <button className="btn btn-primary" onClick={() => counter.current++}>Update count</button>
          <p className="mt-2">Count: {counter.current}</p>
        </div>
        <div className="col">
          <p>Force re-render by updating useState value</p>
          <button className="btn btn-secondary" onClick={() => setDisplayNewCount(displayNewCount + 1)}>Show new value</button>
        </div>
      </div>
    </div>
  )
}