import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    stages: [
        { duration: '2m', target: 100 }, // Ramp up to 100 users over 2 minutes
        { duration: '3m', target: 100 }, // Keep at 100 users for 3 minutes
        { duration: '2m', target: 200 }, // Increase to 200 users over 2 minutes
        { duration: '3m', target: 200 }, // Keep at 200 users for 3 minutes
        { duration: '2m', target: 300 }, // Increase to 300 users over 2 minutes
        { duration: '3m', target: 300 }, // Keep at 300 users for 3 minutes
        { duration: '2m', target: 0 },   // Ramp down to 0 users over 2 minutes
    ],
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

    sleep(1); // Optional: Think time to simulate user reading time, etc.
}
