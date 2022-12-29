const SectionTitle = ({ title }) => {
    return ( 
        <>
            <h2 className="w-full text-center playfair text-5xl">{ title }</h2>
            <div className="mt-6 border-b border-slate-700/40 w-full"></div>
        </>
     );
}
 
export default SectionTitle;