FROM nginx:alpine

# Remove any existing config files
RUN rm /etc/nginx/conf.d/*
RUN mkdir -p /opt/certs
# RUN openssl genrsa -out testhttps.webhop.net.key 2048
# RUN openssl req -new -key testhttps.webhop.net.key -out 
# RUN openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout testhttps.webhop.net.key -out testhttps.webhop.net.crt
# Copy config files
# *.conf files in "conf.d/" dir get included in main config
COPY ./default.conf /etc/nginx/conf.d/
COPY ./testhttps.webhop.net.crt /opt/certs/ 
COPY ./testhttps.webhop.net.key /opt/certs/
COPY ./testhttps.webhop.net.csr /opt/certs/
# Expose the listening port
EXPOSE 80

# Launch NGINX
CMD [ "nginx", "-g", "daemon off;" ]
