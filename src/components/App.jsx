import { Component } from "react"
import { fetchRequest } from "./Api";
import { CirclesWithBar } from  'react-loader-spinner'


import { Searchbar } from "./Searcbar";
import { ImageGallery } from "./ImageGallery";
import { Button } from "./Button";

export class App extends Component {

  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
}

  // async componentDidMount() {
  //   // const cat = 'sun in the sky'
  //   // try {
  //   //         // const photos = await fetchRequest(cat)

  //   //   const photos = await fetchRequest(this.state.query)

  //   //   const res = photos.hits.map(item => item.largeImageURL)
  //   //   console.log(res)

  //   //   this.setState({
  //   //     images: res
  //   //   })
      
  //   // } catch(err) {
  //   //   console.log(err)
  //   // } finally {
  //   //   console.log(this.state)
  //   // }
  // }

  async componentDidUpdate(prevState) {
    // if (prevState.query !== this.state.query || prevState.page !== this.state.page) {

    if (prevState.page !== this.state.page) {
      this.setState({isLoading: true})
      try {
      const photos = await fetchRequest(this.state.query, this.state.page)
      const res = photos.hits.map(item => item.largeImageURL)
      // console.log(res)
      this.setState({
        images: res
      })
        console.log(this.state)
      
    } catch(err) {
      console.log(err)
    } finally {
      this.setState({isLoading: false})
    }

    }
  }

  updateFindingPhoto = searching => {
    this.setState({
      query: searching.query,
    })
  }

  handleLoadMore = () => {
    this.setState({ isLoading: true });
    this.setState(prevState => {
      return {
        ...prevState,
        page: prevState.page + 1,
      }
    })
    console.log(this.state)
  }
  
  render() {
    const { images } = this.state;
      return (
    <div
      style={{
        height: '100vh',
            display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
            color: '#010101',
            margin: '20px',
      }}
    >
          <Searchbar onClick={this.updateFindingPhoto}></Searchbar>
          {this.state.isLoading && (<CirclesWithBar
  height="100"
  width="100"
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  outerCircleColor=""
  innerCircleColor=""
  barColor=""
  ariaLabel='circles-with-bar-loading'
/>)}
          {images.length > 0 && (<ImageGallery inf={images}>
          </ImageGallery>)}
          {/* {images.length > 0 && (<Button handleLoadMore={this.handleLoadMore}>
          </Button>)} */}
          <button onClick={this.handleLoadMore}>Load more</button>
          {/* <Button handleLoadMore={this.handleLoadMore}></Button> */}
    </div>
  );

  }
};
