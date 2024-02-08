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
                "filename": "PyramidPattern.cpp",
                "content": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int rows;\n    cout << \"Enter the number of rows for the pyramid: \";\n    cin >> rows;\n\n    for (int i = 0; i < rows; i++) {\n        for (int j = rows - i; j > 1; j--) {\n            cout << \" \";\n        }\n\n        for (int j = 0; j <= i; j++) {\n            cout << j << \" \";\n        }\n\n        cout << endl;\n    }\n\n    return 0;\n}"
            }
        ],
        "initialQuery": "",
        "input": "5"
    };

    const headers = {
        'Content-Type': 'application/json',
    };

    const url = 'http://20.219.245.171/compile';  // Replace with the actual endpoint

    const res = http.post(url, JSON.stringify(payload), { headers });

    console.log(res.body);

    check(res, {
        'is status 200': (r) => r.status === 200,
    });

    // Introduce some sleep to simulate user think time between requests
    sleep(1);
}
