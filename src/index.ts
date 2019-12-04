/**
 * Voronoi Points
 */
export type TVoronoiPoints = [number, number][];

/**
 * Voronoi Manhattan
 * @param data
 * @param w
 * @param h
 * @param points
 */
export function voronoiManhattan(data: Uint32Array, w: number, h: number, points: TVoronoiPoints) {
  const n = points.length;

  let d = 0;
  let dm = 0;
  let j = 0;
  const w1 = w - 2;
  const h1 = h - 2;

  const dm_start = Math.abs(h1) + Math.abs(w1);
  let index = 0;

  let m = 1e9, m2 = 0, v;

  for (let y = 0; y < h; y++) {
    for (let x = w / 2 + 1; --x >= 0;) {

      dm = dm_start;
      j = -1;
      m = 1e9;

      for (let i = n; --i >= 0;) {
        const [pointX, pointY] = points[i];
        d = Math.abs(pointX - x) + Math.abs(pointY - y);

        v = Math.abs(pointX - x) / w + Math.abs(pointY - y) / h;
        if (v < m) {
          m2 = m;
          m = v;
        } else if (v < m2) {
          m2 = v;
        }

        if (d < dm) {
          dm = d;
          j = i;
        }
      }
      v = m2 - m;

      data[index = (x + y * w) * 4] = j;
      data[++index] = v;
      data[++index] = v;
      data[++index] = 255;
    }
  }
}
