FROM python:3.7-alpine

RUN \
 apk add --no-cache postgresql-libs && \
 apk add --no-cache --virtual .build-deps gcc musl-dev postgresql-dev && \
 pip install pg_chameleon --no-cache-dir && \
 apk --purge del .build-deps && \
 chameleon set_configuration_files

COPY wait-for.sh /bin
VOLUME /root/.pg_chameleon

ENTRYPOINT sh -c '/bin/wait-for.sh db:3306 -- /bin/wait-for.sh pg:5432 -- chameleon init_replica --config default --source mysql --debug'