FROM nginx:alpine
COPY ./dist/project_for_sl3/ /usr/share/nginx/html
