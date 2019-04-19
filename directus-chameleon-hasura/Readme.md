# Directus + Chameleon + Hasura

Doesn't work :/

```
/usr/local/lib/python3.7/site-packages/pg_chameleon/lib/global_lib.py:214: YAMLLoadWarning: calling yaml.load() without Loader=... is deprecated, as the default Loader is unsafe. Please read https://msg.pyyaml.org/load for full details.
  self.config = yaml.load(config_file.read())
Traceback (most recent call last):
  File "/usr/local/bin/chameleon", line 5, in <module>
    exec(compile(open(__file__).read(), __file__, 'exec'))
  File "/usr/local/bin/chameleon.py", line 56, in <module>
    replica = replica_engine(args)
  File "/usr/local/lib/python3.7/site-packages/pg_chameleon/lib/global_lib.py", line 115, in __init__
    self.pg_engine.type_override = self.config["type_override"]
KeyError: 'type_override'
Exception ignored in: <function pg_engine.__del__ at 0x7f2cd5dc9400>
Traceback (most recent call last):
  File "/usr/local/lib/python3.7/site-packages/pg_chameleon/lib/pg_lib.py", line 609, in __del__
    self.disconnect_db()
  File "/usr/local/lib/python3.7/site-packages/pg_chameleon/lib/pg_lib.py", line 651, in disconnect_db
    if self.pgsql_cur:
AttributeError: 'pg_engine' object has no attribute 'pgsql_cur'
```