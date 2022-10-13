
const CloseButton = ({ setShowResume }) => {
    return (
        <div 
            className="closeButton"
            onClick={() => setShowResume(false)}
            >
            <a href="#">
                <span className="left">
                    <span className="circle-left" />
                    <span className="circle-right" />
                </span>
                <span className="right">
                    <span className="circle-left" />
                    <span className="circle-right" />
                </span>
            </a>
    </div>)
};

export default CloseButton;
