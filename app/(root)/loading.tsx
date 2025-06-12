

const loading = () => {
  return (
        <div className="flex items-center justify-center h-screen bg-white">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-pink-500 border-dotted rounded-full animate-spin"></div>
        <p className="text-pink-600 font-medium text-lg">Loading...</p>
      </div>
    </div>
  )
}

export default loading
