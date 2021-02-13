import axios from "axios";

const API_KEY = "563492ad6f91700001000001c6d00935cb5d461d9f43e7047d980e58";
const URL = "https://api.pexels.com/v1/";
const VideoURL = "https://api.pexels.com/videos/";

export const getBannerImageFetch = async () => {
  try {
    const {
      data: { photos },
    } = await axios.get(`${URL}curated`, {
      headers: {
        Authorization: `${API_KEY}`,
      },
    });

    return photos;
  } catch (error) {
    console.log(error);
  }
};

export const getphotoListFetch = async (filter) => {
  try {
    const {
      data: { photos },
    } = await axios.get(`${URL}search?query=${filter}`, {
      headers: {
        Authorization: `${API_KEY}`,
      },
    });

    return photos;
  } catch (error) {
    console.log(error);
  }
};

export const getvideoListFetch = async (filter) => {
  try {
    const {
      data: { videos },
    } = await axios.get(`${VideoURL}search?query=${filter}`, {
      headers: {
        Authorization: `${API_KEY}`,
      },
    });

    return videos;
  } catch (error) {
    console.log(error);
  }
};

export const getfavouritesPhotosListFetch = async (photosList) => {
  if (!photosList) {
    return;
  }
  let photos = [];
  let promises = [];
  for (let i = 0; i < photosList.length; i++) {
    promises.push(
      await axios
        .get(`${URL}photos/` + photosList[i], {
          headers: {
            Authorization: `${API_KEY}`,
          },
        })
        .then((response) => {
          photos.push(response);
        })
    );
  }

  Promise.all(promises).then(() => console.log(photos, "users"));
  return photos;
};

export const getfavouritesVideosListFetch = async (videoList) => {
  if (!videoList) {
    return;
  }
  let photos = [];
  let promises = [];
  for (let i = 0; i < videoList.length; i++) {
    promises.push(
      await axios
        .get(`${VideoURL}videos/` + videoList[i], {
          headers: {
            Authorization: `${API_KEY}`,
          },
        })
        .then((response) => {
          photos.push(response);
        })
    );
  }

  Promise.all(promises).then(() => console.log(photos, "users"));
  return photos;
};
