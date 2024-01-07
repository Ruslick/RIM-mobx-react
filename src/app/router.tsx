import { Navigate, createHashRouter } from "react-router-dom";
import { PATHS } from "@/shared/constants/pages";
import { Shell } from "@/shared/ui/Layout/shell";
import { charactersRoute } from "@/pages/characters";
import { episodesRoute } from "@/pages/episodes";
import { locationsRoute } from "@/pages/locations";
import { characterRoute } from "@/pages/character";
import { episodeRoute } from "@/pages/episode";
import { locationRoute } from "@/pages/location";

const redirectToHome = {
  path: PATHS.HOME,
  element: <Navigate to={PATHS.CHARACTERS} />,
};

export const router = createHashRouter([
  {
    element: <Shell />,
    children: [
      redirectToHome,
      charactersRoute,
      characterRoute,
      episodesRoute,
      episodeRoute,
      locationRoute,
      locationsRoute,
    ],
  },
]);
