
# helm-kubernetes-demo

This repository demonstrates how to deploy a simple Node.js application to Kubernetes using **Helm**. The application is packaged using **Docker** and deployed to a local Kubernetes cluster (via **Docker Desktop**).

## Project Overview

The project consists of:
- A **Node.js** application that serves a simple "Hello, Kubernetes with Helm!" message.
- A **Dockerfile** to containerize the application.
- A **Helm chart** to deploy the application to Kubernetes, including configuration files for the **deployment** and **service**.

### Project Structure
- **Dockerfile**: Defines the Node.js application container.
- **server.js**: Simple Node.js app that serves the "Hello, Kubernetes with Helm!" message.
- **helm-demo/**: Contains the Helm chart files for deploying the app to Kubernetes:
  - **Chart.yaml**: Metadata for the Helm chart.
  - **values.yaml**: Configurable values (e.g., Docker image, service type).
  - **templates/**: Contains Kubernetes deployment and service definitions.

## Prerequisites

Before you begin, ensure that you have the following tools installed:

- **Docker Desktop** (with Kubernetes enabled)  
  [Download Docker Desktop](https://www.docker.com/products/docker-desktop)
  
- **Helm**  
  [Install Helm](https://helm.sh/docs/intro/install/)

- **kubectl** (usually comes with Docker Desktop, but can be installed separately)  
  [Install kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dfjmax/helm-kubernetes-demo.git
   cd helm-kubernetes-demo
   ```

2. Build the Docker image for the Node.js app:
   ```bash
   docker build -t helm-kubernetes-demo:1.0 .
   ```

3. Verify that the Docker image was built successfully:
   ```bash
   docker images | grep helm-kubernetes-demo
   ```

4. Install **Helm** and **Kubernetes** locally via **Docker Desktop**. Ensure Kubernetes is enabled in Docker Desktop settings.

## Running the Application

Once the prerequisites are installed, you can deploy the application to your local Kubernetes cluster using the following Helm commands:

1. Install the Helm chart:
   ```bash
   helm install helm-demo ./helm-demo
   ```

2. Verify the deployment:
   ```bash
   kubectl get pods
   kubectl get svc helm-demo-service
   ```

3. Access the application in your browser at `http://localhost:<nodePort>`.

4. If you need to update the deployment (e.g., change the Docker image version), run:
   ```bash
   helm upgrade helm-demo ./helm-demo
   ```

5. To uninstall the application:
   ```bash
   helm uninstall helm-demo
   ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
