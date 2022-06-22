from connection import dbConnection as conn
from document import accessDocumentDb as docDb


db = conn.getDb('test')
print(db)


data = {
    "title": "Hello World",
    "content": "<code>Hello World</code><h1>Hello World를 출력하는 코드werqwer1232wefawae3</h1>",
    "user": "4kang0624",
}


dataInDocument = docDb.getDbData(db)
for d in dataInDocument:
    print(d)
print()

docDb.insertDocument(db, data)

dataInDocument = docDb.getDbData(db)
for d in dataInDocument:
    print(d)
print()

lastestData = docDb.getLastestData(db, "Hello World")
print(lastestData)