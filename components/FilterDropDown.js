export default function FilterComponent() {
    return (
        <div className="relative w-full lg:max-w-sm">
            <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option>Age</option>
                <option>Gender</option>
                <option>Time in</option>
                <option>Time out</option>
            </select>
        </div>
    );
}