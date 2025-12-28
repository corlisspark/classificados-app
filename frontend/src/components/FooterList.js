import './FooterList.css';

function FooterList({ total }) {
    return(
        <div className='div-grey' id='footer-list'>
            {total} classificados
        </div>
    );
}

export default FooterList;