export const Line = tag => data => ({
  tag,
  data,
  map: f => ({
    tag,
    data: data.map(f),
  }),
});

// function Line(tag, data) {
//   const l = {
//     tag,
//   };
//   return l;
//}
