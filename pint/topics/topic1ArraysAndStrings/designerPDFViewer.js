function designerPdfViewer(h, word) {
  const mapLetters = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25,
  };

  let maxHeight = 0;

  word.split("").forEach((letter) => {
    const currentHeight = h[mapLetters[letter]];
    if (currentHeight > maxHeight) {
      maxHeight = currentHeight;
    }
  });

  return maxHeight * word.length;
}

// Ejemplo de uso:
const heights = [
  1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7,
];
const word = "zaba";
const area = designerPdfViewer(heights, word);
console.log(area); // Debería imprimir 28

const area2 = designerPdfViewer(
  [
    1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
    5,
  ],
  "abc"
);
console.log(area2); // Debería imprimir 9
