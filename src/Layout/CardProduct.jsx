const CardProducts = (props) => {
    const {value} = props
    return(
        <div className="w-full max-w-sm bg-white border-gray-200 rounded-lg shadow">
          {value}
        </div>
    )
}

const Header = () => {
    return (
        <a href="#">
            <img
              src="/assets/CompsciImg.jpg"
              alt=""
              className="rounded-t-lg p-5"
            />
          </a>
    )
}

const Body = () => {
    return (
        <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-black">
                Computer Science
              </h5>
              <p className="text-m text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae necessitatibus aperiam ipsum fuga nihil ea exercitationem quia iste minima optio! Repellendus expedita, quia inventore tempora nesciunt rerum. Quidem, quo fuga?
              </p>
            </a>
          </div>
    )
};

export {CardProducts, Header, Body}