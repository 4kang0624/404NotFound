from db.connection import dbConnectionDAO as connDb
from db.document import accessDocumentDAO as docDb


# 문서의 가장 최종버전 반환
def getDocument(title, version=None):
    db = connDb.getDb('document')
    if version is None:
        version = docDb.getLastestVersion(db, title)
    Data = docDb.getOneDocument(db, title, version)
    return Data


# 문서의 로그 리스트 반환 (제목, 유저, 버전, 시간)
def getDocumentLog(title):
    db = connDb.getDb('document')
    log = docDb.getOneDocumentLog(db, title)
    resultLog = []
    for data in log:
        del data['_id']
        del data['title']
        del data['content']
        resultLog.append(data)
    if len(resultLog) == 0:
        return {'result': 'fail'}
    else:
        resultLogDict = {'result': 'success'}
        resultLogDict.update({'log': resultLog})
        return resultLogDict


# 문서 DB에 새로운 데이터 삽입
def insertDocument(data):
    db = connDb.getDb('document')
    if docDb.getLastestVersion(db, data['title']) != 0:
        lastestDocument = getDocument(data['title'])
        del lastestDocument['_id']
        del lastestDocument['version']
        del lastestDocument['datetime']
        if data.keys() != lastestDocument.keys():
            return {'result': 'fail'}
        elif lastestDocument['content'] == data['content']:
            return {'result': 'same'}
        else:
            docDb.insertDocument(db, data)
            return {'result': 'success'}
    else:
        docDb.insertDocument(db, data)
        return {'result': 'success'}