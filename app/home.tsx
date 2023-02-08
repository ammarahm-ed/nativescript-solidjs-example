import { Component, createSignal } from "solid-js";
import { DynamicList } from "./collectionview";

const Item: Component<{
  item?: () => any;
  index?: () => number;
  type: () => string;
}> = (props) => {
  return props.type() === "even" ? (
    <contentview>
      <flexboxlayout style={{ height: 100,padding:10, backgroundColor: "#f0f0f0" }}>
      <label text={props.index?.() + " " + props.type()} />
    </flexboxlayout>
    </contentview>
  ) : (
    <contentview>
      <flexboxlayout style={{ height: 50,padding:10, backgroundColor: "#a9a9a9" }}>
      <label text={props.index?.() + " " + props.type()} />
    </flexboxlayout>
    </contentview>
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
        </contentview>
      </flexboxlayout>
    </>
  );
};
