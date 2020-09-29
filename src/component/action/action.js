export const increment = "+";
export const decrement = "-";
export function Increment() {
    return {
        type: increment,
    }
}
export function Decrement() {
    return {
        type: decrement,
    }
}