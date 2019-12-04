"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Voronoi Manhattan
 * @param data
 * @param w
 * @param h
 * @param points
 */
function voronoiManhattan(data, w, h, points) {
    var n = points.length;
    var d = 0;
    var dm = 0;
    var j = 0;
    var w1 = w - 2;
    var h1 = h - 2;
    var dm_start = Math.abs(h1) + Math.abs(w1);
    var index = 0;
    var m = 1e9, m2 = 0, v;
    for (var y = 0; y < h; y++) {
        for (var x = w / 2 + 1; --x >= 0;) {
            dm = dm_start;
            j = -1;
            m = 1e9;
            for (var i = n; --i >= 0;) {
                var _a = points[i], pointX = _a[0], pointY = _a[1];
                d = Math.abs(pointX - x) + Math.abs(pointY - y);
                v = Math.abs(pointX - x) / w + Math.abs(pointY - y) / h;
                if (v < m) {
                    m2 = m;
                    m = v;
                }
                else if (v < m2) {
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
exports.voronoiManhattan = voronoiManhattan;
