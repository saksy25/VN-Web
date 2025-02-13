export default function AboutComponent() {
    return (
      <div className="bg-blue-600 p-6 rounded-2xl max-w-2xl flex items-center shadow-lg">
        <img
          src="/path-to-your-image.jpg"
          alt="Vishwakarma Institute of Technology"
          className="w-1/3 h-auto rounded-lg object-cover"
        />
        <div className="ml-6 text-white">
          <h2 className="text-xl font-bold mb-2">
            Vishwakarma Institute of Technology, Pune
          </h2>
          <p className="text-sm text-white/80">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Interdum suscipit dictum fusce feugiat lectus. Non etiam quisque libero; tristique morbi fermentum facilisi. Blandit sagittis feugiat aenean porta ipsum cras Lorem ipsum odor amet, consectetuer adipiscing elit. Interdum suscipit dictum fusce feugiat lectus. Non etiam quisque libero
          </p>
        </div>
      </div>
    );
  }
  