import {useParams,useLoaderData} from 'react-router-dom';

export const CareerDetails = () => {

    const { id } = useParams()
    const career = useLoaderData()

    return ( 
        <div className="career-details">
            <h2>Careers Details for {career.title}</h2>
            <p>Starting salary: {career.salary}</p>
            <p>Location: {career.locaton}</p>
            <div className="details">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque excepturi nobis officiis ipsum, maxime, itaque rerum consequatur recusandae numquam asperiores natus! Iusto aspernatur et cum pariatur modi repellendus voluptatem repellat.</p>
            </div>
        </div>
     );
}
 

//loader function
export const careerDetailsLoader = async ({params}) => {
    const { id } = params

    const res = await fetch(`http://localhost:4000/careers/${id}`)
    console.log(res)

    return res.json()
}



//Route Params
// -Changeble section of a route
// - Some component shown for every variation
// /products/ id
// /products/ 1