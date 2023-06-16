import { useDispatch, useSelector } from "react-redux";
import { addPhoto } from "../store/slices/photoSlice";

export default function Photo() {
    const { photos } = useSelector(state => state.photo);
    const dispatch = useDispatch();

    const onChange = (e) => {
        Array.from(e.target.files).forEach(file => {
            const fileURL = URL.createObjectURL(file);
            dispatch(addPhoto(fileURL));
        });
    };

    return (
        <div className="photo">
            <input type="file" accept="image/*" onChange={onChange} />
            <ul>
                {photos.map(photo => 
                    <li key={photo.id}>
                        <img src={photo.url} alt="" width={200} height={200} />
                    </li>
                )}
            </ul>
        </div>
    );
}