import PropTypes from "prop-types";

const FormateDate = ({date}) => {
   // console.log("date:",date)
    const createdAt = new Date(date);
const day = createdAt.getDate();
const month = createdAt.toLocaleString('default', { month: 'long' });
const year = createdAt.getFullYear();
  return (
    <div>
      <p className=" text-sm font-extralight ">{`${day} ${month} ${year}`}</p>
    </div>
  );
}
FormateDate.propTypes = {
    date: PropTypes.string,
  };
export default FormateDate;