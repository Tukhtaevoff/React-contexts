import { useParams } from "react-router-dom";
import { useUser } from "../../contexts/context";


function EditingUser() {
    const {id} = useParams();
    const {data} = useUser();

    const exactUser = data.find(user => {
        return user.id === +id;
    })

    return (
        <div>
            <h2>Editing user page</h2>
            <article>
                <h3>{exactUser.name}</h3>
            </article>
        </div>
    )
}

export default EditingUser;
