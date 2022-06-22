interface PropsPhoto {
    redirect: string;
    text: string;
}

export default function Photos(props: PropsPhoto) {
    return (
        <>
            <img src={props.redirect} alt={props.text} className="Imagem" />
        </>
    );
}