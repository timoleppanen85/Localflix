import { useParams } from "react-router-dom";

const Player = () => {
    let { filename } = useParams();
    return (
        <div>
            <video width="90%" height="auto" controls autoPlay>
                <source src={"/src/videos/" + filename} type="video/mp4" />
            </video>
        </div>
    );
};

export default Player;
