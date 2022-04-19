import slider1 from "./slider1.png";
import slider2 from "./slider2.jpg";


export const media = [slider1, slider2];
export const mediaByIndex = index => media[index % media.length];
