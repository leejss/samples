type Rect = {
  x: number;
  y: number;
  width: number;
  height: number;
};

type Coord = {
  x: number;
  y: number;
};

interface ElementsRects {
  reference: Rect;
  floating: Rect;
}
