const randomColorSet = [
  {
    color: '#4287f5',
    isRev: true,
  },
  {
    color: '#fafafa',
    isRev: false,
  },
  {
    color: '#7e47ed',
    isRev: true,
  },
  {
    color: '#23b02f',
    isRev: true,
  },
];
let colorPointer = -1;

// export function getRandomColor() {
//   var letters = '0123456789ABCDEF';
//   var color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }
export function getRandomColor() {
  colorPointer >= randomColorSet.length - 1
    ? (colorPointer = 0)
    : colorPointer++;
  return randomColorSet[colorPointer];
}
