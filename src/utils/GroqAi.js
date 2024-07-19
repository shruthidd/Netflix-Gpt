//import OpenAI from 'https://deno.land/x/openai@v4.52.7/mod.ts';
// import { OPENAI_GPTKEY } from './constants';
// import OpenAI from 'openai';

// const openai = new OpenAI({
//   apiKey: OPENAI_GPTKEY,
//   dangerouslyAllowBrowser: true // This is the default and can be omitted
// });



// export default openai;
import Groq from "groq-sdk";
import { GROQ_GPTKEY } from "./constants";

const groq = new Groq({ apiKey:GROQ_GPTKEY ,dangerouslyAllowBrowser: true });


export default groq;