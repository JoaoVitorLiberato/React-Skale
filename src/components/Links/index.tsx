import { Link as LinkRouter } from 'react-router-dom'

interface LinkProps {
    children: JSX.Element,
    redirect: string,
}

export default function Link(props: LinkProps) {
    return (
        <LinkRouter className='links' to={props.redirect}>
            <>
                {props.children}
            </>
        </LinkRouter>
    )
}