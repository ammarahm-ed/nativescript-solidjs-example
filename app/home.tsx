import {
  children,
  Component,
  createSignal,
  getOwner,
  Owner,
  runWithOwner,
} from "solid-js";

const Item: Component<{ item?: () => any; index?: () => number }> = (props) => {
  return (
    <label text={props.index?.() + ""}/>
  );
};

export const Home = () => {
  const owner = getOwner();
  return (
    <>
      <actionbar />
      <flexboxlayout style="background-color:red">
        <listview
          items={{
            length: 200,
            getItem(index) {
              return {
                index: index,
              };
            },
          }}
          itemTemplateSelector={(item, index) => {
            return "even";
          }}
        >
          <arrayprop key="itemTemplates">
            <itemtemplate
              key="even"
              on:itemLoading={(event) => {
                const { view, item, index } = event;
                console.log("itemLoading", view, index);
                const context = (view as any).___solidJSContext();
                if (context) {
                  runWithOwner(context.owner, () => {
                    context.setItem(item);
                    context.setIndex(index);
                   
                  });
                }
              }}
              on:createView={(event) => {
                runWithOwner(owner as Owner, () => {
                  const [item, setItem] = createSignal();
                  const [index, setIndex] = createSignal<number>(0);
                  const element = children(() => (
                    <Item item={item} index={index} />
                  ));
                  event.view = element();
                  (event.view as any).___solidJSContext = () => ({
                    setItem,
                    setIndex,
                    owner,
                  });
                });
              }}
            />
          </arrayprop>
        </listview>
      </flexboxlayout>
    </>
  );
};
