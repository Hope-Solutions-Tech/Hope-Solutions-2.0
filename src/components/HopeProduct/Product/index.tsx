import './styles.css'

interface ProductProps {
    image: string;
    children: string;
}

const Product = ({image, children}: ProductProps) => {
    return (
        <li className='listProduct'>
            <img src={image} alt="ícone relativo à qualidade do produto" title='icone de qualidade' />
            <p>{children}</p>
        </li>
    );
}

export default Product;