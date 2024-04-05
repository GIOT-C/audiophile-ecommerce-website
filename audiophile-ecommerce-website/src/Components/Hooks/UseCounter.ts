import { useState } from "react";

function UseCounter() {
  const [count, SetCount] = useState<number>(1);
  const increment = () => SetCount(count + 1);
  const decrement = () => SetCount(count - 1);

  return { count, increment, decrement, SetCount };
}

export default UseCounter;
