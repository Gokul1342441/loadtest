import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    vus: 500,
    iterations: 2000,
};

export default function () {
    const payload = {
        "files": [
            {
                "filename": "PyramidPattern.java",
                "content": "// PyramidPattern.java\nimport java.util.Scanner;\n\npublic class PyramidPattern {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        System.out.print(\"Enter the number of rows for the pyramid: \");\n        int rows = scanner.nextInt();\n\n        for (int i = 0; i < rows; i++) {\n            for (int j = rows - i; j > 1; j--) {\n                System.out.print(\" \"); // Print spaces before the numbers\n            }\n\n            for (int j = 0; j <= i; j++) {\n                System.out.print(j + \" \"); // Print numbers in the pyramid\n            }\n\n            System.out.println(); // Move to the next line for the next row\n        }\n    }\n}"
            }
        ],
        "initialQuery": "",
        "input": "5"
    };

    const headers = {
        'Content-Type': 'application/json',
    };

    const url = 'http://20.204.244.187/compile';

    const res = http.post(url, JSON.stringify(payload), { headers });

    console.log(res.body);

    check(res, {
        'is status 200': (r) => r.status === 200,
    });

    sleep(1);
}
