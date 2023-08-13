import { useRouter } from "../router";

export const Home = () => {
  const router = useRouter();

  return (
    <>
      <actionbar title="Home" />
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
          text="Go to Settings"
          on:tap={(event) => {
            router.navigate("Settings");
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
