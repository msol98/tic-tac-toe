export const allPoints = [
  {
    index: 0,
    x: 0,
    y: 0
  },
  {
    index: 1,
    x: 0,
    y: 1
  },
  {
    index: 2,
    x: 0,
    y: 2
  },
  {
    index: 3,
    x: 1,
    y: 0
  },
  {
    index: 4,
    x: 1,
    y: 1
  },
  {
    index: 5,
    x: 1,
    y: 2
  },
  {
    index: 6,
    x: 2,
    y: 0
  },
  {
    index: 7,
    x: 2,
    y: 1
  },
  {
    index: 8,
    x: 2,
    y: 2
  }
];

export function getWinPossibilities(points) {
  return [
    points.filter(point => point.x === points[0].x)?.length === 3,
    points.filter(point => point.y === points[0].y)?.length === 3,
    points.filter(point => point.x + point.y === 2)?.length === 3,
    points.filter(point => point.x === point.y)?.length === 3
  ];
}