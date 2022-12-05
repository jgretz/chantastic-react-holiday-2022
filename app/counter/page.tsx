"use client";

import { useState } from "react";

function Page() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </div>
  );
}

export default Page;
