# Running k6 Script in Grafana

This guide provides instructions on running a k6 script using Grafana.

## Prerequisites

1. **k6 Installed**: Ensure that k6 is installed on your machine. You can find installation instructions on the [official k6 website](https://k6.io/docs/getting-started/installation).

2. **Grafana Account**: Make sure you have access to Grafana and an appropriate dashboard set up.

## Configuration

1. **Clone the Repository**: Clone this repository to your local machine using the following command:

    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Install Dependencies**: Install the required dependencies using:

    ```bash
    npm install
    ```

3. **Update k6 Script**: Open the `k6_script.js` file and update the `url` variable with the actual endpoint you want to test.

## Execution

1. **Run the k6 Script**: Execute the k6 script using the following command:

    ```bash
    k6 run k6_script.js
    ```

    Adjust the number of virtual users (`vus`) and iterations as needed in the `options` section of the script.

## Grafana Monitoring

1. **Open Grafana Dashboard**: Open Grafana and navigate to the monitoring dashboard where you want to view the k6 test results.

2. **Add k6 as a Data Source**: Add k6 as a data source in Grafana by following the instructions in the [official documentation](https://k6.io/docs/).

3. **Visualize k6 Metrics**: Create visualizations in Grafana to display k6 metrics. You can use the k6 dashboard JSON provided in the [k6 Grafana integration GitHub repository](https://github.com/grafana/k6).

## Additional Notes

- **Simulate User Think Time**: The script includes a sleep function to simulate user think time between requests. Adjust the sleep duration as needed.

- **Endpoint and Payload**: Ensure that the endpoint and payload in the k6 script match your actual API endpoint and payload.

- **Troubleshooting**: In case of issues, refer to the [k6 documentation](https://k6.io/docs/) and [Grafana documentation](https://grafana.com/docs/).

Feel free to customize this README.md according to your project's specific details.
