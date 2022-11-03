const AuthInput = ({inpName, title}) => {
    return(
        <div className='ml-[88px] mb-[24px]'>
            <label className='block mb-[12px] text-[16px] font-medium' htmlFor={inpName}>{title}</label>
            <input className="w-[360px] h-[60px] p-5 rounded-[8px] border border-opacity-[0.3] border-[#121212]" type="text" name={inpName} placeholder={title}/>
        </div>
    )
}

export default AuthInput