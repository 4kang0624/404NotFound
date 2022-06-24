# ! 404 Not Found
Code**WiKi**

SWUniv Joint Hackathon Project

## Introduction
> Life is short, You need Code**Wiki**.
> 
> 인생은 짧다. 당신에겐 **코드위키**가 필요하다.

컴퓨터 공학이나 프로그래밍에 관한 전반적인 내용을 다루는 위키


```asciidoc
+ 개발자 | 김병철 | 배재대학교 | 리더
+ 개발자 | 박상현 | 인제대학교 | 영상제공
+ 개발자 | 박건형 | 삼육대학교 | 자료취합
+ 개발자 | 김지현 | 숙명여자대학교 | 서버관리
+ 디자이너 | 김형섭 | 상명대학교 | 소통
```

## 개발 배경

우리는 개발을 하다 막힐 때 다양한 사이트에서 검색을 통해 해답을 얻습니다.

하지만 이는 많은 시간이 걸리고 부정확한 정보를 얻을 수도 있습니다.

이를 해결하고자 모두가 참여해 수정할 수 있는 위키의 특징을 활용해 오픈소스처럼 다양한 개발자들이 수정을 통해

내용의 완성도를 높혀 산뢰할 수 있는 서비스를 구축하고자 하였습니다.


## 백엔드/프론트엔드 구현 방식
![그림2](https://user-images.githubusercontent.com/60893318/175440500-b26fc590-41c6-44fe-84dc-2e59db782160.png)


## 코드위키의 이용방법
![image](https://user-images.githubusercontent.com/87464704/175434248-99883e87-1ea0-4b5e-9a68-d4c8bdb8040a.png)
- 코드위키는 상단의 버튼을 눌러 로그인을 할 수 있고 문서 토론을 진행할 수 있습니다.
- 검색창에 검색을 하면 키워드와 관련된 내용이 하단에 나타납니다.

![image](https://user-images.githubusercontent.com/87464704/175434542-a61f2d0a-7ceb-4f02-bd87-8bfff5686742.png)
![image](https://user-images.githubusercontent.com/87464704/175436977-390f6b29-a429-4a07-b51c-654bbaaa9833.png)

- 아이디와 패스워드를 입력할 수 있고 만일 없을 경우 계정을 만들 수 있습니다.
- 계정은 간단한 정보만 입력하면 만들 수 있습니다.
- 
![image](https://user-images.githubusercontent.com/87464704/175437024-e9cf9db4-eb39-48a7-93df-975ba1c3094f.png)
- 코드위키는 대부분의 개발자가 익숙한 자습서 형태를 따릅니다.
- 상기 내용은 UI를 위한 것으로 나무위키 내용 중 일부를 발췌했습니다.

![image](https://user-images.githubusercontent.com/87464704/175435228-d4886838-5403-4d04-a3ab-c8d18a9b03cc.png)
- 내 정보에서는 아이디 비밀번호뿐 아니라 다양한 내용을 카드형식으로 확인 할 수 있습니다.

![image](https://user-images.githubusercontent.com/87464704/175435296-c438b971-a88d-4a5a-a497-0d6fc46547dd.png)
- 그 외에도 다양한 기능들이 제공됩니다.

+ 구현이 아직 안된 기능도 존재합니다!!

## 기술스택

# 프론트엔드

- React
- Redux
- Styled-Component
- MUI


# 백엔드

- flask
- pymongo
- flask_restx
- PyJWT



## Installation
* Python Package
```console
 > pip install flask
 > pip install pymongo
 > pip install flask_restx
 > pip install PyJWT
```
* React Package

## Swagger

- http://118.67.143.162:5000/

## Database Structure (MongoDB)
* Document
```json
{
  "title": "", 
  "contents": "",
  "user": "",
  "version": 0,
  "datetime": ""
}
```
* User
```json
{
  "userId": "",
  "password": "",
  "email": "",
  "loginToken": "",
  "userContent": "",
  "name": "",
  "phoneNumber":"",
  "achieve": []
}
```
* Discussion
```json
{
  "discussionNumber": 0,
  "title": "",
  "topic": "",
  "userId": "",
  "content": "",
  "comment":[{
    "content": "",
    "userId": "",
    "datetime": ""
  }],
  "datetime": ""
}
```

## 차후 개발 방향성

- 토론 기능 구현
- 변수명 추천
- 코드 리뷰
- 온라인 컴파일러
- 코딩테스트를 통한 차후 유저 레벨부여
