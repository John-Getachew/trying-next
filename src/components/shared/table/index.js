import { useState } from "react";

const GenericTable = () => {
  const [isColorDark, setIsColorDart] = useState(false);
  return (
    <div onClick={() => setIsColorDart(true)}>
      <h1 >Table</h1>
    </div>
  );
};
export default GenericTable;
