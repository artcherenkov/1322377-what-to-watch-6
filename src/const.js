export const MAX_STARRING_COUNT = 4;
export const MOVIES_CARD_COUNT_STEP = 8;

export const Genre = {
  ALL_GENRES: `All genres`,
  COMEDY: `Comedy`,
  CRIME: `Crime`,
  DOCUMENTARY: `Documentary`,
  DRAMA: `Drama`,
  HORROR: `Horror`,
  KIDS_FAMILY: `Kids & Family`,
  ROMANCE: `Romance`,
  SCI_FI: `Sci-Fi`,
  THRILLER: `Thriller`,
};

export const FilmMark = {
  BAD: {
    title: `Bad`,
    min: 0,
    max: 3,
  },
  NORMAL: {
    title: `Normal`,
    min: 3,
    max: 5,
  },
  GOOD: {
    title: `Good`,
    min: 5,
    max: 8,
  },
  VERY_GOOD: {
    title: `Very good`,
    min: 8,
    max: 10,
  },
  AWESOME: {
    title: `Awesome`,
    min: 10,
  },
};

export const APIRoute = {
  MOVIES: `/films`
};
