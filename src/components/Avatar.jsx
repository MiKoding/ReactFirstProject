import styles from "./Avatar.module.css"
export function Avatar({hasBorder = true, src}){
    /*const hasBorder = props.hasBorder != false;  obs: forma 1 de usar condicional para estilização para tirar ou colocar as bordas de  acordo com a classe hasborder*/

    return(
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar } src={src} />
    );
}