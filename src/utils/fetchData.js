

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '8dbed8a7c8msh74a62156e231f4dp12aa9ejsn7e17659100b2',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '8dbed8a7c8msh74a62156e231f4dp12aa9ejsn7e17659100b2',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};