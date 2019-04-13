FROM hasura/graphql-engine

COPY wait-for.sh /bin

ENV CONNECTION db:5432

ENTRYPOINT sh -c '/bin/wait-for.sh $CONNECTION -- graphql-engine serve'
