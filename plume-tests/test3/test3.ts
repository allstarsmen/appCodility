export class Task {
    solution(A: number[]): number {
        let count = 0;
        
        const obj: any = {}
        A.forEach(no => {
            if (obj[no] == null) {
                obj[no] = 1
            } else {
                obj[no]++
            }
        });
        
        const seen: any = {}
        Object.values(obj).forEach(val => {
            let no = val as number
            while(seen[''+no] != null && no > 0) { 
                no--
                count++
            }

            seen[''+no] = 1
        });
        

        return count
    } 
}

