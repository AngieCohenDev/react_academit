/* eslint-disable react/prop-types */

export const CursoPreview = ({ title, classes, banner, videoThumbnail }) => {
    return (
        <div className="max-w-lg rounded overflow-hidden shadow-lg my-4">
            <img className="w-full" src={banner} alt={`${title} banner`} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <ul className="list-disc list-inside mb-4">
                    {classes.map((classItem, index) => (
                        <li key={index} className="text-gray-700 text-base">{classItem}</li>
                    ))}
                </ul>
                <div className="flex justify-center">
                    <img className="w-full max-w-xs" src={videoThumbnail} alt="Video thumbnail" />
                </div>
            </div>
        </div>
    );
};
