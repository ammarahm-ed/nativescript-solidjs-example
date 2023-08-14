import { NativeScriptConfig } from "@nativescript/core";

export default {
  id: "org.nativescript.dominativesolid",
  appPath: "app",
  appResourcesPath: "App_Resources",
  android: {
    v8Flags: "--expose_gc",
    markingMode: "none",
  },
  ios: {
    SPMPackages: [
      {
        name: "RiveRuntime",
        libs: ["RiveRuntime"],
        repositoryURL: "https://github.com/rive-app/rive-ios.git",
        version: "5.0.0",
      },
    ],
  },
} as NativeScriptConfig;
