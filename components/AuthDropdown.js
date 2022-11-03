const AuthDropdown = ({inpName, title, options}) => {
    return(
        <div className='ml-[88px] mb-[24px]'>
            <label className='block mb-[12px] text-[16px] font-medium' htmlFor={inpName}>{title}</label>
            <select className="w-[360px] h-[60px] p-5 rounded-[8px] border border-opacity-[0.3] border-[#121212] text-[#121212] text-opacity-[0.7]" name={inpName} placeholder={title}>
                <option value="">Select an option</option>
                {options.map(option=>(
                    <option value={option.value} className="">{option.name}</option>
                ))}
            </select>
        </div>
    )
}

export default AuthDropdown