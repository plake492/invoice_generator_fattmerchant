import React, { useState } from "react";

function InputBox() {
  const [firstName, setFirstName] = useState("");

  //   React.useEffect(() => {
  //     console.log(firstName);
  //   }, [firstName]);

  return (
    <React.Fragment>
      <input
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First name"
        type="text"
        name="firstName"
        required
      />
    </React.Fragment>
  );
}
export default InputBox;
