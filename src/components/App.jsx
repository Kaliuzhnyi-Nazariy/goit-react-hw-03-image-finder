import { Component } from "react"
import { fetchRequest } from "./Api";
import { CirclesWithBar } from 'react-loader-spinner'


import { Searchbar } from "../Searchbar/Searcbar";
import { ImageGallery } from "./ImageGalery/ImageGallery";
import { Button } from "./Btn/Button";

export class App extends Component {

  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
}

  // async componentDidUpdate(prevProps, prevState) {
  //   if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
  //     const indexOfSlash = this.state.query.indexOf('/')
  //     const queryForRequest = this.state.query.slice(indexOfSlash +1 , this.state.query.length)
  //     this.setState({isLoading: true})
  //     try {
  //     const photos = await fetchRequest(queryForRequest, this.state.page)
  //       const res = photos.hits.map(item => item.webformatURL)
  //       console.log(photos)
  //     this.setState(prevState => {
  //       return {
  //         images: prevState.images.concat(res)
  //       }})
        
      
  //   } catch(err) {
  //     console.log(err)
  //   } finally {
  //     this.setState({isLoading: false})
  //   }

  //   }
  // }

    async componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      const indexOfSlash = this.state.query.indexOf('/')
      const queryForRequest = this.state.query.slice(indexOfSlash +1 , this.state.query.length)
      this.setState({isLoading: true})
      try {
      const photos = await fetchRequest(queryForRequest, this.state.page)
        const res = photos.hits;
      this.setState(prevState => {
        return {
          images: prevState.images.concat(res)
        }})
        
      
    } catch(err) {
      console.log(err)
    } finally {
      this.setState({isLoading: false})
    }

    }
  }

  updateFindingPhoto = searching => {
    this.setState({
      query: `${Date.now()}/${searching.query}`,
      images: [],
      page: 1,
      isLoading: false,
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
  }
  
  render() {
    const { images } = this.state;
      return (
    <div>
          <Searchbar onClick={e => this.updateFindingPhoto(e)}></Searchbar>
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
          {images.length > 0 && (<Button onClick={this.handleLoadMore}></Button>)}
    </div>
  );

  }
};
