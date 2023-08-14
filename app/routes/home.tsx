import { PageTransition, SharedTransition } from "@nativescript/core";
import { useRouter } from "../router";

export const Home = () => {
  const router = useRouter();
  const goToPage = (name: "GalaxyButton" | "GrowingPlant") => {
    // just showing ios shared transition with platform spring built in
    router.navigate(
      name,
      global.isIOS
        ? {
            transition: SharedTransition.custom(new PageTransition()),
          }
        : undefined
    );
  };
  return (
    <>
      <actionbar title="Home" className="bg-[#06070e]" />
      <gridlayout rows="*,auto,auto,*" className="bg-[#06070e]">
        <button
          row="1"
          className="rounded-full bg-blue-500 text-white w-[300] p-3 text-2xl font-bold h-[60] text-center capitalize"
          iosOverflowSafeArea="false"
          sharedTransitionTag="button1"
          text="Tap to Rive!"
          on:tap={() => {
            goToPage("GalaxyButton");
          }}
        />
        <button
          row="2"
          className="rounded-full bg-green-500 text-white w-[300] mt-4 p-3 text-2xl font-bold h-[60] text-center capitalize"
          iosOverflowSafeArea="false"
          sharedTransitionTag="button2"
          text="Tap to Grow a Plant"
          on:tap={() => {
            goToPage("GrowingPlant");
          }}
        />
        <image
          rowSpan="4"
          src="~/assets/solid.png"
          width="100"
          height="100"
          className="align-bottom mb-2"
          sharedTransitionTag="logo"
        />
      </gridlayout>
    </>
  );
};
