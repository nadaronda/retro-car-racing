import { Point } from '../types/Point';
import { Size } from '../types/Size';

export interface IActor {
    // Atributos
    position: Point;
    size: Size;
    //crono: number;

    // Métodos
    update: (delta: number) => void;
    draw: (ctx: CanvasRenderingContext2D, delta: number) => void;
    keyboardEventDown: (key: string) => void;
    keyboardEventUp: (key: string) => void
}

export class Actor implements IActor {
    // Atributos por defecto
    position: Point;
    size: Size;

    constructor(position: Point = { x: 0, y: 200 }, size: Size = { w: 10, h: 10 }) {
        this.position = position;
        this.size = size;
    }
    // Métodos por defecto
    update(delta: number) { }
    draw(ctx: CanvasRenderingContext2D, delta: number) { }
    keyboardEventDown(key: string) { }
    keyboardEventUp(key: string) { }
}
