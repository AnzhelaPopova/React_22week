import './Hero.css';

function Hero (props) {
    return (
        <div className ="hero-card">
            <img src ={props.url} />
            <div className='hero-name'> {props.name}</div>
            <div className='hero-superpowers'> {props.superpowers}</div>
            <div className='hero-info'> {props.info}</div>
        </div>
    );
    }    

    export default Hero;