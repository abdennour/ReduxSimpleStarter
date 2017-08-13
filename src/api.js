import YTSearch from 'youtube-api-search';
const YOUTUBE_API_KEY = 'AIzaSyA7yowmmwAAK_cz9-wa5Taw0-mXO3Wyvts';

export function searchYoutube(term, callback) {
  YTSearch({ key: YOUTUBE_API_KEY, term }, callback);
}
