import "../Styles/Advertisement.scss"

const AdvertisementImage = (props: {link: string})=>{
    return <img src={props.link} className={"advertisement-image"} alt={"Ad"}/>
};

export default AdvertisementImage;