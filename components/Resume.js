import CloseButton from "./CloseButton";

const Resume = ({
    setShowResume
}) => {
    return (
        <div className="fixed h-full w-full z-50 flex justify-center bg-[#fff]">
            <div className="flex justify-center h-full w-full">
                <div className="flex justify-end absolute right-0 top-0">
                    <CloseButton
                        setShowResume={setShowResume}
                    />
                </div>
                <div className="h-full w-5/6">
                <iframe src="/preveen-raj-resume.pdf" width="100%" height="100%"></iframe>
                </div>
            </div>
        </div>
    );
}

export default Resume;