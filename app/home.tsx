import { Component, createSignal } from "solid-js";
import { List } from "./list";

const Item: Component<{
  item?: () => any;
  index?: () => number;
  type: () => string;
}> = (props) => {
  return props.type() === "even" ? (
    <flexboxlayout style={{ height: 300, backgroundColor: "white" }}>
      <label text={props.index?.() + " " + props.type()} />
    </flexboxlayout>
  ) : (
    <flexboxlayout style={{ height: 300, backgroundColor: "red" }}>
      <label text={props.index?.() + " " + props.type()} />
    </flexboxlayout>
  );
};

export const Home = () => {
  const [items, setItems] = createSignal([0]);
  return (
    <>
      <actionbar />
      <flexboxlayout flexDirection="column">
        <button
          text="Add item"
          on:tap={() => {
            setItems((prev) => {
              return [...prev, prev.length];
            });
          }}
          style={{
            height:50,
            minHeight: 50
          }}
        />
        <contentview style={{
          flexShrink :1
        }}>
          <List
            itemTypes={["even", "odd"]}
            items={items()}
            renderItem={({ item, index, type }) => (
              <Item item={item} index={index} type={type} />
            )}
            onItemType={(item, index) => {
              return index % 2 === 0 ? "even" : "odd";
            }}
          />
        </contentview>
      </flexboxlayout>
    </>
  );
};
