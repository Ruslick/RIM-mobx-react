import { PATHS } from "@/shared/constants/pages";
import { CharacterPage } from "./character.component";

export const characterRoute = {
  path: PATHS.CHARACTERS_ID,
  element: <CharacterPage />,
};
