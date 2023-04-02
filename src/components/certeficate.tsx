
interface certeficateProps {
  imgPath: string;
}
const Certeficate: React.FC<certeficateProps> = (certeficateProps) => {
  const props = certeficateProps;
  return (
    <div className="rounded-[15%] bg-prim2 m-4 pr-1 pb-3 transition-all duration-300">
      <img src={props.imgPath} alt="" className="rounded-[15%] -translate-x-2 hover:blur-sm hover:cursor-pointer transition-all duration-300"/>

    </div>
  );
};

export default Certeficate;
