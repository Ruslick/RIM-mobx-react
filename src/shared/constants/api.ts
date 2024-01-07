const BASE = "https://rickandmortyapi.com/api/";

export const enum API {
  CHAR = BASE + "character/",
  EPISODE = BASE + "episode/",
  LOCATION = BASE + "location/",
}

export const enum Status {
  idle = "idle",
  loading = "loading",
  failed = "failed",
  success = "success",
}
