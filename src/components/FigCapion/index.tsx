import './style.css'
import './mobile.css'

interface ImgProps {
    redirect: string;
    text: string;
    legend: string;
}

export default function FigCaption(props: ImgProps) {

    return (
        <div className='figCaption'>
            <img src={props.redirect} alt={props.text} />
            <h5>{props.legend}</h5>
        </div>

    );

}