import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText,CardTitle, Col, Container, Row } from 'reactstrap';
const App = () => {

// 상수 변수 함수 상태 
// const text = "HELLO WORLD"

// const [text, setText] = useState("")

//함수 정의(버튼동작)
// const submitHandler = () => {
//   setText("helloworld")
// }

// 무비 데이터 담을 그릇
const [movies, setMovies] = useState([])



// 무비데이터 불러오는 함수 (async,await 필수)
const getMovies = async () => {
  // 네트워킹 & 데이터파싱
  // console.log("1234")

  const address = "https://api.themoviedb.org/3/movie/now_playing?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1"

  try {


     const {data} = await axios.get(address)
     console.log(data.results)
    setMovies(data.results)


  } catch (err) {
    console.log(err)
  }




}


// code build 순서
// 1. 위에서 아래로 순서
// 2. = 기준으로 오른쪽에서 ㅇ왼쪽으로 치환
// 3. .하위매서드 호출

// 무조건 실행 함수 훅
useEffect(() => {
  getMovies()
}, [])



// HTML 자리 
  return (
    <Container>
      <Row>
        {movies && movies.map(movie => (
          <Col>
          <Card
            style={{
              width: '18rem',
              marginTop: '10px'
            }}
          >
            <img
              alt="Sample"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />
            <CardBody>
              <CardTitle tag="h5">
                {movie.title.slice(0,10)}
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                {movie.release_date}
              </CardSubtitle>
              <CardText>
                {movie.overview.slice(0,70)}
              </CardText>
              <Button>
                Button
              </Button>
            </CardBody>
          </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default App;