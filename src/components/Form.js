import React from "react";
import InputBox from "./InputBox";

export default function Form() {
  return (
    <div>
      <InputBox />
      <InputBox />
      <InputBox />
      <InputBox />
      <button type="submit">Submit</button>
    </div>
  );
}
