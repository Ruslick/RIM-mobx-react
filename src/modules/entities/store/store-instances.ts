import { API } from "@/shared/constants/api";
import { EntitiesStore } from "./store-model";
import { simplifyCollection } from "@/shared/libs/collections";
import { searchFilters } from "@/shared/constants/search-filters";
import { Character } from "@/shared/types/characterDTO";
import { Episode } from "@/shared/types/episodeDTO";
import { Location } from "@/shared/types/locationDTO";

export const entitiesStores = {
  characters: new EntitiesStore<Character>(
    API.CHAR,
    simplifyCollection(searchFilters.character, "value")
  ),
  episodes: new EntitiesStore<Episode>(
    API.EPISODE,
    simplifyCollection(searchFilters.episode, "value")
  ),
  locations: new EntitiesStore<Location>(
    API.LOCATION,
    simplifyCollection(searchFilters.location, "value")
  ),
} as const;
