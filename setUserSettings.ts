import { assertUsage } from "./assertUsage";

export { getUserSettings };
export { setUserSettings };

type UserSettings = {
  PageWrapper: ({ children }: { children: React.ReactNode }) => JSX.Element;
  html: {
    title: string;
    description?: string;
    head?: string;
  };
};
let _userSettings: UserSettings | undefined;

function getUserSettings(): UserSettings {
  assertUsage(
    _userSettings,
    "You need to call `set()` (`import { set } from '@brillout/vite-framework`)."
  );
  return _userSettings;
}

function setUserSettings(userSettings: UserSettings) {
  _userSettings = userSettings;
}
