import Sidebar from "../Layout/Sidebar";
import PostContent from "../Layout/PostContent";
import Modal from "../component/Modal";

const Post = () => {
  return (
    <>
      <Sidebar>
        <Modal>
          <PostContent />
        </Modal>
      </Sidebar>
    </>
  );
};

export default Post;
