# Use the latest Ubuntu image as the base
FROM ubuntu:latest

# Update the system and install Python and pip
RUN apt-get update && apt-get install -y python3 python3-pip

# Copy the requirements.txt file to the Docker image
COPY requirements.txt .

# Install the Python packages specified in requirements.txt
RUN pip3 install -r requirements.txt

# Copy your application to the Docker image
COPY ./app /app

# Set the working directory
WORKDIR /app

ENV PYTHONPATH=/app

# Run Uvicorn when the Docker image is run
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload", "--log-level", "debug"]