export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR = "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const API_OPTIONS= {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer "+ process.env.REACT_APP_TMDBKEY
    }
  };
//console.log(API_OPTIONS)
  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

  export const LOGIN_IMG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg";

  export const SUPPORTED_LANGUAGES = [ {
    identifier : "en",
    name: "English",

  },
  {
    identifier: "kannada",
    name: "Kannada",
  },
  {
    identifier: "hindi",
    name: "Hindi"
  },
  {
    identifier: "spanish",
    name: "Spanish"
  }

]


export  const GROQ_GPTKEY = process.env.REACT_APP_GROQ_GPTKEY

//console.log(GROQ_GPTKEY);