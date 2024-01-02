import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div>
            <h2>Page not found</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem numquam perspiciatis dolor harum, voluptatibus molestiae! A id possimus corporis consequuntur.</p>

            <p>Go to the <Link to="/">HomePage.</Link> </p>
        </div>
     );
}
 
export default NotFound;