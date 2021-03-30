import moment from 'moment';
import {FilmMark} from "../const";

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomArrayItem = (arr) => arr[getRandomInt(0, arr.length - 1)];

export const count = (number) => {
  const res = [];
  for (let i = 0; i < number; i++) {
    res.push(i);
  }

  return res;
};

export const getRandomDate = (start = `1970-01-01`, end = moment()) => {
  const unixStart = moment(start).unix();
  const unixEnd = moment(end).unix();
  const randomUnix = (unixStart + Math.random() * (unixEnd - unixStart));
  return moment.unix(randomUnix).toISOString();
};

export const convertKebabToCamel = (str) => str.replace(/-(.)/g, (g) => g[1].toUpperCase());

export const getFilmMarkString = (numberMark) => {
  return Object.values(FilmMark).find((mark) => numberMark >= mark.min && numberMark <= mark.max).title;
};

export const getDurationString = (durationInMinutes) => {
  let durationString = ``;
  const hours = moment.duration(durationInMinutes, `m`).hours();
  durationString += `${hours}h`;
  const minutes = durationInMinutes - hours * 60;
  if (minutes) {
    durationString += ` ${minutes} m`;
  }
  return durationString;
};

export const convertSnakeToCamel = (str) => str.replace(/_(.)/g, (g) => g[1].toUpperCase());
export const renameKeysSnakeToCamel = (obj) => {
  const processVal = (val) => {
    if (typeof val !== `object`) {
      return val;
    }

    if (Array.isArray(val)) {
      if (val.every((item) => typeof item === `string`)) {
        return val;
      }
      return val.map(renameKeysSnakeToCamel);
    }

    return renameKeysSnakeToCamel(val);
  };

  return Object.fromEntries(
      Object.entries(obj)
      .map(([key, val]) => {
        return [convertSnakeToCamel(key), processVal(val)];
      }),
  );
};
