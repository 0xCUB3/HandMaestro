export const aslHints = {
  A: "Make a fist with your thumb on the side.",
  B: "Hold your hand up, palm forward, with your fingers straight and together, and your thumb folded across your palm.",
  C: "Curve your hand like you're holding a can or a cup.",
  D: "Index finger points straight up. Thumb and other fingers touch to form a circle below the index finger.",
  E: "Fingers curled in towards the palm, thumb tucked in. Tips of fingers rest on or near the thumb knuckle. Looks like a compact fist.",
  F: "Make an 'OK' sign: index finger and thumb touch to form a circle. Other three fingers are straight up and spread slightly.",
  G: "Extend index finger and thumb horizontally, parallel to each other, like a sideways letter 'L'. Other fingers closed in a fist.",
  H: "Extend index and middle fingers horizontally, parallel and together. Other fingers closed in a fist. Similar to 'G' but with two fingers.",
  I: "Extend your pinky finger straight up. All other fingers closed in a fist with the thumb across them.",
  // J is a motion sign, static part resembles 'I'. Current model is for static signs.
  K: "Index and middle fingers point straight up, spread apart (like a V). Thumb touches the knuckle of the middle finger. Ring and pinky fingers curled.",
  L: "Extend index finger straight up and thumb straight out horizontally, forming an 'L' shape. Other fingers curled into palm.",
  M: "Three fingers (index, middle, ring) draped over the thumb, pointing down. Pinky finger curled into palm.",
  N: "Two fingers (index, middle) draped over the thumb, pointing down. Ring and pinky fingers curled into palm.",
  O: "Form a circle or oval shape with all fingers and thumb, tips touching or nearly touching.",
  P: "Like 'K' shape, but hand is horizontal. Index finger points forward, middle finger points down. Thumb tip touches between index and middle finger base.",
  Q: "Like 'G' shape (index and thumb extended), but pointing downwards. Tips of index and thumb pinch together.",
  R: "Cross your index and middle fingers, pointing upwards. Other fingers curled into palm.",
  S: "Make a fist with your thumb closed over the front of your curled fingers. Similar to 'A', but thumb is in front.",
  T: "Make a fist, but tuck your thumb up under your index finger, with the tip of the thumb peeking out between index and middle finger.",
  U: "Extend index and middle fingers straight up and held together. Other fingers curled into palm.",
  V: "Extend index and middle fingers straight up and spread apart (like a peace sign or 'V'). Other fingers curled into palm.",
  W: "Extend index, middle, and ring fingers upwards and spread apart. Pinky finger is held down by the thumb.",
  X: "Make a fist, then raise and crook your index finger like a hook. Thumb can be alongside or across fist.",
  Y: "Extend your thumb and pinky finger outwards (like a 'hang loose' or telephone sign). Index, middle, and ring fingers curled into palm.",
  // Z is a motion sign, static part is index finger extended. Current model is for static signs.
};

export function getHint(gestureName) {
  return aslHints[gestureName.toUpperCase()] || "No hint available for this sign yet.";
} 