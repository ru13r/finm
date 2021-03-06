import { Line } from './Line';
import { Timeline } from 'src/types/Timeline';

// Const :: Int -> [Int]
const Const = x => Array(Timeline.length).fill(x);
const Tag = unit => label => ({
  label,
  unit,
});
const Monetary = Tag('USD mn');

const line1 = Line(Monetary('Wheat'))(Const(30000));
const line2 = Line(Monetary('Barley'))(Const(-15000));
const line3 = Line(Monetary('Oats'))(Const(25000));
const line4 = Line(Monetary('Soybeans'))(Const(-25000));

const block1 = {
  tag: {
    title: 'Harvest',
  },
  data: [line1, line2, line3, line4, line4.map(x => 2 * x)],
};

const block2 = {
  tag: {
    title: 'Price',
  },
  data: [line3, line4, line2, line3, line4],
};

export const Blocks = [block1, block2, block1, block2];
