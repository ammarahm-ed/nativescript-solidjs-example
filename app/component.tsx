import { alert } from "@nativescript/core";

export const Component = (props: {count: () => number}) => {
  const { count } = props;
  return (
    <button
      style={{
        color: "green",
      }}
      text={`You have tapped ${count()} time${count() === 1 ? "" : "s"}`}
      on:tap={() => {
        alert(`You have tapped ${count()} time${count() === 1 ? "" : "s"}`);
      }}
    />
  );
};
