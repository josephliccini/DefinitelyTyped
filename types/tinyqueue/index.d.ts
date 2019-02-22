// Type definitions for tinyqueue 2.0
// Project: https://github.com/mourner/tinyqueue
// Definitions by: Joseph Liccini <https://github.com/josephliccini>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export default TinyQueue;

declare class TinyQueue<T> {
    constructor(data?: T[], compare?: (a: T, b: T) => number);

    push(item: T): void;

    pop(): T | undefined;

    peek(): T | undefined;
}
