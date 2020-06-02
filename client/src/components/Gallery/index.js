import React, { Component } from 'react';
import ActiveWindow from './ActiveWindow';
import ThumbnailGrid from './ThumbnailGrid';
// import axios from 'axios';



export default class Gallery extends Component {

    state = {
        activeIndex: 0,

        thumbnails: [
            {
                imgUrl: "https://i.ebayimg.com/images/g/jREAAOSwkotaCp~o/s-l300.jpg",
                title: "primero",
                bodyText: "Lorem ipsum dolor sit amet"
            },
            {
                imgUrl: "https://cdn.mos.cms.futurecdn.net/287Tj54rRxgaCqBaTDstk3.jpg",
                title: "idk",
                bodyText: "Lorem ipsum 2nd descript sit amet"
            },
            {
                imgUrl: "https://i.ebayimg.com/images/g/jREAAOSwkotaCp~o/s-l300.jpg",
                title: "vector",
                bodyText: "Lorem ipsum dolor sit amet"
            },
            {
                imgUrl: "https://i.pinimg.com/736x/b8/b4/47/b8b447c91d2b2638ba75e1676b0d9650.jpg",
                title: "not surre",
                bodyText: "Lorem ipsum dolor sit amet"
            },
            {
                imgUrl: "https://images-na.ssl-images-amazon.com/images/I/61g2F9k3HTL._AC_SL1024_.jpg",
                title: "amazinoon",
                bodyText: "Lorem middle somewehre sit amet"
            },
            {
                imgUrl: "https://ae01.alicdn.com/kf/HTB163PHJpXXXXcQaXXXq6xXFXXXj/HOT-30-40-THE-HANK-IS-BURNING-IN-FIRE-FIRE-ART-THE-PRINT-OIL-PAINTING-WALL.jpg",
                title: "fire hand",
                bodyText: "Lorem ipsum dolor sit amet"
            },
            {
                imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLLH1ShDDLPOnuX76DYEFx-GYJzDC8HxEIZrmqaQvBjV_fC2fe&usqp=CAU",
                title: "2nd to last",
                bodyText: "Lorem 2ndlast dolor sit amet"
            },
            {
                imgUrl: "https://i.ebayimg.com/images/g/jREAAOSwkotaCp~o/s-l300.jpg",
                title: "cool last",
                bodyText: "Lorem lassttttt dolor sit amet"
            }
        ]
    }


    // ------------insert link to thumbnails------------
    // componentDidMount(){
    //     axios.get(' info/date link ')
    //     .then(res=>{
    //         console.log(res);
    //         this.setState({ thumbnails: res.data.thumbnails })
    //     })
    // }


    renderThumbnails = () => {
        const { thumbnails, activeIndex } = this.state
        if (thumbnails.length) {
            return (
                <>
                    <ActiveWindow activeThumbnail={thumbnails[activeIndex]} />
                    <ThumbnailGrid
                        thumbnails={thumbnails}
                        handleClick={this.handleClick} />
                </>
            )
        }
        return null
    }

    renderTextContent = () => {
        const { thumbnails, activeIndex } = this.state

        if (thumbnails.length) {
            return (
                <>
                <h1> { thumbnails[activeIndex].title } </h1>
                <p> { thumbnails[activeIndex].bodyText } </p>
                </>
            )
        }
    }

    handleClick = (e) => {
        // console.log("Hello");
        const newActiveIndex = e.target.getAttribute('data-index')
        // console.log(newActiveIndex)
        this.setState({ activeIndex: newActiveIndex })
    }


    render() {
        const { thumbnails } = this.state;
        // console.log(this.state.thumbnails)

        return (
            <div style={galleryStyles}>

                <div style={{ flex: 1 }}>
                    {this.renderThumbnails()}

                </div>



                <div style={{ flex: 1, padding: '40px' }} >
                    {this.renderTextContent()}
                </div>

            </div>

        )
    }
}

const galleryStyles = {
    background: "#ddd",
    height: "500px",
    width: "1024px",
    margin: "40px auto",
    display: "flex"
}