import Banner from './Banner'

const Home = () => {
  return (
    <div className="flex flex-1 flex-col">
      <Banner />
      <main className="p-4">
        <div className="mx-auto flex h-24 w-full max-w-6xl flex-col items-center justify-center bg-gray-50/75">
          <h1 className="my-2 text-2xl font-bold">About this project</h1>
        </div>
        <p></p>
      </main>
    </div>
  )
}

export default Home
