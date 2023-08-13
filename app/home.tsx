import { Component, createSignal } from "solid-js";
import { DynamicList } from "./collectionview";

const Item: Component<{
  item?: () => any;
  index?: () => number;
  type: () => string;
}> = (props) => {
  return props.type() === "even" ? (
    <stacklayout
      style={{ height: 100, padding: 10, backgroundColor: "#f0f0f0" }}
    >
      <label text={props.index?.() + " " + props.type()} />
    </stacklayout>
  ) : (
    <stacklayout
      style={{ height: 50, padding: 10, backgroundColor: "#a9a9a9" }}
    >
      <label text={props.index?.() + " " + props.type()} />
    </stacklayout>
  );
};

export const Home = () => {
  const [items, setItems] = createSignal([0, 1, 2, 3, 4, 5]);
  return (
    <>
      <actionbar title="Home" />
      <flexboxlayout
        style={{
          height: "100%",
          width: "100%",
          flexDirection: "column",
        }}
      >
        <button
          text="Add item"
          on:tap={() => {
            setItems((prev) => {
              return [...prev, prev.length];
            });
          }}
          style={{
            height: 50,
            minHeight: 50,
            backgroundColor: "rgb(44, 79, 124)",
            color: "white",
          }}
        />

        <DynamicList
          itemTypes={["even", "odd"]}
          items={items()}
          renderItem={({ item, index, type }) => (
            <Item item={item} index={index} type={type} />
          )}
          onItemType={(item, index) => {
            return index % 2 === 0 ? "even" : "odd";
          }}
        />
      </flexboxlayout>
    </>
  );
};
