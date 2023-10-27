import { useParams }  from 'react-router-dom';
import useFetch from './useFetch';
import { useHistory } from 'react-router-dom';

function BlogDetails() {
    const { id } = useParams()
    const { data: blog, error, ispending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleClick = () =>{
        fetch('http://localhost:8000/blogs/'+ blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (  
        <div className="blog-details">
            { ispending && <h1>Loading...</h1> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p><strong>Written by: { blog.author }</strong></p>
                    <div>{ blog.body }</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;