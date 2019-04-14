FROM canner/builder:latest AS build
WORKDIR /usr/src/app
COPY . .
RUN canner build -s canner.schema.js -c canner.server.js

# Run
FROM canner/server:latest
WORKDIR /usr/src/app
COPY --from=build /usr/src/app /usr/src/app

EXPOSE 3000
ENTRYPOINT ["canner-server"]
CMD [ "-c", "canner.server.js" ]
