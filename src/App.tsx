import * as React from "react";
import "./App.css";

export default function App() {
  const [name, setName] = React.useState<string>("");
  const [age, setAge] = React.useState<string | undefined>("");
  const [color, setColor] = React.useState<string | undefined>("red");
  const [gender, setGender] = React.useState("male");

  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const changeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };

  const changeColor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setColor(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(name, age, color);
  };

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setGender(event.target.value);
  };

  const resetRadioState = () => {
    setGender("");
  };

  return (
    // <div className="theContents">
    <div className="pa-16">
      <div className="d-flex v-center h-center">
        <div className="w-50">
          <h2>Fill the Form!</h2>
          <form onSubmit={handleSubmit}>
            <Input name="Name" value={name} onChange={changeName} />
            <Input name="Age" value={age} onChange={changeAge} />
            <p>Gender</p>
            <div className="d-flex h-center pa-16 w-50">
              <input
                type="radio"
                value="male"
                checked={gender === "male"}
                onChange={handleChange}
              />{" "}
              Male
              <input
                type="radio"
                value="female"
                checked={gender === "female"}
                onChange={handleChange}
              />{" "}
              Female
            </div>
            <div>
              <button
                type="reset"
                id="resetFunction"
                onClick={resetRadioState}
              />
            </div>

            <Select
              name="Favourite Color"
              value={color}
              onChange={changeColor}
            />
            <button type="submit" className="btn-primary mb-16">
              Submit
            </button>
            <button className="btn-secondary">Clear</button>
          </form>
        </div>
        <div className="w-50 pa-4">
          <p className="special-text">
            {name} is {age} years old, and he is very handsome guy who likes{" "}
            {color} color
          </p>
        </div>
      </div>{" "}
    </div>
  );
}

type InputType = {
  name: string;
  value: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, onChange, name }: InputType) => {
  return (
    <div className="mb-16">
      <label>{name}</label>
      <input value={value} onChange={onChange} />
    </div>
  );
};

type SelectType = {
  name: string;
  value: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ value, onChange, name }: SelectType) => {
  return (
    <div className="mb-16">
      <label>{name}</label>
      <select value={value} onChange={onChange}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
      </select>
    </div>
  );
};
