import { Button } from "../component/Button";
import InputField from "../component/InputField";

const PostContent = () => {
    return (
        <form>
            <div className="flex flex-col bg-white p-10 rounded-lg gap-4 text-black">
                <h1 className="text-3xl font-bold">
                    POST CONTENT
                </h1>
                <label>Category</label>
                <InputField type="text" placeholder="Choose the category"/>
                <Button value="Post" type="submit" color="primary"/>
            </div>
        </form>
    );
}

export default PostContent