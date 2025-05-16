function ErrorPage() {
    return (
        <div className="justify-center items-center flex flex-col h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-red-600">404</h1>
            <p className="text-xl mt-4">Page Not Found</p>
            <p className="text-gray-500 mt-2">The page you are looking for does not exist.</p>
            <a href="/" className="mt-6 text-blue-500 hover:underline">Go back to Home</a>
        </div>
    );
}
export default ErrorPage;