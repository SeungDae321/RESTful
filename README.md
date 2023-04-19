# RESTful
설치한 모듈
1. express
2. ejs
3. uuid
4. method-override

오타 때문에 에러가 많이 났음 오타 주의!

bootstarp이랑 ejs파일 분할할때(<%-(include('/'))>) 파일 계층을 분석해야함
home.ejs파일은 view다이렉토리에 바로 들어있어서 head.ejs안에있는 부트스트랩 경로를 바로 사용할 수 있었지만
나머지 view/comment안의 ejs파일이나 view/tacos파일들은 경로가 2중으로 들어있기 때문에 따로 이들을 위한 head-1.ejs를 만들어야 했음
head-1.ejs파일은 head.ejs파일이랑 동일하지만 부트스트랩 경로들을 수정해야 했음 (css/bootstrap.min.css => ../css/bootstrap.min.css) 나머지 .js파일들도 마찬가지로 수정했음

문제는 comments의 edit창에서 head-1을 적용해도 같은 문제가 반복되는 것이었음
그래서 index.js의 edit라우터를 확인해보니까 다른 라우터들이랑 다르게 3중으로 이루어져있는것을 확인함
전체적인 다이렉토리로 봤을 때 edit.ejs파일은 다른 ejs파일들과 마찬가지로 2중으로 되어있었지만 실질적으로는
/comments/:id/edit의 경로를 가지고 있었던 것임.
그래서 edit라우터를 위해 head-2파일을 만들었고 나머지 head파일과 마찬가지로 부트스트랩의 경로만 바꾸어줌  
(../css/bootstrap.min.css => ../../css/bootstrap.min.css) 나머지 .js파일들도 마찬가지로 수정했음

이제 마지막 개념인 db가 남았다
얼마 안남았다
