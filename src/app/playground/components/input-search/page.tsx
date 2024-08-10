'use client'

import BasePage from "@/components/Playground/BasePage";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

const InputSearch = () => {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <BasePage
      pageTitle="Input Search"
      pageDescription="Sliding in placeholders and vanish effect of input on submit"
      docUrl="https://ui.aceternity.com/components/placeholders-and-vanish-input"
    >
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </BasePage>
  )
}

export default InputSearch;
  