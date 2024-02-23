import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    vus: 30,       // Number of virtual users
    iterations: 1800, // Total number of iterations to execute across all VUs
    duration: '2h',  // Total test duration
};

export default function () {
    const url = 'http://20.204.244.187/compile';
    const payload = JSON.stringify({
        "files": [{
            "filename": "PyramidPattern.java",
            "content": `// PyramidPattern.java
import java.util.Scanner;

public class PyramidPattern {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the number of rows for the pyramid: ");
        int rows = scanner.nextInt();

        for (int i = 0; i < rows; i++) {
            for (int j = rows - i; j > 1; j--) {
                System.out.print(" "); // Print spaces before the numbers
            }

            for (int j = 0; j <= i; j++) {
                System.out.print(j + " "); // Print numbers in the pyramid
            }

            System.out.println(); // Move to the next line for the next row
        }
    }
}`
        }],
        "initialQuery": "",
        "input": "5"
    });

    const headers = { 'Content-Type': 'application/json' };

    const res = http.post(url, payload, { headers });

    check(res, {
        'is status 200': (r) => r.status === 200,
    });

    sleep(1); // Simulate think time between requests
}
