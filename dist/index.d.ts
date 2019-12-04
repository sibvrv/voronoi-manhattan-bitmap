/**
 * Voronoi Points
 */
export declare type TVoronoiPoints = [number, number][];
/**
 * Voronoi Manhattan
 * @param data
 * @param w
 * @param h
 * @param points
 */
export declare function voronoiManhattan(data: Uint32Array, w: number, h: number, points: TVoronoiPoints): void;
