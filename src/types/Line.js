export const Line = tag => data => ({
  tag,
  data,
  map: f => ({
    tag,
    data: data.map(f),
  }),
});
