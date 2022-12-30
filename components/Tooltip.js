
const Tooltip = ({ children, text }) => {
    return ( 
        <>
            <div  className="group relative h-fit w-fit">
                { children }
                <p className="text-white text-center bg-slate-800/40 italic font-sans group-hover:block hidden w-fit absolute whitespace-nowrap -bottom-10 right-1/2 translate-x-1/2 text-sm p-2">{ text }</p>
            </div>
        </>
     );
}
 
export default Tooltip;