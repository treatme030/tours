## React-Projects
### Tours
1. fetch API
2. 상세정보 보여지는 글자수 제한 
```javascript
{ readMore ? info : `${info.substring(0, 200)}...`} 
```
3. 컴포넌트가 다 삭제된 경우, 버튼 클릭시 API 데이터 초기화
```javascript
/*
  const fetchTours = async() => {
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch(error){
      setLoading(false)
      console.log(error)
    }
  }
*/ 
<button onClick={fetchTours} className="btn">refresh</button>
```
