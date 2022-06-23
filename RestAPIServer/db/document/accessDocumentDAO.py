import datetime


# 새 버전의 문서 삽입
def insertDocument(db, data):
    dataInfo = {
        "version": getLastestVersion(db, data['title']) + 1,
        "datetime": datetime.datetime.utcnow()
    }
    data.update(dataInfo)
    db['document'].insert_one(data)


# document DB에 저장된 모든 데이터 반환
def getDbData(db):
    return db['document'].find()


# 해당 제목을 가진 문서의 가장 마지막 버전을 반환하는 함수, 없으면 0을 반환
def getLastestVersion(db, title):
    version = db['document'].find_one({'title': title}, sort=[('version', -1)])
    if version is None:
        return 0
    else:
        return version['version']


# 해당 제목을 가진 문서의 가장 마지막 버전의 데이터를 반환하는 함수
def getOneDocument(db, title, version):
    return db['document'].find_one({'title': title, 'version': version})


# 해당 제목을 가진 문서의 로그 리스트를 반환하는 함수
def getOneDocumentLog(db, title):
    return db['document'].find({'title': title})


# 문자와 매치되는 제목을 반환하는 함수
def findByMatch(db, charactor):
    queryStr = {'$regex': '.*' + charactor + '.*'}
    return db['document'].find({'title': queryStr})


def getRecentDocument(db, count):
    return db['document'].find().sort([('datetime', -1)]).limit(count)
