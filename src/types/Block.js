import { Line } from './Line';
import { Timeline } from 'src/types/Timeline';

// Const :: Int -> [Int]
const Const = x => Array(Timeline.length).fill(x);
const Tag = unit => label => ({
  label,
  unit,
});
const Monetary = Tag('USD mn');

const line1 = Line(Monetary('Three'))(Const(30000));
const line2 = Line(Monetary('Four'))(Const(-15000));
const line3 = Line(Monetary('Five'))(Const(25000));

const block = {
  tag: {
    title: 'A Sample Table Block',
  },
  data: [line1, line2, line3, line3.map(x => x * 2), line2.map(x => -x)],
};

export const Blocks = [block, block, block];
