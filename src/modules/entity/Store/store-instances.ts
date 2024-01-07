import { Character } from "@/shared/types/characterDTO";
import { EntityStore } from "..";
import { API } from "@/shared/constants/api";
import { Episode } from "@/shared/types/episodeDTO";
import { Location } from "@/shared/types/locationDTO";

export const entityStores = {
  character: new EntityStore<Character>(API.CHAR),
  episode: new EntityStore<Episode>(API.EPISODE),
  location: new EntityStore<Location>(API.LOCATION),
} as const;
