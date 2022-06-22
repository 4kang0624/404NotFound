from connection import dbConnection as conn

db = conn.getDb('test')
print(db)