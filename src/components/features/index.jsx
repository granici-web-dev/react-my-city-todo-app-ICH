import featuresData from '../../data/features';

function Features() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 mt-6">
      {featuresData.map((item) => {
        return (
          <div className="bg-white p-8 rounded-lg text-center shadow-sm">
            <div className="text-4xl block mb-4">{item.icon}</div>
            <h5 className='text-xl font-bold'>{item.title}</h5>
            <p>{item.text}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Features;
