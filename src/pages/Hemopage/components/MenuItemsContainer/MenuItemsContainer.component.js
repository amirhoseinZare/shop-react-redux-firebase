import {Component} from "react"
import {MenuItem} from "../../../../components/index"
import "./MenuItemsContainer.scss"

class MenuItemsContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            menuItems:[
                {
                   title:'hats',
                   imageUrl:"https://cached.imagescaler.hbpl.co.uk/resize/scaleHeight/815/cached.offlinehbpl.hbpl.co.uk/news/OMC/Don-Draper-20191217034958923.jpg",
                   imageAlt:'hats pixture',
                   linkUrl:'hats',
                   id:'2h13qr'
                },
                {
                    title:'shoes',
                    imageUrl:"https://i.pinimg.com/736x/70/48/ba/7048ba47e1eedac07315c432487f74ca.jpg",
                    imageAlt:'shoes pixture',
                    linkUrl:'shoes',
                    id:'23fawfgegewg32f'
                },
                {
                    title:'shirts',
                    imageUrl:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/productimage/2020/1/17/d71045b2-4300-4395-b110-f652fa00e9e51579211471795-1.jpg",
                    imageAlt:'shirts pixture',
                    linkUrl:'shirts',
                    id:'qef3weg'
                },
                {
                    title:'Men',
                    imageUrl:"https://www.toptrendsguide.com/wp-content/uploads/2020/04/Best-Online-Clothing-Stores-For-Men.jpg",
                    imageAlt:'men pixture',
                    linkUrl:'men',
                    id:'qepingifwe'
                 },
                 {
                     title:'women',
                     imageUrl:"https://static.onecms.io/wp-content/uploads/sites/20/2019/06/free-people-2.jpg",
                     imageAlt:'women pixture',
                     linkUrl:'women',
                     id:'23f32f'
                }
            ]
        }
    }

    render() {
        const {menuItems} = this.state

        return (
            <section className="menu-items--container">
                {
                    menuItems.map( ({ id, ...props }) => (
                        <MenuItem key={id} {...props}/>
                    ))
                }
            </section>
        )    
    }
}

export {
    MenuItemsContainer
}