FROM python:latest

# Set unbuffered output for python
ENV PYTHONUNBUFFERED 1

# Create app directory
WORKDIR /app

# # Install app dependencies
# COPY requirements.txt .
# RUN pip install -r requirements.txt

# # Bundle app source
# COPY . .

# Bundle app source
COPY . .
RUN pip install -r requirements.txt

# Expose port
EXPOSE 8000

# entrypoint to run the start.sh file
RUN chmod +x /app/start.sh

ENTRYPOINT ["/app/start.sh"]