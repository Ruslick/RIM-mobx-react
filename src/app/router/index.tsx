import { Navigate, createBrowserRouter } from "react-router-dom";
import { PATHS } from "@/shared/constants/pages";
import { Shell } from "@/shared/ui/Layout/shell";
import { charactersRoute } from "@/pages/characters";
import { episodesRoute } from "@/pages/episodes";
import { locationsRoute } from "@/pages/locations";
import { characterRoute } from "@/pages/character";

const redirectToHome = {
  path: PATHS.HOME,
  element: <Navigate to={PATHS.CHARACTERS} />,
};

export const router = createBrowserRouter([
  {
    element: <Shell />,
    children: [
      redirectToHome,
      charactersRoute,
      episodesRoute,
      locationsRoute,
      characterRoute,
      { path: PATHS.EPISODES_ID, element: null },
      { path: PATHS.LOCATIONS_ID, element: null },
    ],
  },
]);
