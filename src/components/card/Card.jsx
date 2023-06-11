import style from './card.module.css';


const Card = ({color, title, text, src, alt}) =>{

    return(

        <div className={`${style.card} ${style[color]}`}>

            <h2 className={style.cardh2}>{title}</h2>
            <p className={style.cardp}>{text}</p>
            <img src={src} alt={alt} className={style.cardimg} />

        </div>

    );

};

export default Card;