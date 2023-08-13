import { useRouter } from "../router";

export const Settings = () => {
  const router = useRouter();
  return (
    <>
      <actionbar title="Settings" />
      <flexboxlayout
        style={{
          height: "100%",
          width: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          text="Go to Home"
          on:tap={() => {
            router.goBack();
          }}
          style={{
            height: 40,
            width: 150,
            borderRadius: "10px",
          }}
        />
      </flexboxlayout>
    </>
  );
};

const Ele = () => {
  return (
    <button
      text="Hello"
      style={{
        color: "red",
      }}
    />
  );
};
