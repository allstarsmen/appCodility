export class Task {
    // This is a demo task.

    // Write a function:

    // function solution(A: number[]): number;

    // that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

    // For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

    // Given A = [1, 2, 3], the function should return 4.

    // Given A = [−1, −3], the function should return 1.

    // Write an efficient algorithm for the following assumptions:

    // N is an integer within the range [1..100,000];
    // each element of array A is an integer within the range [−1,000,000..1,000,000].

    solution(A: number[]): number {
        let missing = 1

        const obj: any = {}

        A.forEach(no => {
            if (obj[no] == null) {
                obj[no] = 1
            }
        });

        Object.keys(obj).sort((a, b) => +a - +b).forEach(no => {
            if (+no > 0 && +no == missing) {
                missing++
            }
        })

        return missing
    }
}
