const AuthDateInput = ({inpName, title}) => {
    return(
        <div className='mb-[24px]'>
            <label className='block mb-[12px] text-[16px] font-medium' htmlFor={inpName}>{title}</label>
            <input type='date' className="w-[130px] h-[60px] p-[10px] rounded-[8px] border border-opacity-[0.3] border-[#121212] text-[#121212] text-opacity-[0.7] text-[16px]" name={inpName} placeholder={title}/>
        </div>
    )
}

export default AuthDateInput